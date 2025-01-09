import React from "react";
import { Building, Search, Clock, TrendingUp } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Väx med oss
          </h2>
          <p className="text-white/80">Allt du behöver för att hitta nya kunder</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Building,
              title: "Färska bygglovsansökningar",
              description: "Få tillgång till nya bygglovsansökningar direkt från källan.",
            },
            {
              icon: Search,
              title: "Smart matchning",
              description: "Vi matchar ditt företag med relevanta projekt baserat på din expertis och region.",
            },
            {
              icon: Clock,
              title: "Spara tid",
              description: "Slipp leta efter nya kunder – vi levererar kvalificerade leads direkt till dig.",
            },
            {
              icon: TrendingUp,
              title: "Öka din försäljning",
              description: "Expandera din verksamhet med verifierade leads från faktiska bygglovsprojekt.",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-forest-light p-8 rounded-xl border border-mint/10"
            >
              <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-mint" })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;