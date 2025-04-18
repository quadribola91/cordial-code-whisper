
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative">
        {/* Background image - we'll use a semi-transparent overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/0f23861a-70f7-492b-959f-ea7758f31e10.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-32 md:py-48 max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/a6424192-2147-4502-9bc9-8fe2a87a7601.png"
              alt="AFFC Logo"
              className="mx-auto w-64 md:w-80"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Africa Female</span>
            <br />
            <span className="text-[#91C3E6]">Founders Collective</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-12">
            Powering the visibility, investability, and scalability of Africa's female-led ventures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#91C3E6] hover:bg-[#7AB0D3] text-white px-8 py-6 text-lg"
            >
              Find Out More
            </Button>
            <Button 
              variant="outline"
              className="bg-white/90 hover:bg-white text-gray-800 px-8 py-6 text-lg border-2"
            >
              Visit Our Data Center
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
