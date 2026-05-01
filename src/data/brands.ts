// Centrale brand-data — single source of truth voor alle merkpagina's, gridweergaven en cross-links.
// Elk merk heeft expliciete kleuren, klantsegment, kerndienst, USPs en cases.

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  /** Eén-zin "wat we doen" — in B2B-taal */
  pitch: string;
  /** Voor wie? Specifiek B2B-segment */
  forWho: string;
  /** Hoofdaccent in Tailwind theme */
  color: 'jobs' | 'home' | 'care' | 'ascento' | 'winsearch' | 'amplo';
  /** Logo-pad (SVG in /public/brands/) */
  logo: string;
  /** Achtergrondkleur achter het logo op witte cards */
  logoBg: string;
  /** USPs — drie bondige voordelen */
  usps: { title: string; body: string; icon: string }[];
  /** Belangrijkste diensten die dit merk levert (slugs van /diensten/) */
  services: string[];
  /** Sectoren waar dit merk sterk in is (slugs van /sectoren/) */
  sectors: string[];
  /** Mini-cases: 3 ankerpunten voor klantverhalen */
  caseHighlights: { client: string; result: string }[];
  /** Twee FAQ-vragen voor schema.org rich snippets */
  faqs: { q: string; a: string }[];
  /** SEO meta */
  seo: { title: string; description: string };
};

