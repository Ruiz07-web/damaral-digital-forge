import logoDark from "@/assets/logo-dark.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img src={logoDark} alt="Damaral" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md">
              Startup de tecnologia e inovação especializada em IA, automação e desenvolvimento 
              de soluções digitais para empresas que querem crescer.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("solucoes")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("tecnologias")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tecnologias
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contato@damaral.ia.br"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contato@damaral.ia.br
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Damaral – Tecnologia e Inovação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
