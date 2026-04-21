"use client";
import { useState, useEffect } from "react"; // AJOUT DE useEffect ICI
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, Mail, Linkedin, GraduationCap, Github,
  CheckCircle2, Code2, Layout, Smartphone, 
  Send, Laptop, Database, ShieldCheck, Newspaper, Gamepad2, X, Server, Router, Globe, Briefcase, FileText 
} from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // --- ÉTATS POUR LA VEILLE AUTOMATIQUE ---
  const [news, setNews] = useState<any[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);

 // --- RÉCUPÉRATION AUTOMATIQUE + ROUE DE SECOURS ---
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // On change pour un flux plus stable (BFM Business - High Tech)
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.zataz.com/feed/"
        );
        const data = await response.json();
        
        if (data && data.status === "ok" && data.items && data.items.length > 0) {
          setNews(data.items.slice(0, 3));
        } else {
          // ROUE DE SECOURS : Si l'API renvoie {}, on met des news fixes
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
      title: "BLOOM-SPIRIT",
      tech: "HTML • CSS • PHP",
      contexte: "Projet de réalisation web axé sur l'expérience utilisateur et l'architecture MVC.",
      objectifs: "Création d'un site vitrine interactif pour une agence de voyage spécialisée sur la destination Japon.",
      realisation: "- Maquettage graphique et définition de la charte visuelle\n- Développement d'un catalogue dynamique d'excursions\n- Mise en place d'un système de filtrage par catégories",
      difficultes: "Optimisation du temps de chargement des ressources graphiques haute définition.",
      bilan: "Approfondissement des compétences en design d'interface et en développement front-end.",
      competences: [
        { code: "B1.3", nom: "Développement de la présence en ligne" },
        { code: "B2.1", nom: "Conception d'une solution applicative" }
      ],
      github: "#",
      images: ["/images/sitejaponcap.png"]
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
      images: ["/images/tyche.jpeg"]
    },
    {
      id: 4,
      title: "MAINTENANCE JEUX",
      tech: "C# • ALGORITHME • TESTS",
      contexte: "Projet académique de spécialisation portant sur la qualité logicielle.",
      objectifs: "Reprise et optimisation de jeux classiques (Pendu, Mastermind) présentant des dysfonctionnements.",
      realisation: "- Analyse de code tiers et identification des bugs critiques\n- Refactorisation de la logique algorithmique principale\n- Mise en place de jeux de tests unitaires",
      difficultes: "Corriger des erreurs de logique sans altérer les fonctionnalités existantes (non-régression).",
      bilan: "Amélioration de la rigueur de développement et de la capacité d'analyse de code complexe.",
      competences: [
        { code: "B2.2", nom: "Assurer la maintenance d'une solution" },
        { code: "B3.3", nom: "Accompagner les utilisateurs" }
      ],
      github: "#",
      images: ["/images/jeux.jpeg"]
    }
  ];
  const otherProjects = [
    {
      id: 5,
      title: "GLPI - Gestion de parc",
      tech: "LINUX • RÉSEAU",
      desc: "Installation et configuration d'un serveur GLPI pour la gestion des incidents (tickets) et l'inventaire matériel.",
      images: ["/images/glpi.jpeg"] 
    },
    {
      id: 6,
      title: "Sport'SIO",
      tech: "MySql • C#",
      desc: "Application console de gestion d'une base de données sportive.",
      images: ["/images/sport.jpeg"]
    },
    {
      id: 7,
      title: "Shrek's Maths Academy",
      tech: "C# • SQL SERVER",
      desc: "Développement du module de gestion de stock pour l'application Shrek.",
      images: ["/images/logoC.jpeg"]
    },
    {
      id: 8,
      title: "CSS ZEN GARDEN",
      tech: "CSS",
      desc: "Développement d'une maquette CSS pour le site Zen Garden.",
      images: ["/images/css.jpeg"]
    },
    {
      id: 9,
      title: "Site HTML Publicitaire",
      tech: "HTML • CSS",
      desc: "Développement d'une maquette HTML/CSS pour un site publicitaire.",
      images: ["/images/voiture.jpeg"]
    },
    {
      id: 10,
      title: "Application de GestionVintage",
      tech: "PHP • SQL SERVER • NODEJS",
      desc: "Développement du module de gestion de stock et des utilisateurs.",
      images: ["/images/vinted.jpeg"] 
    }
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

        {/* SERVICES */}
        <section id="services" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-blue-600 p-2 rounded-lg text-white"><Layout size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase italic tracking-widest font-sans">Mes Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 italic">
            <div className="bento-card p-10 flex flex-col md:flex-row gap-8 items-center border border-zinc-800 rounded-[2rem] group hover:border-blue-500/50 transition-all bg-zinc-900/5">
              <div className="flex-1">
                <span className="text-blue-500 text-xs font-mono font-bold tracking-widest uppercase italic font-sans">01</span>
                <h3 className="text-4xl font-bold tracking-tighter mt-2 mb-4 group-hover:text-blue-500 transition-colors uppercase italic font-sans">Développement Web</h3>
                <p className="text-zinc-500 text-sm italic font-light font-sans">Applications web robustes et optimisées SEO.</p>
              </div>
              <div className="w-32 h-32 bg-zinc-800 rounded-3xl border border-zinc-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                <Code2 size={40} className="text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="bento-card p-10 flex flex-col md:flex-row gap-8 items-center border border-zinc-800 rounded-[2rem] group hover:border-blue-500/50 transition-all bg-zinc-900/5">
              <div className="flex-1">
                <span className="text-blue-500 text-xs font-mono font-bold tracking-widest uppercase italic font-sans">02</span>
                <h3 className="text-4xl font-bold tracking-tighter mt-2 mb-4 group-hover:text-blue-500 transition-colors uppercase italic font-sans">Design UI/UX</h3>
                <p className="text-zinc-500 text-sm italic font-light font-sans">Interfaces minimalistes et centrées utilisateur.</p>
              </div>
              <div className="w-32 h-32 bg-zinc-800 rounded-3xl border border-zinc-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                <Smartphone size={40} className="text-zinc-600 group-hover:text-white transition-colors" />
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
                  {p.images && p.images[0] && (
                    <img 
                      src={p.images[0]} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                      style={{ imageRendering: '-webkit-optimize-contrast', objectPosition: 'center' }}
                    />
                  )}
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
                    <div className="rounded-2xl border border-zinc-800 overflow-hidden h-64 shadow-2xl">
                       <img src={selectedProject.images[0]} className="w-full h-full object-cover" />
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
        {/* MES AUTRES PROJETS - DESIGN UNIFIÉ */}
        <section id="autres-projets" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
             <div className="bg-zinc-800 p-2 rounded-lg text-white"><Briefcase size={24} /></div>
             <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Projets Académiques & TP</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((op) => (
              <div key={op.id} className="bento-card p-4 h-[400px] flex flex-col justify-between group">
                <div className="w-full h-64 bg-zinc-900 rounded-[1.5rem] border border-zinc-800 overflow-hidden relative flex items-center justify-center">
                  {op.images && op.images[0] && (
                    <img 
                      src={op.images[0]} 
                      alt={op.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                </div>
                <div className="mt-4 px-2">
                  <span className="text-[10px] text-blue-500 font-mono font-bold uppercase tracking-widest">{op.tech}</span>
                  <h4 className="font-bold text-sm mt-1 uppercase italic">{op.title}</h4>
                  <p className="text-[11px] text-zinc-500 mt-2 italic line-clamp-2">{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION VEILLE 100% AUTOMATIQUE */}
        <section id="veille" className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-emerald-600 p-2 rounded-lg text-white"><Newspaper size={24} /></div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Live Tech Watch</h2>
              <p className="text-[10px] text-emerald-500 font-mono font-bold uppercase underline decoration-emerald-500/30">Flux Sécurité en temps réel via Flux RSS</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loadingNews ? (
              <p className="text-zinc-500 animate-pulse italic">Mise à jour du flux en direct...</p>
            ) : (
              news.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bento-card p-6 border-l-4 border-l-emerald-500 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group"
                >
                  <p className="text-[9px] font-mono text-zinc-500 mb-2 uppercase">
                    {new Date(item.pubDate).toLocaleDateString('fr-FR')}
                  </p>
                  <h4 className="text-sm font-bold italic uppercase mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 italic line-clamp-3 mb-4">
                    {item.description.replace(/<[^>]*>?/gm, '')}
                  </p>
                  <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 uppercase">
                    Lire l'article <ArrowUpRight size={10} />
                  </span>
                </motion.a>
              ))
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-24">
          <div className="bento-card p-12 text-center bg-gradient-to-t from-blue-900/10 to-transparent border border-blue-500/20 italic">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase italic">Prêt à collaborer ?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="mailto:theolaplacepro2@gmail.com" className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-3 uppercase italic">
                <Mail size={20}/> Contact
              </a>
              <a href="https://www.linkedin.com/in/theolaplace" target="_blank" className="h-16 w-16 glass rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all border border-zinc-800">
                <Linkedin size={24}/>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
