import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Villkor = () => {
  const handleAccept = () => {
    toast({
      title: "Villkor accepterade",
      description: "Tack för att du accepterar våra användarvillkor.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Användarvillkor</h1>
          
          <div className="bg-forest-light p-8 rounded-lg">
            <p className="text-lg mb-6">Genom att använda Wikileads tjänster accepterar du följande:</p>
            
            <ul className="list-disc list-inside space-y-4 text-white/80 mb-8">
              <li>Du använder våra tjänster på eget ansvar.</li>
              <li>All data och leads som förvärvas via Wikileads är strikt konfidentiella och får inte delas vidare utan godkännande.</li>
              <li>Wikileads förbehåller sig rätten att uppdatera dessa villkor när som helst.</li>
            </ul>

            <p className="mb-8">
              Har du frågor om våra användarvillkor? Kontakta oss på{" "}
              <a href="mailto:info@wikileads.se" className="text-mint hover:text-mint/80">
                info@wikileads.se
              </a>
            </p>

            <Button 
              onClick={handleAccept}
              className="w-full bg-mint hover:bg-mint/90 text-forest font-medium"
            >
              Godkänn och fortsätt
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Villkor;