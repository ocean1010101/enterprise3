"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function LostAndFound() {
  const [claimedItems, setClaimedItems] = useState<number[]>([]);

  const lostItems = [
    { id: 1, item: "Blue Chilly's Water Bottle", location: "Main Library, 2nd Floor", date: "Yesterday" },
    { id: 2, item: "Casio Scientific Calculator", location: "Bohr Theatre", date: "Monday" },
    { id: 3, item: "Silver Keys on a Lanyard", location: "The Hub Canteen", date: "Last Week" },
  ];

  const handleClaim = (id: number) => {
    setClaimedItems([...claimedItems, id]);
    alert("Claim request sent to security desk. Please visit them in person to verify ownership.");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 my-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-800 flex items-center justify-center gap-3">
          <Search size={36} /> Lost & Found
        </h1>
       
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Form Section */}
        <div className="bg-sky-50 p-8 rounded-xl shadow-sm border border-sky-100 h-fit">
          <h2 className="text-2xl font-bold text-sky-800 mb-6">Report a Found Item</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Item reported! Please drop it off at the security desk."); }}>
            <div>
              <label htmlFor="itemDetails" className="block text-slate-800 font-bold mb-1">Item Description</label>
              <input type="text" id="itemDetails" placeholder="E.g. Red Notebook" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required/>
            </div>
            <div>
              <label htmlFor="location" className="block text-slate-800 font-bold mb-1">Where did you find it?</label>
              <input type="text" id="location" placeholder="E.g. Turing Hall, Row 3" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required/>
            </div>
            <button type="submit" className="w-full bg-sky-500 text-white font-bold py-3 rounded-lg shadow-sm hover:bg-sky-600 transition-all active:scale-95 focus:ring-4 focus:ring-sky-300 mt-4">
              Submit Report
            </button>
          </form>
        </div>

        {/* List Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-sky-100">
          <h2 className="text-2xl font-bold text-sky-800 mb-6 border-b border-sky-100 pb-2">Currently Held at Security</h2>
          <div className="space-y-4">
            {lostItems.map((entry) => {
              const isClaimed = claimedItems.includes(entry.id);
              return (
                <div key={entry.id} className="p-4 border-l-4 border-sky-500 bg-slate-50 rounded-r-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{entry.item}</h3>
                    <p className="text-sm text-slate-600 mt-1">Found: {entry.location} • {entry.date}</p>
                  </div>
                  <button 
                    onClick={() => handleClaim(entry.id)}
                    disabled={isClaimed}
                    className={`px-4 py-2 rounded font-bold shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 whitespace-nowrap ${
                      isClaimed 
                      ? "bg-slate-300 text-slate-500 cursor-not-allowed" 
                      : "bg-sky-500 text-white hover:bg-sky-600 hover:scale-105 active:scale-95"
                    }`}
                  >
                    {isClaimed ? "Claim Requested" : "Claim Item"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}