"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react"; 

const sitePages = [
  { name: "Timetable", path: "/timetable", desc: "View your weekly class schedule" },
  { name: "Cafeteria Menu", path: "/menu", desc: "Check today's food options" },
  { name: "Student Support & Helpdesk", path: "/helpdesk", desc: "Get help from IT or faculty" },
  { name: "Campus Events", path: "/events", desc: "Sign up for sports, fairs, etc." },
  { name: "Campus Map", path: "/map", desc: "Find your way around Boreal University" },
  { name: "Lost and Found", path: "/lost-and-found", desc: "Report or find missing items" }
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredPages = sitePages.filter(page => 
    page.name.toLowerCase().includes(query.toLowerCase()) || 
    page.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Search size={32} className="text-sky-800" />
        <h1 className="text-3xl font-bold text-sky-800">Search Boreal Portal</h1>
      </div>
      
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for timetable, menu, events..." 
        className="w-full p-4 border-2 border-slate-300 rounded-xl text-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm"
      />

      <div className="space-y-3">
        {filteredPages.length > 0 ? (
          filteredPages.map((page) => (
            <Link href={page.path} key={page.name}>
              <div className="p-4 border border-slate-200 rounded-lg hover:border-sky-500 hover:bg-sky-50 transition-colors block mt-3 cursor-pointer bg-white">
                <h2 className="text-xl font-bold text-slate-800">{page.name}</h2>
                <p className="text-slate-600">{page.desc}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-slate-500 text-center py-8">No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
}