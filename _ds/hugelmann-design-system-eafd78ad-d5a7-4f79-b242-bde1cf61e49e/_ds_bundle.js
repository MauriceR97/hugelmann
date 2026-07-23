/* @ds-bundle: {"format":4,"namespace":"HugelmannDesignSystem_eafd78","components":[{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"ProductCard","sourcePath":"components/display/ProductCard.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"campaigns/alt-gegen-neu/AgnIcons.jsx":"7dacca2bb4de","campaigns/alt-gegen-neu/Funnel.jsx":"bb1073a9eda5","campaigns/alt-gegen-neu/Sections.jsx":"543a37824149","campaigns/alt-gegen-neu/image-slot.js":"d797f41b7d66","components/display/Accordion.jsx":"fe9edc43420d","components/display/Badge.jsx":"c686f3792267","components/display/ProductCard.jsx":"fb0ae9c2a494","components/display/Rating.jsx":"d6dffd501c9c","components/display/Tag.jsx":"863fd9c5ee8e","components/forms/Button.jsx":"bd7842ade935","components/forms/IconButton.jsx":"2a75ad4a5d9f","components/forms/Input.jsx":"a672fa6f912e","components/forms/Select.jsx":"f9139877f23b","ui_kits/website/Footer.jsx":"b9287e923f5d","ui_kits/website/Header.jsx":"0594f3082763","ui_kits/website/HomeScreen.jsx":"7f8c6c949f6e","ui_kits/website/Icons.jsx":"2d78ec5944c5","ui_kits/website/ProductScreen.jsx":"2136904e640a","ui_kits/website/ShopScreen.jsx":"f74cb5d04cd2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HugelmannDesignSystem_eafd78 = window.HugelmannDesignSystem_eafd78 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// campaigns/alt-gegen-neu/AgnIcons.jsx
try { (() => {
// Alt-gegen-Neu landing — line-icon set (Lucide style, brand stroke ~1.9px)
(function () {
  const R = window.React;
  const ic = (paths, fill) => ({
    size = 24,
    color = 'currentColor',
    sw = 1.9,
    ...rest
  } = {}) => R.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: fill || 'none',
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...rest
  }, paths.map((d, i) => R.createElement('path', {
    key: i,
    d
  })));
  window.AGNIcons = {
    Gift: ic(['M20 12v9H4v-9', 'M2 7h20v5H2z', 'M12 22V7', 'M12 7C12 7 12 2 8.5 2 6.5 2 6.5 5 8.5 5 12 5 12 7 12 7z', 'M12 7C12 7 12 2 15.5 2 17.5 2 17.5 5 15.5 5 12 5 12 7 12 7z']),
    Truck: ic(['M1 4h13v11H1z', 'M14 8h4l3 3v4h-7', 'M5.5 18.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0', 'M18.5 18.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0']),
    Tools: ic(['M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2.1-.5-.5-2.1z']),
    Percent: ic(['M19 5L5 19', 'M6.5 6.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0', 'M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0']),
    Recycle: ic(['M7 19H4.8a2 2 0 0 1-1.7-3l1.3-2.2', 'M11 4.8l1.1-1.9a2 2 0 0 1 3.4 0l1.4 2.4', 'M14 16h4.2a2 2 0 0 0 1.7-3l-1.2-2', 'M4.7 13.5L3 9l4.5.5', 'M17.3 5.7L21.9 6l-1.4 4.3', 'M9.6 20.5L7 19l2.5-2.6']),
    Check: ic(['M20 6L9 17l-5-5']),
    CheckCircle: ic(['M22 11.1V12a10 10 0 1 1-5.9-9.1', 'M22 4L12 14.01l-3-3']),
    Star: ic(['M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z'], 'currentColor'),
    Arrow: ic(['M5 12h14', 'M13 6l6 6-6 6']),
    ArrowLeft: ic(['M19 12H5', 'M11 18l-6-6 6-6']),
    Phone: ic(['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z']),
    Clock: ic(['M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0', 'M12 6v6l4 2']),
    Shield: ic(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4']),
    Award: ic(['M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0', 'M8.2 13.9L7 22l5-3 5 3-1.2-8.1']),
    Users: ic(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
    Close: ic(['M18 6L6 18', 'M6 6l12 12']),
    Home: ic(['M3 9.5L12 3l9 6.5', 'M5 10v10h14V10', 'M9 20v-6h6v6']),
    Euro: ic(['M18 7A6 6 0 1 0 18 17', 'M4 10h9', 'M4 14h7'])
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "campaigns/alt-gegen-neu/AgnIcons.jsx", error: String((e && e.message) || e) }); }

// campaigns/alt-gegen-neu/Funnel.jsx
try { (() => {
// Multi-step Alt-gegen-Neu funnel — 7 Fragen + Kontakt + Danke. Modal overlay.
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const I = window.AGNIcons;
  const QUESTIONS = [{
    key: 'zustand',
    q: 'In welchem Zustand ist Ihre aktuelle Küche?',
    sub: 'Ganz ehrlich — je nach Zustand fällt Ihre Tauschprämie unterschiedlich aus.',
    options: ['Gut erhalten', 'Sichtbare Gebrauchsspuren', 'Stark abgenutzt', 'Teilweise defekt']
  }, {
    key: 'alter',
    q: 'Wie alt ist Ihre jetzige Küche ungefähr?',
    sub: 'Eine grobe Einschätzung genügt.',
    options: ['Unter 10 Jahre', '10 – 20 Jahre', 'Über 20 Jahre', 'Weiß ich nicht genau']
  }, {
    key: 'wohnen',
    q: 'Wie wohnen Sie?',
    sub: 'So können wir Lieferung, Aufmaß und Montage optimal planen.',
    options: ['Eigenes Haus', 'Eigentumswohnung', 'Zur Miete']
  }, {
    key: 'zeit',
    q: 'Wann möchten Sie Ihre neue Küche am liebsten haben?',
    sub: 'Unverbindlich — nur zur Planung Ihres Wunschtermins.',
    options: ['So schnell wie möglich', 'In 1 – 3 Monaten', 'In 3 – 6 Monaten', 'Ich informiere mich erst']
  }, {
    key: 'stil',
    q: 'Welchen Küchenstil wünschen Sie sich?',
    sub: 'Es gibt kein richtig oder falsch — wir beraten Sie gern.',
    options: ['Modern & grifflos', 'Klassisch & zeitlos', 'Landhaus & gemütlich', 'Noch unentschlossen']
  }, {
    key: 'groesse',
    q: 'Wie groß ist Ihre Küche ungefähr?',
    sub: 'Eine Schätzung reicht völlig aus.',
    options: ['Klein (bis 8 m²)', 'Mittel (8 – 15 m²)', 'Groß (über 15 m²)', 'Weiß ich nicht']
  }, {
    key: 'budget',
    q: 'Welches Budget haben Sie ungefähr eingeplant?',
    sub: 'Damit wir Ihnen passende Vorschläge machen — die Tauschprämie rechnen wir direkt an.',
    options: ['Bis 10.000 €', '10.000 – 20.000 €', '20.000 – 35.000 €', 'Über 35.000 €']
  }];
  const TOTAL = QUESTIONS.length + 1; // + contact

  function Funnel({
    open,
    onClose
  }) {
    const [step, setStep] = useState(0); // 0..6 questions, 7 contact, 8 danke
    const [answers, setAnswers] = useState({});
    const [form, setForm] = useState({
      name: '',
      tel: '',
      email: '',
      plz: ''
    });
    const [err, setErr] = useState({});
    const scrollRef = useRef(null);
    useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : '';
      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);
    useEffect(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [step]);
    if (!open) return null;
    const isDanke = step === TOTAL;
    const isContact = step === QUESTIONS.length;
    const pct = isDanke ? 100 : Math.round(step / TOTAL * 100);
    const pick = opt => {
      const q = QUESTIONS[step];
      setAnswers(a => ({
        ...a,
        [q.key]: opt
      }));
      setTimeout(() => setStep(s => s + 1), 180);
    };
    const back = () => setStep(s => Math.max(0, s - 1));
    const validate = () => {
      const e = {};
      if (!form.name.trim()) e.name = 'Bitte Ihren Namen angeben';
      if (!/^[0-9 +/()-]{6,}$/.test(form.tel.trim())) e.tel = 'Bitte gültige Telefonnummer';
      if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Bitte gültige E-Mail';
      if (!form.plz.trim()) e.plz = 'Bitte PLZ / Wohnort';
      setErr(e);
      return Object.keys(e).length === 0;
    };
    const submit = ev => {
      ev.preventDefault();
      if (validate()) setStep(TOTAL);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "agn-modal",
      onMouseDown: e => {
        if (e.target === e.currentTarget) onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-modal-card",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Alt gegen Neu \u2013 Platz sichern"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-modal-head"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo.png",
      alt: "K\xFCchen Hugelmann",
      className: "agn-modal-logo"
    }), /*#__PURE__*/React.createElement("button", {
      className: "agn-modal-close",
      "aria-label": "Schlie\xDFen",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(I.Close, {
      size: 24
    }))), !isDanke && /*#__PURE__*/React.createElement("div", {
      className: "agn-prog"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-prog-top"
    }, /*#__PURE__*/React.createElement("span", null, isContact ? 'Fast geschafft!' : `Frage ${step + 1} von ${QUESTIONS.length}`), /*#__PURE__*/React.createElement("span", null, pct, "%")), /*#__PURE__*/React.createElement("div", {
      className: "agn-prog-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-prog-fill",
      style: {
        width: pct + '%'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "agn-modal-body",
      ref: scrollRef
    }, !isContact && !isDanke && /*#__PURE__*/React.createElement("div", {
      className: "agn-q"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "agn-q-title"
    }, QUESTIONS[step].q), /*#__PURE__*/React.createElement("p", {
      className: "agn-q-sub"
    }, QUESTIONS[step].sub), /*#__PURE__*/React.createElement("div", {
      className: "agn-opts"
    }, QUESTIONS[step].options.map(opt => {
      const sel = answers[QUESTIONS[step].key] === opt;
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        className: 'agn-opt' + (sel ? ' is-sel' : ''),
        onClick: () => pick(opt)
      }, /*#__PURE__*/React.createElement("span", null, opt), /*#__PURE__*/React.createElement("span", {
        className: "agn-opt-check"
      }, /*#__PURE__*/React.createElement(I.Check, {
        size: 18
      })));
    }))), isContact && /*#__PURE__*/React.createElement("form", {
      className: "agn-q",
      onSubmit: submit,
      noValidate: true
    }, /*#__PURE__*/React.createElement("h2", {
      className: "agn-q-title"
    }, "Sichern Sie sich jetzt einen der 30 Pl\xE4tze"), /*#__PURE__*/React.createElement("p", {
      className: "agn-q-sub"
    }, "Wir rufen Sie innerhalb von ca. 20 Minuten pers\xF6nlich zur\xFCck und besprechen alle Details \u2014 v\xF6llig unverbindlich und kostenfrei."), /*#__PURE__*/React.createElement("div", {
      className: "agn-fields"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Ihr Name",
      val: form.name,
      err: err.name,
      onChange: v => setForm({
        ...form,
        name: v
      }),
      placeholder: "Vor- und Nachname",
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Telefonnummer",
      val: form.tel,
      err: err.tel,
      onChange: v => setForm({
        ...form,
        tel: v
      }),
      placeholder: "F\xFCr Ihren R\xFCckruf",
      type: "tel"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "E-Mail",
      val: form.email,
      err: err.email,
      onChange: v => setForm({
        ...form,
        email: v
      }),
      placeholder: "ihre@email.de",
      type: "email"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "PLZ / Wohnort",
      val: form.plz,
      err: err.plz,
      onChange: v => setForm({
        ...form,
        plz: v
      }),
      placeholder: "z.B. 77933 Lahr"
    })), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "agn-btn agn-btn-accent agn-btn-full"
    }, "Meinen Platz kostenlos sichern ", /*#__PURE__*/React.createElement(I.Arrow, {
      size: 20
    })), /*#__PURE__*/React.createElement("p", {
      className: "agn-form-note"
    }, /*#__PURE__*/React.createElement(I.Shield, {
      size: 16
    }), " Ihre Daten sind sicher. Kein Kaufzwang, keine versteckten Kosten.")), isDanke && /*#__PURE__*/React.createElement("div", {
      className: "agn-q agn-danke"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-danke-icon"
    }, /*#__PURE__*/React.createElement(I.CheckCircle, {
      size: 54
    })), /*#__PURE__*/React.createElement("h2", {
      className: "agn-q-title"
    }, "Vielen Dank, ", form.name.split(' ')[0] || 'geschätzter Kunde', "!"), /*#__PURE__*/React.createElement("p", {
      className: "agn-q-sub"
    }, "Ihr Platz ist reserviert. Einer unserer K\xFCchenberater ruft Sie ", /*#__PURE__*/React.createElement("strong", null, "innerhalb der n\xE4chsten ca. 20 Minuten"), " unter Ihrer angegebenen Nummer an."), /*#__PURE__*/React.createElement("div", {
      className: "agn-danke-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-danke-row"
    }, /*#__PURE__*/React.createElement(I.Clock, {
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, "R\xFCckruf in ca. 20 Minuten")), /*#__PURE__*/React.createElement("div", {
      className: "agn-danke-row"
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, "Pers\xF6nlich & unverbindlich")), /*#__PURE__*/React.createElement("div", {
      className: "agn-danke-row"
    }, /*#__PURE__*/React.createElement(I.Gift, {
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, "Wir berechnen Ihre Tauschpr\xE4mie"))), /*#__PURE__*/React.createElement("p", {
      className: "agn-form-note",
      style: {
        justifyContent: 'center'
      }
    }, "M\xF6chten Sie sofort sprechen? ", /*#__PURE__*/React.createElement("a", {
      href: "tel:0782196570",
      style: {
        fontWeight: 700
      }
    }, "\xA007821 / 96 570")), /*#__PURE__*/React.createElement("button", {
      className: "agn-btn agn-btn-secondary",
      onClick: onClose
    }, "Schlie\xDFen"))), !isDanke && step > 0 && !isContact && /*#__PURE__*/React.createElement("div", {
      className: "agn-modal-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "agn-back",
      onClick: back
    }, /*#__PURE__*/React.createElement(I.ArrowLeft, {
      size: 18
    }), " Zur\xFCck")), isContact && /*#__PURE__*/React.createElement("div", {
      className: "agn-modal-foot"
    }, /*#__PURE__*/React.createElement("button", {
      className: "agn-back",
      onClick: back
    }, /*#__PURE__*/React.createElement(I.ArrowLeft, {
      size: 18
    }), " Zur\xFCck"))));
  }
  function Field({
    label,
    val,
    onChange,
    err,
    placeholder,
    type = 'text',
    autoFocus
  }) {
    return /*#__PURE__*/React.createElement("label", {
      className: "agn-field"
    }, /*#__PURE__*/React.createElement("span", {
      className: "agn-field-label"
    }, label), /*#__PURE__*/React.createElement("input", {
      className: 'agn-input' + (err ? ' is-err' : ''),
      type: type,
      value: val,
      placeholder: placeholder,
      autoFocus: autoFocus,
      onChange: e => onChange(e.target.value)
    }), err && /*#__PURE__*/React.createElement("span", {
      className: "agn-field-err"
    }, err));
  }
  window.AGNFunnel = Funnel;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "campaigns/alt-gegen-neu/Funnel.jsx", error: String((e && e.message) || e) }); }

