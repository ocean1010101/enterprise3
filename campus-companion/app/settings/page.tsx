"use client";
import { useSettings } from "../SettingsProvider";
import { Settings, Eye, Type } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme, textSize, setTextSize } = useSettings();

  return (
    <div className="max-w-4xl mx-auto p-6 my-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-800 flex items-center justify-center gap-3">
          <Settings size={36} /> Accessibility Settings
        </h1>
        <p className="text-lg text-slate-600 mt-3">Customize your experience. Changes apply immediately across the entire app.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Appearance Settings */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-sky-100">
          <h2 className="text-2xl font-bold text-sky-800 mb-6 flex items-center gap-2 border-b border-sky-100 pb-2">
            <Eye size={24} /> Appearance
          </h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="font-bold">Standard Light Mode</span>
              <input type="radio" name="theme" value="light" checked={theme === "light"} onChange={() => setTheme("light")} className="w-5 h-5 accent-sky-600" />
            </label>
            <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="font-bold">Midnight Dark Mode (X Style)</span>
              <input type="radio" name="theme" value="midnight" checked={theme === "midnight"} onChange={() => setTheme("midnight")} className="w-5 h-5 accent-sky-600" />
            </label>
            <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <span className="font-bold">High Contrast Mode</span>
              <input type="radio" name="theme" value="contrast" checked={theme === "contrast"} onChange={() => setTheme("contrast")} className="w-5 h-5 accent-sky-600" />
            </label>
          </div>
        </div>

        {/* Text Settings */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-sky-100">
          <h2 className="text-2xl font-bold text-sky-800 mb-6 flex items-center gap-2 border-b border-sky-100 pb-2">
            <Type size={24} /> Text Size
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="text-size-slider" className="font-bold text-slate-800 flex justify-between items-end">
                <span>Adjust Application Text Size</span>
                <span className="text-sky-600 bg-sky-100 px-2 py-1 rounded text-sm">{textSize}px</span>
              </label>
              
              <input 
                id="text-size-slider"
                type="range" 
                min="12" 
                max="24" 
                step="1" 
                value={textSize} 
                onChange={(e) => setTextSize(parseInt(e.target.value))}
                className="w-full accent-sky-600 h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer"
                aria-label="Text Size Slider"
              />
              
              <div className="flex justify-between text-sm text-slate-500 font-medium px-1">
                <span className="text-xs">A (Small)</span>
                <span>Default</span>
                <span className="text-lg">A (Large)</span>
              </div>
            </div>

            <button 
              onClick={() => setTextSize(16)}
              className="mt-4 w-full bg-sky-50 text-sky-700 border border-sky-200 py-2 rounded-lg font-bold hover:bg-sky-100 transition-colors focus:ring-4 focus:ring-sky-300 outline-none"
            >
              Reset to Default (16px)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}