
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/a6424192-2147-4502-9bc9-8fe2a87a7601.png"
              alt="AFFC Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-black">Publications</a>
            <a href="#" className="text-black hover:text-black">AFFC Café</a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-black">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48">
                  
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="#" className="text-black hover:text-black">Female Founder Monitor</a>
            <a href="#" className="text-black hover:text-black">About</a>
            <Button className="bg-[#91C3E6] hover:bg-[#7AB0D3] text-white">
              Newsletter
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-2`}>
          <div className="flex flex-col space-y-4 pb-4">
            <a href="#" className="text-black hover:text-gray-900 px-2">Publications</a>
            <a href="#" className="text-black hover:text-gray-900 px-2">AFFC Café</a>
            <a href="#" className="text-black hover:text-gray-900 px-2">Resources</a>
            <a href="#" className="text-black hover:text-gray-900 px-2">Female Founder Monitor</a>
            <a href="#" className="text-black hover:text-gray-900 px-2">About</a>
            <Button className="bg-[#91C3E6] hover:bg-[#7AB0D3] text-white w-full">
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
