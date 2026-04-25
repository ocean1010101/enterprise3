"use client";
import { useState } from "react";
import { FileQuestion } from "lucide-react";

export default function LostAndFound() {
  const [item, setItem] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setItem("");
    setEmail("");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-12 space-y-8">
      <h1 className="text-4xl font-bold text-sky-800 flex items-center gap-3">
        <FileQuestion size={36} /> Lost & Found
      </h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">What did you lose or find?</label>
            <input 
              type="text" 
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="Enter lost item"
              className="w-full p-3 border border-slate-300 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
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
            Submit Report
          </button>
        </form>

        {showSuccess && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg font-bold text-center">
            Report submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}