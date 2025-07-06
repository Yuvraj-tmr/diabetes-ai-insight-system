
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/calculator", label: "Risk Calculator" },
    { href: "/analysis", label: "Performance Analysis" },
    { href: "/research", label: "Research" },
    { href: "/methodology", label: "Methodology" },
    { href: "/about", label: "About" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DR</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:block">
              DiabetesRiskPredictor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={isActive(item.href) ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={item.href}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className="justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.href}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
