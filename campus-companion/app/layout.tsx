import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Map, Calendar, Coffee, LifeBuoy, Search } from "lucide-react";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Companion",
  description: "Your own campus companion!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-slate-800 min-h-screen flex flex-col`}>
        {/* Navigation Bar - Light Blue Theme */}
        <nav className="bg-sky-200 text-slate-900 p-4 shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold tracking-wide focus:ring-2 focus:ring-slate-900 rounded px-2">
              Campus Companion
            </Link>
            <div className="flex flex-wrap gap-2 md:gap-6">
              <Link href="/timetable" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Calendar size={20} aria-hidden="true" /> <span>Student Timetable</span>
              </Link>
              <Link href="/canteen" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Coffee size={20} aria-hidden="true" /> <span>Canteen</span>
              </Link>
              <Link href="/map" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Map size={20} aria-hidden="true" /> <span>Map</span>
              </Link>
              <Link href="/helpdesk" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <LifeBuoy size={20} aria-hidden="true" /> <span>Helpdesk</span>
              </Link>
              <Link href="/lost-found" className="flex items-center gap-2 hover:bg-sky-300 transition-colors focus:ring-2 focus:ring-slate-900 rounded px-3 py-2 font-medium">
                <Search size={20} aria-hidden="true" /> <span>Lost & Found</span>
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
                  <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-700">
                  </div>
                </footer>
              </body>
            </html>
          );
        }