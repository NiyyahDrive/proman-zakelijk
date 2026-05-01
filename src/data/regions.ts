// Regio-pagina's — pure local SEO. Elke provincie + Brussel een eigen pagina.
// Doel: ranken voor "uitzendbureau [stad/provincie]" en variaties.

export type Region = {
  slug: string;
  name: string;
  /** Wat zoekers typisch intikken */
  searchTerms: string[];
  /** Belangrijkste steden in deze regio */
  cities: string[];
  /** Aantal kantoren PROMAN in deze regio (placeholder, kan later dynamisch) */
  offices: number;
  /** Pitch */
  pitch: string;
  /** Sectoren die in deze regio sterk zijn */
  dominantSectors: string[];
  /** Lokale klanten/cases (kan placeholder zijn) */
  localCases: { client: string; result: string }[];
  /** SEO */
  seo: { title: string; description: string };
};

export const regions: Region[] = [
  {
    slug: 'antwerpen',
    name: 'Antwerpen',
    searchTerms: ['uitzendbureau Antwerpen', 'personeel Antwerpen', 'rekrutering Antwerpen'],
    cities: ['Antwerpen', 'Mechelen', 'Turnhout', 'Geel', 'Mortsel', 'Lier'],
    offices: 18,
    pitch:
      'Antwerpen is haven, industrie, logistiek en finance — alles in één provincie. Wij hebben 18 kantoren regionaal, met consulenten die de subsectoren kennen: petrochemie, distributie, retail, dienstverlening.',
    dominantSectors: ['logistiek', 'industrie', 'finance', 'retail'],
    localCases: [
      { client: 'Distributiecentrum — haven Antwerpen', result: '24/7 reachtruck-pool van 25 personen' },
      { client: 'Petrochemie — Antwerpen rechteroever', result: 'VCA-gecertificeerde technici voor shutdown' },
      { client: 'Retailgroep — Mechelen', result: 'Eindejaarspersoneel voor 15 winkels' },
    ],
    seo: {
      title: 'Uitzendbureau Antwerpen — PROMAN, 18 kantoren, alle sectoren',
      description:
        'Snel betrouwbaar personeel in Antwerpen, Mechelen, Turnhout en omstreken. Logistiek, industrie, finance, retail — via lokale PROMAN-consulenten.',
    },
  },
  {
    slug: 'brussel',
    name: 'Brussel',
    searchTerms: ['uitzendbureau Brussel', 'personeel Brussel', 'agence interim Bruxelles'],
    cities: ['Brussel', 'Anderlecht', 'Schaarbeek', 'Sint-Jans-Molenbeek', 'Vorst', 'Etterbeek'],
    offices: 8,
    pitch:
      'Brussel is administratie, finance en hospitality. Tweetalige profielen, vaak met internationale klanten en EU-regelgeving. Onze Brusselse consulenten werken altijd NL/FR.',
    dominantSectors: ['finance', 'retail', 'it-en-tech'],
    localCases: [
      { client: 'Bank — Brussel-centrum', result: 'Compliance-team van 6 in 3 maanden' },
      { client: 'Hotelgroep — Brussel-luchthaven', result: 'Permanente hospitality-poule voor 4 hotels' },
      { client: 'EU-gerelateerd consultancy', result: 'Drietalige projectsupport-pool' },
    ],
    seo: {
      title: 'Uitzendbureau Brussel — interim en rekrutering, NL/FR/EN',
      description:
        'PROMAN Brussel: tweetalige uitzendkrachten en vaste profielen voor finance, hospitality, retail en IT. 8 lokale kantoren, tweetalige consulenten.',
    },
  },
  {
    slug: 'oost-vlaanderen',
    name: 'Oost-Vlaanderen',
    searchTerms: ['uitzendbureau Gent', 'uitzendbureau Oost-Vlaanderen', 'personeel Aalst'],
    cities: ['Gent', 'Aalst', 'Sint-Niklaas', 'Dendermonde', 'Eeklo', 'Oudenaarde'],
    offices: 14,
    pitch:
      'Gent is kennis en cultuur, Aalst en Dendermonde zijn industrie en logistiek, het Waasland is haven en distributie. Eén provincie, vier sub-economieën.',
    dominantSectors: ['industrie', 'logistiek', 'it-en-tech', 'retail'],
    localCases: [
      { client: 'Voedingsgroep — Aalst', result: '60 productiemedewerkers voor capaciteitsuitbreiding' },
      { client: 'Distributie — Sint-Niklaas (Waasland)', result: 'Permanente seizoenspool voor e-commerce' },
      { client: 'Tech scale-up — Gent', result: 'Engineers via Winsearch' },
    ],
    seo: {
      title: 'Uitzendbureau Oost-Vlaanderen — Gent, Aalst, Sint-Niklaas',
      description:
        'PROMAN Oost-Vlaanderen: 14 kantoren in Gent, Aalst, Sint-Niklaas, Dendermonde en omstreken. Industrie, logistiek, IT en retail.',
    },
  },
  {
    slug: 'west-vlaanderen',
    name: 'West-Vlaanderen',
    searchTerms: ['uitzendbureau Brugge', 'uitzendbureau Kortrijk', 'personeel Roeselare'],
    cities: ['Brugge', 'Kortrijk', 'Oostende', 'Roeselare', 'Ieper', 'Tielt'],
    offices: 16,
    pitch:
      'Provincie van handelsondernemers, productiebedrijven en toerisme. Grootste vraag naar metaalbewerking, voeding en hospitality. Wij hebben kantoren in elke regio.',
    dominantSectors: ['industrie', 'logistiek', 'retail'],
    localCases: [
      { client: 'Metaalbewerker — Kortrijk', result: 'Lassers MIG/MAG voor productieuitbreiding' },
      { client: 'Voedingsproducent — Roeselare', result: 'Operators voor 24/7 productie' },
      { client: 'Festivalorganisatie — Brugge', result: '500+ eventmedewerkers via Amplo' },
    ],
    seo: {
      title: 'Uitzendbureau West-Vlaanderen — Kortrijk, Brugge, Roeselare',
      description:
        'Personeel via PROMAN West-Vlaanderen: 16 kantoren in Kortrijk, Brugge, Oostende en omstreken. Metaal, voeding, logistiek en hospitality.',
    },
  },
  {
    slug: 'limburg',
    name: 'Limburg',
    searchTerms: ['uitzendbureau Hasselt', 'uitzendbureau Genk', 'personeel Limburg'],
    cities: ['Hasselt', 'Genk', 'Sint-Truiden', 'Tongeren', 'Lommel', 'Bilzen'],
    offices: 12,
    pitch:
      'Logistiek hart van Vlaanderen — Genk, Beringen, Lommel — plus zorgsector en bouw. Wij hebben sterke pools in distributie en industrie.',
    dominantSectors: ['logistiek', 'industrie', 'zorg'],
    localCases: [
      { client: 'Logistiek hub — Genk', result: '40 magazijnmedewerkers voor Q4-piek' },
      { client: 'Auto-toeleverancier — Limburg', result: 'Lassers voor productielijn' },
      { client: 'WZC-groep — Hasselt', result: '12 verpleegkundigen via PROMAN Care' },
    ],
    seo: {
      title: 'Uitzendbureau Limburg — Hasselt, Genk, Sint-Truiden',
      description:
        'PROMAN Limburg: 12 kantoren met focus op logistiek (Genk-LRH), industrie en zorg. Snelle invulling voor magazijn, productie en zorgprofielen.',
    },
  },
  {
    slug: 'vlaams-brabant',
    name: 'Vlaams-Brabant',
    searchTerms: ['uitzendbureau Leuven', 'uitzendbureau Vilvoorde', 'personeel Halle'],
    cities: ['Leuven', 'Vilvoorde', 'Halle', 'Tienen', 'Aarschot', 'Diest'],
    offices: 10,
    pitch:
      'Leuven is biotech, IT en kennisintensief. Vilvoorde-Halle is logistiek en industrie. Wij combineren executive search (Leuven) en hoog-volume uitzend (Vilvoorde-as).',
    dominantSectors: ['it-en-tech', 'logistiek', 'industrie'],
    localCases: [
      { client: 'Biotech — Leuven', result: 'R&D-talent via Winsearch' },
      { client: 'E-commerce platform — Vlaams-Brabant', result: 'Black Friday-pieken bemand' },
      { client: 'Brouwerij — Leuven', result: 'Productiepersoneel voor capaciteitsuitbreiding' },
    ],
    seo: {
      title: 'Uitzendbureau Vlaams-Brabant — Leuven, Vilvoorde, Halle',
      description:
        'PROMAN Vlaams-Brabant: 10 kantoren in Leuven, Vilvoorde en omstreken. Biotech, IT, logistiek en industrie.',
    },
  },
  {
    slug: 'henegouwen',
    name: 'Henegouwen / Hainaut',
    searchTerms: ['agence interim Mons', 'agence interim Charleroi', 'personnel Hainaut'],
    cities: ['Mons', 'Charleroi', 'Tournai', 'La Louvière', 'Mouscron', 'Soignies'],
    offices: 18,
    pitch:
      'Industriële herontwikkeling rond Charleroi en Mons, distributie rond Mouscron-Tournai. Onze grootste regio in Wallonië, 18 kantoren met Franstalige consulenten.',
    dominantSectors: ['industrie', 'logistiek', 'bouw'],
    localCases: [
      { client: 'Voedingsproducent — Henegouwen', result: '120 operators voor zomerpiek' },
      { client: 'Bouwgroep — Charleroi', result: 'Volledig metserteam voor sociale woningbouw' },
      { client: 'Logistiek — Mouscron', result: 'CE-chauffeurs voor distributiecentrum' },
    ],
    seo: {
      title: 'Agence interim Hainaut — Mons, Charleroi, Tournai',
      description:
        'PROMAN Hainaut : 18 bureaux à Mons, Charleroi, Tournai et environs. Industrie, logistique, construction. Consultants francophones.',
    },
  },
  {
    slug: 'luik',
    name: 'Luik / Liège',
    searchTerms: ['agence interim Liège', 'personnel Liège', 'recrutement Liège'],
    cities: ['Liège', 'Verviers', 'Seraing', 'Herstal', 'Visé'],
    offices: 11,
    pitch:
      'Industrie staal en metaal, plus dienstensector rond Luik-stad. Onze consulenten kennen de fabrieken en de kantoorprofielen even goed.',
    dominantSectors: ['industrie', 'bouw', 'finance'],
    localCases: [
      { client: 'Staalproducent — Liège', result: 'Onderhoudstechnici voor productiestop' },
      { client: 'Bouwgroep — Seraing', result: 'Werfleiders voor wegenbouwprojecten' },
      { client: 'Bank — Liège', result: 'Compliance-officers via Ascento' },
    ],
    seo: {
      title: 'Agence interim Liège — PROMAN, 11 bureaux, tous secteurs',
      description:
        'Personnel rapide et fiable à Liège, Verviers, Seraing. Industrie, construction, finance — via les consultants locaux PROMAN.',
    },
  },
  {
    slug: 'luxemburg',
    name: 'Luxemburg (provincie)',
    searchTerms: ['agence interim Arlon', 'agence interim Luxembourg', 'personnel Bastogne'],
    cities: ['Arlon', 'Marche-en-Famenne', 'Bastogne', 'Libramont'],
    offices: 6,
    pitch:
      'Kleinere regio met sterke focus op landbouwindustrie, hout, en grenswerk naar Groothertogdom Luxemburg. Wij begeleiden grensarbeiders met fiscaal advies.',
    dominantSectors: ['industrie', 'logistiek', 'bouw'],
    localCases: [
      { client: 'Houtbedrijf — Marche', result: 'Productiemedewerkers voor seizoenspiek' },
      { client: 'Logistiek — Arlon', result: 'Chauffeurs voor grensoverschrijdend transport' },
    ],
    seo: {
      title: 'Agence interim province de Luxembourg — Arlon, Marche, Bastogne',
      description:
        'PROMAN Luxembourg : 6 bureaux pour personnel intérim et permanent. Industrie, transport, construction. Conseil pour frontaliers.',
    },
  },
  {
    slug: 'namen',
    name: 'Namen / Namur',
    searchTerms: ['agence interim Namur', 'personnel Namur', 'recrutement Namur'],
    cities: ['Namur', 'Dinant', 'Andenne', 'Gembloux', 'Ciney'],
    offices: 8,
    pitch:
      'Hoofdstad Wallonië, mix van administratie, dienstverlening en kleinere industrie. Sterke vraag naar tweetalige profielen voor regionale overheidsdiensten en bedrijven.',
    dominantSectors: ['retail', 'industrie', 'logistiek'],
    localCases: [
      { client: 'Telecombedrijf — Namur', result: 'Klantendienst-team van 30 personen' },
      { client: 'Distributie — Gembloux', result: 'Magazijnpoule voor regionaal centrum' },
    ],
    seo: {
      title: 'Agence interim Namur — PROMAN, 8 bureaux, NL/FR',
      description:
        'PROMAN Namur : personnel intérim et permanent à Namur, Dinant, Gembloux. Administration, distribution, industrie.',
    },
  },
  {
    slug: 'waals-brabant',
    name: 'Waals-Brabant / Brabant wallon',
    searchTerms: ['agence interim Wavre', 'agence interim Nivelles', 'personnel Brabant wallon'],
    cities: ['Wavre', 'Nivelles', 'Ottignies-Louvain-la-Neuve', 'Braine-l\'Alleud', 'Tubize'],
    offices: 7,
    pitch:
      'Pharma-cluster rond Wavre (GSK), tech rond Louvain-la-Neuve, en kantoorparken. Onze sterkte: hooggekwalificeerde profielen voor pharma en tech.',
    dominantSectors: ['it-en-tech', 'industrie', 'finance'],
    localCases: [
      { client: 'Pharmagroep — Wavre', result: 'Production scientists voor opschaling' },
      { client: 'Tech-incubator — Louvain-la-Neuve', result: 'CTO via Winsearch' },
      { client: 'Consultancy — Nivelles', result: 'Senior consultants voor groeitraject' },
    ],
    seo: {
      title: 'Agence interim Brabant wallon — Wavre, Nivelles, LLN',
      description:
        'PROMAN Brabant wallon : 7 bureaux. Pharma, tech, finance et industrie. Consultants spécialisés par secteur.',
    },
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find(r => r.slug === slug);
}
