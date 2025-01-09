import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20 mx-auto lg:mx-0">
            <Building className="w-4 h-4 text-mint" />
            <span className="text-mint text-sm font-medium">Wikileads.se</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Byggprojekt? Vi kopplar rätt entreprenörer med rätt kunder.
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto lg:mx-0">
            Wikileads.se hjälper bygglovsföretag att ge sina kunder tillgång till rätt entreprenörer, samtidigt som vi skapar nya affärsmöjligheter för entreprenörer.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-start">
            <Link to="/bli-partner" className="group">
              <Button className="w-full sm:w-auto bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Bygglovsföretag – samarbeta med oss <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/kontakt" className="group">
              <Button variant="outline" className="w-full sm:w-auto border-mint/20 text-mint hover:bg-mint/10 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Entreprenör? Köp verifierade leads
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professionell affärsuppgörelse"
            className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
          />
          <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10">
            <p className="text-mint text-4xl font-bold">1000+</p>
            <p className="text-white/80">Aktiva bygglovsansökningar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;