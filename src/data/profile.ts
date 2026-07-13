import type { ComponentType } from 'react'
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  Camera,
  Car,
  ClipboardList,
  Cpu,
  DoorOpen,
  Eye,
  FileSearch,
  FileText,
  Flame,
  Footprints,
  HeartPulse,
  Hospital,
  Layers,
  Lock,
  MapPin,
  Megaphone,
  Music2,
  PlugZap,
  Radar,
  Radio,
  Scale,
  Share2,
  ShieldCheck,
  Siren,
  Store,
  Target,
  TrainFront,
  TrendingUp,
  UserCheck,
  Users,
  Video,
} from 'lucide-react'

import heroTerrain from '../assets/img/hero-terrain.jpg'
import agentMotoSecurite from '../assets/img/agent-moto-securite.jpg'
import portraitUniforme from '../assets/img/portrait-uniforme.jpg'
import capDirection from '../assets/img/cap-direction.jpg'
import vesteSecurite from '../assets/img/veste-securite.jpg'
import brassardSecurite from '../assets/img/brassard-securite.jpg'
import horsService from '../assets/img/hors-service.jpg'
import disciplineSalle from '../assets/img/discipline-salle.jpg'
import passionMoto from '../assets/img/passion-moto.jpg'
import passionAuto from '../assets/img/passion-auto.jpg'

export type Icon = ComponentType<{ className?: string }>

export const img = {
  heroTerrain,
  agentMotoSecurite,
  portraitUniforme,
  capDirection,
  vesteSecurite,
  brassardSecurite,
  horsService,
  disciplineSalle,
  passionMoto,
  passionAuto,
}

export const identity = {
  firstName: 'Sébastien',
  lastName: 'Marasa',
  role: 'Agent de sécurité privée',
  goal: 'Futur dirigeant d’entreprise de sécurité',
  location: 'Mérignac · Bordeaux Métropole (33)',
  coords: '44.84° N / 0.64° O',
  email: 'sebastien.marasa@outlook.fr',
  phone: '06 41 00 08 50',
  phoneHref: 'tel:+33641000850',
  availability: 'Disponible · alternance 2026',
  cardMasked: 'CAR-033-2030-•••-•••',
  cardValidity: '15/07/2030',
  licences: 'Permis B & A2, véhiculé',
}

export const heroLines = [
  'Agent de sécurité · CQP APS',
  'SSIAP 1 · Sécurité incendie',
  'SST · Sauveteur secouriste',
  'Objectif : dirigeant d’entreprise',
]

export const stats = [
  { value: 6, label: 'années de terrain' },
  { value: 13, label: 'missions menées' },
  { value: 11, label: 'sociétés de sécurité' },
  { value: 4, label: 'certifications à jour' },
]

export const marqueeItems = [
  'Grande distribution',
  'Milieu hospitalier',
  'Stades',
  'Salles de concert',
  'Gares',
  'ERP / IGH',
  'Sites tertiaires',
  'Événementiel',
  'Sécurité incendie',
  'Gardiennage',
]

export const indexRows = [
  { no: '01', title: 'Parcours', desc: '13 missions · 2018 → 2026', to: '/parcours' },
  { no: '02', title: 'Compétences', desc: 'Certifications & savoir-faire', to: '/competences' },
  { no: '03', title: 'Le projet', desc: 'RNCP 41352 · alternance', to: '/projet' },
  { no: '04', title: 'Contact', desc: 'Disponible · rentrée 2026', to: '/contact' },
]

export type Mission = {
  company: string
  role: string
  period: string
  duration: string
  year: string
  summary: string
  tags: string[]
  /** Fait vérifiable sur l'entreprise (recherche web), affiché sous la mission. */
  org?: string
  long?: boolean
}

