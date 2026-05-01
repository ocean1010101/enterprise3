"use client";
import { useState } from "react";
import { LifeBuoy } from "lucide-react";
import { useSettings } from "../SettingsProvider"; // Added import

export default function HelpDesk() {
  const [issue, setIssue] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  
  // ACCESSIBILITY: Pulls in the reduced motion preference
  const { reducedMotion } = useSettings();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    
    // Clear the form fields immediately
    setIssue("");
    setEmail("");
    
    // Hide the success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // ACCESSIBILITY: Disables CSS animations if reduced motion is checked
  const animTransition = reducedMotion ? "" : "transition-colors duration-300";

  return (
    <div className="max-w-xl mx-auto p-6 my-12 space-y-8">
      <h1 className="text-4xl font-bold text-sky-800 flex items-center gap-3">
        {/* ACCESSIBILITY: Hide decorative icon from screen readers */}
        <LifeBuoy size={36} aria-hidden="true" /> Student Support & Helpdesk
      </h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* ACCESSIBILITY: htmlFor explicitly links label to the textarea ID */}
            <label htmlFor="issueText" className="block text-sm font-bold text-slate-700 mb-2">Describe your issue</label>
            <textarea 
              id="issueText"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="E.g., I can't connect my laptop to the campus Wi-Fi..."
              // ACCESSIBILITY: Added focus offset for better contrast
              className="w-full p-3 border border-slate-300 bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 min-h-[120px] resize-y"
              required
            />
          </div>

          <div>
            {/* ACCESSIBILITY: htmlFor explicitly links label to the input ID */}
            <label htmlFor="studentEmail" className="block text-sm font-bold text-slate-700 mb-2">Student Email</label>
            <input 
              id="studentEmail"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter student email"
              // ACCESSIBILITY: Added focus offset for better contrast
              className="w-full p-3 border border-slate-300 bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              required
            />
          </div>

          <button 
            type="submit" 
            // ACCESSIBILITY: Added full keyboard focus rings and transition toggle
            className={`w-full bg-sky-600 text-white font-bold px-4 py-3 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${animTransition}`}
          >
            Submit Support Ticket
          </button>
        </form>

        {showSuccess && (
          <div 
            // ACCESSIBILITY: role="alert" forces screen readers to read this out loud immediately when it appears
            role="alert"
            className={`mt-6 p-4 bg-green-100 text-green-800 rounded-lg font-bold text-center ${animTransition}`}
          >
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