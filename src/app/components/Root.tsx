import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

const Root = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("lavender");
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Parent Corner", path: "/parent-corner" },
    { label: "Ages & Quiz", path: "/ages-stages" },
    { label: "Research Hub", path: "/research-hub" },
    { label: "Mood Journal", path: "/mood-journal" },
    { label: "Chatbot", path: "/chatbot" },
    { label: "Contact", path: "/contact" },
  ];

  const themes = [
    { value: "lavender", label: "Soft Lavender", color: "#9b87c7" },
    { value: "mint", label: "Soft Mint", color: "#7fb69e" },
    { value: "blue", label: "Soft Blue", color: "#7ba3c7" },
    { value: "peach", label: "Soft Peach", color: "#d4a89a" },
  ];

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === "lavender") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">L</span>
              </div>
              <div>
                <h1 className="text-xl font-medium text-foreground">Luneura</h1>
                <p className="text-xs text-muted-foreground">For Special Girls</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Theme Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Palette className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {themes.map((t) => (
                    <DropdownMenuItem
                      key={t.value}
                      onClick={() => handleThemeChange(t.value)}
                      className={theme === t.value ? "bg-accent" : ""}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: t.color }}
                        />
                        <span>{t.label}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Toggle */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Luneura. A safe and supportive space for special girls.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed with neurodiversity in mind.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Root;