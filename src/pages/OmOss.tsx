import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Target, Users } from "lucide-react";

const OmOss = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Om Wikileads.se</h1>
          <p className="text-white/80 text-lg mb-12 text-center max-w-2xl mx-auto">
            Vi är specialister på att koppla samman företag med kvalificerade bygglovsleads, 
            och hjälper dig att hitta nya affärsmöjligheter utan att behöva lägga tid på marknadsföring.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
              <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Vår Vision</h3>
              <p className="text-white/80">
                Att förenkla och effektivisera hur byggföretag hittar nya projekt och kunder genom 
                kvalificerade bygglovsleads.
              </p>
            </div>
            <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
              <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Vårt Uppdrag</h3>
              <p className="text-white/80">
                Att leverera högkvalitativa bygglovsleads som hjälper företag att växa och utvecklas 
                på ett effektivt sätt.
              </p>
            </div>
            <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
              <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-mint" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Våra Värderingar</h3>
              <p className="text-white/80">
                Kvalitet, transparens och pålitlighet är kärnan i allt vi gör. Vi tror på långsiktiga 
                relationer med våra partners.
              </p>
            </div>
          </div>

          <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
            <h2 className="text-2xl font-bold mb-4 text-white">Varför välja Wikileads?</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Direkta leads från bygglovsansökningar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Smart matchning baserad på din expertis och region</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Tidsbesparande process som låter dig fokusera på ditt arbete</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-mint">•</span>
                <span>Transparent och pålitlig service</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OmOss;