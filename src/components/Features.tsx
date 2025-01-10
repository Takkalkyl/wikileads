import React from "react";
import { Building, Search, Clock, TrendingUp } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Varför välja Wikileads.se?
          </h2>
          <p className="text-white/80">Vi hjälper dig växa din verksamhet</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Building,
              title: "Färska leads",
              description: "Direkt från kommunens bygglovsansökningar.",
            },
            {
              icon: Search,
              title: "Enkel matchning",
              description: "Vi matchar rätt företag med rätt projekt.",
            },
            {
              icon: Clock,
              title: "Spara tid",
              description: "Inget behov av egen research – vi gör jobbet åt dig.",
            },
            {
              icon: TrendingUp,
              title: "Skalbarhet",
              description: "Väx ditt företag med kvalificerade byggprojekt.",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-forest-light p-8 rounded-xl border border-mint/10 hover:border-mint/30 transition-colors duration-300"
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