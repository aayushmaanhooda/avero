import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faPlaneUp,
  faBolt,
  faArrowsRotate,
  faClock,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const PILLARS = [
  {
    icon: faBolt,
    title: 'Roles evolve',
    body: 'Many tasks become AI-handled; people shift to judgement and oversight.',
  },
  {
    icon: faArrowsRotate,
    title: 'Processes transform',
    body: 'Repetitive, rule-based workflows become automated end to end.',
  },
  {
    icon: faClock,
    title: 'Decisions accelerate',
    body: 'AI surfaces insight in real time, reducing latency across the business.',
  },
  {
    icon: faLayerGroup,
    title: 'Functions reinvent',
    body: 'Entire departments operate with a fraction of the operational friction.',
  },
];

const JetstarPrinciple = () => {
  return (
    <section
      id="jetstar"
      className="relative isolate overflow-hidden scroll-mt-24 bg-brand-800 py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #1F487E 0%, rgba(31,72,126,0.85) 30%, rgba(31,72,126,0.4) 65%, rgba(31,72,126,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(31,72,126,0) 0%, rgba(31,72,126,0.4) 35%, rgba(31,72,126,0.85) 70%, #1F487E 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/3 -z-10 h-[420px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: 'rgba(0,187,255,0.30)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Part 1 — The question */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="h-3 w-3"
              style={{ color: ACCENT }}
            />
            The Question Every Leader Should Ask
          </span>

          <h2 className="mt-7 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            If you started your business today, with AI available from day one —{' '}
            <span
              style={{ color: ACCENT }}
              className="font-display italic font-medium"
            >
              what would it look like?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-balance text-sm leading-relaxed text-white/75 md:text-base">
            The answer is usually very different from the business you run
            today. Many roles would change. Processes would be automated.
            Decision-making would accelerate. Entire functions would operate in
            ways that are simply not possible with today's legacy structures.
          </p>
        </div>

        {/* Divider rule */}
        <div className="mx-auto mt-20 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent md:mt-24" />

        {/* Part 2 — The Jetstar Principle */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-12 lg:gap-12 md:mt-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FontAwesomeIcon
                icon={faPlaneUp}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              The Jetstar Principle
            </span>

            <h3 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Design your{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                AI-powered
              </span>{' '}
              business beside the one you run today
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              At Avreo, we call this finding your{' '}
              <span style={{ color: ACCENT }} className="font-display italic">
                Jetstar
              </span>{' '}
              — a future operating model built around what AI makes possible,
              run in parallel with the business you operate today.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md md:p-4"
              style={{
                boxShadow:
                  '0 30px 60px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <img
                src="/logo/jetstar.png"
                alt="Jetstar — designing the AI-native version of your business"
                className="block h-auto w-full rounded-2xl object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-30 blur-2xl"
                style={{ backgroundColor: 'rgba(0,187,255,0.25)' }}
              />
            </div>
          </div>
        </div>

        {/* Pillars 2x2 */}
        <ul className="mt-11 grid gap-4 md:grid-cols-2 md:gap-5">
          {PILLARS.map((p) => (
            <li
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] md:p-6"
            >
              <div
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]"
                style={{ color: ACCENT }}
              >
                <FontAwesomeIcon icon={p.icon} className="h-3.5 w-3.5" />
              </div>
              <h4 className="mt-4 text-base font-semibold text-white md:text-lg">
                {p.title}
              </h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/70 md:text-sm">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JetstarPrinciple;
