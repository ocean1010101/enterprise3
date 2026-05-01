"use client";
import { useState, useMemo } from "react";
import { Calendar, MapPin, Clock, Bot, Filter } from "lucide-react";
import seedData from "../../data/seedData.json"; 
import { useSettings } from "../SettingsProvider";

interface CampusEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  tags?: number[];
}

export default function EventsPage() {
  const [emails, setEmails] = useState<{ [key: number]: string }>({});
  const [joinedEvent, setJoinedEvent] = useState<string | null>(null);
  
  // NEW: State to track what the user just interacted with!
  const [targetEventId, setTargetEventId] = useState<number | null>(null);
  
  const [filter, setFilter] = useState<string>("All");
  const { reducedMotion } = useSettings(); 

  const allEvents = (seedData.events || []) as CampusEvent[];

  const filteredEvents = filter === "All" 
    ? allEvents 
    : allEvents.filter(e => e.category === filter);

  // DYNAMIC ML LOGIC: Now it listens to 'targetEventId' instead of a hardcoded '1'
  const recommendations = useMemo(() => {
    // If they haven't signed up for anything yet, show nothing.
    if (!targetEventId) return [];

    const target = allEvents.find(e => e.id === targetEventId);
    if (!target || !target.tags) return [];

    const calculateDistance = (vecA: number[], vecB: number[]) => {
      return Math.sqrt(vecA.reduce((sum, val, i) => sum + Math.pow(val - vecB[i], 2), 0));
    };

    return allEvents
      // Filter out the one they just signed up for
      .filter(e => e.id !== targetEventId && e.tags)
      .map(e => ({
        ...e,
        distance: calculateDistance(target.tags!, e.tags!)
      }))
      // Sort by closest distance (most similar)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3); // Get top 3
  }, [allEvents, targetEventId]);

  const handleJoin = (e: React.FormEvent, eventTitle: string, eventId: number) => {
    e.preventDefault();
    setJoinedEvent(eventTitle);
    setEmails({ ...emails, [eventId]: "" });
    
    // THIS TRIGGERS THE ML MODEL:
    setTargetEventId(eventId);
    
    setTimeout(() => setJoinedEvent(null), 4000);
  };

  const animTransition = reducedMotion ? "" : "transition-colors duration-300";
  const animPulse = reducedMotion ? "" : "animate-pulse";

  // Helper to get the name of the event they just liked
  const targetEventName = targetEventId ? allEvents.find(e => e.id === targetEventId)?.title : "";

  return (
    <main id="main-content" className="max-w-4xl mx-auto p-6 space-y-6 my-8">
      
      <h1 className="text-4xl font-bold text-sky-800 flex items-center gap-3">
        <Calendar size={36} aria-hidden="true" /> 
        <span>Campus Events</span>
      </h1>
      
      {joinedEvent && (
        <div 
          className={`bg-green-100 text-green-800 p-4 rounded-lg font-bold border border-green-300 shadow-sm ${animTransition}`}
          role="alert" 
        >
          Successfully signed up for {joinedEvent}! A confirmation has been sent to your student email.
        </div>
      )}

      {/* ML RECOMMENDATION SECTION - ONLY APPEARS AFTER INTERACTION */}
      {recommendations.length > 0 && (
        <section className="bg-sky-50 border-2 border-sky-200 p-6 rounded-2xl shadow-sm" aria-labelledby="rec-heading">
          <div className="flex items-center gap-2 mb-2 text-sky-800 font-bold">
            <Bot size={24} aria-hidden="true" className={animPulse} /> 
            <h2 id="rec-heading">Recommended for You</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4 font-medium">
            Based on your interest in <span className="text-sky-800 font-bold">"{targetEventName}"</span>
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {recommendations.map((event) => (
              <div key={event.id} className="bg-white p-3 rounded-lg border border-sky-100 shadow-sm">
                <h3 className="font-bold text-slate-800 text-sm">{event.title}</h3>
                <span className="text-[10px] font-bold text-sky-800 uppercase bg-sky-100 px-1 rounded">{event.category}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FILTER CONTROLS */}
      <section aria-label="Event Filters" className="flex flex-wrap items-center gap-3 py-2 border-b border-slate-200">
        <div className="flex items-center gap-2 text-slate-600 font-bold mr-2">
          <Filter size={18} aria-hidden="true" />
          <span>Filter:</span>
        </div>
        {['All', 'Sports', 'Academic', 'Wellness'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-4 py-1.5 rounded-full text-sm font-bold border focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${animTransition} ${
              filter === cat 
                ? 'bg-sky-700 text-white border-sky-700' 
                : 'bg-white text-slate-600 border-slate-300 hover:border-sky-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* MAIN EVENTS GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredEvents.map((event) => (
          <article key={event.id} className={`border-2 border-slate-200 p-5 rounded-xl bg-white shadow-sm hover:border-sky-300 flex flex-col justify-between ${animTransition}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-1 rounded">
                {event.category}
              </span>
              <h2 className="text-xl font-bold text-slate-800 mt-2">{event.title}</h2>
              <div className="flex flex-col gap-1 mt-3 mb-4 text-sm text-slate-700">
                <span className="flex items-center gap-2">
                  <Clock size={16} aria-hidden="true" /> {event.date} | {event.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} aria-hidden="true" /> {event.location}
                </span>
              </div>
            </div>
            
            <form onSubmit={(e) => handleJoin(e, event.title, event.id)} className="pt-4 border-t border-slate-100 space-y-3 mt-auto">
              <label htmlFor={`email-${event.id}`} className="sr-only">Email for {event.title}</label>
              <input 
                id={`email-${event.id}`}
                type="email" 
                value={emails[event.id] || ""}
                onChange={(e) => setEmails({ ...emails, [event.id]: e.target.value })}
                placeholder="Enter student email" 
                className={`w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent ${animTransition}`}
                required 
              />
              <button 
                type="submit" 
                className={`w-full bg-sky-700 text-white font-bold py-2 rounded hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${animTransition}`}
              >
                Sign Up
              </button>
            </form>
          </article>
        ))}
        
        {filteredEvents.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-500 font-bold">
            No events found for this category.
          </div>
        )}
      </div>
    </main>
  );
}