export const missions: Mission[] = [
  {
    company: 'Onet Sécurité',
    role: 'Agent de sécurité · SSIAP 1',
    period: 'Janv. → Mars 2026',
    duration: '3 mois',
    year: '2026',
    summary:
      'Poste SSIAP 1 en établissement recevant du public : rondes de prévention incendie, levées de doute sur alarme, surveillance du poste de sécurité incendie, contrôle d’accès.',
    tags: ['ERP', 'SSIAP 1', 'Levées de doute', 'Contrôle d’accès'],
    org: '4ᵉ acteur français de la sécurité humaine · agence de Floirac (33)',
  },
  {
    company: 'Eclise Sécurité',
    role: 'Agent de sécurité',
    period: 'Sept. → Déc. 2025',
    duration: '4 mois',
    year: '2025',
    summary:
      'Surveillance en grande distribution : prévention de la démarque inconnue, vidéosurveillance ciblée, interpellations dans le strict cadre légal, relais aux forces de l’ordre.',
    tags: ['Distribution', 'Arrière-caisse', 'Vidéosurveillance'],
  },
  {
    company: 'France Gardiennage',
    role: 'Agent de sécurité',
    period: 'Juin → Août 2025',
    duration: '3 mois',
    year: '2025',
    summary:
      'Gardiennage de sites tertiaires et industriels : filtrage véhicules et piétons, rondes de sûreté programmées et aléatoires, main courante électronique, gestion des alarmes intrusion.',
    tags: ['Gardiennage', 'Contrôle d’accès', 'Rondes'],
    org: 'Réseau national de gardiennage (groupe Cybélia) · agence de Bordeaux',
  },
  {
    company: 'Objectif Sécurité',
    role: 'Agent de sécurité · événementiel',
    period: 'Juil. 2025',
    duration: '1 mois',
    year: '2025',
    summary:
      'Renfort événementiel estival : gestion des flux et palpations de sécurité, canalisation du public, liaison radio permanente avec le PC sécurité.',
    tags: ['Événementiel', 'Palpations', 'Radio'],
    org: 'PME girondine de Lormont (33) · spécialiste festivals et événements sportifs',
  },
  {
    company: 'Lynx Sécurité',
    role: 'Agent de sécurité',
    period: 'Juin 2025',
    duration: '1 mois',
    year: '2025',
    summary:
      'Vacations multi-sites : intégration immédiate à des consignes et des équipes nouvelles, l’adaptabilité prouvée par l’exemple.',
    tags: ['Multi-sites', 'Adaptabilité'],
    org: 'Groupe girondin (Saint-Loubès) · présent dans plus de 38 départements',
  },
  {
    company: 'RPS Sécurité',
    role: 'Agent de sécurité',
    period: 'Mai 2023 → Déc. 2024',
    duration: '20 mois',
    year: '2023–24',
    summary:
      'La mission la plus longue de mon parcours, sur un même site tertiaire : une présence stable et fiable dans la durée, et une vraie connaissance du site, de ses consignes et de ses habitudes.',
    tags: ['Mission longue', 'Poste fixe', 'Fiabilité'],
    org: 'Groupe national ISO 9001 & 45001 · titulaire du marché sécurité de Bordeaux Métropole (2024)',
    long: true,
  },
  {
    company: 'GAEA NA',
    role: 'Agent de sécurité',
    period: 'Janv. 2022 → Janv. 2023',
    duration: '13 mois',
    year: '2022',
    summary:
      'Une année complète au sein de la filiale néo-aquitaine d’un groupe national : surveillance en milieu hospitalier et tertiaire, gestion des conflits aux urgences, rondes multi-bâtiments, protocoles d’accès en période sanitaire.',
    tags: ['Hospitalier', 'Gestion de conflits', 'Rondes'],
    org: 'Filiale Nouvelle-Aquitaine d’un groupe national · Cenon (33)',
    long: true,
  },
  {
    company: 'Inorix',
    role: 'Agent de sécurité · SSIAP 1',
    period: 'Oct. → Déc. 2021',
    duration: '3 mois',
    year: '2021',
    summary:
      'Poste SSIAP 1 en ERP : essais hebdomadaires du SSI, vérification des issues de secours et des moyens d’extinction, permis feu, sensibilisation des occupants.',
    tags: ['ERP', 'SSIAP 1', 'Prévention incendie'],
    org: 'Groupe bordelais en forte croissance · pôle de formation SSIAP dédié',
  },
  {
    company: 'RPS Sécurité',
    role: 'Agent de sécurité',
    period: 'Juil. → Sept. 2021',
    duration: '3 mois',
    year: '2021',
    summary:
      'Saison à forte affluence : surveillance de salles et d’événements, gestion de flux, prévention des conflits en environnement festif.',
    tags: ['Événementiel', 'Salles de concert', 'Gestion de flux'],
    org: 'Groupe national · expertise événementielle reconnue',
  },
  {
    company: 'SGI',
    role: 'Agent de sécurité incendie',
    period: 'Juin 2021',
    duration: '1 mois',
    year: '2021',
    summary:
      'Vacations d’agent de sécurité incendie : rondes réglementaires, vérification des extincteurs, RIA et éclairages de sécurité, tenue du poste de contrôle.',
    tags: ['Incendie', 'Moyens de secours'],
  },
  {
    company: 'Sécurité Protection',
    role: 'Agent de sécurité',
    period: 'Nov. 2020 → Juil. 2021',
    duration: '9 mois',
    year: '2020',
    summary:
      'Neuf mois en environnement gare et transports : filtrage, assistance aux voyageurs, signalements, coopération quotidienne avec les équipes d’exploitation.',
    tags: ['Gare', 'Flux voyageurs', 'Filtrage'],
    org: 'Acteur bordelais historique de la surveillance humaine · fondé en 1988',
  },
  {
    company: 'Lynx Sécurité',
    role: 'Agent de sécurité',
    period: 'Juil. → Oct. 2020',
    duration: '4 mois',
    year: '2020',
    summary:
      'Entrée dans le métier : surveillance en grande distribution, prévention des vols, apprentissage des fondamentaux : posture, vigilance, relation client.',
    tags: ['Distribution', 'Fondamentaux'],
    org: 'Groupe girondin · références nationales en grande distribution',
  },
  {
    company: 'Fips Tels',
    role: 'Agent de sécurité incendie',
    period: 'Déc. 2018 → Avr. 2019',
    duration: '5 mois',
    year: '2018–19',
    summary:
      'Première expérience, en sécurité incendie : rondes préventives, lecture des tableaux de signalisation, procédures d’évacuation. La découverte d’un métier devenu une vocation.',
    tags: ['Incendie', 'Découverte'],
  },
]

