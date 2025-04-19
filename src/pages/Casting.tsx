
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CastingHeader from "@/components/CastingHeader";
import CastingHero from "@/components/CastingHero";
import CastingRequirements from "@/components/CastingRequirements";
import CastingContact from "@/components/CastingContact";
import CastingFooter from "@/components/CastingFooter";

const Casting = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <CastingHeader />
      <main className="container mx-auto px-4 py-8">
        <CastingHero />
        <CastingRequirements />
        <CastingContact />
      </main>
      <CastingFooter />
    </div>
  );
};

export default Casting;
