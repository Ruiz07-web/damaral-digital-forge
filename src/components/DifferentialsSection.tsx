import { Zap, Shield, Brain, TrendingUp, Handshake } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Soluções otimizadas para máxima velocidade e eficiência"
    },
    {
      icon: Shield,
      title: "Segurança e Escalabilidade",
      description: "Arquitetura robusta que cresce com o seu negócio"
    },
    {
      icon: Brain,
      title: "IA Estratégica",
      description: "Uso inteligente de inteligência artificial"
    },
    {
      icon: TrendingUp,
      title: "Foco em Crescimento",
      description: "Soluções pensadas para resultados reais"
    },
    {
      icon: Handshake,
      title: "Atendimento Próximo",
      description: "Parceria real e personalizada"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-dark-surface">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="gradient-text">Damaral</span>?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {differentials.map((diff, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 glass-card rounded-full px-6 py-4 hover-glow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <diff.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{diff.title}</h3>
                <p className="text-sm text-muted-foreground">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
