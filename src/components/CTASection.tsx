import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import patternAbstract from "@/assets/pattern-abstract.jpg";

const CTASection = () => {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={patternAbstract} 
          alt="" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vamos construir o{" "}
            <span className="gradient-text">digital da sua empresa</span>?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Entre em contato e descubra como podemos transformar seu negócio com tecnologia de ponta.
          </p>

          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5567982249405" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
