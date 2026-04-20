"use client";
import { Search, Info } from "lucide-react";

export default function LostAndFound() {
  const lostItems = [
    { item: "Blue Chilly's Water Bottle", location: "Main Library, 2nd Floor", contact: "sarah.fictional@boreal.edu.fake", date: "April 19" },
    { item: "Casio Scientific Calculator", location: "Bohr Theatre", contact: "085-555-0192", date: "April 20" },
    { item: "Silver Keys on a Lanyard", location: "The Hub Canteen", contact: "security@boreal.edu.fake", date: "April 21" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 my-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Search size={36} /> Lost & Found
        </h1>
        <p className="text-xl text-blue-700 mt-2">Reuniting students with their belongings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Form Section */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Report an Item</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-blue-900 font-bold mb-1">Your Fake Name</label>
              <input type="text" id="name" placeholder="E.g. John Doe" className="w-full p-3 border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all" required/>
            </div>
            <div>
              <label htmlFor="itemDetails" className="block text-blue-900 font-bold mb-1">Item Description</label>
              <input type="text" id="itemDetails" placeholder="E.g. Red Notebook" className="w-full p-3 border-2 border-blue-200 rounded-lg text-blue-900 placeholder-blue-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all" required/>
            </div>
            <div>
              <label htmlFor="status" className="block text-blue-900 font-bold mb-1">Status</label>
              <select id="status" className="w-full p-3 border-2 border-blue-200 rounded-lg text-blue-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all cursor-pointer">
                <option>I lost this item</option>
                <option>I found this item</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-800 transition-all hover:scale-[1.02] active:scale-95 focus:ring-4 focus:ring-blue-400 mt-4">
              Submit Report
            </button>
          </form>
        </div>

        {/* List Section */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">Currently Reported Items</h2>
          <div className="space-y-4">
            {lostItems.map((entry, i) => (
              <div key={i} className="p-4 border-l-4 border-blue-900 bg-blue-50/30 rounded-r-lg shadow-sm hover:bg-blue-50 transition-colors">
                <h3 className="text-lg font-bold text-blue-900">{entry.item}</h3>
                <div className="mt-2 text-sm text-blue-800 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p><span className="font-bold">Last Seen:</span> {entry.location}</p>
                  <p><span className="font-bold">Date:</span> {entry.date}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-100 flex items-center gap-2 text-sm">
                  <Info size={16} className="text-blue-600"/>
                  <span className="font-medium text-blue-900">Contact:</span> 
                  <span className="text-blue-700">{entry.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}