import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">Vanliga frågor</h1>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-forest-light rounded-lg border-mint/10">
              <AccordionTrigger className="px-4">Hur fungerar Wikileads?</AccordionTrigger>
              <AccordionContent className="px-4 text-white/80">
                Vi kopplar samman byggföretag med kvalificerade leads från bygglovsansökningar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-forest-light rounded-lg border-mint/10">
              <AccordionTrigger className="px-4">Hur verifierar ni era leads?</AccordionTrigger>
              <AccordionContent className="px-4 text-white/80">
                Våra leads hämtas från bekräftade bygglovsansökningar och valideras innan de delas med våra partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-forest-light rounded-lg border-mint/10">
              <AccordionTrigger className="px-4">Kan jag köpa leads i bulk?</AccordionTrigger>
              <AccordionContent className="px-4 text-white/80">
                Ja, vi erbjuder möjligheten att köpa flera leads till rabatterade priser.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-forest-light rounded-lg border-mint/10">
              <AccordionTrigger className="px-4">Hur ofta uppdateras era leads?</AccordionTrigger>
              <AccordionContent className="px-4 text-white/80">
                Våra leads uppdateras dagligen baserat på inkommande bygglovsansökningar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <Link to="/kontakt">
              <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
                Kontakta oss för fler frågor
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;