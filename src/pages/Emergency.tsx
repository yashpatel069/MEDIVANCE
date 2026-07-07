import { useState } from "react";
import { AlertTriangle, Phone, MapPin, Clock, Ambulance, HeartPulse } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import GlassCard from "@/components/GlassCard";
import { Calendar, User, FileText } from "lucide-react";
import { toast } from "sonner";

const Emergency = () => {
  const [isPressed, setIsPressed] = useState(false);

  const sidebarItems = [
    { name: "Book Appointment", path: "/appointment", icon: <Calendar size={20} /> },
    { name: "Emergency Help", path: "/emergency", icon: <AlertTriangle size={20} /> },
    { name: "My Profile", path: "/patient-dashboard", icon: <User size={20} /> },
    { name: "My Records", path: "/patient-dashboard", icon: <FileText size={20} /> },
  ];

  const handleEmergencyClick = () => {
    setIsPressed(true);
    toast.success("🚨 Emergency Alert Sent!", {
      description: "Our emergency team has been notified. Help is on the way. Please stay calm.",
      duration: 5000,
    });
    
    // Reset button state after animation
    setTimeout(() => setIsPressed(false), 1000);
  };

  const emergencyContacts = [
    { label: "Emergency Hotline", value: "911", icon: <Phone className="w-5 h-5" /> },
    { label: "Hospital Direct", value: "+1 (555) 123-4567", icon: <Phone className="w-5 h-5" /> },
    { label: "Location", value: "123 Healthcare Ave", icon: <MapPin className="w-5 h-5" /> },
    { label: "Available", value: "24/7", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Emergency Help">
      <div className="max-w-4xl mx-auto">
        {/* Emergency Button Section */}
        <GlassCard className="text-center py-12 mb-8">
          <div className="mb-8">
            <div className="inline-flex p-6 rounded-full bg-red-100 mb-6">
              <Ambulance className="w-16 h-16 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Need Immediate Help?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Press the emergency button below to alert our medical team. 
              Help will be dispatched to your location immediately.
            </p>
          </div>

          {/* Big Emergency Button */}
          <button
            onClick={handleEmergencyClick}
            className={`
              relative w-48 h-48 rounded-full 
              bg-gradient-to-br from-red-500 to-red-700 
              text-white font-bold text-xl
              shadow-[0_10px_40px_rgba(239,68,68,0.5)]
              hover:shadow-[0_15px_50px_rgba(239,68,68,0.7)]
              hover:scale-105
              active:scale-95
              transition-all duration-300
              flex flex-col items-center justify-center
              ${isPressed ? "animate-pulse scale-95" : ""}
            `}
          >
            <AlertTriangle className="w-12 h-12 mb-2" />
            <span>Emergency</span>
            <span className="text-sm font-normal">Help 🚨</span>
            
            {/* Pulse Animation Ring */}
            <span className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-30" />
          </button>

          <p className="text-sm text-muted-foreground mt-6">
            Only use in case of medical emergencies
          </p>
        </GlassCard>

        {/* Emergency Contacts */}
        <GlassCard className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-primary" />
            Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/30 hover:bg-white/50 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-semibold text-foreground">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Safety Tips */}
        <GlassCard>
          <h3 className="text-lg font-semibold text-foreground mb-4">While Waiting for Help</h3>
          <ul className="space-y-3">
            {[
              "Stay calm and remain in a safe location",
              "Keep your phone nearby and charged",
              "If possible, unlock your door for emergency responders",
              "Gather any relevant medical information or medications",
              "Have someone meet the ambulance if possible",
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </DashboardLayout>
  );
};

export default Emergency;
