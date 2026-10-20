# Renovierungszuschuss · Deploy-Paket

Stand 20.10.2026 · Zielrepo: kueche-hugelmann.de (Repo-Root)

## Neue Seiten
| Pfad | Datei |
|---|---|
| /renovierungszuschuss/ | renovierungszuschuss/index.html |
| /renovierungszuschuss-formular/ | renovierungszuschuss-formular/index.html |
| /renovierungszuschuss-danke/ | renovierungszuschuss-danke/index.html |

Alle CTAs der LP führen auf /renovierungszuschuss-formular/, nach dem Absenden geht es auf /renovierungszuschuss-danke/.
Die Seiten unter /alt-gegen-neu/… bleiben unverändert (Stand vor der Zuschuss-Umstellung).

## Assets
Ordner `assets/` komplett mitliefern bzw. ins Repo mergen (64 Dateien, alle absolut als /assets/… verlinkt). Viele liegen bereits im Repo, Überschreiben ist unkritisch.
Voraussetzung wie bisher im Repo-Root: `support.js`, `tracking.js`, `_ds/…`, `assets/kuechen.json`.

## Tracking & Webhook
- Webhook (Zapier) wie bisher: `https://hooks.zapier.com/hooks/catch/18583379/44e0n4p/`
- `aktion` = `Renovierungszuschuss – bis zu 4.000 € für Ihre neue Küche`
- `event_source_url` = `…/renovierungszuschuss-danke/`
- `lp_version` = `rz-lp-v1`
- GA4/Vercel-Events: Parameter `funnel` = `renovierungszuschuss` (vorher `alt_gegen_neu`)
- Meta-Lead auf der Danke-Seite: `content_name` = `Renovierungszuschuss`
- Meta-Custom-Events behalten ihre Namen (z. B. `AGN_Quiz_Schritt_1`). Für eine eigene Conversion in Meta/Google die URL `/renovierungszuschuss-danke/` als Regel verwenden.

## To do nach dem Push
1. Zapier/CRM-Filter auf den neuen `aktion`-Wert anpassen.
2. In Meta und Google Ads eine Conversion für `/renovierungszuschuss-danke/` anlegen.
3. Anzeigen-Links auf `https://kueche-hugelmann.de/renovierungszuschuss/` umstellen.
4. Testanfrage absenden und Eingang im CRM prüfen.
