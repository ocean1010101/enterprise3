"use client";
import { useState } from "react";

const scheduleData = {
  "Group 1": {
    Monday: [{ time: "09:00 - 11:00", module: "Intro to Algorithms", room: "Turing Hall" }, { time: "11:00 - 13:00", module: "Data Structures", room: "Lab 4" }, { time: "14:00 - 16:00", module: "Web Dev Workshop", room: "Lab 1" }],
    Tuesday: [{ time: "10:00 - 12:00", module: "Discrete Math", room: "Room 204" }, { time: "13:00 - 15:00", module: "Study Period", room: "Library" }],
    Wednesday: [{ time: "09:00 - 12:00", module: "Systems Architecture", room: "Lovelace Theatre" }, { time: "13:00 - 16:00", module: "Database Design", room: "Room 101" }],
    Thursday: [{ time: "11:00 - 13:00", module: "Software Engineering", room: "Room 305" }],
    Friday: [{ time: "09:00 - 11:00", module: "Ethics in Tech", room: "Main Hall" }, { time: "12:00 - 14:00", module: "Group Project", room: "Hub B" }],
  },
  "Group 2": {
    Monday: [{ time: "10:00 - 13:00", module: "Physics 101", room: "Newton Lab" }, { time: "14:00 - 16:00", module: "Calculus", room: "Room 201" }],
    Tuesday: [{ time: "09:00 - 12:00", module: "Applied Math", room: "Room 202" }, { time: "13:00 - 16:00", module: "Lab Session", room: "Lab 7" }],
    Wednesday: [{ time: "11:00 - 14:00", module: "Quantum Mechanics", room: "Bohr Theatre" }],
    Thursday: [{ time: "09:00 - 11:00", module: "Thermodynamics", room: "Room 301" }, { time: "12:00 - 14:00", module: "Study Period", room: "Library" }, { time: "14:00 - 16:00", module: "Physics 101 Tutorial", room: "Room 201" }],
    Friday: [{ time: "10:00 - 12:00", module: "Math Tutorial", room: "Room 105" }],
  },
  "Group 3": {
    Monday: [{ time: "09:00 - 12:00", module: "Creative Writing", room: "Room 40A" }, { time: "13:00 - 16:00", module: "Modern Literature", room: "Joyce Hall" }],
    Tuesday: [{ time: "11:00 - 13:00", module: "Poetry Seminar", room: "Room 40B" }],
    Wednesday: [{ time: "09:00 - 11:00", module: "Journalism Basics", room: "Media Lab" }, { time: "12:00 - 14:00", module: "Publishing", room: "Room 102" }, { time: "14:00 - 16:00", module: "Study Period", room: "Library" }],
    Thursday: [{ time: "10:00 - 13:00", module: "Shakespeare", room: "Globe Theatre" }],
    Friday: [{ time: "09:00 - 12:00", module: "Creative Workshop", room: "Room 40A" }, { time: "13:00 - 16:00", module: "Peer Review", room: "Hub A" }],
  },
  "Group 4": {
    Monday: [{ time: "11:00 - 13:00", module: "Microeconomics", room: "Keynes Hall" }],
    Tuesday: [{ time: "09:00 - 11:00", module: "Macroeconomics", room: "Room 501" }, { time: "12:00 - 14:00", module: "Business Law", room: "Room 502" }, { time: "14:00 - 16:00", module: "Marketing", room: "Room 503" }],
    Wednesday: [{ time: "10:00 - 13:00", module: "Accounting Fundamentals", room: "Lab 2" }, { time: "14:00 - 16:00", module: "Study Period", room: "Library" }],
    Thursday: [{ time: "09:00 - 12:00", module: "Corporate Finance", room: "Keynes Hall" }, { time: "13:00 - 16:00", module: "Management Principles", room: "Room 501" }],
    Friday: [{ time: "10:00 - 12:00", module: "Business Ethics", room: "Room 505" }],
  }
};

export default function Timetable() {
  const [selectedGroup, setSelectedGroup] = useState<keyof typeof scheduleData>("Group 1");
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="max-w-6xl mx-auto p-6 my-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-900">Class Timetable</h1>
          <p className="text-blue-700 mt-2">Select your group to view your schedule.</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <label htmlFor="group-select" className="sr-only">Select Group</label>
          <select 
            id="group-select"
            value={selectedGroup} 
            onChange={(e) => setSelectedGroup(e.target.value as keyof typeof scheduleData)}
            className="bg-white border-2 border-blue-900 text-blue-900 font-bold py-2 px-4 rounded-lg focus:ring-4 focus:ring-blue-400 outline-none cursor-pointer"
          >
            {Object.keys(scheduleData).map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-8">
        {days.map(day => (
          <div key={day} className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
            <h2 className="bg-blue-900 text-white p-4 text-xl font-bold">{day}</h2>
            <div className="p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-50 text-blue-900 border-b border-blue-200">
                    <th className="p-4 font-bold w-1/4">Time</th>
                    <th className="p-4 font-bold w-2/4">Module</th>
                    <th className="p-4 font-bold w-1/4">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData[selectedGroup][day as keyof typeof scheduleData["Group 1"]].map((slot, index) => (
                    <tr key={index} className="border-b border-blue-50 hover:bg-blue-50/50 transition-colors">
                      <td className="p-4 font-medium text-blue-800">{slot.time}</td>
                      <td className="p-4 text-blue-900">{slot.module}</td>
                      <td className="p-4 text-blue-700">{slot.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}