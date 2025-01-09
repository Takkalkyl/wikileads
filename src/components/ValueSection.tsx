import { Building, Users, CheckCircle2 } from "lucide-react";

const ValueSection = () => {
  return (
    <section className="py-20 px-4 bg-forest-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Varför välja Wikileads.se?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <Building className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">För bygglovsföretag</h3>
            <p className="text-white/80">
              Erbjud era kunder en komplett lösning – öka servicenivån och tjäna på varje projekt.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">För entreprenörer</h3>
            <p className="text-white/80">
              Få tillgång till kvalificerade projekt utan att lägga tid på egen research.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">Verifierade leads</h3>
            <p className="text-white/80">
              Alla projekt är baserade på faktiska bygglovsansökningar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;