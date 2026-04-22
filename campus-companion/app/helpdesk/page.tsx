"use client";
import { LifeBuoy } from "lucide-react";

export default function Helpdesk() {
  return (
    <div className="max-w-3xl mx-auto p-6 my-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-800 flex items-center justify-center gap-3">
          <LifeBuoy size={36} /> Anonymous Helpdesk
        </h1>
        <p className="text-lg text-slate-600 mt-3">
          Report an issue on campus. To protect your privacy, we do not ask for your name, email, or student ID.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-sky-100">
        <h2 className="text-2xl font-bold text-sky-800 mb-6">Submit a Ticket</h2>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Anonymous ticket submitted successfully!"); }}>
          
          <div>
            <label htmlFor="category" className="block text-slate-800 font-bold mb-2">Issue Category</label>
            <select id="category" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all cursor-pointer">
              <option>Wi-Fi / Internet Down</option>
              <option>Broken Equipment in Lab</option>
              <option>Heating / Facilities Issue</option>
              <option>Moodle / Blackboard Glitch</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-slate-800 font-bold mb-2">Short Description</label>
            <textarea id="description" rows={4} placeholder="Describe the problem and location..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none" required></textarea>
          </div>

          <button type="submit" className="w-full bg-sky-500 text-white font-bold py-3 rounded-lg shadow-sm hover:bg-sky-600 transition-all active:scale-95 focus:ring-4 focus:ring-sky-300">
            Submit Anonymously
          </button>
        </form>
      </div>
    </div>
  );
}