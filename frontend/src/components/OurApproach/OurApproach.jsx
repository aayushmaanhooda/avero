import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faGears,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const STEPS = [
  {
    n: '01',
    phase: 'Discover',
    icon: faCompass,
    title: 'Discover your AI-native future',
    body:
      'We work with leadership teams to imagine the AI-native version of their company — future operating models, AI workforce design, and where AI can fundamentally change how the business runs.',
  },
  {
    n: '02',
    phase: 'Augment',
    icon: faGears,
    title: 'Augment your existing business',
    body:
      'We introduce AI capabilities into real workflows — AI agents, intelligent automation, decision support and new AI-powered products. Removing operational drag so your people focus on higher-value work.',
  },
  {
    n: '03',
    phase: 'Build',
    icon: faRocket,
    title: 'Build the next generation AI company',
    body:
      'We design and build the AI-native capabilities that will define your future business — new products, new operating models, new ways of working.',
  },
];

const OurApproach = () => {
  return (
    <section
      id="our-approach"
      className="relative isolate overflow-hidden scroll-mt-24 bg-brand-950 py-16 md:py-20"
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
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(0,187,255,0.08) 0%, rgba(0,187,255,0) 35%, rgba(31,72,126,0) 65%, rgba(98,144,200,0.10) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: 'rgba(0,187,255,0.18)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
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

      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <FontAwesomeIcon
              icon={faCompass}
              className="h-3 w-3"
              style={{ color: ACCENT }}
            />
            Our Approach
          </span>

          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            How{' '}
            <span
              style={{ color: ACCENT }}
              className="font-display italic font-medium"
            >
              Avreo
            </span>{' '}
            helps you get there
          </h2>

          <p className="mt-5 text-balance text-sm leading-relaxed text-white/70 md:text-base">
            It starts with understanding what your future could look like — then
            progressively building towards it.
          </p>
        </div>

        <ol className="relative mt-10 md:mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[24px] top-3 bottom-3 w-px md:left-[32px]"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(0,187,255,0) 0%, rgba(0,187,255,0.4) 12%, rgba(0,187,255,0.4) 88%, rgba(0,187,255,0) 100%)',
            }}
          />

          {STEPS.map((s) => (
            <li key={s.n} className="group relative">
              <div className="flex items-start gap-4 py-3 md:gap-5 md:py-4">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-brand-950 backdrop-blur-md md:h-16 md:w-16">
                  <FontAwesomeIcon
                    icon={s.icon}
                    aria-hidden="true"
                    className="h-4 w-4 md:h-5 md:w-5"
                    style={{ color: ACCENT }}
                  />
                </div>

                <div className="flex-1 pt-0.5">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display text-xl italic md:text-2xl"
                      style={{ color: ACCENT }}
                    >
                      {s.n}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-200">
                      {s.phase}
                    </span>
                  </div>

                  <h3 className="mt-1 text-base font-semibold tracking-tight text-white md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-white/70 md:text-sm">
                    {s.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default OurApproach;
