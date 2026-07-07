import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Home } from "lucide-react";
import logo from "@/assets/medivance-logo.png";

interface SidebarItem {
  name: string;
  path: string;
  icon: ReactNode;
}

interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: SidebarItem[];
  title: string;
}

const DashboardLayout = ({ children, sidebarItems, title }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen hero-gradient">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-panel h-16 flex items-center px-4 justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-white/30 backdrop-blur-sm"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <img src={logo} alt="Medivance" className="h-8" />
        <div className="w-10" />
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 glass-sidebar z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <img src={logo} alt="Medivance" className="h-10 mb-8" />
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-foreground/70 hover:bg-white/40 hover:text-foreground"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/70 hover:bg-white/40 transition-all duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-foreground/70 hover:bg-white/40 transition-all duration-300"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-20 lg:pt-8 p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
