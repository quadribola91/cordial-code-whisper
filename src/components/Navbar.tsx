
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Publications</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">AFFC Café</a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48">
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 1</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 2</a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="#" className="text-gray-700 hover:text-gray-900">Female Founder Monitor</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <Button className="bg-[#91C3E6] hover:bg-[#7AB0D3] text-white">
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
