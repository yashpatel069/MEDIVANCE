import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, UserCircle, Stethoscope, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

type UserRole = "patient" | "doctor" | "admin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("patient");
  const navigate = useNavigate();
  const { toast } = useToast();

  const roles = [
    { id: "patient" as UserRole, label: "Patient", icon: <UserCircle size={20} /> },
    { id: "doctor" as UserRole, label: "Doctor", icon: <Stethoscope size={20} /> },
    { id: "admin" as UserRole, label: "Admin", icon: <ShieldCheck size={20} /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo navigation based on role
    const routes = {
      patient: "/patient-dashboard",
      doctor: "/doctor-dashboard",
      admin: "/admin-dashboard",
    };

    toast({
      title: "Login Successful",
      description: `Welcome back! Redirecting to ${selectedRole} dashboard...`,
    });

    setTimeout(() => {
      navigate(routes[selectedRole]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col hero-gradient">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        <div className="w-full max-w-md animate-fade-up">
          <div className="glass-card p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to access your dashboard
              </p>
            </div>

            {/* Role Selection */}
            <div className="flex gap-2 mb-6 p-1 bg-white/30 rounded-xl">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    selectedRole === role.id
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-foreground/70 hover:bg-white/40"
                  }`}
                >
                  {role.icon}
                  <span className="hidden sm:inline">{role.label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-glass w-full pl-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input-glass w-full pl-12"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border accent-primary"
                  />
                  <span className="text-foreground/80">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-warm w-full">
                Sign In
              </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
