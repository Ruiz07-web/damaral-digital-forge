import logoDark from "@/assets/logo-dark.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/30 bg-background/80">
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <img src={logoDark} alt="Damaral" className="h-10 md:h-12 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("solucoes")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Soluções
          </button>
          <button
            onClick={() => scrollToSection("tecnologias")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Tecnologias
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="sm" className="hidden sm:flex" onClick={() => scrollToSection("contato")}>
            Solicitar orçamento
          </Button>
          <Button variant="whatsapp" size="sm" asChild>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
