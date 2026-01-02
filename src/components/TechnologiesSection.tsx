import n8nLogo from "@/assets/n8n-logo.png";
import supabaseLogo from "@/assets/supabase-logo.jpg";
import manusLogo from "@/assets/manus-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import codeLogo from "@/assets/code-languages.webp";

const TechnologiesSection = () => {
  const technologies = [
    {
      logo: n8nLogo,
      name: "n8n",
      description: "Automações e workflows inteligentes",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      logo: supabaseLogo,
      name: "Supabase",
      description: "Banco de dados, autenticação e backend",
      color: "from-emerald-500/20 to-green-500/20"
    },
    {
      logo: manusLogo,
      name: "Manus",
      description: "Agentes e processos com IA",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      logo: lovableLogo,
      name: "Lovable",
      description: "Criação rápida de aplicações modernas",
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      logo: codeLogo,
      name: "Código",
      description: "JavaScript, Python, APIs e mais",
      color: "from-primary/20 to-accent/20"
    }
  ];

  return (
    <section id="tecnologias" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Tecnologias
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stack moderna e{" "}
            <span className="gradient-text">poderosa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utilizamos as melhores ferramentas do mercado para entregar soluções robustas e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative glass-card rounded-2xl p-6 text-center hover-glow"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <h3 className="font-display font-bold text-foreground mb-2">
                  {tech.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