export const brands: Brand[] = [
  {
    slug: 'proman-jobs',
    name: 'PROMAN Jobs',
    tagline: 'Het uitzendbureau dat kwaliteit boven volume zet',
    pitch:
      'Tijdelijk en vast personeel voor productie, logistiek, bouw, administratie en sales — geleverd door consulenten die jouw sector kennen.',
    forWho:
      'HR-managers en line managers bij KMO\'s en grote werkgevers die snel inzetbare medewerkers nodig hebben — zonder concessies aan kwaliteit.',
    color: 'jobs',
    logo: '/brands/jobs.svg',
    logoBg: '#FFF1E6',
    usps: [
      {
        icon: '⚡',
        title: 'Invulling in 48 uur',
        body: 'Vacatures in de meeste profielen ingevuld binnen twee werkdagen, dankzij onze actieve talentenpool van 25.000+ kandidaten.',
      },
      {
        icon: '🎯',
        title: 'Sectorspecialisten',
        body: 'Je consulent kent jouw werkvloer, taal en functie-eisen. Geen generieke matchmaking, wel context-rijke voorstellen.',
      },
      {
        icon: '🛡️',
        title: 'Risico bij ons',
        body: 'Niet tevreden binnen de proefperiode? Wij vervangen kosteloos. Lokale verankering, internationale schaal voor backup.',
      },
    ],
    services: ['uitzendarbeid', 'werving-en-selectie', 'payroll'],
    sectors: ['industrie', 'logistiek', 'bouw', 'retail'],
    caseHighlights: [
      { client: 'Logistieke groep — Limburg', result: '40 magazijnmedewerkers binnen 5 dagen voor Q4-piek' },
      { client: 'Voedingsproducent — Henegouwen', result: '92% retentie na 12 maanden bij operator-pool' },
      { client: 'Bouwbedrijf — Vlaams-Brabant', result: 'Vermindering wervingstijd met 65% op werfprofielen' },
    ],
    faqs: [
      {
        q: 'Hoe snel kan PROMAN Jobs een uitzendkracht leveren?',
        a: 'Voor courante profielen in productie, logistiek en administratie leveren we typisch binnen 24 tot 48 uur. Voor meer specialistische functies plannen we een intake en leveren we een shortlist binnen 5 werkdagen.',
      },
      {
        q: 'Wat kost een uitzendkracht via PROMAN Jobs?',
        a: 'De totale kost bestaat uit het brutoloon, sociale lasten en onze coëfficiënt. Voor een typische logistieke profiel ligt het uurtarief in 2026 tussen €18 en €24 inclusief alles. Vraag een offerte op maat voor je specifieke profiel en volume.',
      },
    ],
    seo: {
      title: 'PROMAN Jobs — Uitzendbureau & rekrutering voor B2B in België',
      description:
        'Vind snel betrouwbaar uitzendpersoneel voor productie, logistiek, bouw, administratie en sales. Lokale consulenten, Europese schaal, garantie op kwaliteit.',
    },
  },
  {
    slug: 'proman-home',
    name: 'PROMAN Home',
    tagline: 'De partner voor dienstencheque-organisaties die willen groeien',
    pitch:
      'B2B-oplossing voor bedrijven en instellingen die huishoudelijke en thuishulp-diensten via dienstencheques willen aanbieden — wij regelen werving, payroll en kwaliteitsbeheer van het volledige team.',
    forWho:
      'Dienstencheque-bedrijven, grote werkgevers met huishoudvoordelen voor medewerkers, en zorgorganisaties die thuiswerk willen uitbesteden.',
    color: 'home',
    logo: '/brands/home.svg',
    logoBg: '#FFE0EC',
    usps: [
      {
        icon: '👥',
        title: '1.200+ huishoudhulpen actief',
        body: 'De grootste poule van gescreende, getrainde en verzekerde dienstencheque-medewerkers in België — beschikbaar voor jouw eindklanten.',
      },
      {
        icon: '💼',
        title: 'White-label mogelijk',
        body: 'Bouw je eigen dienstenmerk op onze infrastructuur. Wij leveren personeel, jij behoudt klantrelatie. Of co-branded — beide werkt.',
      },
      {
        icon: '📋',
        title: 'Volledige administratieve ontzorging',
        body: 'Erkenning, dienstencheque-administratie, loonberekening, ziekteverzuim, vervanging — wij nemen de hele backoffice over.',
      },
    ],
    services: ['uitzendarbeid', 'payroll', 'werving-en-selectie'],
    sectors: ['zorg', 'retail'],
    caseHighlights: [
      { client: 'Grootwarenhuisketen — Vlaanderen', result: 'White-label dienstencheque-aanbod aan 8.000 medewerkers' },
      { client: 'OCMW — Wallonië', result: 'Uitbesteding thuiszorg-poule, +35% klanttevredenheid' },
      { client: 'Verzekeraar — Brussel', result: 'Personeelsvoordeel huishoudhulp uitgerold in 6 weken' },
    ],
    faqs: [
      {
        q: 'Wat doet PROMAN Home anders dan een traditioneel dienstencheque-bedrijf?',
        a: 'Wij richten ons op B2B-partnerschappen: werkgevers, verzekeraars, OCMW\'s en grootwarenhuizen die dienstencheques als product willen aanbieden of inkopen op schaal. Onze infrastructuur is opgebouwd voor volume en compliance, niet voor individuele klantenwerving.',
      },
      {
        q: 'Kunnen jullie onze eigen dienstencheque-organisatie ondersteunen?',
        a: 'Ja. Veel bestaande dienstencheque-bedrijven gebruiken PROMAN Home voor pieken, regio\'s waar ze geen poule hebben, of volledige overname van loonadministratie. Modulair: kies wat je nodig hebt.',
      },
    ],
    seo: {
      title: 'PROMAN Home — B2B-oplossing voor dienstencheques en thuishulp',
      description:
        'Werkgevers, OCMW\'s en dienstenbedrijven schakelen PROMAN Home in voor werving, payroll en kwaliteitsbeheer van huishoudhulpen op schaal. White-label of co-branded.',
    },
  },
  {
    slug: 'proman-care',
    name: 'PROMAN Care',
    tagline: 'Personeel met een hart voor de zorgsector',
    pitch:
      'Verpleegkundigen, verzorgenden, kinesitherapeuten en zorgcoördinatoren — voor woon-zorgcentra, thuiszorgorganisaties en ziekenhuizen die structureel of tijdelijk versterking nodig hebben.',
    forWho:
      'HR-directies in zorginstellingen, hoofdverpleegkundigen, en thuiszorgorganisaties die kampen met chronische personeelstekorten in een gereguleerde sector.',
    color: 'care',
    logo: '/brands/care.svg',
    logoBg: '#E8F5E9',
    usps: [
      {
        icon: '🩺',
        title: 'Erkende zorgprofielen',
        body: 'Alle medewerkers met geldig RIZIV-nummer, visa en up-to-date bijscholing. Dossiers altijd inzichtelijk, audit-ready.',
      },
      {
        icon: '🤝',
        title: 'Lange-termijn matching',
        body: 'Wij selecteren op cultuur en team-fit, niet alleen op CV. 78% van onze plaatsingen blijft >12 maanden bij dezelfde klant.',
      },
      {
        icon: '🚀',
        title: 'Uitbreiding zonder werving',
        body: 'Schaal op of af zonder zelf vacatures te openen, kandidaten te interviewen of contracten te beheren. Wij doen alles, jij focust op zorgkwaliteit.',
      },
    ],
    services: ['uitzendarbeid', 'werving-en-selectie', 'payroll'],
    sectors: ['zorg'],
    caseHighlights: [
      { client: 'WZC-groep — Antwerpen', result: '24 verpleegkundigen voor herstart na renovatie, in 8 weken' },
      { client: 'Thuiszorgorganisatie — Limburg', result: 'Wachtlijst weggewerkt, +120% capaciteit nachtdienst' },
      { client: 'Ziekenhuis — Wallonië', result: 'Permanente verpleegpool voor seizoenspieken, 2 jaar contract' },
    ],
    faqs: [
      {
        q: 'Welke zorgprofielen levert PROMAN Care?',
        a: 'Verpleegkundigen (A1, HBO5), verzorgenden, kinesitherapeuten, zorgkundigen, ergotherapeuten, logopedisten, psychologen, zorgcoördinatoren en directiefuncties. Voor zowel residentiële zorg, thuiszorg, ziekenhuizen als revalidatiecentra.',
      },
      {
        q: 'Hoe garanderen jullie kwaliteit in een sector waar tekort de regel is?',
        a: 'Drie pijlers: strenge instroomscreening (CV, visa, persoonlijk gesprek), structurele bijscholing (verplicht, betaald), en actieve coaching door eigen zorgconsulenten met klinische achtergrond. Lager verloop, hogere klanttevredenheid.',
      },
    ],
    seo: {
      title: 'PROMAN Care — Zorgpersoneel voor WZC, thuiszorg en ziekenhuizen',
      description:
        'Verpleegkundigen, verzorgenden en zorgcoördinatoren via PROMAN Care. Erkende profielen, langetermijn-matching, ontzorging van werving tot payroll.',
    },
  },
  {
    slug: 'ascento',
    name: 'Ascento',
    tagline: 'Talent ontwikkelen, transities begeleiden, organisaties versterken',
    pitch:
      'Outplacement, talent assessments, executive coaching en HR-consultancy — voor bedrijven die willen herstructureren zonder kwaliteit te verliezen, of medewerkers willen laten doorgroeien.',
    forWho:
      'HR-directies, CEO\'s en line managers die te maken hebben met reorganisaties, fusies, succession planning, of teams willen versterken met evidence-based assessments.',
    color: 'ascento',
    logo: '/brands/ascento.svg',
    logoBg: '#E3F2FD',
    usps: [
      {
        icon: '🎓',
        title: 'ICF-erkende coaches',
        body: 'Een team van 40+ gecertificeerde coaches met corporate ervaring. Niet "ex-HR", maar mensen die zelf in directies hebben gezeten.',
      },
      {
        icon: '📊',
        title: 'Wetenschappelijk gevalideerde tools',
        body: 'Hogan, OPQ32, Korn Ferry — wij gebruiken alleen assessments met gepubliceerde validiteit. Geen modegrillen, wel betrouwbare data voor je beslissingen.',
      },
      {
        icon: '⚖️',
        title: 'Compliant met sectorale regels',
        body: 'Outplacement volgens cao\'s en wettelijke vereisten. Wij regelen de papierwinkel, jij focust op de mens.',
      },
    ],
    services: ['outplacement', 'talent-assessment', 'executive-search'],
    sectors: ['industrie', 'finance', 'it-en-tech'],
    caseHighlights: [
      { client: 'Industriële groep — Henegouwen', result: 'Outplacement voor 180 werknemers, 87% nieuwe job binnen 6 maanden' },
      { client: 'Bank — Brussel', result: 'Assessment center voor 40 high-potentials, succession plan opgeleverd' },
      { client: 'Telecombedrijf — Vlaanderen', result: 'Executive coaching voor 12 directieleden tijdens fusie' },
    ],
    faqs: [
      {
        q: 'Wanneer is Ascento een betere keuze dan een interne HR-aanpak?',
        a: 'Bij gevoelige trajecten waar onafhankelijkheid telt: outplacement (wettelijk vereist een externe partij), assessment van eigen leidinggevenden, of moeilijke gesprekken bij reorganisaties. Onze externe positie + diepgaande HR-expertise levert betere uitkomsten dan een interne aanpak.',
      },
      {
        q: 'Hoe meten jullie resultaat?',
        a: 'Voor outplacement: % nieuwe job binnen 6/12 maanden, salarisbehoud, klanttevredenheid. Voor assessments: predictieve validiteit op gemeten competenties, retentie van geselecteerden. Voor coaching: 360°-feedback voor en na, KPI-doelen door coachee. We rapporteren in cijfers, niet in verhalen.',
      },
    ],
    seo: {
      title: 'Ascento — Outplacement, assessments en HR-coaching voor bedrijven',
      description:
        'Onafhankelijke HR-partner voor reorganisaties, succession planning en talent assessments. ICF-coaches, wetenschappelijke tools, compliant trajecten.',
    },
  },
  {
    slug: 'winsearch',
    name: 'Winsearch',
    tagline: 'Executive search voor wie geen tweede kans heeft',
    pitch:
      'Search voor C-level, directie en specialistische profielen waar de wrong hire de organisatie maanden achteruitzet. Discreet, grondig, met onafhankelijke validatie.',
    forWho:
      'CEO\'s, voorzitters en HR-directies die een sleutelpositie moeten invullen waar zichtbaarheid op de markt riskant is, of waar een bestaand profiel uitgaat dat moet worden vervangen zonder ophef.',
    color: 'winsearch',
    logo: '/brands/winsearch.svg',
    logoBg: '#F3E5F5',
    usps: [
      {
        icon: '🔒',
        title: 'Volledige confidentialiteit',
        body: 'Geen advertenties, geen LinkedIn-posts. Wij benaderen direct binnen onze map van 8.000+ executive contacten. Jouw zoektocht blijft binnen.',
      },
      {
        icon: '🌍',
        title: 'Internationaal netwerk',
        body: 'Toegang tot top-talent in heel Europa via PROMAN Group + partner-firms. Voor expat-rollen, internationale acquisities of nieuwe markten.',
      },
      {
        icon: '⏱️',
        title: 'Shortlist in 21 dagen',
        body: 'Drie tot vijf grondig gecheckte kandidaten, met referenties van vorige werkgevers (waar ethisch toelaatbaar) en onafhankelijke assessment.',
      },
    ],
    services: ['executive-search', 'talent-assessment'],
    sectors: ['finance', 'it-en-tech', 'industrie'],
    caseHighlights: [
      { client: 'Familiebedrijf — Mechelen', result: 'CFO opvolger gevonden voor pensioenovergang, succession plan rond' },
      { client: 'Scale-up SaaS — Antwerpen', result: 'CTO en VP Engineering binnen 8 weken, beide nog actief na 3 jaar' },
      { client: 'Industriële holding — Wallonië', result: 'CEO-vervanging na crisis, 100% confidentieel proces' },
    ],
    faqs: [
      {
        q: 'Waarom executive search via Winsearch en niet via een gewone recruiter?',
        a: 'Executive search is een ander vak. Wij werken op retainer (vooraf betaald), met diepgaande market mapping, headhunting binnen onze map, en ethische referencing. Een typische gemiddelde recruiter werkt op no-cure-no-pay en moet daardoor breed gaan, niet diep. Voor C-level beslissingen kost een wrong hire €500k+, dus de premium loont.',
      },
      {
        q: 'Hoe lang duurt een typische executive search?',
        a: '6 tot 12 weken van briefing tot ondertekend contract. Eerste shortlist binnen 21 dagen, daarna interviewfase, assessment, references en onderhandeling. Wij sturen wekelijks status updates.',
      },
    ],
    seo: {
      title: 'Winsearch — Executive search & C-level recruitment in België',
      description:
        'Discrete executive search voor CEO, CFO, CTO en directiefuncties. Retainer-model, internationaal netwerk, shortlist binnen 21 dagen.',
    },
  },
  {
    slug: 'amplo',
    name: 'Amplo',
    tagline: 'HR voor de mensen die jouw merk maken',
    pitch:
      'Payroll, HR en projectcontracten voor de creatieve sector — designers, video-editors, copywriters, marketeers, content-creators, eventcoördinatoren. Specialistisch in flexibele teams en projectorganisaties.',
    forWho:
      'Studio\'s, productiehuizen, marketing agencies, eventbureaus, communicatiebedrijven en in-house creative teams die werken met een mix van vast personeel, freelancers en projectmedewerkers.',
    color: 'amplo',
    logo: '/brands/amplo.svg',
    logoBg: '#E0F2F1',
    usps: [
      {
        icon: '🎨',
        title: 'Specialistisch in creatief',
        body: 'Wij snappen hoe agencies werken: deadline-cultuur, projectteams, freelance + vast door elkaar, internationale klanten. Generieke HR-bureaus snappen dat niet.',
      },
      {
        icon: '⚡',
        title: 'Snelle facturatie',
        body: 'Payroll-uitbetaling binnen 10 dagen voor freelancers, weekafrekening mogelijk. Geen excuses meer voor late betalingen aan creatives.',
      },
      {
        icon: '📑',
        title: 'Alle statuten',
        body: 'Werknemer, zelfstandige, intermittent, kunstenaar — wij beheren alle statuten parallel. Eén factuur voor jou, juiste regeling voor de medewerker.',
      },
    ],
    services: ['payroll', 'uitzendarbeid', 'werving-en-selectie'],
    sectors: ['it-en-tech', 'retail'],
    caseHighlights: [
      { client: 'Filmproductiehuis — Brussel', result: '40 freelancers per project, geautomatiseerde dagcontracten' },
      { client: 'Branding agency — Antwerpen', result: 'Volledige HR-uitbesteding voor 25 medewerkers + freelance pool' },
      { client: 'Festivalorganisatie — West-Vlaanderen', result: '500+ event-medewerkers door Amplo per editie' },
    ],
    faqs: [
      {
        q: 'Wat doet Amplo dat een klassiek payroll-bureau niet doet?',
        a: 'Wij hebben workflows en contracten ontworpen voor projectorganisaties: dagcontracten, weekendprojecten, internationale klanten, kunstenaarsstatuut, intermittent. Ook adviseren we over de juiste contractvorm per situatie — een freelance-relatie kan tot fiscale problemen leiden, wij voorkomen dat.',
      },
      {
        q: 'Hoe snel kan een freelance creator betaald worden via Amplo?',
        a: 'Standaard 10 werkdagen na goedkeuring van de prestatie. Voor wekelijkse afrekening hebben we een express-flow tegen een kleine meerkost. Veel agencies gebruiken Amplo precies omdat ze daarmee betere creatives binden.',
      },
    ],
    seo: {
      title: 'Amplo — HR & payroll voor de creatieve sector in België',
      description:
        'Payroll, HR en projectcontracten voor agencies, studio\'s en productiehuizen. Alle statuten, snelle uitbetaling, gespecialiseerd in projectorganisaties.',
    },
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug);
}

export function getBrandsByService(serviceSlug: string): Brand[] {
  return brands.filter(b => b.services.includes(serviceSlug));
}

export function getBrandsBySector(sectorSlug: string): Brand[] {
  return brands.filter(b => b.sectors.includes(sectorSlug));
}
