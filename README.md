# Hugelmann – Alt gegen Neu Küchenaktion

Statische Seiten-Struktur für **kueche-hugelmann.de**. Den Inhalt dieses Ordners direkt ins Repo-Root legen (Domain muss auf das Repo-Root zeigen, da alle Pfade absolut sind, z.B. `/assets/logo.png`).

## Struktur

```
alt-gegen-neu/index.html            → kueche-hugelmann.de/alt-gegen-neu (Landingpage)
alt-gegen-neu-formular/index.html   → kueche-hugelmann.de/alt-gegen-neu-formular (7-Fragen-Funnel + Kontaktformular)
alt-gegen-neu-danke/index.html      → kueche-hugelmann.de/alt-gegen-neu-danke (Danke-Seite)
assets/                             → Logos & Fotos
_ds/                                → Hugelmann Design System (Farben, Schriften, Komponenten)
support.js, image-slot.js           → Laufzeit-Skripte der Seiten
```

## Interne Verlinkung
- Alle CTAs der Landingpage → `/alt-gegen-neu-formular/`
- Nach Absenden des Formulars → Weiterleitung auf `/alt-gegen-neu-danke/`

## Noch offen
- **Lead-Übertragung:** Das Formular leitet aktuell nur weiter. Versand der Antworten (7 Fragen + Kontaktdaten) an E-Mail/CRM ist im Code mit `TODO` markiert.
- **Bilder:** Platzhalter-Flächen durch echte Fotos ersetzen — am besten in Claude per Drag & Drop einfügen, danach Dateien neu exportieren lassen.
- Impressum/Datenschutz/AGB im Footer verlinken.
