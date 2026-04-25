"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Map, Utensils, HelpCircle, FileQuestion, ArrowRight } from "lucide-react";

// Updated the Lost & Found link to /lost-found to match your folder!
const searchDatabase = [
  { title: "Archery Club Meet", type: "Event", desc: "May 19th at 15:00 - Green Space", link: "/events" },
  { title: "Volleyball Tournament", type: "Event", desc: "May 15th at 14:00 - Sports Hall", link: "/events" },
  { title: "Computing Timetable", type: "Timetable", desc: "View schedules for IT and CS", link: "/timetable" },
  { title: "Vegan Wrap", type: "Menu Item", desc: "Available today at the Main Canteen", link: "/canteen" },
  { title: "Report Lost Item", type: "Support", desc: "Submit a ticket for a lost item", link: "/lost-found" },
  { title: "IT Help Desk", type: "Support", desc: "Get help with Wi-Fi or passwords", link: "/helpdesk" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const searchResults = searchDatabase.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto p-6 space-y-12 my-8">
      
      {/* Header & Live Search Bar */}
      <div className="max-w-2xl mx-auto w-full text-center space-y-6">
        <h1 className="text-5xl font-bold text-sky-800">Your Campus Companion</h1>
        <p className="text-lg text-slate-600">Your central hub for campus life, schedules, and support.</p>
        
        <div className="relative w-full mt-8 shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={24} className="text-slate-400" />
          </div>
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for events, timetables, menu..."
            className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-lg bg-white text-slate-900"
          />
        </div>
      </div>

      {/* Conditional Rendering: Show Results OR Buttons */}
      {query.trim() !== "" ? (
        <div className="max-w-2xl mx-auto w-full space-y-3">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Search Results</h3>
          {searchResults.length > 0 ? (
            searchResults.map((res, i) => (
              <Link href={res.link} key={i}>
                <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-sky-500 transition-all flex justify-between items-center group mb-3 shadow-sm">
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{res.type}</span>
                    <h2 className="text-lg font-bold text-slate-800">{res.title}</h2>
                    <p className="text-sm text-slate-600">{res.desc}</p>
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-sky-500 transition-colors" />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-slate-500 py-8 bg-white rounded-xl border border-slate-200">No results found for "{query}"</p>
          )}
        </div>
      ) : (
        /* Navigation Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/timetable" className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
            <Calendar size={48} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-slate-800">Timetable</h2>
          </Link>
          <Link href="/canteen" className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
            <Utensils size={48} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-slate-800">Cafeteria Menu</h2>
          </Link>
          <Link href="/map" className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
            <Map size={48} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-slate-800">Campus Map</h2>
          </Link>
          <Link href="/events" className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
            <Calendar size={48} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-slate-800">Events</h2>
          </Link>
          <Link href="/helpdesk" className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
            <HelpCircle size={48} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-slate-800">Help Desk</h2>
          </Link>
          {/* Updated this button's href to /lost-found */}
          <Link href="/lost-found" className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-sky-400 transition-all group">
            <FileQuestion size={48} className="text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold text-slate-800">Lost & Found</h2>
          </Link>
        </div>
      )}
    </div>
  );
}