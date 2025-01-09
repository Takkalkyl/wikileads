import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20">
            <Building className="w-4 h-4 text-mint" />
            <span className="text-mint text-sm font-medium">Bygglovsleads</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Bygg framtiden med kvalificerade bygglovsleads
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Vi kopplar samman företag med nya möjligheter direkt från bygglovsansökningar.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg">
              Bli partner <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10">
              Kontakta oss
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="/lovable-uploads/f5810f40-200f-447f-9a93-7034cbfe2d17.png"
            alt="Bygglovsleads illustration"
            className="relative rounded-2xl shadow-2xl"
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