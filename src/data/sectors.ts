// Sectorpagina's — geoptimaliseerd voor zoektermen als "uitzendbureau industrie",
// "personeel logistiek", etc. Elke sector heeft eigen profielen, cases en CTA.

export type Sector = {
  slug: string;
  name: string;
  /** Korte tagline */
  tagline: string;
  /** Pitch — wat is er specifiek aan deze sector */
  pitch: string;
  /** SEO meta */
  seo: { title: string; description: string };
  /** Iconische emoji */
  icon: string;
  /** Achtergrond Tailwind class */
  bgGradient: string;
  /** Specifieke uitdagingen in deze sector */
  challenges: { title: string; body: string }[];
  /** Profielen die we plaatsen in deze sector */
  profiles: string[];
  /** Welke merken zijn relevant (slugs) */
  brands: string[];
  /** Welke diensten worden vooral gevraagd */
  services: string[];
  /** Mini-cases */
  cases: { client: string; result: string }[];
  /** FAQ */
  faqs: { q: string; a: string }[];
};

export const sectors: Sector[] = [
  {
    slug: 'industrie',
    name: 'Industrie & Productie',
    tagline: 'Operators, technici en productiemedewerkers die meedraaien vanaf dag 1',
    pitch:
      'Productiebedrijven werken in shifts, met seizoenspieken en strakke kwaliteitseisen. Wij leveren operators, lijnmedewerkers, magazijniers en technische profielen die je werkvloer en cao kennen.',
    seo: {
      title: 'Uitzendbureau industrie — operators en productiemedewerkers',
      description:
        'PROMAN levert ervaren productiepersoneel, operators en technische profielen voor de Belgische industrie. 48u-invulling, sectorspecialisten, kwaliteitsgarantie.',
    },
    icon: '🏭',
    bgGradient: 'from-orange-500 to-orange-700',
    challenges: [
      {
        title: 'Pieken zonder vaste overcapaciteit',
        body: 'Productiepieken vragen flexibiliteit zonder dat je in dalperiodes met onnodige loonkost zit. Uitzend lost dat structureel op.',
      },
      {
        title: 'Snel inzetbare profielen',
        body: 'Een nieuwe operator moet productieprocessen, veiligheidsregels en kwaliteitseisen kennen. Wij screenen op exact die vaardigheden.',
      },
      {
        title: 'Sectorale cao-complexiteit',
        body: 'PC 111, PC 220, PC 118 — elke productieomgeving heeft eigen regels. Wij zorgen voor compliance, jij hoeft het niet zelf uit te zoeken.',
      },
    ],
    profiles: [
      'Productieoperator',
      'Lijnmedewerker',
      'Heftruckchauffeur',
      'Magazijnier',
      'Verpakker',
      'Onderhoudstechnicus',
      'Lasser MIG/MAG/TIG',
      'Industrieel elektricien',
      'Kwaliteitscontroleur',
      'Machinebediener CNC',
      'Productieleider / shift leader',
      'Engineer (process / maintenance)',
    ],
    brands: ['proman-jobs', 'ascento', 'winsearch'],
    services: ['uitzendarbeid', 'werving-en-selectie', 'outplacement', 'talent-assessment'],
    cases: [
      { client: 'Voedingsproducent — Henegouwen', result: '120 operators ingezet voor zomerpiek, 92% retentie' },
      { client: 'Metaalbewerker — Limburg', result: 'Lassers MIG/MAG voor nieuwe productielijn binnen 3 weken' },
      { client: 'Auto-toeleverancier — West-Vlaanderen', result: 'Volledig shift-team van 40 personen voor Q4 ramp-up' },
    ],
    faqs: [
      {
        q: 'Kan PROMAN snelle 3-shift bezetting leveren?',
        a: 'Ja. Voor cliënten met 3-shift werking houden we een vaste pool aan voor onmiddellijke beschikbaarheid. Bij urgente vacatures kunnen we typisch dezelfde dag of volgende dag starten.',
      },
      {
        q: 'Hoe gaan jullie om met veiligheidsattesten en certificaten?',
        a: 'We checken bij intake alle relevante attesten: VCA, heftruckcertificaat, lasattest, BA4/BA5, etc. Verlopen of ontbrekende attesten regelen we via onze opleidingspartners — vaak binnen één week.',
      },
    ],
  },
  {
    slug: 'logistiek',
    name: 'Logistiek & Transport',
    tagline: 'Magazijniers, chauffeurs en operationeel personeel voor de hele keten',
    pitch:
      'Logistieke spelers werken met variabele volumes, krappe marges en strikte deadlines. Wij leveren personeel dat reachtruck, WMS-scanning, paklijnen en distributie kent.',
    seo: {
      title: 'Uitzendbureau logistiek — magazijniers, chauffeurs en orderpickers',
      description:
        'Snel betrouwbaar logistiek personeel voor distributie, e-commerce en transport. Heftruckchauffeurs, magazijniers, planners — via PROMAN met sectorconsulenten.',
    },
    icon: '📦',
    bgGradient: 'from-blue-500 to-blue-700',
    challenges: [
      {
        title: 'E-commerce volatiliteit',
        body: 'Zwarte vrijdag, kerstpieken, januari-stilte — volumes wisselen extreem. Een vaste poule per regio vangt dat op.',
      },
      {
        title: 'Krappe arbeidsmarkt voor chauffeurs',
        body: 'Categorie C/CE-chauffeurs zijn extreem schaars. Wij zoeken proactief, ook met opleidingstrajecten voor instromers.',
      },
      {
        title: 'WMS- en TMS-vaardigheden',
        body: 'Elk distributiecentrum draait op andere software. Wij screenen op specifieke systeemkennis (SAP EWM, Manhattan, Reflex, ...).',
      },
    ],
    profiles: [
      'Magazijnier (basic en gespecialiseerd)',
      'Heftruckchauffeur (frontale, reach, narrow aisle)',
      'Orderpicker (pick-by-voice, pick-by-light)',
      'Chauffeur cat. B / C / CE',
      'Distributieplanner',
      'WMS-administrator',
      'Logistiek teamleider',
      'Supply chain analyst',
      'Inkoper logistiek',
      'Logistics manager',
    ],
    brands: ['proman-jobs', 'ascento'],
    services: ['uitzendarbeid', 'werving-en-selectie', 'payroll'],
    cases: [
      { client: 'E-commerce-platform — Vlaams-Brabant', result: '180 orderpickers voor Black Friday, 0 vertraging' },
      { client: 'Logistieke 3PL — Antwerpen haven', result: 'Permanente reachtruck-pool van 25 voor 24/7 werking' },
      { client: 'Transportbedrijf — Henegouwen', result: '15 CE-chauffeurs in 6 weken, in een leeggehaalde markt' },
    ],
    faqs: [
      {
        q: 'Hebben jullie ook chauffeurs voor specifiek vervoer (ADR, koel, container)?',
        a: 'Ja. Wij hebben een database van gespecialiseerde chauffeurs met geldige attesten voor ADR (gevaarlijke goederen), thermo (koeltransport), containertransport en vakbekwaamheid CE. Bij intake checken we alle vereiste documenten.',
      },
      {
        q: 'Kan PROMAN logistieke pieken voor e-commerce opvangen?',
        a: 'Dat is precies onze sterkte. We hebben permanente seizoenspools in Vlaams-Brabant, Antwerpen en Henegouwen — speciaal voor distributiecentra met variabele volumes. Vroege planning (4-6 weken vooraf) levert beste resultaten.',
      },
    ],
  },
  {
    slug: 'bouw',
    name: 'Bouw & Techniek',
    tagline: 'Vakbekwame ambachtslui voor wegen-, woning- en utiliteitsbouw',
    pitch:
      'Bouwprojecten lopen vertraging op door personeelstekort. Wij leveren bouwvakkers, vakspecialisten en projectleiders die werven, plannen en VCA-veiligheid kennen.',
    seo: {
      title: 'Uitzendbureau bouw — vakbekwame bouwvakkers en technische profielen',
      description:
        'Bouwpersoneel via PROMAN: metsers, lassers, elektriciens, kraanmachinisten en projectleiders. VCA-attest, sectorale cao, snelle invulling.',
    },
    icon: '🏗️',
    bgGradient: 'from-yellow-600 to-orange-700',
    challenges: [
      {
        title: 'Krimpende vakbekwame poule',
        body: 'Steeds minder jongeren kiezen voor bouwambachten. Wij investeren in instroomtrajecten met bouwbedrijven.',
      },
      {
        title: 'Werfflexibiliteit',
        body: 'Werven verschuiven, weerverlet treedt op, opleveringsdata wijzigen. Wij ondersteunen flexibele inzet over meerdere werven.',
      },
      {
        title: 'Veiligheid en attesten',
        body: 'VCA, BA4/BA5, attest hoogwerker — wij beheren attesten in onze database, verlengingen automatisch herinnerd.',
      },
    ],
    profiles: [
      'Metser / metselaar',
      'Bekister',
      'Lasser (alle technieken)',
      'Industriele elektricien',
      'Sanitair / loodgieter',
      'Tegelzetter / vloerder',
      'Schilder',
      'Kraanmachinist',
      'Werfleider / projectleider',
      'Studie-ingenieur bouw',
      'EHS / VCA-coördinator',
    ],
    brands: ['proman-jobs', 'winsearch'],
    services: ['uitzendarbeid', 'werving-en-selectie'],
    cases: [
      { client: 'Bouwgroep — Wallonië', result: 'Volledig metserteam (12) voor sociale woningbouwproject' },
      { client: 'Wegenbouwer — Limburg', result: 'Kraanmachinisten en grondwerkers voor R0-uitbreiding' },
      { client: 'Installatiebedrijf — Antwerpen', result: 'Industriele elektriciens voor automatiseringsproject' },
    ],
    faqs: [
      {
        q: 'Volgen jullie de PC 124-cao voor de bouw?',
        a: 'Ja. Alle plaatsingen volgen PC 124 inclusief weerverletregeling, eindejaarspremie, sociale toelagen en bestaanszekerheidsbijdragen. Wij rekenen die kost transparant in de offerte.',
      },
      {
        q: 'Kunnen jullie voor moeilijke profielen zoals kraanmachinisten leveren?',
        a: 'Ja, mits voldoende doorlooptijd. Voor schaarse profielen (kraan, gespecialiseerd lasser, BA5-installateur) plannen we 4-8 weken vooruit. Bij meerdere openstaande vacatures werken we via een framework-akkoord met prioritaire toelevering.',
      },
    ],
  },
  {
    slug: 'it-en-tech',
    name: 'IT & Tech',
    tagline: 'Developers, DevOps en data-experts voor scale-ups en corporates',
    pitch:
      'IT-talent is geen commodity. Wij combineren executive search via Winsearch, projectpayroll via Amplo, en specialistische werving voor alles van junior dev tot CTO.',
    seo: {
      title: 'IT-recruitment & tech-personeel — developers, DevOps en data',
      description:
        'PROMAN levert IT-profielen voor Belgische scale-ups en corporates: developers, DevOps, data engineers en CTO\'s. Via specialistische merken Winsearch en Amplo.',
    },
    icon: '💻',
    bgGradient: 'from-purple-500 to-purple-700',
    challenges: [
      {
        title: 'Krappe markt, hoge salarissen',
        body: 'Top-developers kiezen waar ze willen. Wij weten welke werkgevers scoren en helpen je verhaal aan te scherpen.',
      },
      {
        title: 'Stack-fit',
        body: 'Een Vue.js-developer is geen React-developer. Een DevOps die GCP kent is geen AWS-expert. Wij screenen op werkelijke ervaring, niet trefwoorden.',
      },
      {
        title: 'Freelance vs. vast',
        body: 'Soms is een freelance specialist beter, soms een vaste sterkhouder. Wij adviseren neutraal, niet vanuit eigen belang.',
      },
    ],
    profiles: [
      'Frontend developer (React, Vue, Angular)',
      'Backend developer (Node, Python, Java, .NET, Go)',
      'Full-stack developer',
      'DevOps / SRE / Platform engineer',
      'Data engineer / Analytics engineer',
      'Data scientist / ML engineer',
      'Cloud architect (AWS, Azure, GCP)',
      'Security engineer',
      'Engineering manager',
      'CTO / VP Engineering',
      'Product manager',
    ],
    brands: ['winsearch', 'amplo', 'proman-jobs'],
    services: ['executive-search', 'werving-en-selectie', 'payroll'],
    cases: [
      { client: 'SaaS scale-up — Antwerpen', result: 'CTO en VP Engineering binnen 8 weken' },
      { client: 'Bank — Brussel', result: 'Data engineering team van 8 in 4 maanden' },
      { client: 'Industriele groep — Limburg', result: 'DevOps & cloud architect voor digitale transformatie' },
    ],
    faqs: [
      {
        q: 'Werken jullie met buitenlandse IT-profielen?',
        a: 'Ja, voor schaarse profielen werken we met EU- en niet-EU-talent. We begeleiden ook Single Permit-aanvragen via Amplo. Belgisch talent eerst, internationaal als alternatief.',
      },
      {
        q: 'Hoeveel kost een IT-werving?',
        a: 'Voor recruiters op no-cure-no-pay: 20-25% van bruto-jaarinkomen. Voor zoektochten naar architect of executive: retainer-model 30-35%. Freelance-bemiddeling via Amplo werkt anders: dagtarief-marge of vast bedrag per maand.',
      },
    ],
  },
  {
    slug: 'zorg',
    name: 'Zorg & Welzijn',
    tagline: 'Erkende zorgprofielen voor ziekenhuizen, WZC en thuiszorg',
    pitch:
      'De zorgsector is structureel onderbemand. Wij leveren verpleegkundigen, verzorgenden, kinesisten en zorgcoördinatoren met geldige RIZIV-nummers en hart voor het werk.',
    seo: {
      title: 'Zorgpersoneel via PROMAN Care — verpleegkundigen, verzorgenden, kinesisten',
      description:
        'Erkend zorgpersoneel voor ziekenhuizen, WZC en thuiszorg. Verpleegkundigen, verzorgenden en gespecialiseerde profielen via PROMAN Care.',
    },
    icon: '🩺',
    bgGradient: 'from-green-500 to-green-700',
    challenges: [
      {
        title: 'Chronisch personeelstekort',
        body: 'De zorgsector heeft 20.000+ openstaande vacatures. Klassieke wervingskanalen werken niet. Wij activeren brede netwerken en grensregio\'s.',
      },
      {
        title: 'Burn-out en verloop',
        body: 'Slechte werkomstandigheden leiden tot verloop. Wij selecteren werkgevers die structureel investeren in welzijn — kwaliteit boven kwantiteit.',
      },
      {
        title: 'Regelgeving en attesten',
        body: 'RIZIV, visa, sectorale cao 318/319/330 — alle compliance via één partner.',
      },
    ],
    profiles: [
      'Verpleegkundige A1 / HBO5',
      'Verzorgende',
      'Zorgkundige',
      'Kinesitherapeut',
      'Logopedist',
      'Ergotherapeut',
      'Diëtist',
      'Psycholoog',
      'Hoofdverpleegkundige',
      'Zorgcoördinator',
      'Directie WZC / ziekenhuis',
    ],
    brands: ['proman-care', 'proman-home', 'ascento'],
    services: ['uitzendarbeid', 'werving-en-selectie', 'executive-search'],
    cases: [
      { client: 'WZC-groep — Antwerpen', result: '24 verpleegkundigen voor herstart na renovatie' },
      { client: 'Thuiszorgorganisatie — Limburg', result: 'Wachtlijst weggewerkt, +120% capaciteit nachtdienst' },
      { client: 'Ziekenhuis — Wallonië', result: 'Permanente verpleegpool voor seizoenspieken' },
    ],
    faqs: [
      {
        q: 'Werken jullie met buitenlandse zorgprofielen?',
        a: 'Ja, voor specifieke schaarse profielen werken we met zorgprofessionals uit Frankrijk, Nederland, Duitsland en Spanje. We regelen RIZIV-erkenning, taaltest en huisvesting waar nodig. Belgisch talent blijft eerste optie.',
      },
      {
        q: 'Welke cao\'s volgen jullie voor zorgpersoneel?',
        a: 'PC 318 (gezinsondersteuning), PC 319.01 (welzijn), PC 330 (zorginstellingen) — afhankelijk van werkgever. Wij regelen de juiste sectoraffectie automatisch.',
      },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail & Hospitality',
    tagline: 'Verkoopmedewerkers, store managers en hospitality-talent',
    pitch:
      'Winkels, horeca en hospitality werken met seizoenen, weekends en hoge turnover. Wij leveren verkooppersoneel en horeca-medewerkers die direct kunnen aanslaan.',
    seo: {
      title: 'Personeel voor retail en horeca — verkoopmedewerkers en hospitality',
      description:
        'PROMAN levert betrouwbaar retail- en horeca-personeel: verkoopsters, store managers, kelners, koks en eventmedewerkers. Snelle invulling, weekendbeschikbaar.',
    },
    icon: '🛍️',
    bgGradient: 'from-pink-500 to-pink-700',
    challenges: [
      {
        title: 'Seizoenpieken',
        body: 'Eindejaar, koopzondagen, opruimperiodes — tijdelijk extra personeel zonder vaste loonkost.',
      },
      {
        title: 'Hoge turnover',
        body: 'Retail kent traditioneel hoog verloop. Wij screenen op motivatie en plaatsing-fit, niet alleen beschikbaarheid.',
      },
      {
        title: 'Weekend- en avondwerk',
        body: 'Veel werkgevers hebben moeite met avond- en weekenduren. Onze poule is daarop voorbereid.',
      },
    ],
    profiles: [
      'Verkoopmedewerker',
      'Visual merchandiser',
      'Store manager',
      'District manager',
      'Kassamedewerker',
      'Stockmedewerker',
      'Kelner / serveerster',
      'Kok',
      'Hostess / hospitality',
      'Eventmedewerker',
    ],
    brands: ['proman-jobs', 'amplo', 'proman-home'],
    services: ['uitzendarbeid', 'werving-en-selectie', 'payroll'],
    cases: [
      { client: 'Modeketen — landelijk', result: 'Eindejaarspersoneel voor 15 winkels in 1 wervingsronde' },
      { client: 'Hotelgroep — Brussel', result: 'Permanente hospitality-poule voor 4 hotels' },
      { client: 'Festivalorganisatie — West-Vlaanderen', result: '500+ eventmedewerkers per editie via Amplo' },
    ],
    faqs: [
      {
        q: 'Hebben jullie ook studentenjobs en jobstudenten?',
        a: 'Ja. Voor jobstudenten met contingentdagen werken we via een aparte tak. Wij regelen contracten, RSZ-aangifte en compliance binnen het studentenstatuut.',
      },
      {
        q: 'Hoe snel kunnen jullie eindejaarspieken bemensen?',
        a: 'Best 4-6 weken vooraf plannen. Voor courante retail-profielen kunnen we typisch 80% van de vraag invullen op tijd; bij latere aanvragen blijven we beschikbaar via standby-pool.',
      },
    ],
  },
  {
    slug: 'finance',
    name: 'Finance & Banking',
    tagline: 'Financiële profielen voor banken, verzekeraars en corporates',
    pitch:
      'De financiële sector vraagt expertise, regelgeving en discretie. Wij leveren accountants, controllers, treasury-experts en compliance-officers — tot CFO-niveau.',
    seo: {
      title: 'Financieel personeel — accountants, controllers en CFO\'s',
      description:
        'Werving en executive search voor financiële profielen via PROMAN: accountants, controllers, treasury, compliance en CFO\'s. Voor banken, verzekeraars en corporates.',
    },
    icon: '💼',
    bgGradient: 'from-teal-600 to-teal-800',
    challenges: [
      {
        title: 'Compliance en regelgeving',
        body: 'MiFID, Solvency II, IFRS — financiële profielen moeten complexiteit beheersen. Wij screenen op specifieke regelgevingsexpertise.',
      },
      {
        title: 'Schaarse niche-profielen',
        body: 'Treasury, transfer pricing, M&A-experts zijn extreem schaars. Voor deze profielen executive search via Winsearch.',
      },
      {
        title: 'Vertrouwelijkheid',
        body: 'Sleutelfuncties in finance worden vaak discreet ingevuld. Onze processen zijn opgebouwd voor vertrouwelijkheid.',
      },
    ],
    profiles: [
      'Boekhouder / accountant',
      'Controller (financial / business)',
      'Treasury manager',
      'Tax specialist',
      'Internal auditor',
      'Compliance officer',
      'Risk manager',
      'CFO / financieel directeur',
      'Investment officer',
      'M&A advisor',
    ],
    brands: ['winsearch', 'ascento', 'proman-jobs'],
    services: ['executive-search', 'werving-en-selectie', 'talent-assessment'],
    cases: [
      { client: 'Bank — Brussel', result: 'Compliance-team van 6 in 3 maanden, allen na 12 maanden nog actief' },
      { client: 'Verzekeraar — Antwerpen', result: 'CFO-opvolging via discrete search van 16 weken' },
      { client: 'Holding — Luxemburg', result: 'Treasury manager met internationale ervaring' },
    ],
    faqs: [
      {
        q: 'Kunnen jullie ook tijdelijke financiële profielen leveren (interim)?',
        a: 'Ja. Voor crisis-situaties, jaarafsluitingen of overgangsperiodes hebben we ervaren interim-controllers en CFO\'s op afroep. Tarieven hoger dan vaste plaatsingen, maar onmiddellijk inzetbaar.',
      },
      {
        q: 'Hoe screenen jullie op compliance-expertise?',
        a: 'Naast CV-check en interview gebruiken we case-studies, checken we publicaties (regelgevingsartikelen, congresbijdragen) en voeren we referencing met vorige werkgevers waar deontologisch toelaatbaar.',
      },
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find(s => s.slug === slug);
}
