import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const QUESTIONS = [
  'Which parts of our business will become AI-assisted, AI-augmented or AI-native?',
  'What would our company look like if we built it today?',
  'Where could AI become a meaningful part of our workforce?',
  'How do we move faster than our competitors?',
];

const WhyNow = () => {
  return (
    <section
      id="why-now"
      className="relative isolate overflow-hidden scroll-mt-24 bg-brand-800 py-14 md:py-16"
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
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(29,52,97,0) 0%, rgba(29,52,97,0.4) 35%, rgba(29,52,97,0.85) 70%, #1D3461 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 120px)',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-20 2xl:max-w-[1440px]">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FontAwesomeIcon
                icon={faBolt}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              Why Now
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Are you a{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                pilot or passenger?
              </span>
            </h2>
            <p className="mt-3 text-balance text-base font-medium leading-snug text-white/85 md:text-lg">
              Questions you should ask yourself.
            </p>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Those who succeed are usually the leaders willing to rethink how
              their business works — before the market forces them to.
            </p>

            <p className="mt-8 max-w-md text-base font-semibold leading-snug text-white md:text-lg">
              Every company has an AI-native version of itself.{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                The leaders who discover it first will define the next decade.
              </span>
            </p>
          </div>

          <div className="relative lg:col-span-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-3xl"
              style={{
                backgroundColor: 'rgba(0,187,255,0.22)',
                borderRadius: '70% 30% 50% 60% / 50% 60% 40% 50%',
              }}
            />
            <img
              src="/gifs/why-us.png"
              alt="A pilot's view from the cockpit"
              className="relative w-full border border-white/10 shadow-2xl shadow-brand-950/60"
              style={{
                borderRadius: '88px 16px 88px 16px / 72px 22px 72px 22px',
              }}
            />

            <ol className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3">
              {QUESTIONS.map((q, i) => (
                <li key={i} className="group">
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/[0.07]">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-display text-sm italic"
                      style={{
                        borderColor: 'rgba(0,187,255,0.35)',
                        backgroundColor: 'rgba(0,187,255,0.08)',
                        color: ACCENT,
                      }}
                    >
                      {i + 1}
                    </div>
                    <p className="pt-0.5 text-xs leading-relaxed text-white/85 md:text-sm">
                      {q}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
