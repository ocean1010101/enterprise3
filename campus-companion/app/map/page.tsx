"use client";
import { useState, useRef, MouseEvent } from "react";
import { MapPin } from "lucide-react";

export default function CampusMap() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const startDrag = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const onDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const locations = [
    { name: "Main Entrance", top: "90%", left: "50%", color: "text-slate-800" },
    { name: "Main Lecture Hall", top: "40%", left: "45%", color: "text-sky-600" },
    { name: "Biology Lab 1", top: "25%", left: "20%", color: "text-emerald-600" },
    { name: "Chemistry Lab", top: "25%", left: "35%", color: "text-emerald-600" },
    { name: "Turing Hall (CompSci)", top: "60%", left: "20%", color: "text-sky-600" },
    { name: "Main Library", top: "50%", left: "75%", color: "text-purple-600" },
    { name: "Science Wing", top: "15%", left: "25%", color: "text-emerald-600" },
    { name: "Student Canteen", top: "75%", left: "70%", color: "text-orange-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 my-8">
      <h1 className="text-4xl font-bold text-sky-800 mb-2">Campus Blueprint</h1>
      <p className="text-slate-600 mb-6">Click and drag to explore the campus.</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map Container */}
        <div 
          className="relative w-full lg:w-3/4 h-[750px] border-2 border-sky-200 rounded-xl overflow-hidden bg-white cursor-grab active:cursor-grabbing shadow-sm"
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          ref={mapContainerRef}
        >
          <div 
            className="absolute inset-0 origin-center transition-transform duration-75 ease-out"
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px) scale(1.2)`,
              width: '100%',
              height: '100%'
            }}
          >
            {/* Expanded SVG Blueprint Background */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20 pointer-events-none">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0ea5e9" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Buildings Outline */}
              <rect x="15%" y="20%" width="30%" height="15%" fill="none" stroke="#0ea5e9" strokeWidth="3" /> {/* Science Labs */}
              <rect x="40%" y="35%" width="20%" height="25%" fill="none" stroke="#0ea5e9" strokeWidth="3" /> {/* Main Lecture */}
              <rect x="15%" y="55%" width="20%" height="20%" fill="none" stroke="#0ea5e9" strokeWidth="3" /> {/* Turing */}
              <rect x="65%" y="45%" width="25%" height="40%" fill="none" stroke="#0ea5e9" strokeWidth="3" /> {/* Library & Canteen */}
              <path d="M 45% 85% L 55% 85% L 55% 95% L 45% 95% Z" fill="none" stroke="#0ea5e9" strokeWidth="4" /> {/* Entrance */}
            </svg>

            {/* Map Markers */}
            {locations.map((loc, i) => (
              <div key={i} className="absolute flex flex-col items-center group" style={{ top: loc.top, left: loc.left }}>
                <div className={`bg-white p-0.5 rounded-full shadow-md border border-slate-100 ${loc.color}`}>
                   <MapPin size={20} fill="currentColor" className="text-white" />
                </div>
                {/* Notice loc.color is now dynamically applied to the text label below */}
                <span className={`mt-1 bg-white font-bold px-2 py-1 rounded shadow-sm text-xs border border-slate-200 pointer-events-none ${loc.color}`}>
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <h2 className="text-xl font-bold text-sky-800 mb-4">Map Legend</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><MapPin className="text-slate-800" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Entrance</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-emerald-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Science & Labs</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-sky-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Lecture Halls</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-purple-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Library / Study</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-orange-500" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Food & Dining</span></li>
            </ul>
            <button 
              onClick={() => setPosition({x:0, y:0})}
              className="mt-8 w-full bg-sky-100 text-sky-800 py-2 rounded-lg font-bold hover:bg-sky-200 transition-colors focus:ring-4 focus:ring-sky-300"
            >
              Recenter Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}