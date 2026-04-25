"use client";
import { useState } from "react";
import { LifeBuoy } from "lucide-react";

export default function HelpDesk() {
  const [issue, setIssue] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    
    // Clear the form fields immediately
    setIssue("");
    setEmail("");
    
    // Hide the success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-12 space-y-8">
      <h1 className="text-4xl font-bold text-sky-800 flex items-center gap-3">
        <LifeBuoy size={36} /> Student Support & Helpdesk
      </h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Describe your issue</label>
            <textarea 
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="E.g., I can't connect my laptop to the campus Wi-Fi..."
              className="w-full p-3 border border-slate-300 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none min-h-[120px] resize-y"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Student Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter student email"
              className="w-full p-3 border border-slate-300 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
              required
            />
          </div>

          <button type="submit" className="w-full bg-sky-600 text-white font-bold px-4 py-3 rounded-lg hover:bg-sky-700 transition-colors">
            Submit Support Ticket
          </button>
        </form>

        {showSuccess && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg font-bold text-center">
            Ticket submitted successfully! IT Support will email you shortly.
          </div>
        )}
      </div>

      {/* Extra Contact Info Card */}
      <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
        <h2 className="text-xl font-bold text-sky-900 mb-2">Quick Contact</h2>
        <p className="text-slate-700"><strong>Location:</strong> Main Library, Ground Floor</p>
        <p className="text-slate-700"><strong>Hours:</strong> Mon-Fri, 09:00 AM - 05:00 PM</p>
        <p className="text-slate-700"><strong>Emergency IT Phone:</strong> +353 (0)1 555 0199</p>
      </div>
    </div>
  );
}