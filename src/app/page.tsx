"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { 
  ArrowUpRight, Mail, Linkedin, GraduationCap, Github,
  CheckCircle2, Code2, Smartphone, 
  Laptop, Database, ShieldCheck, Newspaper, X, Briefcase, FileText, Router, Server
} from "lucide-react";

const StarBackground = dynamic(() => import("./StarBackground"), { ssr: false });
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const GithubCalendarWrapper = dynamic(() => import('./GithubCalendarWrapper'), {
  ssr: false,
  loading: () => <div className="h-[150px] w-full bg-zinc-900 animate-pulse rounded-xl" />
});

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [news, setNews] = useState<any[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingNews, setLoadingNews] = useState(true);

  const skills = [
    { name: "HTML / CSS", level: 4, icon: "🎨" },
    { name: "PHP", level: 3, icon: "🐘" },
    { name: "JavaScript / Vue.js", level: 3, icon: "⚡" },
    { name: "React / Next.js", level: 2, icon: "⚛️" },
    { name: "C# / .NET", level: 2, icon: "🔷" },
    { name: "MySQL / SQL", level: 4, icon: "🗄️" },
    { name: "Réseaux / Cisco", level: 2, icon: "🌐" },
    { name: "Cybersécurité", level: 3, icon: "🛡️" },
  ];

  const levels = [
    { label: "Bronze",  color: "text-amber-700",  bg: "bg-amber-900/20",  border: "border-amber-800",  glow: "shadow-amber-900/40" },
    { label: "Argent",  color: "text-zinc-300",   bg: "bg-zinc-700/20",   border: "border-zinc-500",   glow: "shadow-zinc-500/30" },
    { label: "Or",      color: "text-yellow-400", bg: "bg-yellow-900/20", border: "border-yellow-600", glow: "shadow-yellow-600/40" },
    { label: "Platine", color: "text-cyan-300",   bg: "bg-cyan-900/20",   border: "border-cyan-500",   glow: "shadow-cyan-500/40" },
    { label: "Diamant", color: "text-blue-300",   bg: "bg-blue-900/20",   border: "border-blue-400",   glow: "shadow-blue-400/50" },
    { label: "Maître",  color: "text-purple-300", bg: "bg-purple-900/20", border: "border-purple-400", glow: "shadow-purple-500/60" },
  ];

  const experiences = [
    {
      title: "Stage Développement Web",
      company: "ADCPG 03",
      location: "Hyds, 03600",
      date: "Fév 2026 → Avr 2026",
      color: "blue",
      tasks: [
        "Développement d'un site WordPress de A à Z",
        "Création d'un thème enfant PHP personnalisé",
        "Navigation responsive avec menu burger",
        "Module de don interactif en JavaScript",
        "Déploiement FTP via FileZilla",
      ],
    },
    {
      title: "Stage Développement Web",
      company: "Tyche Informatique",
      location: "Clermont-Ferrand",
      date: "Mai 2025 → Juin 2025",
      color: "purple",
      tasks: [
        "Développement de fonctionnalités sur une application agenda en C#",
        "Conception du site Occas'Auto avec base de données SQL",
        "Travail en équipe selon les normes de codage pro",
      ],
    },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.zataz.com/feed/"
        );
        const data = await response.json();
        if (data && data.status === "ok" && data.items && data.items.length > 0) {
          setNews(data.items.slice(0, 3));
        } else {
          setNews([
            {
              title: "Sécurisation des infrastructures Cloud en 2026",
              pubDate: new Date().toISOString(),
              link: "#",
              description: "Analyse des nouvelles méthodes de protection contre les attaques par déni de service (DDoS)."
            },
            {
              title: "L'évolution du PHP avec la version 8.x",
              pubDate: new Date().toISOString(),
              link: "#",
              description: "Focus sur les performances accrues pour les applications web de gestion associative."
            },
            {
              title: "RGPD : Nouvelles directives pour les associations",
              pubDate: new Date().toISOString(),
              link: "#",
              description: "Comment l'ADCPG 03 peut optimiser la gestion de ses données adhérents en toute conformité."
            }
          ]);
        }
        setLoadingNews(false);
      } catch (error) {
        console.error("Erreur veille:", error);
        setLoadingNews(false);
      }
    };
    fetchNews();
  }, []);

  const projects = [
    {
      id: 1,
      title: "ADCPG 03 - Association Départementale des Chasseurs de Petit Gibier",
      tech: "WORDPRESS • PHP • CSS3 • UI/UX",
      contexte: "Stage de fin d'études : Création intégrale de la plateforme web de l'ADCPG Allier (03). L'objectif était de moderniser l'image de l'association et de centraliser les ressources pour les adhérents.",
      objectifs: "Concevoir un portail dynamique regroupant les actualités départementales, une bibliothèque de documents officiels (statuts, bulletins) et un espace de soutien financier déductible des impôts.",
      realisation: "- Création d'un thème enfant personnalisé sous WordPress avec intégration de templates PHP spécifiques.\n- Développement d'un système de navigation 'Responsive First' avec menu burger et header flottant optimisés pour mobile.\n- Mise en place d'une interface dynamique pour les actualités (Carrousel/Slider tactile sur smartphone).\n- Intégration d'un module de don interactif (individuel/entrepreneur) avec affichage conditionnel en JavaScript.\n- Déploiement et configuration de l'infrastructure sur hébergement distant via FTP (FileZilla).",
      difficultes: "Adapter une architecture d'information dense (plus de 20 bulletins et documents PDF) sur petit écran tout en conservant une navigation fluide et un design épuré sans surcharger le temps de chargement.",
      bilan: "Projet mené de la conception UI/UX au déploiement final. Gain d'autonomie sur la gestion des conflits CSS et la manipulation des hooks WordPress. Structure optimisée permettant une duplication rapide (environ 5-6h) pour d'autres départements.",
      competences: [
        { code: "B1.3", nom: "Développer la présence en ligne (Référencement et Déploiement)" },
        { code: "B1.1", nom: "Gérer le patrimoine informatique (Hébergement et Maintenance)" },
        { code: "B2.1", nom: "Concevoir une solution applicative (Architecture PHP/CSS)" }
      ],
      github: "https://adcpg03.free.nf/", 
      images: ["/images/LOGO.pdf"] // Tu pourras aussi ajouter des captures d'écran de tes carrés d'accueil et du carrousel mobile !
    },
    {
      id: 2,
      title: "BLOOM SPIRIT",
      tech: "VUE.JS 3 • PHP 8 • MYSQL • API REST",
      contexte: "Projet de spécialisation : Développement d'une plateforme dynamique d'excursions touristiques au Japon.",
      objectifs: "Créer une application web moderne séparant strictement le Frontend (Vue.js) du Backend (API PHP) pour permettre une gestion fluide des favoris et des destinations.",
      realisation: "- Architecture Backend : Création de modèles Orientés Objet (Utilisateur, Favoris) et de contrôleurs DAO.\n- Développement d'une API REST : Scripts PHP traitant des requêtes JSON (login, gestion des favoris).\n- Interface Frontend : Utilisation de Vue.js 3 avec système de composants (HomeView, DetailView, CarteView).\n- Fonctionnalités dynamiques : Implémentation du système de favoris en temps réel via la Fetch API.\n- Administration : Dashboard avec statistiques (KPI) et interface CRUD pour la gestion des voyages.",
      difficultes: "Mettre en œuvre une communication sécurisée entre Vue.js et le backend PHP via des requêtes préparées PDO pour éviter les injections SQL.",
      bilan: "Maîtrise du cycle complet de développement : de la conception (MCD/MLD) à l'implémentation d'une architecture découplée (Fullstack).",
      competences: [
        { code: "B2.1", nom: "Concevoir une solution applicative (Architecture MVC & API)" },
        { code: "B1.3", nom: "Développer la présence en ligne (Interface Vue.js)" },
        { code: "B2.3", nom: "Concevoir une base de données (MCD/MLD sous MySQL)" }
      ],
      github: "#",
      logo: "/images/sitejaponcap.png",
      images: ["/images/sitejaponcap.png", "/images/BloomSpiritDetail.png", "/images/BloomSpiritAdmin.png","/images/trelo.png"]
    },
    // {
    //   id: 3,
    //   title: "TYCHE INFORMATIQUE (Stage 1ère année)",
    //   tech: "C# • .NET • WINFORMS",
    //   contexte: "Premier stage en immersion au sein d'une ESN (Entreprise de Services Numériques).",
    //   objectifs: "Maintenance évolutive d'applications internes et développement de modules de gestion de données.",
    //   realisation: "- Développement de fonctionnalités sur une application d'agenda\n- Requêtes SQL pour le module de gestion Occas'Auto\n- Rédaction de documentations techniques simples",
    //   difficultes: "S'adapter aux outils de versioning et aux normes de codage d'une équipe de développement pro.",
    //   bilan: "Découverte des méthodes de travail professionnelles et du travail collaboratif.",
    //   competences: [
    //     { code: "B1.2", nom: "Fournir un service informatique" },
    //     { code: "B1.4", nom: "Travailler en mode projet" }
    //   ],
    //   github: "#",
    //   logo: "/images/tyche.png",
    //   images: ["/images/tyche.jpeg"]
    // },
    {
      id: 3,
      title: "L'ARCHIVE - GESTION VINTAGE",
      tech: "PHP 8 • MYSQL • DOMPDF • CHART.JS",
      contexte: "Projet personnel de professionnalisation : Création d'un outil de pilotage d'activité pour une micro-entreprise de revente de vêtements vintage.",
      objectifs: "Automatiser la gestion du stock et sécuriser les obligations fiscales (calcul des cotisations URSSAF et journal des ventes) tout en analysant la performance commerciale.",
      realisation: "- Gestion de Stock (CRUD) : Système complet de gestion des articles avec normalisation des marques et catégories.\n- Pilotage Financier : Module de calcul automatique du Chiffre d'Affaires et du bénéfice net après déduction des charges sociales de 12.8%.\n- Archivage & Traçabilité : Mise en œuvre de Triggers SQL pour historiser les suppressions et gestion des motifs de refus de vente.\n- Visualisation de données : Intégration de Chart.js pour le suivi des KPI via l'élément HTML5 Canvas (taux de refus, top catégories).\n- Reporting : Génération d'un journal des ventes professionnel au format PDF via la bibliothèque Dompdf.",
      difficultes: "Assurer l'intégrité des données lors du transfert vers l'historique en sécurisant les transactions via des requêtes préparées PDO.",
      bilan: "Capacité à transformer un besoin métier réel (comptabilité et logistique) en une solution logicielle robuste facilitant les déclarations fiscales.",
      competences: [
        { code: "B2.1", nom: "Concevoir une solution applicative (Logique métier & Fiscalité)" },
        { code: "B2.3", nom: "Concevoir une base de données (Triggers & Archivage SQL)" },
        { code: "B1.4", nom: "Travailler en mode projet (Analyse des besoins et KPI)" }
      ],
      github: "#",
      logo: "/images/vinted.jpeg",
      images: ["/images/entrepriseAccueil.png", "/images/entrepriseStock.png", "/images/entrepriseCommandes.png", "/images/entrepriseKPI.png"]
    }
  ];

  const otherProjects = [
    { id: 5, title: "GLPI - Gestion de parc", tech: "LINUX • RÉSEAU", desc: "Installation et configuration d'un serveur GLPI pour la gestion des incidents (tickets) et l'inventaire matériel.", images: ["/images/glpi.jpeg"] },
    { id: 6, title: "Sport'SIO", tech: "MYSQL • C#", desc: "Application console de gestion d'une base de données sportive.", images: ["/images/sport.jpeg"] },
    { id: 7, title: "Shrek's Maths Academy", tech: "C# • SQL SERVER", desc: "Développement du module de gestion de stock pour l'application Shrek.", images: ["/images/logoC.jpeg"] },
    { id: 8, title: "CSS ZEN GARDEN", tech: "CSS", desc: "Développement d'une maquette CSS pour le site Zen Garden.", images: ["/images/css.jpeg"] },
    { id: 9, title: "Site HTML Publicitaire", tech: "HTML • CSS", desc: "Développement d'une maquette HTML/CSS pour un site publicitaire.", images: ["/images/voiture.jpeg"] },
    { id: 10, title: "Maintenance Jeux", tech: "C# • ALGORITHME• TEST", desc: "Reprise et optimisation de jeux classiques (Pendu, Mastermind) présentant des dysfonctionnements.", images: ["/images/logoC.jpeg"] },
    { id: 11, title: "BotVinted", tech: "PYTHON • PANDAS", desc: "Développement d'un bot pour recuperer les articles sur Vinted suivant une requête.", images: ["/images/vinted.jpeg"] },
    {
      id: 12, // Ou l'ID suivant dans ta liste
      title: "PORTFOLIO PROFESSIONNEL (BTS SIO)",
      tech: "NEXT.JS 14 • TYPESCRIPT • TAILWIND CSS • VERCEL",
      desc: " De la Conception au déploiement afin de centraliser mes projets, mes compétences et ma veille technologique.",
      images: ["/images/apple-touch-icon.png"]
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 pb-10 md:px-20 selection:bg-blue-500/30 font-sans">
      <StarBackground />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-20 py-5 bg-black border-b border-zinc-800">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-bold text-xl tracking-tighter italic">THÉO LAPLACE.</div>

          {/* LIENS DESKTOP */}
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#formation" className="hover:text-white transition-colors">Formation</a>
            <a href="#experience" className="hover:text-white transition-colors">Expérience</a>
            <a href="#competences" className="hover:text-white transition-colors">Compétences</a>
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
            <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full font-medium text-xs hover:bg-zinc-200 transition-all">Contact</a>
          </div>

          {/* BURGER MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={24} /> : (
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-zinc-400 block" />
                <span className="w-6 h-0.5 bg-zinc-400 block" />
                <span className="w-6 h-0.5 bg-zinc-400 block" />
              </div>
            )}
          </button>
        </div>

        {/* MENU MOBILE DÉROULANT */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pt-4 pb-2 max-w-7xl mx-auto">
                {[
                  { href: "#about", label: "À propos" },
                  { href: "#formation", label: "Formation" },
                  { href: "#experience", label: "Expérience" },
                  { href: "#competences", label: "Compétences" },
                  { href: "#projets", label: "Projets" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-zinc-400 hover:text-white transition-colors py-3 px-2 border-b border-zinc-800/50 text-sm font-bold uppercase italic"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ABOUT ME */}
        <section id="about" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white">
              <Code2 size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">
              À propos
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
          >
            {/* PHOTO */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-52 h-52 z-10">
                <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl -z-10" />
                <img
                  src="/images/moi.jpeg"
                  alt="Théo Laplace"
                  className="relative z-10 w-52 h-52 rounded-3xl object-cover border border-zinc-700 shadow-2xl"
                />
              </div>
            </div>

            {/* TEXTE */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter leading-[1.1] uppercase italic">
                  <Typewriter
                    options={{
                      strings: ["Théo Laplace."],
                      autoStart: true,
                      loop: false,
                      delay: 80,
                      deleteSpeed: Infinity,
                      wrapperClassName: "text-white",
                      cursorClassName: "text-blue-500",
                    }}
                  />
                </h3>
                <p className="text-blue-500 font-mono text-xs uppercase tracking-widest mt-1 font-bold">
                  Étudiant BTS SIO SLAM • Fullstack Dev
                </p>
              </div>

              <p className="text-zinc-400 leading-relaxed italic text-balance">
                Passionné par le développement web, je conçois des applications modernes
                de la conception UI jusqu'au déploiement. Actuellement en BTS SIO option SLAM,
                je suis à la recherche d'une <span className="text-white font-bold">alternance pour 2026</span> afin
                de mettre mes compétences au service d'une équipe ambitieuse.
              </p>

              {/* INFOS RAPIDES */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-xs text-zinc-300 font-bold italic">
                  📍 Clermont-Ferrand
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full text-xs text-emerald-400 font-bold italic">
                  ✅ Disponible en alternance
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full text-xs text-blue-400 font-bold italic">
                  💻 Fullstack Dev
                </div>
              </div>

              {/* LIENS */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="mailto:theolaplacepro2@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl text-xs font-bold transition-all uppercase italic">
                  <Mail size={14} /> Me contacter
                </a>
                <a href="/images/CV2TheoLaplace-Alternance.pdf" target="_blank" className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-xl text-xs font-bold transition-all uppercase italic">
                  <FileText size={14} /> Mon CV
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION GITHUB */}
        <section id="github" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white">
              <Github size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">
              Contributions GitHub
            </h2>
          </div>
          <div className="bento-card p-10 flex flex-col items-center bg-zinc-900/10 border border-zinc-800 overflow-hidden">
            <GithubCalendarWrapper />
          </div>
        </section>

        {/* FORMATION */}
        <section id="formation" className="mb-24 space-y-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white"><GraduationCap size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Parcours Académique</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card p-10 md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 italic uppercase underline underline-offset-8 decoration-zinc-800 text-blue-400">BTS SIO • Option SLAM</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 italic text-balance">
                Services Informatiques aux Organisations. Spécialisation Solutions Logicielles et Applications Métiers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans italic">
                <div className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Développement Web</div>
                <div className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Analyse de cybersécurité</div>
                <div className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Gestion de projet (Agile)</div>
                <div className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> SQL & Architecture NoSQL</div>
              </div>
            </div>
            <div className="bento-card p-8 bg-zinc-900/40 border border-zinc-800 italic">
              <h4 className="text-sm font-mono text-zinc-500 uppercase mb-6 font-bold">Expertise BTS</h4>
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-3"><Laptop size={18} className="text-blue-400"/> <span>C# / PHP / JS</span></div>
                <div className="flex items-center gap-3"><Database size={18} className="text-purple-400"/> <span>MySQL / SQL Server</span></div>
                <div className="flex items-center gap-3"><ShieldCheck size={18} className="text-emerald-400"/> <span>Cybersécurité</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 italic">
            <div className="bento-card p-10 md:col-span-2 border-emerald-500/20 bg-emerald-500/5">
              <h3 className="text-2xl font-bold mb-6 italic uppercase underline underline-offset-8 decoration-emerald-900 text-emerald-400">BAC PRO SN RISC</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 font-light italic">
                Mention Assez Bien • Systèmes Numériques, Option RISC.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
                <div className="flex items-center gap-3 text-zinc-300"><CheckCircle2 size={16} className="text-emerald-500" /> Installation de systèmes</div>
                <div className="flex items-center gap-3 text-zinc-300"><CheckCircle2 size={16} className="text-emerald-500" /> Administration des réseaux</div>
                <div className="flex items-center gap-3 text-zinc-300"><CheckCircle2 size={16} className="text-emerald-500" /> Maintenance matérielle</div>
                <div className="flex items-center gap-3 text-zinc-300"><CheckCircle2 size={16} className="text-emerald-500" /> Configuration CISCO</div>
              </div>
            </div>
            <div className="bento-card p-8 bg-zinc-900/40 border border-zinc-800">
              <h4 className="text-sm font-mono text-emerald-500 uppercase mb-6 font-bold">Expertise BAC</h4>
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-3"><Router size={18} className="text-emerald-400"/> <span>Cisco / Réseaux</span></div>
                <div className="flex items-center gap-3"><Server size={18} className="text-emerald-400"/> <span>Windows Server</span></div>
                <div className="flex items-center gap-3"><Smartphone size={18} className="text-emerald-400"/> <span>Maintenance</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPÉRIENCE PRO */}
        <section id="experience" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">
              Expérience Professionnelle
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className={`absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full border-2 hidden md:block z-10 ${
                    exp.color === "blue" ? "bg-blue-500 border-blue-300" : "bg-purple-500 border-purple-300"
                  }`} />

                  <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                    <div className={`bento-card p-6 border ${
                      exp.color === "blue" ? "border-blue-500/30 bg-blue-500/5" : "border-purple-500/30 bg-purple-500/5"
                    }`}>
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className={`font-bold uppercase italic text-lg ${
                            exp.color === "blue" ? "text-blue-400" : "text-purple-400"
                          }`}>{exp.title}</h3>
                          <p className="text-zinc-400 text-sm font-bold mt-1">{exp.company}</p>
                          <p className="text-zinc-600 text-xs mt-0.5">{exp.location}</p>
                        </div>
                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                          exp.color === "blue"
                            ? "text-blue-400 border-blue-500/30 bg-blue-500/10"
                            : "text-purple-400 border-purple-500/30 bg-purple-500/10"
                        }`}>{exp.date}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400 italic">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              exp.color === "blue" ? "bg-blue-500" : "bg-purple-500"
                            }`} />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:block md:col-start-1 md:row-start-1"} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section id="competences" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white">
              <Code2 size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">
              Compétences
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {levels.map((l, i) => (
              <div key={i} className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${l.bg} ${l.border} ${l.color}`}>
                <span>{i === 0 ? "🥉" : i === 1 ? "🥈" : i === 2 ? "🥇" : i === 3 ? "💠" : i === 4 ? "💎" : "👑"}</span>
                {l.label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const lvl = levels[skill.level];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`bento-card p-6 border ${lvl.border} ${lvl.bg} shadow-lg ${lvl.glow} flex items-center justify-between group`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <p className={`font-bold uppercase italic tracking-tight ${lvl.color}`}>{skill.name}</p>
                      <div className="flex gap-1 mt-2">
                        {levels.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 w-6 rounded-full transition-all duration-500 ${
                              i <= skill.level ? lvl.border.replace("border-", "bg-") : "bg-zinc-800"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs font-black uppercase italic px-3 py-1 rounded-full border ${lvl.bg} ${lvl.border} ${lvl.color}`}>
                    {lvl.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets" className="mb-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Projets Sélectionnés</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(p)}
                className="bento-card p-4 h-[450px] flex flex-col justify-between cursor-pointer group"
              >
                <div className="w-full h-80 bg-zinc-800 rounded-[1.5rem] border border-zinc-700 overflow-hidden relative">
                  <img
                    src={p.logo || p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold tracking-tight italic uppercase">Projet #{p.id} : {p.title}</h4>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1 font-bold">{p.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODALE PROJET */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bento-card max-w-4xl w-full p-8 bg-zinc-950 border border-zinc-800 relative overflow-y-auto max-h-[90vh]"
                onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
                  <X size={24} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.images.map((img: string, idx: number) => (
                        <div key={idx} className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                          <img src={img} alt={`Capture ${idx + 1}`} className="w-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl italic">
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 italic">Bilan Projet</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">{selectedProject.bilan}</p>
                    </div>
                  </div>

                  <div className="space-y-6 font-sans italic">
                    <h3 className="text-4xl font-bold italic tracking-tighter underline underline-offset-[12px] decoration-zinc-800 uppercase mb-4">{selectedProject.title}</h3>

                    <div>
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 underline decoration-blue-500/30 underline-offset-4">Contexte</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.contexte}</p>
                    </div>
                    <div>
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 underline decoration-blue-500/30 underline-offset-4">Objectifs</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.objectifs}</p>
                    </div>
                    <div>
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 underline decoration-blue-500/30 underline-offset-4">Points de Réalisation</h4>
                      <p className="text-zinc-400 text-sm whitespace-pre-line leading-relaxed">{selectedProject.realisation}</p>
                    </div>
                    <div>
                      <h4 className="text-red-500/80 font-bold uppercase text-[10px] tracking-widest mb-2 underline decoration-red-500/20 underline-offset-4">Difficultés</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.difficultes}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {selectedProject.competences.map((c: any) => (
                        <div key={c.code} className="flex items-start gap-3">
                          <span className="text-blue-400 font-mono font-bold text-xs bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{c.code}</span>
                          <span className="text-zinc-400 text-xs mt-1 italic">{c.nom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-end">
                  <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 text-white bg-zinc-900 px-6 py-3 rounded-xl text-xs hover:bg-zinc-800 transition-all font-bold border border-zinc-800 uppercase">
                    <Github size={14} /> Sources
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AUTRES PROJETS - CARROUSEL */}
        <section id="autres-projets" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white"><Briefcase size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Projets Académiques & TP</h2>
          </div>

          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="flex gap-4"
              drag="x"
              dragConstraints={{ right: 0, left: -((otherProjects.length - 1) * 320) }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            >
              {otherProjects.map((op) => (
                <motion.div
                  key={op.id}
                  className="bento-card p-4 flex-shrink-0 w-80 h-[420px] flex flex-col justify-between group"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-full h-52 bg-zinc-900 rounded-[1.5rem] border border-zinc-800 overflow-hidden relative flex items-center justify-center">
                    <img
                      src={op.images[0]}
                      alt={op.title}
                      className="w-full h-full object-cover"
                      onError={(e) => e.currentTarget.style.display = 'none'}
                      draggable={false}
                    />
                  </div>
                  <div className="mt-4 px-2">
                    <span className="text-[10px] text-blue-500 font-mono font-bold uppercase tracking-widest">{op.tech}</span>
                    <h4 className="font-bold text-sm mt-1 uppercase italic">{op.title}</h4>
                    <p className="text-[11px] text-zinc-500 mt-2 italic line-clamp-3">{op.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Indicateur de scroll */}
          <p className="text-zinc-600 text-xs font-mono mt-4 text-center italic">
            ← glisse pour voir plus →
          </p>
        </section>

        {/* VEILLE TECH */}
        <section id="veille" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-emerald-600 p-2 rounded-lg text-white"><Newspaper size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Live Tech Watch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loadingNews ? <p className="text-zinc-500 italic">Chargement...</p> : news.map((item, index) => (
              <motion.a key={index} href={item.link} target="_blank" className="bento-card p-6 border-l-4 border-l-emerald-500 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
                <p className="text-[9px] font-mono text-zinc-500 mb-2 uppercase">{new Date(item.pubDate).toLocaleDateString()}</p>
                <h4 className="text-sm font-bold italic uppercase mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">{item.title}</h4>
                <p className="text-xs text-zinc-500 italic line-clamp-3">{item.description.replace(/<[^>]*>?/gm, '')}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-24 text-center">
          <div className="bento-card p-12 bg-gradient-to-t from-blue-900/10 to-transparent border border-blue-500/20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase italic">Prêt à collaborer ?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:theolaplacepro2@gmail.com" className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-3 uppercase italic">
                <Mail size={20} /> Contact
              </a>
              <a href="https://linkedin.com/in/theolaplace" target="_blank" className="h-16 w-16 glass rounded-2xl flex items-center justify-center border border-zinc-800">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </section>

      </div>{/* fin max-w-7xl */}

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/50 pt-10 pb-6 mt-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl tracking-tighter italic text-white">
            THÉO LAPLACE.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:theolaplacepro2@gmail.com" className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <Mail size={16} />
            </a>
            <a href="https://linkedin.com/in/theolaplace" target="_blank" className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/Thelaplo" target="_blank" className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <Github size={16} />
            </a>
          </div>
          <p className="text-zinc-600 text-xs font-mono">
            © {new Date().getFullYear()} Théo Laplace — Tous droits réservés
          </p>
        </div>
      </footer>

    </div>
  );
}
