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
            <h3 className="text-xl font-bold text-white">Färska bygglovsansökningar</h3>
            <p className="text-white/80">
              Vi samlar in de senaste ansökningarna direkt från kommuner.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">Smart matchning</h3>
            <p className="text-white/80">
              Matchar projekt baserat på ditt expertområde och din region.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-white">Öka din försäljning</h3>
            <p className="text-white/80">
              Få fler kunder och expandera din verksamhet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;