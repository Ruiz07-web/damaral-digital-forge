import { Globe, Settings, Bot, Link2, ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Globe,
      title: "Websites Profissionais",
      description: "Sites rápidos, responsivos e focados em conversão. Design moderno que impressiona e converte visitantes em clientes.",
      color: "primary"
    },
    {
      icon: Settings,
      title: "Sistemas Personalizados",
      description: "Soluções sob medida para empresas. Desenvolvemos sistemas que atendem exatamente às suas necessidades de negócio.",
      color: "accent"
    },
    {
      icon: Bot,
      title: "Automações com IA",
      description: "Processos automatizados, redução de custos e ganho de produtividade. Deixe a IA trabalhar por você.",
      color: "primary"
    },
    {
      icon: Link2,
      title: "Integrações via API",
      description: "Conectamos sistemas, plataformas e dados. Sua operação funcionando de forma integrada e eficiente.",
      color: "accent"
    }
  ];

  return (
    <section id="solucoes" className="section-padding relative overflow-hidden bg-dark-surface">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(263 70% 50%) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que sua empresa precisa para{" "}
            <span className="gradient-text">crescer no digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas de tecnologia para transformar e escalar o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl p-8 hover-glow cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                solution.color === 'primary' 
                  ? 'bg-primary/10 border border-primary/20' 
                  : 'bg-accent/10 border border-accent/20'
              }`}>
                <solution.icon className={`h-7 w-7 ${
                  solution.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} />
              </div>

              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {solution.description}
              </p>

              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
