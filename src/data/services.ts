// Functionele dienstpagina's — geoptimaliseerd voor B2B-zoektermen.
// Elke dienst linkt naar de merk(en) die ze leveren.

export type Service = {
  slug: string;
  name: string;
  /** SEO H1 — meestal de zoekterm zelf */
  h1: string;
  /** Meta description (155 tekens) */
  metaDescription: string;
  /** Hero pitch — twee zinnen */
  pitch: string;
  /** Iconische emoji of SVG ID voor visuele anker */
  icon: string;
  /** Welke merken leveren deze dienst (slugs) */
  brands: string[];
  /** Voor wie? */
  audience: string;
  /** Drie kernvoordelen van DEZE dienst (los van merk) */
  benefits: { title: string; body: string }[];
  /** Stappen — hoe verloopt een opdracht */
  process: { step: number; title: string; body: string }[];
  /** Veelgestelde vragen voor schema-rich-snippets */
  faqs: { q: string; a: string }[];
  /** Cross-links naar relevante sectoren */
  sectors: string[];
};

export const services: Service[] = [
  {
    slug: 'uitzendarbeid',
    name: 'Uitzendarbeid',
    h1: 'Uitzendbureau voor België — flexibel personeel binnen 48 uur',
    metaDescription:
      'Uitzendbureau PROMAN levert flexibel personeel voor productie, logistiek, bouw, zorg en administratie. Lokale consulenten, snelle invulling, geen langdurige verbintenis.',
    pitch:
      'Wanneer je morgen extra handen nodig hebt, of een seizoenspiek opvangt, of een vaste medewerker wilt testen voor je hem in dienst neemt. Uitzendarbeid via PROMAN levert betrouwbare profielen zonder rekruteringsoverhead.',
    icon: '⚡',
    brands: ['proman-jobs', 'proman-care', 'proman-home', 'amplo'],
    audience: 'Productiebedrijven, logistieke spelers, bouwondernemingen, zorgorganisaties en administratiediensten met variabele personeelsbehoefte.',
    benefits: [
      {
        title: 'Geen werkgeversrisico',
        body: 'PROMAN is de juridische werkgever. Sociale lasten, ziekteverzuim, opzegtermijnen — niet jouw zorg. Eén factuur, alle inclusief.',
      },
      {
        title: 'Test vóór vast contract',
        body: 'Werkt iemand zoals je hoopt? Neem hem over. Werkt het niet? Vraag vervanging. Veel werkgevers gebruiken uitzend als wervingstool.',
      },
      {
        title: 'Lokaal beheer, Europees backup',
        body: '170+ kantoren in België met eigen consulenten. Bij regionale tekorten putten we uit ons Europees netwerk van 6.500 medewerkers.',
      },
    ],
    process: [
      { step: 1, title: 'Briefing', body: 'Telefoon of bezoek door je consulent — typisch dezelfde dag.' },
      { step: 2, title: 'Voorstel', body: 'Twee tot vijf voorgescreende kandidaten binnen 24-48u.' },
      { step: 3, title: 'Start', body: 'Je kiest, wij regelen contract, attest, verzekering en payroll.' },
      { step: 4, title: 'Opvolging', body: 'Wekelijks contact tijdens de eerste maand, evaluatie, aanpassing.' },
    ],
    faqs: [
      {
        q: 'Wat kost uitzendarbeid via PROMAN?',
        a: 'De kost bestaat uit het brutoloon van de uitzendkracht plus onze coëfficiënt (typisch 1,55-1,75 afhankelijk van profiel en volume). Voor courante profielen ligt de all-in uurprijs tussen €18 en €32 in 2026. Vraag een offerte op maat.',
      },
      {
        q: 'Kan ik een uitzendkracht overnemen in vast dienstverband?',
        a: 'Ja, dat moedigen we aan. Na de wettelijke periode (variabel per sector) kan je de medewerker overnemen. Voor sommige profielen rekenen we een vergoeding voor vroege overname; je consulent maakt dat vooraf duidelijk.',
      },
      {
        q: 'Hoe snel kan een uitzendkracht starten?',
        a: 'Voor profielen waar we een actieve poule hebben (productie, logistiek, administratie): 24 uur. Voor specialistische rollen (technische profielen, zorg, IT): 2 tot 5 werkdagen. Bij urgentie kunnen we typisch dezelfde dag iemand laten starten.',
      },
    ],
    sectors: ['industrie', 'logistiek', 'bouw', 'zorg', 'retail'],
  },
  {
    slug: 'werving-en-selectie',
    name: 'Werving & Selectie',
    h1: 'Werving en selectie voor vaste aanwervingen',
    metaDescription:
      'Werving en selectie via PROMAN — voorgescreende kandidaten voor vaste functies in productie, kantoor, zorg, IT en management. Garantie op succesvolle plaatsing.',
    pitch:
      'Wanneer je een vaste medewerker zoekt en de tijd of expertise mist om grondig te werven. Wij brengen drie tot vijf gevalideerde kandidaten op tafel — jij beslist.',
    icon: '🎯',
    brands: ['proman-jobs', 'proman-care', 'ascento', 'winsearch'],
    audience: 'KMO\'s en grote werkgevers die een vaste functie moeten invullen waar interne capaciteit ontbreekt of waar grondigheid telt boven snelheid.',
    benefits: [
      {
        title: 'Garantie op plaatsing',
        body: 'Vertrekt de aangeworven medewerker binnen de garantieperiode (typisch 3-6 maanden)? Wij vervangen zonder extra kosten.',
      },
      {
        title: 'No-cure-no-pay of retainer',
        body: 'Voor courante profielen: betaal alleen bij succes. Voor moeilijke posities: retainer-model met diepgaander zoekwerk.',
      },
      {
        title: 'Eigen referenties en assessment',
        body: 'Wij bellen vorige werkgevers (waar ethisch mogelijk) en gebruiken gevalideerde assessments. Geen gokwerk, wel data.',
      },
    ],
    process: [
      { step: 1, title: 'Intake', body: 'Briefing van 60-90 min op locatie — functieprofiel, team, cultuur, "deal-breakers".' },
      { step: 2, title: 'Search', body: 'Zoektocht in eigen database, sociaal netwerk en directe benadering. Eerste shortlist na 10-15 werkdagen.' },
      { step: 3, title: 'Interview & assessment', body: 'Wij screenen alle kandidaten persoonlijk, eventueel met assessment. Jij ziet alleen de top 3-5.' },
      { step: 4, title: 'Onderhandeling & onboarding', body: 'Wij begeleiden salarisgesprek en onboardingsperiode. Klaar als de eerste werkdag start.' },
    ],
    faqs: [
      {
        q: 'Wat kost een werving via PROMAN?',
        a: 'Voor no-cure-no-pay rekenen we typisch 18-25% van het bruto-jaarinkomen, afhankelijk van schaarste en moeilijkheidsgraad. Voor retainer-modellen (executive en zeldzame profielen) is dat een vast bedrag in drie schijven. Vraag offerte op basis van je specifieke vacature.',
      },
      {
        q: 'Hoe lang duurt een werving en selectie?',
        a: 'Voor courante administratieve, technische of commerciële profielen: 4-8 weken. Voor middel-management: 6-12 weken. Voor schaarse specialisten of executives: 8-16 weken. We rapporteren wekelijks zodat je grip houdt.',
      },
      {
        q: 'Wat als de aangeworven kandidaat snel weer vertrekt?',
        a: 'In de garantieperiode (3, 6 of 12 maanden afhankelijk van afspraak) vervangen we kosteloos. Buiten die periode kunnen we tegen lagere fee opnieuw zoeken — we weten ondertussen wat werkt en wat niet bij jou.',
      },
    ],
    sectors: ['industrie', 'finance', 'it-en-tech', 'zorg', 'retail'],
  },
  {
    slug: 'payroll',
    name: 'Payroll',
    h1: 'Payroll-diensten voor flexibel en projectpersoneel',
    metaDescription:
      'PROMAN payroll: volledige loonadministratie voor uitzendkrachten, freelancers en projectmedewerkers. Eén factuur, alle statuten, foutloze afrekening.',
    pitch:
      'Jij selecteert de medewerker, wij worden de werkgever. Lonen, RSZ, ziekteverlof, eindejaarsuitkering — alles weg uit je administratie.',
    icon: '📋',
    brands: ['amplo', 'proman-jobs', 'proman-home'],
    audience: 'Bedrijven die zelf werven maar niet zelf willen administreren, of die met projectcontracten en wisselende statuten werken.',
    benefits: [
      {
        title: 'Compliance gegarandeerd',
        body: 'Wij volgen alle wetswijzigingen, paritaire comités en sectorale cao\'s. Audits van inspecties? Wij staan in de eerste lijn.',
      },
      {
        title: 'Alle statuten parallel',
        body: 'Vast personeel, uitzend, freelance, kunstenaars, intermittent — wij beheren ze gelijktijdig met één contactpunt voor jou.',
      },
      {
        title: 'Realtime dashboards',
        body: 'Online portaal voor jouw HR-team: prestaties, kosten, eindejaarsverwachtingen, verlof. Geen Excel-gepruts meer.',
      },
    ],
    process: [
      { step: 1, title: 'Setup', body: 'Eenmalige setup van je organisatie, paritaire comités en specifieke afspraken. 1-2 weken.' },
      { step: 2, title: 'Onboarding', body: 'Voor elke medewerker: contract, RSZ-aangifte, verzekeringen. Online via formulier of via API-integratie.' },
      { step: 3, title: 'Run', body: 'Wekelijkse of maandelijkse run. Jij valideert prestaties, wij berekenen, factureren en betalen uit.' },
      { step: 4, title: 'Rapportering', body: 'Maandelijkse cijfers in jouw boekhoudpakket. Eindejaarsbalans automatisch klaar.' },
    ],
    faqs: [
      {
        q: 'Hoe wordt payroll-kost berekend?',
        a: 'Twee modellen: percentage op brutoloon (typisch 4-7% afhankelijk van volume en complexiteit) of vast bedrag per loonbrief (€15-30 per brief). Voor hoge volumes wordt percentage interessanter; voor laag volume met veel diversiteit is per-brief beter.',
      },
      {
        q: 'Kan PROMAN payroll integreren met onze HR- of boekhoudsoftware?',
        a: 'Ja. We hebben standaard koppelingen met Yuki, Exact, SAP, Workday, BambooHR en andere. Voor maatwerk-integraties bouwen we een API-flow. Bedoeling is dat jouw systeem en het onze niet handmatig moeten worden gesynchroniseerd.',
      },
    ],
    sectors: ['industrie', 'retail', 'it-en-tech', 'zorg'],
  },
  {
    slug: 'executive-search',
    name: 'Executive Search',
    h1: 'Executive search voor C-level en directiefuncties',
    metaDescription:
      'Discrete executive search via Winsearch — CEO, CFO, CTO en directiefuncties. Internationaal netwerk, retainer-model, shortlist binnen 21 dagen.',
    pitch:
      'Voor sleutelposities waar je zichtbaar zoeken op de markt geen optie is. Wij benaderen direct, screenen grondig, en garanderen confidentialiteit.',
    icon: '👔',
    brands: ['winsearch', 'ascento'],
    audience: 'CEO\'s, voorzitters, en HR-directies die directiefuncties moeten invullen — typisch bij groei, opvolging of crisis.',
    benefits: [
      {
        title: 'Volledig confidentieel',
        body: 'Geen advertenties, geen LinkedIn-tracks. Wij benaderen direct binnen onze map van 8.000+ executive contacten in Europa.',
      },
      {
        title: 'Diep proces',
        body: 'Niet 1 gesprek en doorsturen. Wel 3+ gesprekken, references, assessment, en match met je raad of aandeelhouders.',
      },
      {
        title: 'Garantie op resultaat',
        body: 'Vertrekt de executive binnen 12 maanden? Wij doen een volledige nieuwe search zonder bijkomende fee.',
      },
    ],
    process: [
      { step: 1, title: 'Briefing', body: 'Half-dag sessie met raad en relevante stakeholders. Functieprofiel, strategie, succession-context.' },
      { step: 2, title: 'Market mapping', body: 'Wij brengen het kandidatenlandschap in kaart: wie zit waar, wat verdienen ze, wie is benaderbaar.' },
      { step: 3, title: 'Direct search', body: 'Persoonlijke benadering van 30-50 profielen. Discreet, geleidelijk, met aandacht voor timing.' },
      { step: 4, title: 'Shortlist', body: 'Drie tot vijf kandidaten met volledig dossier: assessment, references, motivatie. Klaar binnen 21 dagen.' },
      { step: 5, title: 'Onderhandeling', body: 'Wij begeleiden contract, package, transitie. Tot de eerste werkdag rond is.' },
    ],
    faqs: [
      {
        q: 'Wanneer kies ik voor executive search en niet voor recruitment?',
        a: 'Wanneer de functie strategisch is (C-level, hoofd van een grote BU), wanneer je discreet moet werken (vervanging, fusie), of wanneer het profiel zo schaars is dat advertentie niet werkt. Voor middel-management is gewone werving meestal voldoende.',
      },
      {
        q: 'Wat is het tarief voor executive search?',
        a: 'Retainer-model: 30-35% van het bruto-jaarinkomen, betaalbaar in drie schijven (briefing, shortlist, plaatsing). Hoger dan recruitment, maar je betaalt voor diepgang en discretie. Voor schaarse profielen is dit de enige werkbare formule.',
      },
    ],
    sectors: ['finance', 'industrie', 'it-en-tech'],
  },
  {
    slug: 'outplacement',
    name: 'Outplacement',
    h1: 'Outplacement voor werkgevers — wettelijk en menselijk',
    metaDescription:
      'Ascento outplacement: begeleiding voor vertrekkende werknemers na herstructurering of ontslag. Hoge slaagcijfers, compliant, alle sectoren.',
    pitch:
      'Wanneer je iemand moet laten gaan, doe je het goed. Voor de mens, voor je reputatie, en omdat de wet het vraagt. Wij begeleiden de transitie.',
    icon: '🤝',
    brands: ['ascento'],
    audience: 'HR-directies bij reorganisaties, fusies, of individuele afscheiden waar wettelijk outplacement vereist of menselijk gewenst is.',
    benefits: [
      {
        title: 'Hoge slaagcijfers',
        body: '87% van onze deelnemers heeft een nieuwe baan, opleiding of zelfstandig statuut binnen 6 maanden. 92% binnen 12 maanden.',
      },
      {
        title: 'Compliant met cao',
        body: 'Outplacement volgens cao 51, cao 82, en regio-specifieke regelgeving. Wij regelen documenten, attestaties en verplichtingen.',
      },
      {
        title: 'Maatwerk per traject',
        body: 'Eén-op-één coaching, groepssessies, online tools. Jouw HR-budget bepaalt diepgang, maar minimum kwaliteit blijft hoog.',
      },
    ],
    process: [
      { step: 1, title: 'Aanmelding', body: 'Werkgever meldt aan, wij contacteren werknemer binnen 5 werkdagen.' },
      { step: 2, title: 'Intake', body: 'Persoonlijk gesprek, profileren van competenties en wensen.' },
      { step: 3, title: 'Plan', body: 'Plan van aanpak met concrete acties, timing en mijlpalen.' },
      { step: 4, title: 'Uitvoering', body: 'CV, sollicitatietrainingen, netwerkactivatie, sollicitaties begeleiden.' },
      { step: 5, title: 'Afsluiting', body: 'Rapport voor werkgever (geanonimiseerd), attestaties voor werknemer.' },
    ],
    faqs: [
      {
        q: 'Wanneer is outplacement wettelijk verplicht?',
        a: 'In België is outplacement verplicht voor werknemers van 45+ met meer dan 1 jaar dienst, of bij collectief ontslag. Niet-naleving leidt tot bijkomende vergoedingen. Wij zorgen dat je compliant blijft, ook in grijze zones.',
      },
      {
        q: 'Wat kost outplacement per medewerker?',
        a: 'Voor individuele trajecten: tussen €1.500 en €5.000 afhankelijk van duurtijd (3, 6 of 12 maanden) en intensiteit. Voor collectief ontslag rekenen we per groep en per kwaliteitsniveau. Vaak gedragen door werkgever, soms cao-verplicht.',
      },
    ],
    sectors: ['industrie', 'finance', 'retail'],
  },
  {
    slug: 'talent-assessment',
    name: 'Talent Assessment',
    h1: 'Talent assessments voor selectie, ontwikkeling en succession',
    metaDescription:
      'Wetenschappelijk gevalideerde talent assessments via Ascento. Voor selectiebeslissingen, succession planning en team development.',
    pitch:
      'Hoe weet je echt wie er klaar is voor de volgende stap? Een gevalideerd assessment haalt de waan van de dag eruit en geeft je data om beslissingen te nemen.',
    icon: '📊',
    brands: ['ascento'],
    audience: 'HR-directies, line managers en CEO\'s die selectiebeslissingen, promoties of organisatieontwerpen willen onderbouwen met objectieve data.',
    benefits: [
      {
        title: 'Wetenschappelijke validiteit',
        body: 'Hogan, OPQ32, Korn Ferry — alleen tools met gepubliceerde validatie. Geen modegrillen, wel betrouwbare voorspellers van prestatie.',
      },
      {
        title: 'Diepgaande rapportage',
        body: 'Niet één score, wel een dossier: cognitief, persoonlijkheid, leiderschapsstijl, motivators, derailers. Inclusief debrief met de kandidaat.',
      },
      {
        title: 'Toepasbaar in HR-cyclus',
        body: 'Resultaten integreerbaar in selectie, succession, talent review en development plans. Eén dataset, meerdere beslismomenten.',
      },
    ],
    process: [
      { step: 1, title: 'Doelstelling', body: 'Wat wil je weten? Selectie, succession, team development? Bepaalt de toolkeuze.' },
      { step: 2, title: 'Assessment', body: 'Online tools (45-90 min) gevolgd door interview met een Ascento-psycholoog (60-90 min).' },
      { step: 3, title: 'Rapportage', body: 'Schriftelijk rapport binnen 5 werkdagen, met aanbeveling.' },
      { step: 4, title: 'Debrief', body: 'Met opdrachtgever en met de kandidaat — feedback bouwt vertrouwen, ook bij negatief advies.' },
    ],
    faqs: [
      {
        q: 'Welke assessments gebruikt Ascento?',
        a: 'Voor leadership: Hogan Personality Inventory + Hogan Development Survey. Voor cognitief: Korn Ferry Watson-Glaser of GMA. Voor verkoop: Sales Drive. Voor team: OPQ32. We kiezen tools per vraag, niet één tool voor alles.',
      },
      {
        q: 'Hoe lang duurt een assessment-traject?',
        a: 'Voor een individuele kandidaat: 2 weken van briefing tot debrief. Voor een groep van 10+ (assessment center): 4-6 weken inclusief logistiek. Versnelling is mogelijk als alle stakeholders snel reageren.',
      },
    ],
    sectors: ['finance', 'industrie', 'it-en-tech', 'retail'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
