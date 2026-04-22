import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Canteen() {
  const basicMenu = [
    { name: "Classic Beef Burger & Fries", price: "€6.50", allergens: "Gluten, Dairy" },
    { name: "Vegan Falafel Wrap", price: "€5.00", allergens: "Gluten, Sesame" },
    { name: "Chicken Caesar Salad", price: "€5.50", allergens: "Dairy, Egg, Gluten" },
    { name: "Soup of the Day w/ Bread", price: "€3.50", allergens: "Varies (Ask Staff)" },
  ];

  const specialMenu = [
    { name: "Tuesday Special: Chicken Tikka Masala w/ Rice", price: "€7.00", allergens: "Dairy" },
    { name: "Dessert: Warm Apple Crumble", price: "€3.00", allergens: "Gluten, Dairy" }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 my-8 space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-sky-100 text-center">
        <h1 className="text-4xl font-bold text-sky-800 mb-2">The Hub Canteen</h1>
        <p className="text-xl text-slate-600 mb-4">Fresh food daily on campus.</p>
        
        <Link 
          href="/map" 
          className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-6 py-2 rounded-full font-bold shadow-sm hover:bg-sky-600 transition-colors focus:ring-4 focus:ring-sky-300 outline-none"
          aria-label="View Canteen location on Campus Map"
        >
          <MapPin size={18} /> Open Monday - Friday | 08:00 AM - 06:00 PM (View on Map)
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Daily Specials (Fixed: Removed the stretching classes) */}
        <div className="md:col-span-1 bg-sky-50 p-6 rounded-xl shadow-md border-2 border-sky-200 flex flex-col">
          <h2 className="text-2xl font-bold text-sky-900 mb-4 border-b-2 border-sky-200 pb-2">Today's Specials</h2>
          <p className="text-sm text-sky-700 mb-4 font-medium italic">Available 12:00 PM - 02:00 PM only.</p>
          <ul className="space-y-4">
            {specialMenu.map((item, i) => (
              <li key={i} className="bg-white p-4 rounded shadow-sm border border-sky-100">
                <div className="flex justify-between items-start font-bold text-slate-800 gap-2">
                  <span className="leading-tight">{item.name}</span>
                  <span className="text-sky-700 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-xs text-red-600 mt-3 font-bold">Allergens: {item.allergens}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Basic Menu (Kept the perfect grid alignment) */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md border border-sky-100">
          <h2 className="text-2xl font-bold text-sky-900 mb-4 border-b border-sky-100 pb-2">Everyday Menu</h2>
          <p className="text-sm text-slate-600 mb-6 font-medium">Available 11:00 AM - 05:00 PM.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {basicMenu.map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-slate-50 border border-slate-100 hover:bg-sky-50/50 transition-colors flex flex-col justify-between h-full">
                <div className="flex justify-between items-start font-bold text-slate-800 text-lg gap-2">
                  <h3 className="leading-tight">{item.name}</h3>
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-red-600 mt-3 font-bold">
                  Allergens: {item.allergens}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}