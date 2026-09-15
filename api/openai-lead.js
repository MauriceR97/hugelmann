// Vercel Serverless Function: sendet das Lead-Event serverseitig an die OpenAI Conversions API.
// Erwartet die Umgebungsvariable OPENAI_PIXEL_API_KEY (Vercel > Project > Settings > Environment Variables).
const PIXEL_ID = '62TZrMqL7djHrmWkaVfs7N';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const key = process.env.OPENAI_PIXEL_API_KEY;
  if (!key) return res.status(500).json({ error: 'missing_api_key' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};

  const eventId = String(body.event_id || '') || ('lead_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10));
  const sourceUrl = String(body.source_url || 'https://kueche-hugelmann.de/alt-gegen-neu-danke/');

  const payload = {
    validate_only: false,
    events: [{
      id: eventId,
      type: 'lead_created',
      timestamp_ms: Date.now(),
      source_url: sourceUrl,
      action_source: 'web',
      data: { type: 'customer_action' }
    }]
  };

  try {
    const r = await fetch('https://bzr.openai.com/v1/events?pid=' + PIXEL_ID, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await r.text();
    if (!r.ok) console.warn('[OAI-CAPI] Status', r.status, text);
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok, status: r.status, event_id: eventId });
  } catch (err) {
    console.warn('[OAI-CAPI] Fehler:', err && err.message);
    return res.status(502).json({ ok: false, error: 'upstream_failed' });
  }
};
