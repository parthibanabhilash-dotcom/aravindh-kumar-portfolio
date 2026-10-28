import React from 'react';


export default function PalettePill({ activeAccent, onSelectAccent }) {
  const colors = [
    { id: 'indigo', name: 'Electric Indigo', hex: '#6366f1', ring: 'ring-[#6366f1]' },
    { id: 'emerald', name: 'Emerald Teal', hex: '#10b981', ring: 'ring-[#10b981]' },
    { id: 'purple', name: 'Vibrant Violet', hex: '#a855f7', ring: 'ring-[#a855f7]' },
    { id: 'rose', name: 'Coral Rose', hex: '#f43f5e', ring: 'ring-[#f43f5e]' },
    { id: 'amber', name: 'Warm Amber', hex: '#f59e0b', ring: 'ring-[#f59e0b]' },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 px-3.5 py-2 rounded-full flex items-center gap-2.5 transition-transform hover:scale-105">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider pr-1">
          Palette:
        </span>
        <div className="flex items-center gap-2">
          {colors.map((c) => {
            const isActive = activeAccent === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-label={`Use ${c.name} palette`}
                aria-pressed={isActive}
                onClick={() => onSelectAccent && onSelectAccent(c.id)}
                title={`${c.name} (${c.hex})`}
                className={`relative w-5 h-5 rounded-full transition-all duration-200 transform hover:scale-125 cursor-pointer ${
                  isActive ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : ''
                }`}
                style={{ backgroundColor: c.hex }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

