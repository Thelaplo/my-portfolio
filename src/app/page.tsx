"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, Mail, Linkedin, GraduationCap, Github,
  CheckCircle2, Code2, Layout, Smartphone, 
  Send, Laptop, Database, ShieldCheck, Newspaper, Gamepad2, X, Server, Router, Globe, Briefcase, FileText 
} from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "SPORT'SIO",
      tech: "C# • WINFORMS • MYSQL",
      objectifs: "Conception et réalisation d'une application de gestion pour centraliser les informations des sportifs et gérer les disciplines.",
      realisation: "- Analyse du besoin et modélisation\n- Développement de l'interface CRUD\n- Connexion à la base de données MySQL",
      bilan: "Maîtrise du développement desktop et de la gestion de données SQL.",
      competences: [
        { code: "B1.1", nom: "Gérer le patrimoine informatique" },
        { code: "B1.4", nom: "Travailler en mode projet" },
        { code: "B2.1", nom: "Concevoir une solution applicative" }
      ],
      github: "#",
      images: ["/images/sportsio.jpeg"]
    },
    {
      id: 2,
      title: "MAINTENANCE JEUX",
      tech: "C# • ALGORITHME",
      objectifs: "Maintenance corrective et évolutive d'applications de jeux classiques (Pendu, Mastermind).",
      realisation: "- Debugging complet du code source tiers\n- Amélioration des algorithmes de calcul\n- Documentation technique",
      bilan: "Capacité accrue à lire et optimiser du code existant.",
      competences: [
        { code: "B2.2", nom: "Assurer la maintenance d'une solution" },
        { code: "B2.3", nom: "Gérer des données" }
      ],
      github: "#",
      images: ["/images/jeux.jpeg"]
    },
    {
      id: 3,
      title: "CANARD CONNECTÉ",
      tech: "VEILLE TECHNOLOGIQUE",
      objectifs: "Mise en place d'une veille informationnelle active sur les innovations numériques.",
      realisation: "- Utilisation d'outils de curation\n- Rédaction de synthèses hebdomadaires\n- Analyse de cybersécurité",
      bilan: "Développement d'une culture tech et capacité de synthèse critique.",
      competences: [
        { code: "B3.1", nom: "Organiser son développement professionnel" },
        { code: "B3.2", nom: "Mettre en place une veille technologique" }
      ],
      github: "#",
      images: ["/images/canard.jpeg"]
    },
    {
      id: 4,
      title: "BLOOM-SPIRIT",
      tech: "PHP • WEB • VOYAGE",
      objectifs: "Création d'une plateforme web d'excursions touristiques au Japon.",
      realisation: "- Maquettage UI/UX\n- Catalogue d'excursions dynamique\n- Gestion des tarifs et catégories",
      bilan: "Focus sur l'expérience utilisateur et l'architecture web.",
      competences: [
        { code: "B1.3", nom: "Développement de la présence en ligne" },
        { code: "B2.1", nom: "Conception d'une solution applicative" }
      ],
      github: "https://github.com/theolaplace",
      images: ["/images/sitejaponcap.png"]
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
               <h2 className="text-2xl font-bold tracking-tighter uppercase italic">Stage & Alternance</h2>
               <p className="text-zinc-500 text-xs mt-2 italic font-sans italic">Recherche du 23 fév. au 5 avril.</p>
             </div>
          </motion.div>
        </section>

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
                J'y apprends à structurer des projets complexes et à développer des solutions pérennes.
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
                Mention Assez Bien • Systèmes Numériques, Option RISC (Réseaux Informatiques et Systèmes Communicants).
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

        <section id="experiences" className="mb-24 space-y-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-zinc-800 p-2 rounded-lg text-white"><Briefcase size={24} /></div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-400 uppercase italic">Expériences</h2>
          </div>

          <div className="space-y-6 italic font-sans">
            <div className="bento-card p-8 border border-zinc-800 bg-zinc-900/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-blue-500/30 transition-all font-medium">
              <div>
                <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-widest italic">Mai 2025 - Juin 2025</span>
                <h3 className="text-2xl font-bold uppercase mt-1">Stage Développement Web</h3>
                <p className="text-zinc-500 text-sm italic">Tyche informatique • Clermont-Ferrand</p>
              </div>
              <div className="text-zinc-400 text-sm font-light max-w-md italic">
                • Création d'une application agenda en C# <br/>
                • Conception du site Occas'auto avec intégration de base de données
              </div>
            </div>

            <div className="bento-card p-8 border border-zinc-800 bg-zinc-900/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-zinc-500/30 transition-all font-medium">
              <div>
                <span className="text-zinc-500 font-mono text-xs font-bold uppercase tracking-widest italic">Déc 2023 - Janv 2024</span>
                <h3 className="text-2xl font-bold uppercase mt-1">Stage Réparation Multimédia</h3>
                <p className="text-zinc-500 text-sm italic">Easycash • Clermont-Ferrand</p>
              </div>
              <div className="text-zinc-400 text-sm font-light max-w-md italic">
                • Gestion des commandes via l'intranet <br/>
                • Création d'étiquettes produits et conseil client <br/>
                • Réparation de téléphones et d'ordinateurs
              </div>
            </div>

            <div className="bento-card p-8 border border-zinc-800 bg-zinc-900/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-emerald-500/30 transition-all font-medium">
              <div>
                <span className="text-emerald-500 font-mono text-xs font-bold uppercase tracking-widest italic">Juin 2023 - Juil 2023</span>
                <h3 className="text-2xl font-bold uppercase mt-1">Stage Réseaux et Systèmes</h3>
                <p className="text-zinc-500 text-sm italic">28e Régiment de Transmissions • Issoire</p>
              </div>
              <div className="text-zinc-400 text-sm font-light max-w-md italic">
                • Pratique des systèmes Windows Server <br/>
                • Mise en œuvre avancée de Packet Tracer <br/>
                • Participation aux activités militaires
              </div>
            </div>
          </div>
        </section>

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
                <p className="text-zinc-500 text-sm italic font-light font-sans">Applications web robustes, rapides et optimisées SEO.</p>
              </div>
              <div className="w-32 h-32 bg-zinc-800 rounded-3xl border border-zinc-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                <Code2 size={40} className="text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="bento-card p-10 flex flex-col md:flex-row gap-8 items-center border border-zinc-800 rounded-[2rem] group hover:border-blue-500/50 transition-all bg-zinc-900/5">
              <div className="flex-1">
                <span className="text-blue-500 text-xs font-mono font-bold tracking-widest uppercase italic font-sans">02</span>
                <h3 className="text-4xl font-bold tracking-tighter mt-2 mb-4 group-hover:text-blue-500 transition-colors uppercase italic font-sans">Design UI/UX</h3>
                <p className="text-zinc-500 text-sm italic font-light font-sans">Interfaces minimalistes centrées sur l'utilisateur.</p>
              </div>
              <div className="w-32 h-32 bg-zinc-800 rounded-3xl border border-zinc-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                <Smartphone size={40} className="text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION PROJETS AVEC CARTES PLUS HAUTES --- */}
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
                {/* On augmente la hauteur ici : h-80 au lieu de h-40 */}
                <div className="w-full h-80 bg-zinc-800 rounded-[1.5rem] border border-zinc-700 overflow-hidden relative">
                  {p.images && p.images[0] && (
                    <img 
                      src={p.images[0]} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        objectPosition: 'center' // Centre l'image pour bien voir le canard
                      }}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight size={32} />
                  </div>
                </div>

                {/* Infos du projet calées en bas */}
                <div className="mt-4">
                  <h4 className="font-bold tracking-tight italic uppercase">Projet #{p.id} : {p.title}</h4>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1 font-bold">{p.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bento-card max-w-2xl w-full p-8 bg-zinc-950 border border-zinc-800 relative overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
                  <X size={24}/>
                </button>
                <h3 className="text-3xl font-bold mb-10 italic tracking-tighter underline underline-offset-[12px] decoration-zinc-800 uppercase">{selectedProject.title}</h3>
                <div className="space-y-8 font-sans italic">
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold">Objectifs</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.objectifs}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-2 font-bold">Réalisation</h4>
                    <p className="text-zinc-400 text-sm whitespace-pre-line leading-relaxed">{selectedProject.realisation}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4 font-bold">Compétences SIO</h4>
                    <div className="flex flex-col gap-3">
                       {selectedProject.competences.map((c: any) => (
                         <div key={c.code} className="flex items-start gap-3">
                            <span className="text-blue-400 font-mono font-bold text-xs bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{c.code}</span>
                            <span className="text-zinc-400 text-xs mt-1 italic font-medium">{c.nom}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="pt-8 border-t border-zinc-900 flex justify-between items-center">
                    <p className="text-zinc-500 text-xs italic font-medium">{selectedProject.bilan}</p>
                    <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 text-white bg-zinc-900 px-5 py-2 rounded-xl text-xs hover:bg-zinc-800 transition-all uppercase font-bold border border-zinc-800">
                      <Github size={14}/> Code Source
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section id="contact" className="mb-24">
          <div className="bento-card p-12 text-center bg-gradient-to-t from-blue-900/10 to-transparent border border-blue-500/20 italic">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase italic">Prêt à collaborer ?</h2>
            <p className="text-zinc-500 max-w-lg mx-auto mb-10 text-lg leading-relaxed font-sans italic text-balance">
              À la recherche d'un stage du 23 fév. au 5 avril. Contactez-moi par mail ou LinkedIn.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="mailto:theolaplacepro2@gmail.com" className="bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-3 uppercase italic shadow-lg shadow-white/5">
                <Mail size={20}/> Envoyer un Mail
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/theolaplace" target="_blank" className="h-16 w-16 glass rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all border border-zinc-800">
                  <Linkedin size={24}/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs uppercase font-bold italic tracking-widest">
           <p>© 2026 Théo Laplace.</p>
           <div className="flex gap-10 font-sans">
              <a href="https://github.com/theolaplace" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/theolaplace" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
           </div>
        </footer>

      </div>
    </div>
  );
}