import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div 
      className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 relative"
      style={{
        backgroundImage: "url('/campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light Overlay for Contrast */}
      <div className="absolute inset-0 bg-white/85 z-0"></div>

      <div className="relative z-10 max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 drop-shadow-sm">
          Welcome to Campus Companion
        </h1>
        <p className="text-xl text-slate-700 max-w-2xl mx-auto">
          Your centralized hub for navigating campus life. Access your schedules, dining menus, and essential services in one place.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto mt-12">
          <Link href="/timetable" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-sky-800">Student Timetable</h2>
              <p className="text-slate-600 mt-1">Check your daily lectures</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/canteen" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-sky-800">Canteen Menu</h2>
              <p className="text-slate-600 mt-1">Today's specials & allergens</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/map" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-sky-800">Campus Map</h2>
              <p className="text-slate-600 mt-1">Find your way around</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/helpdesk" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-sky-800">IT Helpdesk</h2>
              <p className="text-slate-600 mt-1">Submit a support ticket</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}