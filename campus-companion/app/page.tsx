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
      <div className="absolute inset-0 bg-white/85 z-0"></div>

      <div className="relative z-10 max-w-5xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 drop-shadow-sm">
          Welcome to Campus Companion
        </h1>
        <p className="text-xl text-slate-700 max-w-2xl mx-auto">
          Your centralized hub for navigating campus life without the privacy risks. We collect zero personal data.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          <Link href="/timetable" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-xl font-bold text-sky-800">Student Timetable</h2>
              <p className="text-slate-600 mt-1 text-sm">Select your group to view classes</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/canteen" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-xl font-bold text-sky-800">Canteen Menu</h2>
              <p className="text-slate-600 mt-1 text-sm">Today's specials & allergens</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/map" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-xl font-bold text-sky-800">Campus Map</h2>
              <p className="text-slate-600 mt-1 text-sm">Interactive static blueprint</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/helpdesk" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-xl font-bold text-sky-800">IT Helpdesk</h2>
              <p className="text-slate-600 mt-1 text-sm">Anonymous issue reporting</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link href="/lost-found" className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:-translate-y-1 transition-all flex justify-between items-center group focus:ring-4 focus:ring-sky-400">
            <div className="text-left">
              <h2 className="text-xl font-bold text-sky-800">Lost & Found</h2>
              <p className="text-slate-600 mt-1 text-sm">Report or claim items safely</p>
            </div>
            <ArrowRight className="text-sky-500 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}