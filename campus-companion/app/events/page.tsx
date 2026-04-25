"use client";
import { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const mockEvents = [
  { id: 1, title: "Volleyball Tournament", date: "May 15th", time: "14:00", location: "Sports Hall", category: "Sports" },
  { id: 2, title: "Football Tryouts", date: "May 16th", time: "16:00", location: "Sports Pitch", category: "Sports" },
  { id: 3, title: "Badminton Doubles", date: "May 17th", time: "18:00", location: "Sports Hall", category: "Sports" },
  { id: 4, title: "Basketball 3v3", date: "May 18th", time: "17:00", location: "Indoor Gym", category: "Sports" },
  { id: 5, title: "Archery Club Meet", date: "May 19th", time: "15:00", location: "Green Space", category: "Sports" },
  { id: 6, title: "Study Group: Computing", date: "May 20th", time: "13:00", location: "Library Room 4", category: "Academic" },
  { id: 7, title: "Study Group: Business", date: "May 21st", time: "14:00", location: "Main Hub", category: "Academic" },
];

export default function EventsPage() {
  const [emails, setEmails] = useState<{ [key: number]: string }>({});
  const [joinedEvent, setJoinedEvent] = useState<string | null>(null);

  const handleJoin = (e: React.FormEvent, eventTitle: string, eventId: number) => {
    e.preventDefault();
    setJoinedEvent(eventTitle);
    
    // Clear only the text box that was just submitted
    setEmails({ ...emails, [eventId]: "" });
    
    // Hide the success message after 4 seconds
    setTimeout(() => setJoinedEvent(null), 4000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 my-8">
      <h1 className="text-4xl font-bold text-sky-800 flex items-center gap-3">
        <Calendar size={36} /> Campus Events
      </h1>
      
      {joinedEvent && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg font-bold border border-green-300 transition-all shadow-sm">
          Successfully signed up for {joinedEvent}! A confirmation has been sent to your student email.
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {mockEvents.map((event) => (
          <div key={event.id} className="border-2 border-slate-200 p-5 rounded-xl bg-white shadow-sm hover:border-sky-300 transition-colors">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-1 rounded">{event.category}</span>
            <h2 className="text-xl font-bold text-slate-800 mt-2">{event.title}</h2>
            <div className="flex flex-col gap-1 mt-3 mb-4 text-sm text-slate-600">
              <span className="flex items-center gap-2"><Clock size={16}/> {event.date} | {event.time}</span>
              <span className="flex items-center gap-2"><MapPin size={16}/> {event.location}</span>
            </div>
            
            <form onSubmit={(e) => handleJoin(e, event.title, event.id)} className="pt-4 border-t border-slate-100 space-y-3">
              <input 
                type="email" 
                value={emails[event.id] || ""}
                onChange={(e) => setEmails({ ...emails, [event.id]: e.target.value })}
                placeholder="Enter student email" 
                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                required 
              />
              <button type="submit" className="w-full bg-sky-600 text-white font-bold py-2 rounded hover:bg-sky-700 transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}