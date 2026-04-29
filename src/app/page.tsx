"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { 
  ArrowUpRight, Mail, Linkedin, GraduationCap, Github,
  CheckCircle2, Code2, Layout, Smartphone, 
  Send, Laptop, Database, ShieldCheck, Newspaper, X, Briefcase, FileText, Router, Server
} from "lucide-react";

const GithubCalendarWrapper = dynamic(() => import('./GithubCalendarWrapper'), {
  ssr: false,
  loading: () => <div className="h-[150px] w-full bg-zinc-900 animate-pulse rounded-xl" />
});

export default function Portfolio() {
  // --- ÉTATS DU PORTFOLIO ---
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [news, setNews] = useState<any[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  

  // Chargement de la veille (API)
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
    // {
    //   id: 1,
    //   title: "ADCPG 03 - Association Départementale des Chasseurs de Petit Gibier",
    //   tech: "WORDPRESS • PHP • CSS3 • UI/UX",
    //   contexte: "Stage de fin d'études : Création intégrale de la plateforme web de l'ADCPG Allier (03). L'objectif était de moderniser l'image de l'association et de centraliser les ressources pour les adhérents.",
    //   objectifs: "Concevoir un portail dynamique regroupant les actualités départementales, une bibliothèque de documents officiels (statuts, bulletins) et un espace de soutien financier déductible des impôts.",
    //   realisation: "- Création d'un thème enfant personnalisé sous WordPress avec intégration de templates PHP spécifiques.\n- Développement d'un système de navigation 'Responsive First' avec menu burger et header flottant optimisés pour mobile.\n- Mise en place d'une interface dynamique pour les actualités (Carrousel/Slider tactile sur smartphone).\n- Intégration d'un module de don interactif (individuel/entrepreneur) avec affichage conditionnel en JavaScript.\n- Déploiement et configuration de l'infrastructure sur hébergement distant via FTP (FileZilla).",
    //   difficultes: "Adapter une architecture d'information dense (plus de 20 bulletins et documents PDF) sur petit écran tout en conservant une navigation fluide et un design épuré sans surcharger le temps de chargement.",
    //   bilan: "Projet mené de la conception UI/UX au déploiement final. Gain d'autonomie sur la gestion des conflits CSS et la manipulation des hooks WordPress. Structure optimisée permettant une duplication rapide (environ 5-6h) pour d'autres départements.",
    //   competences: [
    //     { code: "B1.3", nom: "Développer la présence en ligne (Référencement et Déploiement)" },
    //     { code: "B1.1", nom: "Gérer le patrimoine informatique (Hébergement et Maintenance)" },
    //     { code: "B2.1", nom: "Concevoir une solution applicative (Architecture PHP/CSS)" }
    //   ],
    //   github: "https://adcpg03.free.nf/", 
    //   logo: "/images/LOGO.pdf", 
    //   images: ["/images/LOGO.pdf"] 
    // },
    {
      id: 2,
      title: "BLOOM SPIRIT",
      tech: "VUE.JS 3 • PHP 8 • MYSQL • API REST",
      contexte: "Projet de spécialisation : Développement d'une plateforme dynamique d'excursions touristiques au Japon.",
      objectifs: "Créer une application web moderne séparant strictement le Frontend (Vue.js) du Backend (API PHP) pour permettre une gestion fluide des favoris et des destinations.",
      realisation: "- Architecture Backend : Création de modèles Orientés Objet (Utilisateur, Favoris) et de contrôleurs DAO.\n- Développement d'une API REST : Scripts PHP traitant des requêtes JSON (login, gestion des favoris).\n- Interface Frontend : Utilisation de Vue.js 3 avec système de composants (HomeView, DetailView, CarteView).\n- Fonctionnalités dynamiques : Implémentation du système de favoris en temps réel via la Fetch API.\n- Administration : Dashboard avec statistiques (KPI) et interface CRUD pour la gestion des voyages.",
      difficultes: "Mettre en œuvre une communication  sécurisée entre Vue.js et le backend PHP via des requêtes préparées PDO pour éviter les injections SQL.",
      bilan: "Maîtrise du cycle complet de développement : de la conception (MCD/MLD) à l'implémentation d'une architecture découplée (Fullstack).",
      competences: [
        { code: "B2.1", nom: "Concevoir une solution applicative (Architecture MVC & API)" },
        { code: "B1.3", nom: "Développer la présence en ligne (Interface Vue.js)" },
        { code: "B2.3", nom: "Concevoir une base de données (MCD/MLD sous MySQL)" }
      ],
      github: "#",
      logo: "/images/sitejaponcap.png",
      images: ["/images/sitejaponcap.png", "/images/BloomSpiritDetail.png","/images/BloomSpiritAdmin.png"] 
    },
    {
      id: 3,
      title: "TYCHE INFORMATIQUE (Stage 1ère année)",
      tech: "C# • .NET • WINFORMS",
      contexte: "Premier stage en immersion au sein d'une ESN (Entreprise de Services Numériques).",
      objectifs: "Maintenance évolutive d'applications internes et développement de modules de gestion de données.",
      realisation: "- Développement de fonctionnalités sur une application d'agenda\n- Requêtes SQL pour le module de gestion Occas'Auto\n- Rédaction de documentations techniques simples",
      difficultes: "S'adapter aux outils de versioning et aux normes de codage d'une équipe de développement pro.",
      bilan: "Découverte des méthodes de travail professionnelles et du travail collaboratif.",
      competences: [
        { code: "B1.2", nom: "Fournir un service informatique" },
        { code: "B1.4", nom: "Travailler en mode projet" }
      ],
      github: "#",
      logo: "/images/tyche.png",
      images: ["/images/tyche.jpeg"]
    },
    {
      id: 4,
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
      logo: "/images/Vinted.jpeg",
      images: ["/images/entrepriseAccueil.png", "/images/entrepriseStock.png","/images/entrepriseCommandes.png", "/images/entrepriseKPI.png"]
    }
  ];

  const otherProjects = [
    { id: 5, title: "GLPI - Gestion de parc", tech: "LINUX • RÉSEAU", desc: "Installation et configuration d'un serveur GLPI pour la gestion des incidents (tickets) et l'inventaire matériel.", images: ["/images/glpi.jpeg"] },
    { id: 6, title: "Sport'SIO", tech: "MYSQL • C#", desc: "Application console de gestion d'une base de données sportive.", images: ["/images/sport.jpeg"] },
    { id: 7, title: "Shrek's Maths Academy", tech: "C# • SQL SERVER", desc: "Développement du module de gestion de stock pour l'application Shrek.", images: ["/images/logoC.jpeg"] },
    { id: 8, title: "CSS ZEN GARDEN", tech: "CSS", desc: "Développement d'une maquette CSS pour le site Zen Garden.", images: ["/images/css.jpeg"] },
    { id: 9, title: "Site HTML Publicitaire", tech: "HTML • CSS", desc: "Développement d'une maquette HTML/CSS pour un site publicitaire.", images: ["/images/voiture.jpeg"] },
    { id: 10, title: "Maintenance Jeux", tech: "C# • ALGORITHME• TEST", desc: "Reprise et optimisation de jeux classiques (Pendu, Mastermind) présentant des dysfonctionnements.", images: ["/images/logoC.jpeg"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-20 selection:bg-blue-500/30 font-sans">
      
      <nav className="flex justify-between items-center mb-20 max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tighter italic">THÉO LAPLACE.</div>
        <div className="flex gap-8 text-sm text-zinc-400 items-center">
          <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
          <a href="#formation" className="hover:text-white transition-colors">Formation</a>
          <a href="#projets" className="hover:text-white transition-colors">Projets</a>
          <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full font-medium text-xs hover:bg-zinc-200 transition-all">Contact</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        
        {/* HERO */}
        <section id="accueil" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bento-card p-10 col-span-1 md:col-span-2">
            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">Étudiant Développeur</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter leading-[1.1] uppercase italic">Théo Laplace.<br/><span className="text-zinc-600">Fullstack Dev.</span></h1>
            <p className="text-zinc-500 mt-8 text-lg max-w-md leading-relaxed italic">
              Je conçois des expériences numériques fluides et modernes, de la conception UI au déploiement.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl flex items-center gap-2 text-sm font-bold transition-all shadow-lg shadow-blue-900/20 uppercase italic">
                Travaillons ensemble <Send size={16} />
              </a>
              <a href="/images/CV2TheoLaplace.pdf" target="_blank" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-8 py-4 rounded-2xl flex items-center gap-2 text-sm font-bold transition-all uppercase italic">
                Mon CV <FileText size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bento-card p-10 flex flex-col justify-between bg-gradient-to-br from-zinc-900/50 to-black">
             <div className="flex justify-between items-start">
               <div className="h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                  <Code2 size={32} />
               </div>
               <div className="text-right">
                  <p className="text-xs text-zinc-500 font-mono font-bold">STATUT</p>
                  <p className="text-emerald-500 text-sm font-bold uppercase italic">Disponible</p>
               </div>
             </div>
             <div>
               <h2 className="text-2xl font-bold tracking-tighter uppercase italic">Alternance</h2>
               <p className="text-zinc-500 text-xs mt-2 italic font-sans italic">Recherche d'une alternance pour 2026.</p>
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
            <GithubCalendarWrapper />   {/* ← ici */}
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

        {/* MODALE EXAMEN */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bento-card max-w-4xl w-full p-8 bg-zinc-950 border border-zinc-800 relative overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
                  <X size={24}/>
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    {/* GALERIE D'IMAGES */}
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.images.map((img: string, idx: number) => (
                        <div key={idx} className="rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                          <img src={img} alt={`Capture ${idx + 1}`} className="w-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl italic">
                       <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold italic">Bilan Projet</h4>
                       <p className="text-zinc-300 text-sm leading-relaxed">{selectedProject.bilan}</p>
                    </div>
                  </div>

                  <div className="space-y-6 font-sans italic">
                    <h3 className="text-4xl font-bold italic tracking-tighter underline underline-offset-[12px] decoration-zinc-800 uppercase mb-4">{selectedProject.title}</h3>
                    
                    <div>
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold underline decoration-blue-500/30 underline-offset-4">Contexte</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.contexte}</p>
                    </div>

                    <div>
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold underline decoration-blue-500/30 underline-offset-4">Objectifs</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.objectifs}</p>
                    </div>

                    <div>
                      <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold underline decoration-blue-500/30 underline-offset-4">Points de Réalisation</h4>
                      <p className="text-zinc-400 text-sm whitespace-pre-line leading-relaxed">{selectedProject.realisation}</p>
                    </div>

                    <div>
                      <h4 className="text-red-500/80 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold underline decoration-red-500/20 underline-offset-4">Difficultés</h4>
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
                    <Github size={14}/> Sources
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* AUTRES PROJETS */}
        <section id="autres-projets" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
             <div className="bg-zinc-800 p-2 rounded-lg text-white"><Briefcase size={24} /></div>
             <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic italic">Projets Académiques & TP</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((op) => (
              <div key={op.id} className="bento-card p-4 h-[400px] flex flex-col justify-between group">
                <div className="w-full h-64 bg-zinc-900 rounded-[1.5rem] border border-zinc-800 overflow-hidden relative flex items-center justify-center">
                  <img src={op.images[0]} alt={op.title} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <div className="mt-4 px-2">
                  <span className="text-[10px] text-blue-500 font-mono font-bold uppercase tracking-widest">{op.tech}</span>
                  <h4 className="font-bold text-sm mt-1 uppercase italic italic">{op.title}</h4>
                  <p className="text-[11px] text-zinc-500 mt-2 italic">{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VEILLE TECH */}
        <section id="veille" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-emerald-600 p-2 rounded-lg text-white"><Newspaper size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic italic">Live Tech Watch</h2>
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
          <div className="bento-card p-12 bg-gradient-to-t from-blue-900/10 to-transparent border border-blue-500/20 italic italic">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase italic italic">Prêt à collaborer ?</h2>
            <div className="flex gap-4 justify-center">
              <a href="mailto:theolaplacepro2@gmail.com" className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-3 uppercase italic italic"><Mail size={20}/> Contact</a>
              <a href="https://linkedin.com/in/theolaplace" target="_blank" className="h-16 w-16 glass rounded-2xl flex items-center justify-center border border-zinc-800"><Linkedin size={24}/></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
