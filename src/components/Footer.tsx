import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">WikiLeads</h3>
            <p className="text-white/60 max-w-xs">
              Vi kopplar samman företag med nya möjligheter direkt från bygglovsansökningar.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li><Link to="/tjanster" className="text-white/60 hover:text-mint transition-colors">Bygglovsleads</Link></li>
              <li><Link to="/priser" className="text-white/60 hover:text-mint transition-colors">Priser</Link></li>
              <li><Link to="/bli-partner" className="text-white/60 hover:text-mint transition-colors">Bli partner</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Företaget</h4>
            <ul className="space-y-2">
              <li><Link to="/om-oss" className="text-white/60 hover:text-mint transition-colors">Om oss</Link></li>
              <li><Link to="/kontakt" className="text-white/60 hover:text-mint transition-colors">Kontakta oss</Link></li>
              <li><Link to="/faq" className="text-white/60 hover:text-mint transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Juridiskt</h4>
            <ul className="space-y-2">
              <li><Link to="/integritetspolicy" className="text-white/60 hover:text-mint transition-colors">Integritetspolicy</Link></li>
              <li><Link to="/villkor" className="text-white/60 hover:text-mint transition-colors">Användarvillkor</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-mint/10 mt-16 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} WikiLeads. Alla rättigheter förbehållna.</p>
          <p className="mt-2">
            <a href="mailto:info@wikileads.se" className="text-mint hover:text-mint/80">
              info@wikileads.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
