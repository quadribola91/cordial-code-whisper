
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useBackgroundImage } from "@/hooks/useBackgroundImage";

const Index = () => {
  const { backgroundImage } = useBackgroundImage('/lovable-uploads/3a500f99-0b22-4b06-8b0b-8a692c01fe14.png');

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative">
        {/* Background image - with lighter overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Lighter overlay - using white with higher opacity */}
          <div className="absolute inset-0 bg-white/70"></div>
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
