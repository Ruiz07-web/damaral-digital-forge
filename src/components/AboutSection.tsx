import { Brain, Cpu, Lightbulb, Target } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Especialistas em IA",
      description: "Aplicamos inteligência artificial de forma estratégica"
    },
    {
      icon: Cpu,
      title: "Automação Inteligente",
      description: "Processos automatizados que economizam tempo e recursos"
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Sempre à frente com as últimas tecnologias"
    },
    {
      icon: Target,
      title: "Resultados Reais",
      description: "Foco em métricas e crescimento do seu negócio"
    }
  ];

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Sobre a Damaral
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transformamos ideias em{" "}
              <span className="gradient-text">soluções digitais</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos uma startup de tecnologia e inovação especializada em IA, automação, 
              integrações e sistemas sob medida. Nosso foco é entregar eficiência, 
              escalabilidade e resultados reais para empresas que querem crescer no digital.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[60px] animate-glow-pulse" />
              
              {/* Card */}
              <div className="relative glass-card rounded-3xl p-8 h-full flex items-center justify-center">
                <img 
                  src={logoIcon} 
                  alt="Damaral Icon" 
                  className="w-2/3 h-auto animate-float"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-card-gradient border border-border rounded-2xl flex items-center justify-center animate-float animation-delay-200">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-card-gradient border border-border rounded-2xl flex items-center justify-center animate-float animation-delay-600">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