export const environments: { icon: Icon; name: string; note: string }[] = [
  { icon: Store, name: 'Grande distribution', note: 'Démarque, arrière-caisse, relation client' },
  { icon: Hospital, name: 'Milieu hospitalier', note: 'Urgences, médiation, protection des soignants' },
  { icon: Users, name: 'Stades', note: 'Flux, palpations, grands rassemblements' },
  { icon: Music2, name: 'Salles de concert', note: 'Contrôle d’accès, inspection visuelle, évacuation' },
  { icon: TrainFront, name: 'Gares', note: 'Flux voyageurs, assistance, plan Vigipirate' },
  { icon: Building2, name: 'Sites tertiaires', note: 'PC sécurité, badges, rondes techniques' },
  { icon: Flame, name: 'ERP / IGH', note: 'Sécurité incendie, rondes, levées de doute' },
  { icon: Megaphone, name: 'Événementiel', note: 'Dispositifs temporaires, coordination radio' },
]

export const certifications: {
  icon: Icon
  code: string
  name: string
  org: string
  points: string[]
}[] = [
  {
    icon: ShieldCheck,
    code: 'CQP APS',
    name: 'Agent de prévention et de sécurité',
    org: 'M2S33 · Cenon (33)',
    points: [
      'Cadre légal · livre VI du code de la sécurité intérieure',
      'Déontologie et posture professionnelle',
      'Surveillance, rondes et gestion des conflits',
      'Sécurisation événementielle et palpations',
    ],
  },
  {
    icon: Flame,
    code: 'SSIAP 1',
    name: 'Sécurité incendie et assistance à personnes',
    org: 'EFSP · Pessac (33)',
    points: [
      'Prévention incendie en ERP et IGH',
      'Exploitation du SSI et levées de doute',
      'Évacuation et assistance à personnes',
      'Vérification des moyens de secours',
    ],
  },
  {
    icon: HeartPulse,
    code: 'SST',
    name: 'Sauveteur secouriste du travail',
    org: 'Recyclage à jour',
    points: [
      'Protéger, examiner, alerter, secourir',
      'Gestes de premiers secours en milieu professionnel',
      'Acteur de la prévention des risques',
    ],
  },
  {
    icon: PlugZap,
    code: 'H0B0',
    name: 'Habilitation électrique (non électricien)',
    org: 'EFSP · Pessac (33)',
    points: [
      'Évoluer en sécurité près des installations',
      'Prévention du risque électrique',
      'Consignes en locaux techniques',
    ],
  },
]

