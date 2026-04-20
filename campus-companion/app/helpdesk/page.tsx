"use client";
import { LifeBuoy, Clock, MapPin, Mail, Phone } from "lucide-react";

export default function Helpdesk() {
  return (
    <div className="max-w-6xl mx-auto p-6 my-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-800 flex items-center justify-center gap-3">
          <LifeBuoy size={36} /> IT & Student Helpdesk
        </h1>
        <p className="text-xl text-slate-600 mt-2">We are here to help you sort out your tech and campus issues.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info & Hours */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <h2 className="text-xl font-bold text-sky-800 mb-4 border-b border-sky-100 pb-2">Availability Hours</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <Clock className="text-sky-500 mt-1" size={20} />
                <div>
                  <p className="font-bold">Online Support (Tickets & Email)</p>
                  <p className="text-sm">Monday - Friday: 08:00 AM - 08:00 PM</p>
                  <p className="text-sm">Weekends: 10:00 AM - 04:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-500 mt-1" size={20} />
                <div>
                  <p className="font-bold">In-Person Support</p>
                  <p className="text-sm">Monday - Friday: 09:00 AM - 05:00 PM</p>
                  <p className="text-sm">Location: Turing Hall, Room 102</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
            <h2 className="text-xl font-bold text-sky-800 mb-4 border-b border-sky-100 pb-2">Direct Contact</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <Phone className="text-sky-500" size={20} />
                <span className="font-medium">+353 (0)1 555 8822</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-500" size={20} />
                <span className="font-medium">helpdesk@boreal.edu.fake</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ticket Submission Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-sky-100">
          <h2 className="text-2xl font-bold text-sky-800 mb-6">Submit a Support Ticket</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="studentName" className="block text-slate-800 font-bold mb-1">Full Name</label>
                <input type="text" id="studentName" placeholder="e.g. Jane Doe" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required/>
              </div>
              <div>
                <label htmlFor="studentId" className="block text-slate-800 font-bold mb-1">Student ID (Fake)</label>
                <input type="text" id="studentId" placeholder="e.g. B00123456" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all" required/>
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-slate-800 font-bold mb-1">Issue Category</label>
              <select id="category" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all cursor-pointer">
                <option>Wi-Fi Connection Issues</option>
                <option>Student Email Access</option>
                <option>Moodle / Blackboard Login</option>
                <option>Lost ID Card</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-slate-800 font-bold mb-1">Issue Description</label>
              <textarea id="description" rows={5} placeholder="Please describe your issue in detail..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none" required></textarea>
            </div>

            <button type="submit" className="w-full md:w-auto bg-sky-500 text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-sky-600 transition-all hover:-translate-y-0.5 active:scale-95 focus:ring-4 focus:ring-sky-300">
              Submit Ticket
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}