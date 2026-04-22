import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Map, Calendar, Coffee, LifeBuoy, Search } from "lucide-react";

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
      <body className={`${roboto.className} bg-white text-slate-800 min-h-screen flex flex-col`}>
        {/* Navigation Bar */}
        <nav className="bg-sky-200 text-slate-900 p-4 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold tracking-wide focus:ring-2 focus:ring-slate-900 rounded px-2">
              Campus Companion
            </Link>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Link href="/timetable" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Calendar size={18} aria-hidden="true" /> <span className="hidden sm:inline">Timetable</span>
              </Link>
              <Link href="/canteen" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Coffee size={18} aria-hidden="true" /> <span className="hidden sm:inline">Canteen</span>
              </Link>
              <Link href="/map" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Map size={18} aria-hidden="true" /> <span className="hidden sm:inline">Map</span>
              </Link>
              <Link href="/helpdesk" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <LifeBuoy size={18} aria-hidden="true" /> <span className="hidden sm:inline">Helpdesk</span>
              </Link>
              <Link href="/lost-found" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Search size={18} aria-hidden="true" /> <span className="hidden sm:inline">Lost & Found</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow w-full bg-slate-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
          <div className="bg-sky-200 text-slate-800 font-medium text-center p-4 text-sm">
            © 2026 Campus Companion | Fictional Data Only | Built for CA3
          </div>
        </footer>
      </body>
    </html>
  );
}