export const terrainSkills: { icon: Icon; title: string; note: string }[] = [
  { icon: Footprints, title: 'Rondes & surveillance', note: 'Programmées, aléatoires, techniques, avec levées de doute et main courante.' },
  { icon: DoorOpen, title: 'Contrôle d’accès & filtrage', note: 'Piétons et véhicules, gestion des badges, application stricte des consignes.' },
  { icon: Siren, title: 'Vigilance incendie', note: 'Rondes de prévention, surveillance du poste de sécurité, participation aux évacuations.' },
  { icon: Eye, title: 'Vidéosurveillance', note: 'Surveillance écran, détection, levée de doute ciblée.' },
  { icon: Users, title: 'Gestion de conflits', note: 'Désescalade verbale, médiation, sang-froid face à l’agressivité.' },
  { icon: ClipboardList, title: 'Consignes & main courante', note: 'Tenue de la main courante, comptes rendus, passation aux relèves.' },
  { icon: Radio, title: 'Liaison radio & PC', note: 'Comptes rendus, remontées d’incident, procédures d’alerte.' },
  { icon: HeartPulse, title: 'Premiers secours', note: 'SST à jour : protéger, alerter, secourir en attendant les renforts.' },
]

export const transverseSkills: { icon: Icon; title: string; lead: string; payoff: string }[] = [
  {
    icon: Video,
    title: 'Vidéo & montage',
    lead: 'Je tourne et je monte mes propres vidéos.',
    payoff: 'Un atout concret pour la communication d’une entreprise de sécurité.',
  },
  {
    icon: Share2,
    title: 'Réseaux sociaux',
    lead: 'Je construis et développe des audiences.',
    payoff: 'Une vraie base pour le volet communication du métier de dirigeant.',
  },
  {
    icon: Camera,
    title: 'Photographie',
    lead: 'Un œil entraîné au cadrage et au détail.',
    payoff: 'Utile pour documenter un site ou monter un dossier soigné.',
  },
  {
    icon: Cpu,
    title: 'Culture tech',
    lead: 'À l’aise avec les outils numériques.',
    payoff: 'De quoi prendre en main vite les outils du métier (planning, main courante).',
  },
]

export const languages = [
  { name: 'Français', level: 'Langue de travail, écrit soigné' },
  { name: 'Anglais', level: 'Notions : consignes et accueil' },
  { name: 'Espagnol', level: 'Notions' },
]

export const formationSheet: { label: string; value: string }[] = [
  { label: 'Intitulé', value: 'Dirigeant d’entreprise de sécurité' },
  { label: 'Code RNCP', value: '41352 (fiche active)' },
  { label: 'Niveau', value: '5 (équivalent bac+2)' },
  { label: 'Certificateur', value: 'ASP Training · ASP Bodyguard' },
  { label: 'Enregistrement', value: 'Valide jusqu’au 24/09/2028' },
  { label: 'Voie visée', value: 'Alternance : apprentissage ou professionnalisation' },
  { label: 'Codes ROME', value: 'M1302 · K2502 · K2503' },
  { label: 'Débouché', value: 'Agrément dirigeant CNAPS, direction d’entreprise de sécurité privée' },
]

export const referentiel: { icon: Icon; title: string; formation: string; terrain: string }[] = [
  {
    icon: Scale,
    title: 'Réglementation & conformité',
    formation: 'Diriger dans le respect du livre VI du CSI, du code de déontologie et des obligations CNAPS.',
    terrain: 'Six ans sous carte professionnelle : le cadre légal vécu et appliqué au quotidien, côté agent.',
  },
  {
    icon: Users,
    title: 'Management des équipes',
    formation: 'Manager sur site et à distance, en lien avec police, gendarmerie et secours.',
    terrain: 'Je n’ai pas encore encadré, mais six ans dans les équipes m’ont appris ce qu’un agent attend de son responsable : un bon point de départ pour apprendre à manager.',
  },
  {
    icon: Radar,
    title: 'Analyse des risques & audit',
    formation: 'Analyser la menace et le contexte, réaliser un audit conseil et un plan de sûreté.',
    terrain: 'Un œil de terrain sur les failles d’un site, que la formation m’apprendra à transformer en méthode.',
  },
  {
    icon: Siren,
    title: 'Dispositifs & grands rassemblements',
    formation: 'Concevoir un dispositif complet : postes, cheminements, communication, évacuation.',
    terrain: 'Stades, concerts, gares : j’ai tenu les postes d’un dispositif, je sais comment il se vit, avant d’apprendre à le concevoir.',
  },
  {
    icon: Briefcase,
    title: 'Gestion administrative & RH',
    formation: 'Recrutement, DPAE, paie, contrôle des cartes professionnelles, veille réglementaire.',
    terrain: 'Un domaine nouveau pour moi : j’y apporte rigueur et ponctualité, la formation m’apportera la technique.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & développement',
    formation: 'Plan marketing, e-mailing, positionnement de l’offre et réseaux sociaux.',
    terrain: 'Vidéaste et créateur de contenu : une vraie longueur d’avance sur le volet communication, à mettre en stratégie.',
  },
  {
    icon: FileSearch,
    title: 'Appels d’offres',
    formation: 'Veille des marchés, analyse du DCE, mémoire technique, dossier de réponse.',
    terrain: 'Je connais la prestation vue du terrain ; la mécanique des marchés, je viens l’apprendre.',
  },
  {
    icon: Lock,
    title: 'Cyber & protection des données',
    formation: 'Risque cyber, OSINT, RGPD : minimisation, consentement, durées de conservation.',
    terrain: 'Une culture numérique solide et une sensibilité RGPD née de la vidéosurveillance, à approfondir.',
  },
]