// campaigns/alt-gegen-neu/Sections.jsx
try { (() => {
// Alt-gegen-Neu landing sections. Exports window.AGNLanding({ openFunnel, spots }).
(function () {
  const {
    useState,
    useEffect
  } = React;
  const I = window.AGNIcons;
  const DS = window.HugelmannDesignSystem_eafd78 || {};
  const Accordion = DS.Accordion;
  const Slot = ({
    id,
    ph,
    style
  }) => React.createElement('image-slot', {
    id,
    placeholder: ph,
    shape: 'rect',
    style
  });
  function Stars({
    n = 5
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "agn-stars"
    }, Array.from({
      length: n
    }).map((_, i) => /*#__PURE__*/React.createElement(I.Star, {
      key: i,
      size: 20,
      color: "#f5a623"
    })));
  }
  function CTA({
    children,
    onClick,
    variant = 'accent',
    size = 'lg',
    full
  }) {
    return /*#__PURE__*/React.createElement("button", {
      className: `agn-btn agn-btn-${variant} agn-btn-${size}${full ? ' agn-btn-full' : ''}`,
      onClick: onClick
    }, children, " ", /*#__PURE__*/React.createElement(I.Arrow, {
      size: size === 'lg' ? 22 : 18
    }));
  }

  // ---------- Sticky bar ----------
  function StickyBar({
    openFunnel
  }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
      const on = () => setShow(window.scrollY > 620);
      window.addEventListener('scroll', on);
      return () => window.removeEventListener('scroll', on);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: 'agn-sticky' + (show ? ' is-on' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-sticky-in"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo.png",
      alt: "K\xFCchen Hugelmann",
      className: "agn-sticky-logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "agn-sticky-right"
    }, /*#__PURE__*/React.createElement("a", {
      href: "tel:0782196570",
      className: "agn-sticky-tel"
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 18
    }), " ", /*#__PURE__*/React.createElement("span", null, "07821 / 96 570")), /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel,
      size: "sm"
    }, "Platz sichern"))));
  }

  // ---------- Hero ----------
  function Hero({
    openFunnel,
    spots
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "agn-hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-copy"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo.png",
      alt: "K\xFCchen Hugelmann",
      className: "agn-hero-logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "agn-badge-scarcity"
    }, /*#__PURE__*/React.createElement("span", {
      className: "agn-pulse"
    }), " Nur ", spots, " von 30 Pl\xE4tzen frei \xB7 Aktion bis 31.12.2026"), /*#__PURE__*/React.createElement("h1", {
      className: "agn-hero-h1"
    }, "Alt gegen Neu:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "agn-hl"
    }, "Bis zu 4.000\xA0\u20AC"), " Tauschpr\xE4mie f\xFCr Ihre alte K\xFCche"), /*#__PURE__*/React.createElement("p", {
      className: "agn-hero-sub"
    }, "Ihre neue Traumk\xFCche vom Familienbetrieb aus Lahr \u2014 mit ", /*#__PURE__*/React.createElement("strong", null, "kostenfreier Lieferung & Montage"), ", ", /*#__PURE__*/React.createElement("strong", null, "0\xA0% Finanzierung \xFCber 60\xA0Monate"), " und ", /*#__PURE__*/React.createElement("strong", null, "gratis Abbau & Mitnahme"), " Ihrer alten K\xFCche."), /*#__PURE__*/React.createElement("ul", {
      className: "agn-hero-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I.Check, {
      size: 22
    }), " Tauschpr\xE4mie direkt verrechnet"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I.Check, {
      size: 22
    }), " Alles aus einer Hand \u2014 pers\xF6nlich betreut"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(I.Check, {
      size: 22
    }), " Unverbindlich & ohne Kaufzwang")), /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-cta"
    }, /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel
    }, "Jetzt Platz sichern & Pr\xE4mie berechnen"), /*#__PURE__*/React.createElement("span", {
      className: "agn-hero-cta-note"
    }, /*#__PURE__*/React.createElement(I.Clock, {
      size: 16
    }), " Dauert nur 60\xA0Sekunden")), /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-trust"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Stars, null), " ", /*#__PURE__*/React.createElement("strong", null, "4,8/5"), " aus 320+ Bewertungen"), /*#__PURE__*/React.createElement("span", {
      className: "agn-sep"
    }, "\u2022"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(I.Users, {
      size: 18
    }), " Familienbetrieb seit \xFCber 70\xA0Jahren"))), /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-media"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-img"
    }, /*#__PURE__*/React.createElement(Slot, {
      id: "agn-hero-kitchen",
      ph: "Ihre Traumk\xFCche (Foto hochladen)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-float"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-float-ic"
    }, /*#__PURE__*/React.createElement(I.Gift, {
      size: 26
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-float-big"
    }, "bis 4.000\xA0\u20AC"), /*#__PURE__*/React.createElement("div", {
      className: "agn-hero-float-sm"
    }, "Tauschpr\xE4mie sichern"))))));
  }

  // ---------- Value pillars ----------
  const PILLARS = [{
    ic: 'Gift',
    big: 'bis 4.000 €',
    t: 'Tauschprämie',
    d: 'Für Ihre alte Küche — direkt mit der neuen verrechnet.'
  }, {
    ic: 'Truck',
    big: 'kostenfrei',
    t: 'Lieferung & Montage',
    d: 'Eigener Fuhrpark & Monteure aus der Region.'
  }, {
    ic: 'Percent',
    big: '0 % / 60 Mon.',
    t: 'Finanzierung',
    d: 'Bequem in Raten — ohne Zinsen, ohne Aufschlag.'
  }, {
    ic: 'Recycle',
    big: 'inklusive',
    t: 'Abbau & Mitnahme',
    d: 'Wir bauen Ihre alte Küche ab und nehmen sie mit.'
  }];
  function Pillars() {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-pillars"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-wrap agn-pillars-grid"
    }, PILLARS.map(p => {
      const Ic = I[p.ic];
      return /*#__PURE__*/React.createElement("div", {
        className: "agn-pillar",
        key: p.t
      }, /*#__PURE__*/React.createElement("div", {
        className: "agn-pillar-ic"
      }, /*#__PURE__*/React.createElement(Ic, {
        size: 30
      })), /*#__PURE__*/React.createElement("div", {
        className: "agn-pillar-big"
      }, p.big), /*#__PURE__*/React.createElement("div", {
        className: "agn-pillar-t"
      }, p.t), /*#__PURE__*/React.createElement("div", {
        className: "agn-pillar-d"
      }, p.d));
    })));
  }

  // ---------- Steps ----------
  const STEPS = [{
    n: 1,
    t: 'Fragen beantworten',
    d: 'Beantworten Sie 7 kurze Fragen zu Ihrer alten und Ihrer neuen Wunschküche — in nur 60 Sekunden.'
  }, {
    n: 2,
    t: 'Platz sichern',
    d: 'Hinterlassen Sie Ihre Kontaktdaten und sichern Sie sich einen der begrenzten 30 Aktionsplätze.'
  }, {
    n: 3,
    t: 'Persönlicher Rückruf',
    d: 'Wir rufen Sie innerhalb von ca. 20 Minuten an, berechnen Ihre Prämie und finden Ihren Wunschtermin.'
  }];
  function Steps({
    openFunnel
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-steps agn-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-head-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-eyebrow"
    }, "So einfach geht's"), /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2"
    }, "In 3 Schritten zu Ihrer neuen K\xFCche")), /*#__PURE__*/React.createElement("div", {
      className: "agn-steps-grid"
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
      className: "agn-step",
      key: s.n
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-step-n"
    }, s.n), /*#__PURE__*/React.createElement("h3", {
      className: "agn-step-t"
    }, s.t), /*#__PURE__*/React.createElement("p", {
      className: "agn-step-d"
    }, s.d), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("div", {
      className: "agn-step-line",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement(I.Arrow, {
      size: 26
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "agn-center"
    }, /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel
    }, "Jetzt in 60 Sekunden starten")));
  }

  // ---------- Value stacking ----------
  function ValueStack({
    openFunnel
  }) {
    const rows = [['Tauschprämie für Ihre alte Küche', 'bis 4.000 €'], ['Lieferung durch eigenen Fuhrpark', 'geschenkt'], ['Fachgerechte Montage vor Ort', 'geschenkt'], ['Abbau & Mitnahme der alten Küche', 'geschenkt'], ['0 % Finanzierung über 60 Monate', 'ohne Zinsen']];
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-vs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-wrap agn-vs-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-vs-media"
    }, /*#__PURE__*/React.createElement(Slot, {
      id: "agn-showcase-1",
      ph: "K\xFCchen-Ausstellung (Foto hochladen)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "agn-vs-copy"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-eyebrow"
    }, "Ihr Rundum-sorglos-Paket"), /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2"
    }, "Alles inklusive \u2014 Sie sparen mehrfach"), /*#__PURE__*/React.createElement("p", {
      className: "agn-lead"
    }, "Bei \u201EAlt gegen Neu\" summieren sich Ihre Vorteile. Das ist der ganze Aktionswert auf einen Blick:"), /*#__PURE__*/React.createElement("ul", {
      className: "agn-vs-list"
    }, rows.map(([t, v]) => /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "agn-vs-check"
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "agn-vs-t"
    }, t), /*#__PURE__*/React.createElement("span", {
      className: "agn-vs-v"
    }, v)))), /*#__PURE__*/React.createElement("div", {
      className: "agn-vs-total"
    }, /*#__PURE__*/React.createElement("span", null, "Ihr Gesamtvorteil"), /*#__PURE__*/React.createElement("strong", null, "mehrere tausend \u20AC")), /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel
    }, "Meinen Vorteil berechnen"))));
  }

  // ---------- Scarcity ----------
  function Scarcity({
    openFunnel,
    spots
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-scarcity"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-wrap agn-scarcity-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-scarcity-ic"
    }, /*#__PURE__*/React.createElement(I.Clock, {
      size: 34
    })), /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2 agn-white"
    }, "Nur 30 Aktionspl\xE4tze \u2014 bereits ", 30 - spots, " vergeben"), /*#__PURE__*/React.createElement("p", {
      className: "agn-scarcity-sub"
    }, "Wir betreuen jeden Kunden pers\xF6nlich und mit voller Sorgfalt. Deshalb ist \u201EAlt gegen Neu\" auf ", /*#__PURE__*/React.createElement("strong", null, "30 Pl\xE4tze"), " begrenzt und l\xE4uft nur bis ", /*#__PURE__*/React.createElement("strong", null, "31.\xA0Dezember 2026"), "."), /*#__PURE__*/React.createElement("div", {
      className: "agn-spotbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-spotbar-fill",
      style: {
        width: (30 - spots) / 30 * 100 + '%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "agn-spotbar-label"
    }, "Noch ", spots, " von 30 Pl\xE4tzen frei"), /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel,
      variant: "inverse"
    }, "Jetzt meinen Platz sichern")));
  }

  // ---------- Social proof ----------
  const REVIEWS = [{
    name: 'Renate M.',
    place: 'Offenburg',
    text: 'Von der Beratung bis zur Montage alles perfekt. Die alte Küche wurde einfach mitgenommen — so unkompliziert!',
    stars: 5
  }, {
    name: 'Hans-Peter K.',
    place: 'Lahr',
    text: 'Die Tauschprämie hat sich richtig gelohnt. Freundliches Team, alles aus einer Hand. Sehr zu empfehlen.',
    stars: 5
  }, {
    name: 'Ingrid W.',
    place: 'Emmendingen',
    text: 'Nach 22 Jahren endlich eine neue Küche. Die Monteure waren pünktlich, sauber und sehr sorgfältig.',
    stars: 5
  }];
  function Proof() {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-proof agn-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-head-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-eyebrow"
    }, "Das sagen unsere Kunden"), /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2"
    }, "\xDCber 320 Familien vertrauen uns bereits"), /*#__PURE__*/React.createElement("div", {
      className: "agn-proof-rating"
    }, /*#__PURE__*/React.createElement(Stars, null), " ", /*#__PURE__*/React.createElement("strong", null, "4,8 / 5"), " ", /*#__PURE__*/React.createElement("span", null, "\xB7 gepr\xFCfte Kundenbewertungen"))), /*#__PURE__*/React.createElement("div", {
      className: "agn-reviews"
    }, REVIEWS.map(r => /*#__PURE__*/React.createElement("figure", {
      className: "agn-review",
      key: r.name
    }, /*#__PURE__*/React.createElement(Stars, {
      n: r.stars
    }), /*#__PURE__*/React.createElement("blockquote", null, "\u201E", r.text, "\""), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", {
      className: "agn-review-av"
    }, r.name.charAt(0)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, r.name), /*#__PURE__*/React.createElement("br", null), r.place))))), /*#__PURE__*/React.createElement("div", {
      className: "agn-seals"
    }, /*#__PURE__*/React.createElement("span", {
      className: "agn-seals-label"
    }, "Ausgezeichnet & gepr\xFCft:"), ['Siegel', 'Auszeichnung', 'Zertifikat'].map((s, i) => /*#__PURE__*/React.createElement("div", {
      className: "agn-seal",
      key: i
    }, /*#__PURE__*/React.createElement(I.Award, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", null, s, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Logo hochladen"))))));
  }

  // ---------- Trust / family ----------
  function Trust({
    openFunnel
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-trust"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-wrap agn-trust-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-trust-media"
    }, /*#__PURE__*/React.createElement(Slot, {
      id: "agn-berater",
      ph: "Team- oder Beraterfoto (hochladen)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "agn-trust-copy"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-eyebrow"
    }, "Ihr Familienbetrieb aus Lahr"), /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2"
    }, "Seit \xFCber 70 Jahren ", /*#__PURE__*/React.createElement("span", {
      className: "agn-hl"
    }, "besser wohnen")), /*#__PURE__*/React.createElement("p", {
      className: "agn-lead"
    }, "Was vor 70 Jahren als kleine Schreinerei begann, ist heute eines der f\xFChrenden Einrichtungsh\xE4user in S\xFCdbaden \u2014 inhabergef\xFChrt von Rainer Hugelmann, getragen von rund 60 Mitarbeitern aus der Region."), /*#__PURE__*/React.createElement("div", {
      className: "agn-trust-badges"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-trust-badge"
    }, /*#__PURE__*/React.createElement(I.Users, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Familiengef\xFChrt"), /*#__PURE__*/React.createElement("br", null), "seit \xFCber 70 Jahren")), /*#__PURE__*/React.createElement("div", {
      className: "agn-trust-badge"
    }, /*#__PURE__*/React.createElement(I.Truck, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Eigener Service"), /*#__PURE__*/React.createElement("br", null), "Lieferung & Montage")), /*#__PURE__*/React.createElement("div", {
      className: "agn-trust-badge"
    }, /*#__PURE__*/React.createElement(I.Shield, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Faire Beratung"), /*#__PURE__*/React.createElement("br", null), "ohne Kaufzwang"))), /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel,
      variant: "primary"
    }, "Unverbindlich Platz sichern"))));
  }

  // ---------- FAQ ----------
  const FAQ = [{
    title: 'Wie hoch ist meine Tauschprämie genau?',
    content: 'Die Prämie beträgt bis zu 4.000 € und richtet sich nach Zustand und Umfang Ihrer alten Küche sowie Ihrer neuen Küche. Den genauen Betrag ermitteln wir im persönlichen Gespräch — kostenlos und unverbindlich.'
  }, {
    title: 'Was kostet mich der Abbau der alten Küche?',
    content: 'Nichts. Abbau und Mitnahme Ihrer alten Küche sind im Aktionspaket vollständig kostenfrei enthalten.'
  }, {
    title: 'Muss ich mich sofort entscheiden?',
    content: 'Nein. Das Sichern eines Platzes ist völlig unverbindlich und ohne Kaufzwang. Wir beraten Sie in Ruhe.'
  }, {
    title: 'Wie funktioniert die 0 %-Finanzierung?',
    content: 'Sie zahlen Ihre neue Küche bequem in 60 gleichbleibenden Monatsraten — ganz ohne Zinsen und ohne versteckte Aufschläge. Details klären wir im Gespräch.'
  }, {
    title: 'Liefern Sie auch in meine Region?',
    content: 'Mit unserem eigenen Liefer- und Montageservice sind wir in ganz Südbaden und im benachbarten Elsass für Sie da — u.a. Lahr, Freiburg, Offenburg, Emmendingen.'
  }];
  function Faq() {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-faq agn-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-head-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-eyebrow"
    }, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2"
    }, "Gut zu wissen")), /*#__PURE__*/React.createElement("div", {
      className: "agn-faq-box"
    }, Accordion ? /*#__PURE__*/React.createElement(Accordion, {
      items: FAQ,
      defaultOpen: [0]
    }) : null));
  }

  // ---------- Final CTA ----------
  function FinalCTA({
    openFunnel,
    spots
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "agn-final"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-wrap agn-final-in"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "agn-h2 agn-white"
    }, "Ihre neue K\xFCche wartet \u2014 sichern Sie sich bis zu 4.000 \u20AC Pr\xE4mie"), /*#__PURE__*/React.createElement("p", {
      className: "agn-final-sub"
    }, "Nur noch ", spots, " von 30 Pl\xE4tzen frei. In 60 Sekunden starten, in ca. 20 Minuten R\xFCckruf."), /*#__PURE__*/React.createElement(CTA, {
      onClick: openFunnel,
      variant: "inverse"
    }, "Jetzt Platz sichern & Pr\xE4mie berechnen"), /*#__PURE__*/React.createElement("a", {
      href: "tel:0782196570",
      className: "agn-final-tel"
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 18
    }), " Oder direkt anrufen: 07821 / 96 570")));
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "agn-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "agn-wrap agn-footer-in"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-weiss.png",
      alt: "K\xFCchen Hugelmann",
      className: "agn-footer-logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "agn-footer-txt"
    }, "interliving \u2013 M\xF6bel Hugelmann GmbH \xB7 Rainer-Haungs-Stra\xDFe 1 \xB7 77933 Lahr \xB7 Tel. 07821 / 96 570"), /*#__PURE__*/React.createElement("div", {
      className: "agn-footer-links"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Impressum"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Datenschutz"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "AGB"))));
  }
  function Landing({
    openFunnel,
    spots = 7
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "agn-page"
    }, /*#__PURE__*/React.createElement(StickyBar, {
      openFunnel: openFunnel
    }), /*#__PURE__*/React.createElement(Hero, {
      openFunnel: openFunnel,
      spots: spots
    }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Steps, {
      openFunnel: openFunnel
    }), /*#__PURE__*/React.createElement(ValueStack, {
      openFunnel: openFunnel
    }), /*#__PURE__*/React.createElement(Scarcity, {
      openFunnel: openFunnel,
      spots: spots
    }), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Trust, {
      openFunnel: openFunnel
    }), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(FinalCTA, {
      openFunnel: openFunnel,
      spots: spots
    }), /*#__PURE__*/React.createElement(Footer, null));
  }
  window.AGNLanding = Landing;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "campaigns/alt-gegen-neu/Sections.jsx", error: String((e && e.message) || e) }); }

