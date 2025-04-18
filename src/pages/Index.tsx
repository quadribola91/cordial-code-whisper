
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative">
        {/* Background image - we'll use a semi-transparent overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/743a9e5f-8a77-43f1-a421-0ab8e43c5095.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-32 md:py-48 max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/a6424192-2147-4502-9bc9-8fe2a87a7601.png"
              alt="AFFC Logo"
              className="mx-auto w-48 md:w-64 lg:w-80"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Africa Female</span>
            <br />
            <span className="text-[#91C3E6]">Founders Collective</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Powering the visibility, investability, and scalability of Africa's female-led ventures.
          </p>

          {/* Single CTA Button */}
          <Button 
            className="bg-[#91C3E6] hover:bg-[#7AB0D3] text-white px-8 py-6 text-lg min-w-[200px]"
          >
            Coming Soon
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
