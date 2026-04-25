"use client";
import { useState, useRef, MouseEvent, WheelEvent } from "react";
import { MapPin, ZoomIn, ZoomOut } from "lucide-react";

export default function CampusMap() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScale(parseFloat(e.target.value));
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const zoomSpeed = 0.1;
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + zoomSpeed, 2.5));
    } else {
      setScale((prev) => Math.max(prev - zoomSpeed, 0.5));
    }
  };

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
    { name: "Turing Hall", top: "60%", left: "20%", color: "text-sky-600" },
    { name: "Main Library", top: "50%", left: "75%", color: "text-purple-600" },
    { name: "Student Canteen", top: "75%", left: "70%", color: "text-orange-500" },
    { name: "Sports Pitch", top: "20%", left: "75%", color: "text-green-600" }, // NEW LOCATION
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 my-8">
      <h1 className="text-4xl font-bold text-sky-800 mb-2">Campus Map</h1>
      <p className="text-slate-600 mb-6">Drag to move. Click map pins to highlight. Use the slider or mouse wheel to zoom.</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map Container */}
        <div 
          className="relative w-full lg:w-3/4 h-[750px] border-2 border-sky-200 rounded-xl overflow-hidden bg-white cursor-grab active:cursor-grabbing shadow-sm"
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onWheel={handleWheel}
          ref={mapContainerRef}
        >
          <div 
            className="absolute inset-0 origin-center transition-transform duration-75 ease-out"
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              width: '100%',
              height: '100%'
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20 pointer-events-none">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0ea5e9" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect x="15%" y="20%" width="30%" height="15%" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <rect x="40%" y="35%" width="20%" height="25%" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <rect x="15%" y="55%" width="20%" height="20%" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <rect x="65%" y="45%" width="25%" height="40%" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <path d="M 45% 85% L 55% 85% L 55% 95% L 45% 95% Z" fill="none" stroke="#0ea5e9" strokeWidth="4" />
              {/* Added a box for the Sports Pitch */}
              <rect x="65%" y="15%" width="25%" height="15%" fill="none" stroke="#16a34a" strokeWidth="3" strokeDasharray="5,5" /> 
            </svg>

            {/* THE CLICKABLE BUTTON FIX IS HERE */}
            {locations.map((loc, i) => (
              <button 
                key={i} 
                className="absolute flex flex-col items-center group p-1 rounded-lg transition-transform active:scale-90 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:bg-sky-50 cursor-pointer" 
                style={{ top: loc.top, left: loc.left }}
              >
                <div className={`bg-white p-0.5 rounded-full shadow-md border border-slate-100 ${loc.color}`}>
                   <MapPin size={20} fill="currentColor" className="text-white" />
                </div>
                <span className={`mt-1 bg-white font-bold px-2 py-1 rounded shadow-sm text-xs border border-slate-200 pointer-events-none ${loc.color}`}>
                  {loc.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Controls & Legend */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <h2 className="text-xl font-bold text-sky-800 mb-4 flex items-center gap-2">
              <ZoomIn size={24} /> Zoom Controls
            </h2>
            <input 
              type="range" min="0.5" max="2.5" step="0.1" value={scale} onChange={handleZoom}
              className="w-full accent-sky-600 h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-slate-500 mt-2">
              <ZoomOut size={16} /> <ZoomIn size={16} />
            </div>
            <button 
              onClick={() => { setScale(1); setPosition({x:0, y:0}); }}
              className="mt-6 w-full bg-sky-100 text-sky-800 py-2 rounded-lg font-bold hover:bg-sky-200 transition-colors focus:ring-4 focus:ring-sky-300"
            >
              Reset Map View
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <h2 className="text-xl font-bold text-sky-800 mb-4">Map Legend</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><MapPin className="text-slate-800" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Entrance</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-emerald-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Science & Labs</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-sky-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Lecture Halls</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-purple-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Library / Study</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-orange-500" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Food & Dining</span></li>
              <li className="flex items-center gap-3"><MapPin className="text-green-600" fill="currentColor" size={20}/> <span className="text-slate-700 font-medium">Sports Pitch</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}