// campaigns/alt-gegen-neu/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "campaigns/alt-gegen-neu/image-slot.js", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/** Accordion list — used for room descriptions & FAQ (see hugelmann.de footer sections). */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '18px 4px',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: 'var(--fs-md)',
        color: 'var(--text-heading)'
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        color: 'var(--color-primary)',
        transition: 'transform var(--dur-base) var(--ease-standard)',
        transform: isOpen ? 'rotate(45deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-slow) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 18px',
        fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--fs-base)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-body)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status label — "Neu", "Sale", "-20%", "Sofort lieferbar". */
function Badge({
  children,
  tone = 'accent',
  variant = 'solid',
  style = {},
  ...rest
}) {
  const tones = {
    accent: {
      solid: ['var(--color-accent)', '#fff'],
      soft: ['var(--red-100)', 'var(--red-700)']
    },
    primary: {
      solid: ['var(--color-primary)', '#fff'],
      soft: ['var(--blue-100)', 'var(--blue-700)']
    },
    neutral: {
      solid: ['var(--grey-700)', '#fff'],
      soft: ['var(--grey-100)', 'var(--grey-700)']
    },
    success: {
      solid: ['var(--success)', '#fff'],
      soft: ['#e5f0e6', 'var(--success)']
    }
  };
  const [bg, fg] = (tones[tone] || tones.accent)[variant] || tones.accent.solid;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: '4px 9px',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.1,
      background: bg,
      color: fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Rating.jsx
try { (() => {
/** Star rating (read-only display). Half-stars supported. */
function Rating({
  value = 0,
  max = 5,
  count,
  size = 16,
  style = {}
}) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const fill = Math.max(0, Math.min(1, value - (i - 1)));
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      color: "var(--border-strong)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        width: `${fill * 100}%`,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      color: "var(--color-accent)"
    }))));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, stars), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