export const engagementCentre: { icon: Icon; strong: string; text: string }[] = [
  {
    icon: UserCheck,
    strong: 'Un profil conforme.',
    text: 'Carte professionnelle en cours de validité, conditions de moralité remplies, prérequis remplis.',
  },
  {
    icon: BookOpen,
    strong: 'De l’expérience à partager.',
    text: 'Six ans de cas concrets pour nourrir les mises en situation et les études de cas.',
  },
  {
    icon: Target,
    strong: 'Un projet défini.',
    text: 'Je ne découvre pas le secteur : je viens structurer ce que le terrain m’a appris.',
  },
  {
    icon: CalendarDays,
    strong: 'Assiduité totale.',
    text: 'Un planning d’alternant tenu avec la même rigueur qu’un planning de vacations.',
  },
]

export const engagementEntreprise: { icon: Icon; strong: string; text: string }[] = [
  {
    icon: BadgeCheck,
    strong: 'Opérationnel dès le premier jour.',
    text: 'Carte pro, SSIAP 1, SST : je peux tenir un poste dès le premier jour, sans délai de formation.',
  },
  {
    icon: Eye,
    strong: 'Un vrai regard de terrain.',
    text: 'Ce que vivent vos agents, je l’ai vécu : je parle leur langue et je comprends la réalité d’un poste.',
  },
  {
    icon: Share2,
    strong: 'Des compétences rares dans le secteur.',
    text: 'Vidéo, réseaux sociaux, supports commerciaux : votre image travaillée de l’intérieur.',
  },
  {
    icon: TrendingUp,
    strong: 'Un futur cadre formé à vos méthodes.',
    text: 'L’alternance comme pré-recrutement : formez le responsable d’exploitation que vous garderez.',
  },
]

export const modalites: { icon: Icon; title: string; text: string }[] = [
  { icon: FileText, title: 'Contrat', text: 'Apprentissage ou professionnalisation' },
  { icon: CalendarDays, title: 'Démarrage', text: 'Rentrée 2026, adaptable à vos plannings' },
  { icon: MapPin, title: 'Base', text: 'Bordeaux Métropole, mobile France entière' },
  { icon: Car, title: 'Mobilité', text: 'Permis B & A2, véhiculé' },
]

export const trajectoire: { period: string; title: string; text: string }[] = [
  {
    period: '2026 → 2027',
    title: 'Alternant dirigeant',
    text: 'Formation RNCP 41352 + exploitation en entreprise : plannings, dispositifs, gestion, commercial.',
  },
  {
    period: '2027 → 2029',
    title: 'Responsable d’exploitation',
    text: 'Piloter des secteurs, encadrer les chefs d’équipe, garantir la qualité des prestations.',
  },
  {
    period: '2030 →',
    title: 'Direction',
    text: 'Diriger une agence, ou créer une structure à taille humaine, exemplaire sur la conformité.',
  },
]

export const homeTraits: { icon: Icon; title: string; note: string }[] = [
  { icon: Layers, title: 'Polyvalence', note: '13 missions, 8 environnements' },
  { icon: BadgeCheck, title: 'Fiabilité', note: 'Certifications & carte pro à jour' },
  { icon: Users, title: 'Sang-froid', note: 'Conflits, urgences, foules' },
  { icon: TrendingUp, title: 'Progression', note: 'Cap assumé vers la direction' },
]
