# PROMAN Zakelijk — B2B-acquisitie site

Tweede PROMAN-site, complementair aan de bestaande candidate-platform site. Specifiek gebouwd om **werkgevers** te bereiken via SEO, en om elk van de zes merken volwaardig in beeld te zetten (oplossing voor de feedback dat PROMAN Home en andere merken onderbelicht zijn).

## Stack

- **Astro 4** — static-first SSG, sub-100 ms first paint
- **Tailwind CSS** — utility-first styling, brand-tokens in `tailwind.config.mjs`
- **@astrojs/sitemap** — automatische sitemap-generatie
- **Content collections** — markdown voor cases en kennisbank-artikelen, eenvoudig uit te breiden door redactie zonder dev-werk

## Wat zit erin

### Pagina's

```
/                       Homepage met BrandShowcase (alle 6 merken full-width)
/diensten/              Overzicht 6 functionele diensten
/diensten/[slug]/       6 dienstdetailpagina's (uitzend, w&s, payroll, ...)
/merken/                Overzicht 6 merken
/merken/[slug]/         6 merkdetailpagina's (Jobs, Home, Care, Ascento, Winsearch, Amplo)
/sectoren/              Overzicht 7 sectoren
/sectoren/[slug]/       7 sectordetailpagina's (industrie, logistiek, bouw, IT, zorg, retail, finance)
/regios/                Overzicht regio's
/regios/[slug]/         11 regio-pagina's (alle Belgische provincies + Brussel)
/cases/                 Cases-overzicht (markdown collection)
/cases/[slug]/          Case-detailpagina's
/kennisbank/            Blog-overzicht
/kennisbank/[slug]/     Artikel-pagina's
/over/                  Over PROMAN
/contact/               Contactpagina
/offerte/               Lead-capture formulier (B2B-conversiepagina)
/404                    Niet-gevonden
```

Totaal: ~50 pagina's bij eerste build, alle SEO-volledig.

### SEO-uitrusting

- Schema.org JSON-LD voor Organization, FAQPage, BreadcrumbList, EmploymentAgency, Service
- Open Graph + Twitter Card meta-tags op elke pagina
- Canonical URLs
- robots.txt + sitemap-index.xml automatisch
- Hreflang-ready (NL is default, FR uitbreidbaar)
- Trailingslash: always (consistent canonical, beter voor crawlers)

### Conversiepad

- Lead-capture op homepage (rechts in hero)
- Sticky bottom-CTA op mobiel ("Offerte" + "Bel direct")
- Volledig offerteformulier op `/offerte/`
- CTA-secties op elke pagina

## Dataschema

Alle data zit in `src/data/*.ts`:
- `brands.ts` — 6 merken met kleurenschema, USPs, cases, FAQ
- `services.ts` — 6 functionele diensten met benefits, process, FAQ
- `sectors.ts` — 7 sectoren met uitdagingen, profielen, cases, FAQ
- `regions.ts` — 11 regio's met steden, sterke sectoren, cases

Pagina's zijn **datagedreven**: elk merk/dienst/sector/regio krijgt automatisch zijn detail-pagina via Astro's `getStaticPaths()`. Wil je een nieuwe sector toevoegen? Eén regel in `sectors.ts`, klaar.

Cases en artikelen zitten in `src/content/cases/*.md` en `src/content/articles/*.md`. Schrijven via Markdown, frontmatter typecheckt door Zod-schema in `src/content/config.ts`.

## Lokaal draaien

```bash
npm install
npm run dev   # http://localhost:4321
```

## Builden voor productie

```bash
npm run build  # output naar ./dist/
npm run preview
```

## Deployen

### Cloudflare Pages (aanbevolen)

1. Push naar GitHub
2. Cloudflare Pages → Connect Git → kies repo
3. Framework: Astro · Build: `npm run build` · Output: `dist`
4. Deploy

Alle config staat al goed: trailingSlash, sitemap, prefetch, schema-tags.

## Volgende stappen (productie-klaar maken)

| Onderdeel | Wat te doen |
|---|---|
| OG-image | Vervang `public/og-default.png.txt` door een echte 1200×630 PNG |
| Echte cases | 5-10 echte klantcases uit CRM toevoegen aan `src/content/cases/` |
| Klantlogo's | Logo's klanten vervangen in `TrustStrip.astro` |
| CRM-koppeling | Het offerteformulier connecteren met HubSpot, Salesforce of een serverless function |
| Analytics | Plausible, GA4 of Fathom toevoegen aan `Base.astro` |
| FR-versie | Volledig vertalen — i18n-structuur is voorbereid in `astro.config.mjs` |
| Custom domein | `zakelijk.proman.be` of vergelijkbaar koppelen via DNS |
| Live SEO-checks | Google Search Console verifiëren, sitemap submitten |

## Architectuurprincipes

1. **Werkgevers eerst, kandidaten op de andere site.** Geen werkzoekenden-zoek-en-flow. Wel: snelle offerte-flow, cases met cijfers, sectorspecifieke landings.
2. **Elk merk volwaardig.** Geen mini-tegels meer. Op de homepage krijgt elk merk een full-width content-block met eigen kleur, USPs en cases. Elk merk heeft een dedicated landing-page.
3. **SEO via diepgang.** Elke service/sector/regio is een echte pagina van 800-1500 woorden, niet een dunne placeholder. Dat is hoe je structureel ranked tegen Indeed, VDAB en concurrenten.
4. **Mobile-first, sticky CTA.** Veel B2B-bezoekers komen via mobile. Conversiepad mag nooit weg-scrollen.
5. **Data > code.** Wijzigingen aan content gebeuren in `src/data/*.ts` of `src/content/*`, niet in pagina-templates.

## License

Intern project van Mojo Webdesign voor PROMAN Belgium. Code: alle rechten voorbehouden.
