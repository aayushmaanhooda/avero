import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faCity,
  faBus,
  faTrainTram,
  faSignsPost,
  faPaintbrush,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import m1 from '../../assets/marketing/m1.png';
import m2 from '../../assets/marketing/m2.png';
import m3 from '../../assets/marketing/m3.png';
import m4 from '../../assets/marketing/m4.png';
import m5 from '../../assets/marketing/m5.png';

const ACCENT = '#00BBFF';

const logoMaskStyle = {
  WebkitMaskImage: 'url(/logo/logo.png)',
  maskImage: 'url(/logo/logo.png)',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskPosition: 'left center',
  maskPosition: 'left center',
};

const PLACEMENTS = [
  {
    src: m2,
    icon: faSignsPost,
    label: 'Bus shelter',
    title: 'Eye-level, every commute',
    body:
      'The message meets people where the decisions about tomorrow get made — between the office and home, between coffee and the next meeting.',
  },
  {
    src: m3,
    icon: faCity,
    label: 'Cityscape billboard',
    title: 'Above the skyline',
    body:
      'A statement that scales with the buildings around it. Avreo as part of the city — not interrupting it, anchoring it.',
  },
  {
    src: m4,
    icon: faBus,
    label: 'Transit wrap',
    title: 'Moving through the city',
    body:
      'The brand travels. Every route, every stop, every street corner becomes a touchpoint. Repetition without noise.',
  },
  {
    src: m5,
    icon: faTrainTram,
    label: 'Tram takeover',
    title: 'A full-length canvas',
    body:
      'Side-of-tram real estate carries both the headline and the proof — “Building practical, well-designed solutions that help organizations grow.”',
  },
];

const PRINCIPLES = [
  {
    icon: faPaintbrush,
    title: 'One headline. One promise.',
    body:
      '“Most AI programs never leave the ground. Avreo gets you airborne.” The line stays consistent everywhere — building, billboard, bus, tram — so the message compounds with every impression.',
  },
  {
    icon: faCity,
    title: 'Show up where decisions happen',
    body:
      'Executives don\'t see ads in their feed — they see them on the way to the office, at the airport, on the morning commute. Out-of-home is where Avreo belongs.',
  },
  {
    icon: faBullhorn,
    title: 'Confident, never loud',
    body:
      'Deep navy, generous white space, a single accent of sky blue. The brand looks the way the product feels — assured, grounded, and unmistakably modern.',
  },
];

const Marketing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHomeToHero = (event) => {
    event.preventDefault();
    navigate('/');
    requestAnimationFrame(() => {
      if (!scrollToSection('top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  return (
    <div className="min-h-screen bg-brand-950 text-white">
      <header className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-white/10 bg-brand-950/70 backdrop-blur-md transition-colors duration-300 md:inset-x-8">
        <div className="flex items-center justify-between px-5 py-3 md:px-6 md:py-3">
          <Link
            to="/"
            onClick={goHomeToHero}
            aria-label="Avreo home"
            className="inline-flex items-center"
          >
            <div
              aria-hidden="true"
              className="h-7 w-[98px] bg-white md:h-8 md:w-[112px]"
              style={logoMaskStyle}
            />
          </Link>

          <Link
            to="/"
            onClick={goHomeToHero}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5" />
              <path d="M11 18l-6-6 6-6" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-brand-950 py-24 md:py-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="bg-video pointer-events-none absolute inset-x-0 top-0 -z-20 h-[80%] w-full object-cover"
          style={{
            opacity: 0.45,
            maskImage:
              'linear-gradient(180deg, black 0%, black 55%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(180deg, black 0%, black 55%, transparent 100%)',
          }}
        >
          <source src="/videos/clouds.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(31,72,126,0.65) 0%, rgba(29,52,97,0.85) 60%, #1D3461 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 70%, black 20%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 70%, black 20%, transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ backgroundColor: 'rgba(0,187,255,0.30)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 md:h-80"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(31,72,126,0) 0%, rgba(31,72,126,0.4) 35%, rgba(31,72,126,0.85) 70%, #1F487E 100%)',
          }}
        />

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              Marketing Vision
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              A brand{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                that leaves the ground.
              </span>
            </h1>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
              Most AI brands fight for attention inside a feed. Avreo earns it
              in the open air — on buildings, at bus stops, down the side of a
              tram. This is what the brand looks like when it shows up in the
              world.
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <div className="relative mx-auto max-w-5xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-60 blur-3xl"
                style={{ backgroundColor: 'rgba(0,187,255,0.18)' }}
              />
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <img
                  src={m1}
                  alt="Avreo billboard mural on a building"
                  className="block h-auto w-full"
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/55">
                The hero mural — one wall, one promise, no scroll required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-brand-800 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 md:h-44"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #1D3461 0%, rgba(31,72,126,0) 100%)',
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

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FontAwesomeIcon
                icon={faPaintbrush}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              The Principles
            </span>

            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              How we want{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                to be seen.
              </span>
            </h2>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
              Every placement carries the same headline, the same palette, the
              same posture. Familiar by the third impression, trusted by the
              tenth.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="group relative flex">
                <div className="relative flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-white/[0.07] md:p-7">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: 'rgba(0,187,255,0.35)',
                        backgroundColor: 'rgba(0,187,255,0.08)',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={p.icon}
                        className="h-4 w-4"
                        style={{ color: ACCENT }}
                      />
                    </div>
                    <span
                      className="font-display text-sm italic"
                      style={{ color: ACCENT }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-brand-950 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 md:h-44"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #1F487E 0%, rgba(29,52,97,0) 100%)',
          }}
        />

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <FontAwesomeIcon
                icon={faSignsPost}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              In The Wild
            </span>

            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              The same message,{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                every surface.
              </span>
            </h2>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
              A walk-through of where Avreo lives once the campaign goes live —
              from murals to moving billboards.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            {PLACEMENTS.map((p) => (
              <article
                key={p.label}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="block h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-72"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: 'rgba(0,187,255,0.35)',
                        backgroundColor: 'rgba(0,187,255,0.08)',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={p.icon}
                        className="h-3.5 w-3.5"
                        style={{ color: ACCENT }}
                      />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: ACCENT }}
                    >
                      {p.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-white md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70 md:text-base">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center md:mt-20">
            <Link
              to="/"
              onClick={goHomeToHero}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/15"
            >
              Take me home
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
