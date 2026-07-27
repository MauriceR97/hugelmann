/* First-Party Ad-Tracking — markenneutral, vor dem Meta Pixel laden.
   Hält Klick-/Kampagnenparameter über Seitenwechsel hinweg fest und
   liefert die Pflichtfelder für die Conversions API. */
(function () {
  var STORE = 'hg_trk_v1';
  var FIRST = 'hg_trk_first_v1';
  var LEAD = 'hg_trk_lead_evid';

  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id',
    'fbclid', 'gclid', 'gbraid', 'wbraid', 'ttclid', 'msclkid', 'li_fat_id',
    'kampagne', 'adset', 'ad_id', 'campaign_id', 'placement'];

  function read(k) { try { return JSON.parse(localStorage.getItem(k) || '{}'); } catch (e) { return {}; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function cookie(name) {
    var m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return m ? decodeURIComponent(m[2]) : '';
  }
  function setCookie(name, value, days) {
    try {
      var d = new Date(); d.setTime(d.getTime() + days * 864e5);
      document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    } catch (e) {}
  }
  function rand() { return Math.random().toString(36).slice(2, 10); }

  var params = new URLSearchParams(location.search);
  var fresh = {};
  KEYS.forEach(function (k) { var v = params.get(k); if (v) fresh[k] = v; });

  var last = read(STORE);
  if (Object.keys(fresh).length) { last = Object.assign({}, last, fresh); write(STORE, last); }

  var first = read(FIRST);
  if (!first.first_seen) {
    first = Object.assign({}, last, {
      first_seen: new Date().toISOString(),
      first_landing_url: location.origin + location.pathname
    });
    write(FIRST, first);
  }

  // _fbp: normalerweise vom Pixel gesetzt — Fallback, falls (noch) blockiert
  var fbp = cookie('_fbp');
  if (!fbp) { fbp = 'fb.1.' + Date.now() + '.' + Math.floor(Math.random() * 1e10); setCookie('_fbp', fbp, 90); }

  // _fbc: Cookie hat Vorrang, sonst aus gespeichertem fbclid im Meta-Format
  var fbc = cookie('_fbc');
  if (!fbc && last.fbclid) { fbc = 'fb.1.' + Date.now() + '.' + last.fbclid; setCookie('_fbc', fbc, 90); }

  function leadEventId() {
    var id = '';
    try { id = localStorage.getItem(LEAD) || ''; } catch (e) {}
    if (!id) { id = 'hg.' + Date.now() + '.' + rand(); try { localStorage.setItem(LEAD, id); } catch (e) {} }
    return id;
  }

  function getAll() {
    var out = {
      action_source: 'website',
      event_source_url: location.origin + location.pathname,
      client_user_agent: navigator.userAgent,
      fbp: cookie('_fbp') || fbp,
      fbc: cookie('_fbc') || fbc,
      source_device: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      first_landing_url: first.first_landing_url || '',
      first_seen: first.first_seen || ''
    };
    KEYS.forEach(function (k) { if (last[k]) out[k] = last[k]; });
    KEYS.forEach(function (k) { if (first[k]) out['ft_' + k] = first[k]; });
    return out;
  }

  window.REH_TRACK = {
    getAll: getAll,
    leadEventId: leadEventId,
    clearLeadEventId: function () { try { localStorage.removeItem(LEAD); } catch (e) {} }
  };
})();
