import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  dimensions: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-video" or "aspect-[4/3]"
  url?: string;
  showOverlayOnHover?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  dimensions,
  className = "",
  aspectRatio = "aspect-video",
  url,
  showOverlayOnHover = true
}) => {
  if (url) {
    return (
      <div className={`relative w-full ${aspectRatio} bg-white/5 border border-white/10 rounded-xl overflow-hidden group ${className}`}>
        <img
          src={url}
          alt={label}
          className="w-full h-full object-cover"
        />

        {showOverlayOnHover && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 text-center">
              <p className="text-lg font-medium text-white/90">{label}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Fallback Placeholder UI
  return (
    <div className={`relative w-full ${aspectRatio} bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group ${className}`}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_20px)]"></div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white/80 transition-colors">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-medium text-white/90">{label}</p>
          <p className="text-sm font-mono text-white/50">{dimensions}</p>
        </div>
      </div>
    </div>
  );
};
