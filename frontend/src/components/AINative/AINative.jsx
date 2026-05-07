import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShuffle,
  faWandMagicSparkles,
  faChartLine,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const PILLARS = [
  {
    icon: faShuffle,
    title: 'Built around AI strengths',
    body:
      'Workflows are inverted so AI performs the heavy lifting by default. People step in only where judgement, creativity or governance is genuinely required.',
  },
  {
    icon: faWandMagicSparkles,
    title: 'AI at the centre',
    body:
      'Natural language becomes the interface to the business. Teams interact through conversation, guided actions and intelligent recommendations.',
  },
  {
    icon: faChartLine,
    title: 'Data designed for intelligence',
    body:
      'Events and interactions are structured so AI systems can learn continuously — data becomes the foundation for compounding improvement.',
  },
  {
    icon: faRobot,
    title: 'Agentic behaviour',
    body:
      'AI systems monitor conditions, initiate work and execute tasks automatically — proactive, tireless and precise.',
  },
];

const AINative = () => {
  return (
    <section
      id="ai-native"
      className="relative isolate overflow-hidden scroll-mt-24 bg-brand-800 py-16 sm:py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #1D3461 0%, rgba(29,52,97,0.85) 30%, rgba(29,52,97,0.4) 65%, rgba(31,72,126,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ backgroundColor: 'rgba(0,187,255,0.18)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: 'rgba(98,144,200,0.25)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 120px)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(29,52,97,0) 0%, rgba(29,52,97,0.4) 35%, rgba(29,52,97,0.85) 70%, #1D3461 100%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-12 lg:px-20 2xl:max-w-[1280px]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <FontAwesomeIcon
              icon={faRobot}
              className="h-3 w-3"
              style={{ color: ACCENT }}
            />
            The AI-Native
          </span>

          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            What an{' '}
            <span
              style={{ color: ACCENT }}
              className="font-display italic font-medium"
            >
              AI-native
            </span>{' '}
            business looks like
          </h2>

          <p className="mt-5 text-balance text-sm leading-relaxed text-white/70 md:text-base">
            Faster insight, better decisions, dramatically lower operational
            friction — a compounding advantage that widens over time.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {PILLARS.map((p, i) => (
            <li key={p.title} className="group relative flex">
              <div className="relative flex h-full w-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/[0.07]">
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-5 font-display text-[11px] italic text-white/40"
                >
                  0{i + 1}
                </span>

                <div
                  className="mt-7 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition"
                  style={{
                    borderColor: 'rgba(0,187,255,0.35)',
                    backgroundColor: 'rgba(0,187,255,0.08)',
                  }}
                >
                  <FontAwesomeIcon
                    icon={p.icon}
                    aria-hidden="true"
                    className="h-4 w-4"
                    style={{ color: ACCENT }}
                  />
                </div>

                <div className="mt-7 flex-1">
                  <h3 className="text-base font-semibold tracking-tight text-white md:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/65 md:text-sm">
                    {p.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs italic text-white/55 md:text-sm">
          AI-native is not a feature you bolt on — it is the operating shape of
          the company.
        </p>
      </div>
    </section>
  );
};

export default AINative;
