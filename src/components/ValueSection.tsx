import { Building, Users, CheckCircle2 } from "lucide-react";

const ValueSection = () => {
  return (
    <section className="py-20 px-4 bg-forest-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Så fungerar Wikileads.se:
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <Building className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">Vi samlar in bygglovsansökningar</h3>
            <p className="text-white/80">
              Direkt från kommuner och bygglovsbyråer får vi in aktuella projekt.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">Vi matchar rätt byrå med rätt projekt</h3>
            <p className="text-white/80">
              Med fokus på din expertis och region matchar vi dig med leads.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">Skapa affärer</h3>
            <p className="text-white/80">
              Ta del av projektinformationen och kontakta kunden direkt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;