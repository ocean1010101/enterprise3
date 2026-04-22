import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Map, Calendar, Coffee, LifeBuoy, Search, Settings } from "lucide-react";
import { SettingsProvider } from "./SettingsProvider";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Companion",
  description: "Your guide to campus life at Boreal University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-slate-800 min-h-screen flex flex-col transition-colors duration-300`}>
        <SettingsProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:p-4 focus:bg-sky-900 focus:text-white focus:font-bold focus:outline-none focus:ring-4 focus:ring-sky-400">
            Skip to main content
          </a>

          <nav className="bg-sky-200 text-slate-900 p-4 shadow-sm sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Increased Text Size for Header to text-4xl */}
              <Link href="/" className="text-4xl font-extrabold tracking-wide focus:ring-2 focus:ring-slate-900 rounded px-2">
                Campus Companion
              </Link>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Link href="/timetable" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                  <Calendar size={18} aria-hidden="true" /> <span className="hidden lg:inline">Timetable</span>
                </Link>
                <Link href="/canteen" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                  <Coffee size={18} aria-hidden="true" /> <span className="hidden lg:inline">Canteen</span>
                </Link>
                <Link href="/map" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                  <Map size={18} aria-hidden="true" /> <span className="hidden lg:inline">Map</span>
                </Link>
                <Link href="/helpdesk" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                  <LifeBuoy size={18} aria-hidden="true" /> <span className="hidden lg:inline">Helpdesk</span>
                </Link>
                <Link href="/lost-found" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                  <Search size={18} aria-hidden="true" /> <span className="hidden lg:inline">Lost & Found</span>
                </Link>
                <Link href="/settings" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                  <Settings size={18} aria-hidden="true" /> <span className="hidden lg:inline">Settings</span>
                </Link>
              </div>
            </div>
          </nav>

          <main id="main-content" className="flex-grow w-full bg-slate-50 outline-none transition-colors duration-300" tabIndex={-1}>
            {children}
          </main>

          <footer className="bg-slate-100 border-t border-slate-200 mt-auto transition-colors duration-300">
            <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-700">
              <div>
                <h3 className="font-bold text-lg mb-4 text-slate-900">Contact Support</h3>
                <p className="mb-2">Email: support@boreal.edu.fake</p>
                <p>Phone: +353 (0)1 555 0199</p>
              </div>
              <div>
                {/* Removed "(Quick Links)" as requested */}
                <h3 className="font-bold text-lg mb-4 text-slate-900">Site Map</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li><Link href="/" className="hover:underline focus:ring-2 rounded outline-none">Home</Link></li>
                  <li><Link href="/timetable" className="hover:underline focus:ring-2 rounded outline-none">Timetable</Link></li>
                  <li><Link href="/canteen" className="hover:underline focus:ring-2 rounded outline-none">Canteen</Link></li>
                  <li><Link href="/map" className="hover:underline focus:ring-2 rounded outline-none">Campus Map</Link></li>
                  <li><Link href="/settings" className="hover:underline focus:ring-2 rounded outline-none">Settings</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-slate-900">Campus Security</h3>
                <p className="mb-2">Emergency: +353 (0)1 555 9999</p>
                <p className="mb-2">Office: North Wing, Room 101</p>
              </div>
            </div>
            <div className="bg-sky-200 text-slate-800 font-medium text-center p-4 text-sm transition-colors duration-300">
              © 2026 Campus Companion | Fictional Data Only | Built for CA3
            </div>
          </footer>
        </SettingsProvider>
      </body>
    </html>
  );
}