function Star({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"
  }));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Category / filter chip. Selectable, or removable via onRemove. */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style = {},
  ...rest
}) {
  const clickable = !!onClick || !!onRemove;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-base)',
      userSelect: 'none',
      background: selected ? 'var(--color-primary)' : 'var(--surface-muted)',
      color: selected ? 'var(--hg-white)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--border-subtle)'}`,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Entfernen",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hugelmann Button — the primary call-to-action element.
 * Mirrors the site's uppercase, tracked-out CTA style ("ZUM ONLINESHOP").
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  uppercase = true,
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      font: 'var(--fs-sm)'
    },
    md: {
      padding: '12px 24px',
      font: 'var(--fs-base)'
    },
    lg: {
      padding: '16px 34px',
      font: 'var(--fs-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--hg-white)',
      border: '2px solid var(--color-primary)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--hg-white)',
      border: '2px solid var(--color-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent'
    },
    inverse: {
      background: 'var(--hg-white)',
      color: 'var(--color-primary)',
      border: '2px solid var(--hg-white)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    "data-variant": variant,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.55em',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: s.font,
      padding: s.padding,
      letterSpacing: uppercase ? 'var(--ls-eyebrow)' : 'var(--ls-normal)',
      textTransform: uppercase ? 'uppercase' : 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      transition: 'var(--transition-base)',
      lineHeight: 1,
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') {
        e.currentTarget.style.background = 'var(--color-primary-hover)';
        e.currentTarget.style.borderColor = 'var(--color-primary-hover)';
      } else if (variant === 'accent') {
        e.currentTarget.style.background = 'var(--color-accent-hover)';
        e.currentTarget.style.borderColor = 'var(--color-accent-hover)';
      } else if (variant === 'secondary') {
        e.currentTarget.style.background = 'var(--color-primary)';
        e.currentTarget.style.color = 'var(--hg-white)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'var(--surface-muted)';
      }
    },
    onMouseLeave: e => {
      Object.assign(e.currentTarget.style, {
        background: v.background,
        color: v.color,
        borderColor: v.border.split(' ').pop()
      });
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square/round icon-only button — used for cart, wishlist, nav toggles. */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'round',
  active = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)'
    },
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--hg-white)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--hg-white)'
    },
    subtle: {
      background: 'var(--surface-muted)',
      color: 'var(--text-heading)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: shape === 'round' ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-base)',
      position: 'relative',
      ...v,
      ...(active ? {
        background: 'var(--blue-100)',
        color: 'var(--color-primary)'
      } : {}),
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'var(--surface-muted)';
    },
    onMouseLeave: e => {
      if (variant === 'ghost' && !active) e.currentTarget.style.background = 'transparent';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/ProductCard.jsx
try { (() => {
/** Product tile for shop grids: image, brand, title, price, wishlist & badge. */
function ProductCard({
  image,
  title,
  brand,
  price,
  oldPrice,
  badge,
  badgeTone = 'accent',
  rating,
  ratingCount,
  wished = false,
  onWish,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'var(--transition-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--surface-muted)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Auf den Merkzettel",
    variant: "subtle",
    size: "sm",
    active: wished,
    onClick: e => {
      e.stopPropagation();
      onWish && onWish(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: wished ? 'var(--color-accent)' : 'none',
    stroke: wished ? 'var(--color-accent)' : 'currentColor',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.7 1.1-1a5.5 5.5 0 0 0 0-7.7z"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-md)',
      color: 'var(--text-heading)',
      lineHeight: 1.25
    }
  }, title), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: ratingCount,
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-xl)',
      color: oldPrice ? 'var(--color-accent)' : 'var(--text-heading)'
    }
  }, price), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, oldPrice))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, optional leading icon and helper/error text. */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  helper,
  error,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-heading)',
      padding: iconLeft ? '11px 14px 11px 38px' : '11px 14px',
      background: disabled ? 'var(--surface-muted)' : 'var(--hg-white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'var(--transition-base)'
    },
    onFocus: e => {
      if (!error) {
        e.target.style.borderColor = 'var(--color-primary)';
        e.target.style.boxShadow = 'var(--shadow-focus)';
      }
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = 'none';
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input, with a chevron affordance. */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder,
  helper,
  disabled = false,
  required = false,
  style = {},
  ...rest
}) {
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-heading)',
      padding: '11px 40px 11px 14px',
      background: disabled ? 'var(--surface-muted)' : 'var(--hg-white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-base)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--color-primary)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
(function () {
  const I = window.HugelmannIcons;
  function Footer() {
    const cols = [{
      h: 'Möbel',
      links: ['Wohnzimmer', 'Schlafzimmer', 'Esszimmer', 'Büro', 'Matratzen', 'Sofa & Couch']
    }, {
      h: 'Küchen',
      links: ['Küchenplanung', 'Granit-Arbeitsplatten', 'Einbaugeräte', 'Rundum-Service', 'Beratung']
    }, {
      h: 'Service',
      links: ['Liefer- & Aufbauservice', 'Finanzierung', 'Onlineshop', 'Kataloge', 'Kontakt']
    }, {
      h: 'Unternehmen',
      links: ['Familienunternehmen', 'Karriere', 'Aktionen', 'Bistro', 'Impressum']
    }];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        fontFamily: 'var(--font-sans)',
        background: 'var(--grey-800)',
        color: 'var(--grey-300)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-primary)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 24,
        padding: '26px 32px'
      }
    }, [[I.Heart2, 'Fachberatung von Herzen'], [I.Ruler, 'Küchenplanung bis ins Detail'], [I.Truck, 'Aufbau mit höchster Sorgfalt'], [I.Leaf, 'Faire, transparente Preise']].map(([Ic, t], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 26
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15
      }
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: '1.4fr repeat(4,1fr)',
        gap: 40,
        padding: '52px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-weiss.png",
      alt: "K\xFCchen Hugelmann",
      style: {
        height: 40,
        marginBottom: 18
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.7,
        color: 'var(--grey-400)',
        margin: 0
      }
    }, "interliving \u2013 M\xF6bel Hugelmann GmbH", /*#__PURE__*/React.createElement("br", null), "Rainer-Haungs-Stra\xDFe 1", /*#__PURE__*/React.createElement("br", null), "77933 Lahr, Deutschland"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.9,
        marginTop: 14,
        color: 'var(--grey-300)'
      }
    }, "Tel.: 07821 / 96 570", /*#__PURE__*/React.createElement("br", null), "info@hugelmann.de")), cols.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.h
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '4px 0 16px'
      }
    }, c.h), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
      key: l
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: fLink
    }, l))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--grey-700)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        padding: '20px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 13,
        color: 'var(--grey-500)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " interliving \u2013 M\xF6bel Hugelmann GmbH \xB7 besser wohnen!"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: fLink
    }, "Datenschutz"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: fLink
    }, "Impressum"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: fLink
    }, "AGB")))));
  }
  const wrap = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto'
  };
  const fLink = {
    color: 'var(--grey-400)',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500
  };
  window.HugelmannFooter = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
(function () {
  const {
    useState
  } = React;
  const I = window.HugelmannIcons;
  const NAV = [{
    label: 'Möbel',
    items: ['Wohnzimmer', 'Schlafzimmer', 'Esszimmer', 'Küchen', 'Büro', 'Matratzen']
  }, {
    label: 'Küchen',
    items: ['Küchenplanung', 'Granit-Arbeitsplatten', 'Einbaugeräte', 'Beratung']
  }, {
    label: 'Interliving',
    items: ['Über Interliving', 'Wohnzimmer', 'Schlafzimmer', 'Badezimmer']
  }, {
    label: 'Marken',
    items: ['Comfortmaster', 'Joop!', 'KAWOO', 'Modulmaster', 'Roomio', 'Venjakob']
  }, {
    label: 'Deko',
    items: ['Heimtextilien', 'Kissen', 'Wanddekoration', 'Vasen']
  }];
  function Header({
    onNavigate = () => {},
    wishCount = 0,
    cartCount = 0
  }) {
    const [open, setOpen] = useState(null);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        fontFamily: 'var(--font-sans)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--grey-700)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: bar
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22,
        alignItems: 'center',
        fontSize: 'var(--fs-sm)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: util
    }, /*#__PURE__*/React.createElement(I.Pin, {
      size: 15
    }), " Lahr \xB7 Freiburg \xB7 Offenburg"), /*#__PURE__*/React.createElement("span", {
      style: util
    }, /*#__PURE__*/React.createElement(I.Phone, {
      size: 15
    }), " 07821 / 96 570")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22,
        alignItems: 'center',
        fontSize: 'var(--fs-sm)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: util
    }, /*#__PURE__*/React.createElement(I.Truck, {
      size: 15
    }), " Eigener Liefer- & Aufbauservice"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: '#fff',
        textDecoration: 'none'
      },
      onClick: e => e.preventDefault()
    }, "Newsletter")))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...bar,
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('home');
      },
      style: {
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo.png",
      alt: "K\xFCchen Hugelmann",
      style: {
        height: 46
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        maxWidth: 460,
        margin: '0 32px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 14,
        color: 'var(--text-muted)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(I.Search, {
      size: 19
    })), /*#__PURE__*/React.createElement("input", {
      placeholder: "Wonach suchen Sie?",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '11px 14px 11px 42px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: 15,
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-pill)',
        outline: 'none',
        background: 'var(--surface-subtle)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(IconBtn, {
      label: "Konto"
    }, /*#__PURE__*/React.createElement(I.User, null)), /*#__PURE__*/React.createElement(IconBtn, {
      label: "Merkzettel",
      badge: wishCount
    }, /*#__PURE__*/React.createElement(I.Heart, null)), /*#__PURE__*/React.createElement(IconBtn, {
      label: "Warenkorb",
      badge: cartCount,
      onClick: () => onNavigate('cart')
    }, /*#__PURE__*/React.createElement(I.Cart, null))))), /*#__PURE__*/React.createElement("nav", {
      style: {
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-xs)'
      },
      onMouseLeave: () => setOpen(null)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...bar,
        gap: 6,
        paddingTop: 0,
        paddingBottom: 0
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("div", {
      key: n.label,
      onMouseEnter: () => setOpen(n.label),
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate('shop'),
      style: {
        ...navBtn,
        color: open === n.label ? 'var(--color-primary)' : 'var(--text-heading)',
        boxShadow: open === n.label ? 'inset 0 -3px 0 var(--color-primary)' : 'none'
      }
    }, n.label, " ", /*#__PURE__*/React.createElement(I.ChevronDown, {
      size: 15
    })), open === n.label && /*#__PURE__*/React.createElement("div", {
      style: dropdown
    }, n.items.map(it => /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('shop');
      },
      style: dropItem,
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--color-primary)';
        e.currentTarget.style.background = 'var(--blue-50)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-body)';
        e.currentTarget.style.background = 'transparent';
      }
    }, it))))), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        ...navBtn,
        marginLeft: 'auto',
        color: 'var(--color-accent)'
      }
    }, "Aktionen"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        ...navBtn
      }
    }, "Bistro"))));
  }
  function IconBtn({
    children,
    label,
    badge = 0,
    onClick
  }) {
    const [h, setH] = useState(false);
    return /*#__PURE__*/React.createElement("button", {
      "aria-label": label,
      title: label,
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: 'relative',
        width: 44,
        height: 44,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: h ? 'var(--surface-muted)' : 'transparent',
        color: 'var(--text-heading)',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        transition: 'var(--transition-base)'
      }
    }, children, badge > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 4,
        right: 4,
        minWidth: 17,
        height: 17,
        padding: '0 4px',
        boxSizing: 'border-box',
        background: 'var(--color-accent)',
        color: '#fff',
        fontSize: 10,
        fontWeight: 700,
        borderRadius: 'var(--radius-pill)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, badge));
  }
  const bar = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '10px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const util = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7
  };
  const navBtn = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: 'transparent',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 15,
    color: 'var(--text-heading)',
    padding: '15px 14px',
    cursor: 'pointer',
    textDecoration: 'none'
  };
  const dropdown = {
    position: 'absolute',
    top: '100%',
    left: 0,
    minWidth: 220,
    background: '#fff',
    border: '1px solid var(--border-subtle)',
    borderRadius: '0 0 var(--radius-md) var(--radius-md)',
    boxShadow: 'var(--shadow-lg)',
    padding: '8px 0',
    display: 'flex',
    flexDirection: 'column'
  };
  const dropItem = {
    padding: '9px 18px',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-body)',
    textDecoration: 'none',
    transition: 'var(--transition-base)'
  };
  window.HugelmannHeader = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    useState
  } = React;
  const I = window.HugelmannIcons;
  const wrapS = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 32px'
  };

  // Honest product-image placeholder (no real product photography supplied)
  function Ph({
    label,
    ratio = '4/3'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,var(--grey-100),var(--grey-200))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: 'var(--grey-400)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "34",
      height: "34",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 15l-5-5L5 21"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, label));
  }
  const CATS = ['Wohnzimmer', 'Schlafzimmer', 'Esszimmer', 'Küchen', 'Arbeitszimmer', 'Kinderzimmer'];
  const PRODUCTS = [{
    brand: 'Interliving',
    title: 'Ecksofa Serie 4303',
    price: '2.499,–€',
    oldPrice: '2.999,–€',
    badge: 'Sale',
    rating: 4.5,
    ratingCount: 42
  }, {
    brand: 'Venjakob',
    title: 'Esstisch Auszug 180–240',
    price: '1.349,–€',
    rating: 5,
    ratingCount: 18
  }, {
    brand: 'KAWOO',
    title: 'Boxspringbett Comfort',
    price: '1.899,–€',
    badge: 'Neu',
    badgeTone: 'primary',
    rating: 4,
    ratingCount: 27
  }, {
    brand: 'Modulmaster',
    title: 'Sideboard Eiche massiv',
    price: '899,–€',
    rating: 4.5,
    ratingCount: 9
  }];
  function HomeScreen({
    onNavigate = () => {},
    onWish = () => {}
  }) {
    const {
      Button,
      Badge,
      ProductCard
    } = window.HugelmannDesignSystem_eafd78;
    const [wished, setWished] = useState({});
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        minHeight: 520,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/aussen.jpg",
      alt: "M\xF6bel Hugelmann Lahr",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg,rgba(3,32,63,.82) 0%,rgba(3,32,63,.55) 45%,rgba(3,32,63,.12) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapS,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620,
        color: '#fff',
        padding: '60px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: 14,
        color: '#fff',
        background: 'var(--color-accent)',
        padding: '6px 14px',
        borderRadius: 'var(--radius-sm)',
        marginBottom: 22
      }
    }, "Seit \xFCber 70 Jahren in Lahr"), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: '#fff',
        fontSize: 'clamp(40px,5vw,64px)',
        lineHeight: 1.02,
        marginBottom: 8
      }
    }, "Herzlich willkommen"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-script)',
        fontWeight: 700,
        fontSize: 'clamp(34px,4vw,52px)',
        color: '#fff',
        lineHeight: 1,
        marginBottom: 22
      }
    }, "besser wohnen!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        lineHeight: 1.55,
        color: 'rgba(255,255,255,.92)',
        maxWidth: 520,
        marginBottom: 32
      }
    }, "Ihr Experte f\xFCr Einrichtung und K\xFCchen im Schwarzwald. Auf 14.000 qm pr\xE4sentieren wir Markenm\xF6bel f\xFCr alle Wohnbereiche."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => onNavigate('shop')
    }, "Zum Onlineshop"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      uppercase: false,
      onClick: () => onNavigate('shop')
    }, "K\xFCchenwelt entdecken"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrapS,
        padding: '72px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hg-eyebrow"
    }, "Marken-Sortiment"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        marginTop: 10
      }
    }, "Inspirierende Ideen f\xFCr Ihr Zuhause")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, CATS.map(c => /*#__PURE__*/React.createElement("a", {
      key: c,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('shop');
      },
      style: {
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none',
        display: 'block',
        transition: 'var(--transition-base)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'none';
      }
    }, /*#__PURE__*/React.createElement(Ph, {
      label: c,
      ratio: "16/10"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '28px 22px 20px',
        background: 'linear-gradient(to top,rgba(32,31,31,.72),transparent)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22
      }
    }, c), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 22
    }))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--surface-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapS,
        padding: '72px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hg-eyebrow"
    }, "K\xFCchen Hugelmann"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        marginTop: 10,
        marginBottom: 18
      }
    }, "Nur ein paar Klicks zu Ihrer Traumk\xFCche"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.65,
        color: 'var(--text-body)',
        marginBottom: 24
      }
    }, "Unser Einbauservice sorgt f\xFCr eine makellose Umsetzung. Profitieren Sie von unserer bequemen Onlineberatung oder vor Ort bei Ihrem pers\xF6nlichen Berater."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 30px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, ['Vollmassive 4 cm Granit-Arbeitsplatten', 'Individuelle Planung bis ins Detail', 'Süddeutschlands Nummer 1 für Granitküchen'].map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--blue-100)',
        color: 'var(--color-primary)',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 16
    })), t))), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate('shop')
    }, "Jetzt entdecken")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement(Ph, {
      label: "K\xFCchenausstellung",
      ratio: "5/4"
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrapS,
        padding: '72px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hg-eyebrow"
    }, "Aktuelle Highlights"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 34,
        marginTop: 8
      }
    }, "Beliebt bei unseren Kunden")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => onNavigate('shop'),
      iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
        size: 16
      })
    }, "Alle M\xF6bel")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: i
    }, p, {
      wished: !!wished[i],
      onWish: () => {
        setWished(w => ({
          ...w,
          [i]: !w[i]
        }));
        onWish();
      },
      onClick: () => onNavigate('product'),
      image: undefined
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hugel-bild.webp",
      alt: "M\xF6bel Hugelmann",
      style: {
        width: '100%',
        height: 380,
        objectFit: 'cover',
        display: 'block',
        filter: 'grayscale(1)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(3,32,63,.55)',
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapS,
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hg-eyebrow",
      style: {
        color: '#fff'
      }
    }, "Familienunternehmen"), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: '#fff',
        fontSize: 38,
        margin: '12px 0 16px'
      }
    }, "Vor 70 Jahren begann alles mit einer kleinen Schreinerei"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,.9)',
        marginBottom: 26
      }
    }, "Heute ist M\xF6bel Hugelmann eines der f\xFChrenden Einrichtungsh\xE4user in S\xFCdbaden \u2014 gef\xFChrt von Inhaber Rainer Hugelmann, getragen von rund 60 Mitarbeitern."), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      uppercase: false
    }, "\xDCber uns"))))));
  }
  window.HugelmannHome = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// Hugelmann UI-kit icon set — thin-stroke line icons in the Lucide style
// (Lucide is the FLAGGED substitute icon set — see readme ICONOGRAPHY).
(function () {
  const React = window.React;
  const ic = (paths, opts = {}) => ({
    size = 22,
    color = 'currentColor',
    strokeWidth = 1.9,
    ...rest
  } = {}) => React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: opts.fill || 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...rest
  }, paths.map((d, i) => React.createElement('path', {
    key: i,
    d
  })));
  const Icons = {
    Search: ic(['M11 11m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0', 'M21 21l-4.3-4.3']),
    Heart: ic(['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.7 1.1-1a5.5 5.5 0 0 0 0-7.7z']),
    Cart: ic(['M6 6h15l-1.5 9h-12z', 'M6 6l-1-3H2', 'M9 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0', 'M18 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0']),
    User: ic(['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0']),
    Menu: ic(['M3 6h18', 'M3 12h18', 'M3 18h18']),
    ChevronDown: ic(['M6 9l6 6 6-6']),
    ChevronRight: ic(['M9 6l6 6-6 6']),
    ArrowRight: ic(['M5 12h14', 'M13 6l6 6-6 6']),
    Phone: ic(['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z']),
    Pin: ic(['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0']),
    Clock: ic(['M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0', 'M12 6v6l4 2']),
    Truck: ic(['M1 3h15v13H1z', 'M16 8h4l3 3v5h-7', 'M5.5 18.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0', 'M18.5 18.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0']),
    Check: ic(['M20 6L9 17l-5-5']),
    Heart2: ic(['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.7 1.1-1a5.5 5.5 0 0 0 0-7.7z'], {
      fill: 'currentColor'
    }),
    Ruler: ic(['M3 3h6v18H3z', 'M9 7H6', 'M9 11H6', 'M9 15H6', 'M12 6h9', 'M12 12h9', 'M12 18h9']),
    Sparkle: ic(['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z']),
    Leaf: ic(['M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8a7 7 0 0 1-10 10z', 'M2 22c1.5-2.5 3-4 4.5-5']),
    Play: ic(['M6 4l14 8-14 8z'], {
      fill: 'currentColor'
    })
  };
  window.HugelmannIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
(function () {
  const {
    useState
  } = React;
  const I = window.HugelmannIcons;
  const wrapP = {
    maxWidth: 'var(--container-lg)',
    margin: '0 auto',
    padding: '0 32px'
  };
  function Ph({
    label,
    ratio = '1/1',
    active
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        width: '100%',
        background: 'linear-gradient(135deg,var(--grey-100),var(--grey-200))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: 'var(--grey-400)',
        borderRadius: 'var(--radius-md)',
        border: active ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
        boxSizing: 'border-box',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 15l-5-5L5 21"
    })), label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase'
      }
    }, label));
  }
  function ProductScreen({
    onNavigate = () => {},
    onAddToCart = () => {}
  }) {
    const {
      Button,
      Badge,
      Rating,
      Accordion
    } = window.HugelmannDesignSystem_eafd78;
    const [img, setImg] = useState(0);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        background: '#fff',
        paddingBottom: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapP,
        padding: '22px 32px',
        fontSize: 13,
        color: 'var(--text-muted)',
        fontWeight: 600,
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('home');
      },
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "Startseite"), /*#__PURE__*/React.createElement(I.ChevronRight, {
      size: 13
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('shop');
      },
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "Wohnzimmer"), /*#__PURE__*/React.createElement(I.ChevronRight, {
      size: 13
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-heading)'
      }
    }, "Ecksofa Serie 4303")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapP,
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 52,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '72px 1fr',
        gap: 16,
        position: 'sticky',
        top: 180
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setImg(i)
    }, /*#__PURE__*/React.createElement(Ph, {
      ratio: "1/1",
      active: img === i
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(Badge, null, "Sale \xB7 -17%")), /*#__PURE__*/React.createElement(Ph, {
      label: "Produktansicht",
      ratio: "4/3.4"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 8
      }
    }, "Interliving"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 34,
        marginBottom: 12
      }
    }, "Ecksofa Serie 4303 in Dunkelgr\xFCn"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Rating, {
      value: 4.5,
      count: 42
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--success)',
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 16
    }), " Sofort lieferbar")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 40,
        color: 'var(--color-accent)'
      }
    }, "2.499,\u2013\u20AC"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        color: 'var(--text-muted)',
        textDecoration: 'line-through'
      }
    }, "2.999,\u2013\u20AC")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginBottom: 26
      }
    }, "inkl. MwSt. \xB7 zzgl. Lieferung \xB7 Sie sparen 500,\u2013\u20AC"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        marginBottom: 10
      }
    }, "Bezugsfarbe"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['#3b5747', '#7d8a99', '#b9a894', '#2a2a2a'].map((c, i) => /*#__PURE__*/React.createElement("button", {
      key: c,
      "aria-label": 'Farbe ' + (i + 1),
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: c,
        border: i === 0 ? '3px solid var(--color-primary)' : '2px solid var(--border-default)',
        cursor: 'pointer',
        outline: 'none'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'stretch',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-pill)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setQty(q => Math.max(1, q - 1)),
      style: qtyBtn
    }, "\u2013"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        textAlign: 'center',
        fontWeight: 700
      }
    }, qty), /*#__PURE__*/React.createElement("button", {
      onClick: () => setQty(q => q + 1),
      style: qtyBtn
    }, "+")), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(I.Cart, {
        size: 20
      }),
      onClick: () => {
        setAdded(true);
        onAddToCart(qty);
      }
    }, added ? 'Im Warenkorb' : 'In den Warenkorb'), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      style: {
        padding: '0 18px'
      },
      "aria-label": "Merken"
    }, /*#__PURE__*/React.createElement(I.Heart, {
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 12,
        marginBottom: 30
      }
    }, [[I.Truck, 'Eigener Lieferservice'], [I.Ruler, 'Aufmaß & Aufbau'], [I.Phone, 'Persönliche Beratung']].map(([Ic, t], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '16px 14px',
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-primary)'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, t)))), /*#__PURE__*/React.createElement(Accordion, {
      defaultOpen: [0],
      items: [{
        title: 'Produktdetails',
        content: 'Ecksofa der Interliving Serie 4303 mit olivfarbener Wirkware „Salsa“. Stellfläche ca. 323 × 190 cm. Inklusive verstellbarer Kopfstützen und Bettfunktion.'
      }, {
        title: 'Maße & Materialien',
        content: 'Breite 323 cm · Tiefe 190 cm · Höhe 88 cm. Bezug: 100 % Polyester, pflegeleicht. Gestell: Massivholz & Stahlwellenunterfederung.'
      }, {
        title: 'Lieferung & Aufbau',
        content: 'Lieferung durch unseren eigenen Fuhrpark im Raum Freiburg, Offenburg und Lahr. Aufbau und Altmöbel-Entsorgung auf Wunsch inklusive.'
      }]
    }))));
  }
  const qtyBtn = {
    width: 42,
    height: 46,
    border: 'none',
    background: 'transparent',
    fontSize: 22,
    fontWeight: 700,
    color: 'var(--text-heading)',
    cursor: 'pointer',
    lineHeight: 1
  };
  window.HugelmannProduct = ProductScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShopScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(function () {
  const {
    useState
  } = React;
  const I = window.HugelmannIcons;
  const wrapSh = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 32px'
  };
  const ALL = [{
    brand: 'Interliving',
    title: 'Ecksofa Serie 4303',
    price: '2.499,–€',
    oldPrice: '2.999,–€',
    badge: 'Sale',
    rating: 4.5,
    ratingCount: 42
  }, {
    brand: 'Venjakob',
    title: 'Esstisch Auszug 180–240',
    price: '1.349,–€',
    rating: 5,
    ratingCount: 18
  }, {
    brand: 'KAWOO',
    title: 'Boxspringbett Comfort',
    price: '1.899,–€',
    badge: 'Neu',
    badgeTone: 'primary',
    rating: 4,
    ratingCount: 27
  }, {
    brand: 'Modulmaster',
    title: 'Sideboard Eiche massiv',
    price: '899,–€',
    rating: 4.5,
    ratingCount: 9
  }, {
    brand: 'Comfortmaster',
    title: 'Relaxsessel mit Motor',
    price: '1.199,–€',
    rating: 5,
    ratingCount: 31
  }, {
    brand: 'Joop!',
    title: 'Couchtisch Glas & Chrom',
    price: '649,–€',
    badge: 'Neu',
    badgeTone: 'primary',
    rating: 4,
    ratingCount: 6
  }, {
    brand: 'Interliving',
    title: 'Kleiderschrank 6-türig',
    price: '1.749,–€',
    oldPrice: '2.099,–€',
    badge: 'Sale',
    rating: 4.5,
    ratingCount: 15
  }, {
    brand: 'Roomio',
    title: 'TV-Lowboard Wildeiche',
    price: '579,–€',
    rating: 4,
    ratingCount: 12
  }];
  const FILTERS = ['Wohnzimmer', 'Sofa & Couch', 'Sale', 'Sofort lieferbar', 'Interliving', 'Boxspring'];
  function ShopScreen({
    onNavigate = () => {},
    onWish = () => {}
  }) {
    const {
      Button,
      Badge,
      Tag,
      Select,
      ProductCard
    } = window.HugelmannDesignSystem_eafd78;
    const [active, setActive] = useState(['Wohnzimmer']);
    const [wished, setWished] = useState({});
    const toggle = f => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapSh,
        padding: '26px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        fontWeight: 600,
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('home');
      },
      style: {
        color: 'var(--text-muted)',
        textDecoration: 'none'
      }
    }, "Startseite"), /*#__PURE__*/React.createElement(I.ChevronRight, {
      size: 13
    }), "M\xF6bel", /*#__PURE__*/React.createElement(I.ChevronRight, {
      size: 13
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-heading)'
      }
    }, "Wohnzimmer")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 38
      }
    }, "Wohnzimmer"))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrapSh,
        padding: '32px',
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: 36,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'sticky',
        top: 180
      }
    }, /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Kategorie",
      items: ['Sofa & Couch', 'Sessel', 'Couchtische', 'TV-Möbel', 'Regale']
    }), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Marke",
      items: ['Interliving', 'Venjakob', 'KAWOO', 'Comfortmaster', 'Joop!']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: fgTitle
    }, "Preis"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "3000",
      defaultValue: "2000",
      style: {
        width: '100%',
        accentColor: 'var(--color-primary)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: 'var(--text-muted)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, "0 \u20AC"), /*#__PURE__*/React.createElement("span", null, "3.000 \u20AC")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, FILTERS.map(f => /*#__PURE__*/React.createElement(Tag, {
      key: f,
      selected: active.includes(f),
      onClick: () => toggle(f),
      onRemove: active.includes(f) ? () => toggle(f) : undefined
    }, f))), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 220
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: [{
        value: 'neu',
        label: 'Sortieren: Neuheiten'
      }, {
        value: 'preis-auf',
        label: 'Preis aufsteigend'
      }, {
        value: 'preis-ab',
        label: 'Preis absteigend'
      }, {
        value: 'bewertung',
        label: 'Beste Bewertung'
      }],
      defaultValue: "neu"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        fontWeight: 600,
        marginBottom: 18
      }
    }, ALL.length, " Artikel \xB7 Eigener Liefer- & Aufbauservice"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, ALL.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: i
    }, p, {
      image: undefined,
      wished: !!wished[i],
      onWish: () => {
        setWished(w => ({
          ...w,
          [i]: !w[i]
        }));
        onWish();
      },
      onClick: () => onNavigate('product')
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      uppercase: false
    }, "Mehr laden")))));
  }
  function FilterGroup({
    title,
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 22,
        paddingBottom: 22,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: fgTitle
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, items.map(it => /*#__PURE__*/React.createElement("label", {
      key: it,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--text-body)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      style: {
        width: 17,
        height: 17,
        accentColor: 'var(--color-primary)'
      }
    }), it))));
  }
  const fgTitle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 16,
    color: 'var(--text-heading)',
    marginBottom: 14
  };
  window.HugelmannShop = ShopScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShopScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
