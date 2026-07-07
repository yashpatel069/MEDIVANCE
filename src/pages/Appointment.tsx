import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Building2, Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const departments = [
    "Cardiology",
    "Dermatology",
    "General Medicine",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "ENT",
    "Ophthalmology",
  ];

  const doctors = {
    Cardiology: ["Dr. Emily Johnson", "Dr. Robert Williams"],
    Dermatology: ["Dr. Sarah Chen", "Dr. Lisa Brown"],
    "General Medicine": ["Dr. Michael Smith", "Dr. James Wilson"],
    Neurology: ["Dr. Amanda Taylor", "Dr. Christopher Davis"],
    Orthopedics: ["Dr. John Anderson", "Dr. Patricia Moore"],
    Pediatrics: ["Dr. Jennifer Martinez", "Dr. David Garcia"],
    ENT: ["Dr. Karen Thompson", "Dr. Mark Robinson"],
    Ophthalmology: ["Dr. Nancy Lee", "Dr. Steven White"],
  };

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "department" && { doctor: "" }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${formData.doctor} is confirmed for ${formData.date} at ${formData.time}.`,
    });

    setTimeout(() => {
      navigate("/patient-dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col hero-gradient">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
        <div className="w-full max-w-xl animate-fade-up">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <div className="glass-card p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Book Appointment
              </h1>
              <p className="text-muted-foreground">
                Schedule your visit with our specialists
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Department
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="input-glass w-full pl-12 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Doctor */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Doctor
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="input-glass w-full pl-12 appearance-none cursor-pointer"
                    required
                    disabled={!formData.department}
                  >
                    <option value="">Select Doctor</option>
                    {formData.department &&
                      doctors[formData.department as keyof typeof doctors]?.map((doc) => (
                        <option key={doc} value={doc}>{doc}</option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="input-glass w-full pl-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="input-glass w-full pl-12 appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Reason for Visit (Optional)
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms or reason..."
                  rows={3}
                  className="input-glass w-full resize-none"
                />
              </div>

              <button type="submit" className="btn-warm w-full">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
