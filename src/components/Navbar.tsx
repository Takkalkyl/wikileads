import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b75ad58d-ebe1-4c14-93ed-399e18921818.png" 
            alt="WikiLeads" 
            className="h-24 w-auto" // Changed from h-72 to h-24 (72 / 3 = 24)
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/90 hover:text-white transition-colors">
            Hem
          </Link>
          <Link to="/om-oss" className="text-white/90 hover:text-white transition-colors">
            Om oss
          </Link>
          <Link to="/tjanster" className="text-white/90 hover:text-white transition-colors">
            Tjänster
          </Link>
          <Link to="/kontakt" className="text-white/90 hover:text-white transition-colors">
            Kontakta oss
          </Link>
        </div>
        <Link to="/bli-partner">
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
            Bli partner
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;