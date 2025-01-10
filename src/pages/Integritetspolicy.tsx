import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Integritetspolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Integritetspolicy</h1>
          
          <div className="bg-forest-light p-8 rounded-lg">
            <p className="text-lg mb-6">Vi tar din integritet på allvar. Alla personuppgifter hanteras i enlighet med GDPR.</p>
            
            <ul className="list-disc list-inside space-y-4 text-white/80 mb-8">
              <li>Vi samlar endast in data som är nödvändig för att tillhandahålla våra tjänster.</li>
              <li>Data delas aldrig med tredje part utan samtycke.</li>
              <li>Du kan när som helst begära att få din data raderad.</li>
            </ul>

            <div className="flex items-center gap-2 text-mint mb-8">
              <Mail size={20} />
              <a href="mailto:info@wikileads.se" className="hover:text-mint/80">
                info@wikileads.se
              </a>
            </div>

            <a href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/" 
               target="_blank" 
               rel="noopener noreferrer">
              <Button className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                Läs mer om GDPR
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integritetspolicy;