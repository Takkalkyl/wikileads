import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Clock, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tjanster = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Våra Tjänster</h1>
          <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
            Vi erbjuder skräddarsydda lösningar för att koppla samman ditt företag med 
            relevanta bygglovsleads, så att du kan fokusera på det du gör bäst.
          </p>

          <div className="grid gap-8 mb-16">
            <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Bygglovsleads</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Kvalificerade Leads</h3>
                    <p className="text-white/80">
                      Få tillgång till verifierade bygglovsansökningar som matchar ditt företags profil och region.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Smart Matchning</h3>
                    <p className="text-white/80">
                      Vår algoritm matchar dig med de mest relevanta projekten baserat på din expertis och geografiska område.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Snabb Leverans</h3>
                    <p className="text-white/80">
                      Få leads levererade inom 48 timmar från det att bygglovsansökan registreras.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Effektiv Process</h3>
                    <p className="text-white/80">
                      Spara tid och resurser genom att fokusera på kvalificerade leads istället för att leta efter nya kunder.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/bli-partner">
                <Button className="w-full bg-mint hover:bg-mint/90 text-forest font-medium">
                  Bli partner <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
            <h2 className="text-2xl font-bold mb-4 text-white">Fördelar med våra tjänster</h2>
            <ul className="space-y-4 text-white/80 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Spara tid och resurser på marknadsföring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Få tillgång till verifierade bygglovsansökningar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Öka din försäljning med kvalificerade leads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Fokusera på ditt kärnområde medan vi hittar kunderna</span>
              </li>
            </ul>
            <Link to="/kontakt">
              <Button variant="outline" className="w-full border-mint/20 text-mint hover:bg-mint/10">
                Kontakta oss för mer information
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tjanster;