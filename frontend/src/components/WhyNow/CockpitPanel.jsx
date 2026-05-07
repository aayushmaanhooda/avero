const ACCENT = '#00BBFF';

const CockpitPanel = () => {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] opacity-60 blur-2xl"
        style={{ backgroundColor: 'rgba(0,187,255,0.18)' }}
      />

      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-950/70 p-6 backdrop-blur-md md:p-7"
        style={{
          boxShadow:
            '0 30px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-200">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            Cockpit · Live
          </span>
          <span className="text-white/40">AVR-2026</span>
        </div>

        <svg
          viewBox="0 0 320 320"
          className="mx-auto w-full"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="dialFace" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1F487E" />
              <stop offset="60%" stopColor="#1D3461" />
              <stop offset="100%" stopColor="#0E1C36" />
            </radialGradient>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00BBFF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#00BBFF" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1F487E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1D3461" stopOpacity="0.85" />
            </linearGradient>
            <clipPath id="dialClip">
              <circle cx="160" cy="160" r="110" />
            </clipPath>
          </defs>

          <circle cx="160" cy="160" r="138" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="160" cy="160" r="124" fill="url(#dialFace)" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />

          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i * 10 * Math.PI) / 180;
            const isMajor = i % 3 === 0;
            const r1 = isMajor ? 116 : 120;
            const r2 = 124;
            const x1 = 160 + r1 * Math.sin(a);
            const y1 = 160 - r1 * Math.cos(a);
            const x2 = 160 + r2 * Math.sin(a);
            const y2 = 160 - r2 * Math.cos(a);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isMajor ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.18)'}
                strokeWidth={isMajor ? 1.4 : 1}
              />
            );
          })}

          <g clipPath="url(#dialClip)" transform="rotate(-12 160 160)">
            <rect x="20" y="50" width="280" height="110" fill="url(#skyGrad)" />
            <rect x="20" y="160" width="280" height="120" fill="url(#groundGrad)" />
            <line x1="20" y1="160" x2="300" y2="160" stroke={ACCENT} strokeWidth="1.5" opacity="0.85" />

            {[
              { y: 100, w: 60 },
              { y: 130, w: 30 },
              { y: 190, w: 30 },
              { y: 220, w: 60 },
            ].map((p, idx) => (
              <line
                key={idx}
                x1={160 - p.w / 2}
                y1={p.y}
                x2={160 + p.w / 2}
                y2={p.y}
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
            ))}
          </g>

          <g>
            <line x1="120" y1="160" x2="146" y2="160" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="146" y1="160" x2="160" y2="172" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="160" y1="172" x2="174" y2="160" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="174" y1="160" x2="200" y2="160" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="160" cy="160" r="2.5" fill="#FFFFFF" />
          </g>

          <g transform="translate(160, 50)">
            <polygon points="0,0 -6,-10 6,-10" fill={ACCENT} />
          </g>

          <circle
            cx="160"
            cy="160"
            r="124"
            fill="none"
            stroke={ACCENT}
            strokeWidth="0.8"
            opacity="0.4"
          />
        </svg>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { label: 'ALT', value: '38,000', unit: 'FT' },
            { label: 'SPD', value: '540', unit: 'KTS' },
            { label: 'HDG', value: '028', unit: 'NE' },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-white/10 bg-brand-950/70 px-3 py-2 text-center backdrop-blur-md"
            >
              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-200">
                {r.label}
              </div>
              <div
                className="mt-0.5 font-mono text-base font-bold leading-none md:text-lg"
                style={{ color: ACCENT }}
              >
                {r.value}
              </div>
              <div className="mt-0.5 text-[9px] uppercase tracking-widest text-white/50">
                {r.unit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/45">
          <span>Auto-pilot · OFF</span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT, animationDuration: '1.5s' }}
            />
            Manual
          </span>
        </div>
      </div>
    </div>
  );
};

export default CockpitPanel;
