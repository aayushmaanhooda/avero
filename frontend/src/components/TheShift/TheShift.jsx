import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneSlash,
  faPlaneArrival,
  faPlaneDeparture,
  faPlane,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const STAGES = [
  {
    n: '00',
    title: 'None',
    keyword: 'stuck at the gate',
    body: "Still stuck at the gate and not using AI? That's ok — so are most businesses. Our AI Roadmap will light up your path to success.",
    icon: faPlaneSlash,
  },
  {
    n: '01',
    title: 'Assisted',
    keyword: 'boarding the plane',
    body: 'You have started boarding the plane and are using AI tools to help people complete tasks faster — ChatGPT, Copilot. We specialise in helping you take the next step.',
    icon: faPlaneArrival,
  },
  {
    n: '02',
    title: 'Augmented',
    keyword: 'take off',
    body: "Let's take off together. We create AI systems to work alongside your teams, handling large parts of workflows while people guide decisions and outcomes.",
    icon: faPlaneDeparture,
  },
  {
    n: '03',
    title: 'Native',
    keyword: 'airborne',
    body: 'You are airborne. Your business has been redesigned around AI. Workflows run end to end. Humans focus on high-value work — AI runs in the background.',
    icon: faPlane,
  },
];

const highlight = (body, keyword) => {
  const idx = body.toLowerCase().indexOf(keyword.toLowerCase());
  if (idx === -1) return body;
  return (
    <>
      {body.slice(0, idx)}
      <span className="font-semibold text-brand-200">{body.slice(idx, idx + keyword.length)}</span>
      {body.slice(idx + keyword.length)}
    </>
  );
};

const TheShift = () => {
  return (
    <section
      id="the-shift"
      className="relative isolate overflow-hidden bg-brand-950 py-16 sm:py-20 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #1D3461 0%, rgba(29,52,97,0.85) 30%, rgba(29,52,97,0.4) 65%, rgba(29,52,97,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(60% 50% at 50% 0%, rgba(98,144,200,0.18) 0%, rgba(29,52,97,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12 lg:px-20 2xl:max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className="h-3 w-3"
              style={{ color: ACCENT }}
            />
            The Shift
          </span>

          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl 2xl:text-7xl">
            Your AI adoption{' '}
            <span style={{ color: '#00BBFF' }} className="font-display italic font-medium">
              flight path
            </span>
          </h2>

          <p className="mt-6 text-balance text-base leading-relaxed text-white/75 md:text-lg">
            The question is not <span className="italic text-white/90">is your business using AI</span> — but{' '}
            <span className="font-semibold text-white">to what extent</span> are you using it. We start where you are.
          </p>
        </div>

        <div className="relative mt-20 md:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[88px] hidden h-px lg:block"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(130,156,188,0) 0%, rgba(98,144,200,0.6) 15%, rgba(98,144,200,0.6) 85%, rgba(130,156,188,0) 100%)',
            }}
          />

          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STAGES.map((stage) => (
              <li key={stage.n} className="group relative flex">
                <div className="relative flex w-full flex-col items-center">
                  <div className="relative z-10 mb-6 flex h-[88px] w-[88px] items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl border border-white/10 bg-brand-950/80 backdrop-blur-md transition group-hover:border-brand-400/40 group-hover:shadow-lg group-hover:shadow-brand-400/20"
                    />
                    <FontAwesomeIcon
                      icon={stage.icon}
                      aria-hidden="true"
                      className="relative h-9 w-9 text-white transition group-hover:text-accent"
                    />
                    <span className="absolute -bottom-3 right-2 inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-brand-800 px-2 text-[11px] font-bold tracking-widest text-white shadow-md shadow-brand-950/40">
                      {stage.n}
                    </span>
                  </div>

                  <div className="relative flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-400/40 group-hover:bg-white/[0.07] group-hover:shadow-xl group-hover:shadow-brand-950/40">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {stage.title}
                      </h3>
                      <span className="font-display text-xs italic text-white">
                        stage {parseInt(stage.n, 10)}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {highlight(stage.body, stage.keyword)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 md:mt-20">
          <p className="text-sm text-white/60">Not sure where you sit on the path?</p>
          <a
            href="#quiz"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-950/30 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:text-base"
          >
            Find your stage — take the 2-minute quiz
          </a>
        </div>
      </div>
    </section>
  );
};

export default TheShift;
