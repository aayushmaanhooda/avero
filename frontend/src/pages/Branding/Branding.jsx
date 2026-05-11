import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFeather,
  faLaptopCode,
  faMugHot,
  faAddressCard,
  faShirt,
  faDoorOpen,
  faBuilding,
  faBookBookmark,
  faPenNib,
  faNoteSticky,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import { scrollToSection } from '../../utils/scrollToSection';
import newlogo from '../../assets/branding/newlogo.png';
import b0 from '../../assets/branding/b0.png';
import b1 from '../../assets/branding/b1.png';
import b2 from '../../assets/branding/b2.png';
import b3 from '../../assets/branding/b3.png';
import b4 from '../../assets/branding/b4.png';
import b6 from '../../assets/branding/b6.png';
import b7 from '../../assets/branding/b7.png';
import b8 from '../../assets/branding/b8.png';
import b9 from '../../assets/branding/b9.png';

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

const APPLICATIONS = [
  {
    src: b7,
    icon: faBuilding,
    label: 'Office signage',
    title: 'On the wall behind reception',
    body:
      'Three-dimensional, lit, navy backdrop. The first thing a visitor sees — and the last thing they forget.',
  },
  {
    src: b6,
    icon: faDoorOpen,
    label: 'Glass etching',
    title: 'On the door before they walk in',
    body:
      'A quieter cue. Frosted on the glass, the mark stays present without competing with the space.',
  },
  {
    src: b3,
    icon: faAddressCard,
    label: 'Business cards',
    title: 'The handshake artifact',
    body:
      'Navy back, ivory front. Bird mid-flight up top, hello@avreo on the back. Built to be kept.',
  },
  {
    src: b4,
    icon: faShirt,
    label: 'Apparel',
    title: 'Worn by the team',
    body:
      'Black tee, white mark. The mark reads from across a room — at conferences, on set, on every team photo.',
  },
  {
    src: b2,
    icon: faMugHot,
    label: 'Drinkware',
    title: 'On every desk by 9am',
    body:
      'Two mugs, one system. The white one whispers; the navy one carries the line — "Avreo gets you airborne."',
  },
  {
    src: b8,
    icon: faBookBookmark,
    label: 'Notebooks',
    title: 'For the work that gets handwritten',
    body:
      'Navy hardcover, debossed mark, "Strategic AI Transformation" beneath it. Built for client kits and conference giveaways.',
  },
  {
    src: b9,
    icon: faPenNib,
    label: 'Pen set',
    title: 'For the contracts that get signed',
    body:
      'Lined gift box, matching pens, mark engraved on the cap. Reserved for new-client moments.',
  },
  {
    src: b1,
    icon: faNoteSticky,
    label: 'Sticker pack',
    title: 'For laptops, lids, and luggage',
    body:
      'Four formats: the mark, the wordmark, the hexagon badge, the tagline pill. Distributed at every event.',
  },
  {
    src: b0,
    icon: faLaptopCode,
    label: 'In the wild',
    title: 'Alongside the brands that matter',
    body:
      'On laptops next to GitHub, anymark, and the cities the team has lived in — that\'s the company we\'re keeping.',
  },
];

const Branding = () => {
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
                icon={faFeather}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              The New Mark
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              A bird,{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                mid-flight.
              </span>
            </h1>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/80 md:text-lg">
              Our mark is a bird mid-flight — because Avreo doesn&apos;t just
              consult, we take your business airborne.
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <div className="relative mx-auto max-w-4xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] opacity-60 blur-3xl"
                style={{ backgroundColor: 'rgba(0,187,255,0.18)' }}
              />
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <img
                  src={newlogo}
                  alt="The new Avreo logo — bird mid-flight with the Avreo wordmark"
                  className="block h-auto w-full"
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/55">
                Wordmark and symbol — the locked pair that anchors every
                surface below.
              </p>
            </div>
          </div>
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
                icon={faLaptopCode}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              In Application
            </span>

            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              One mark,{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                every surface.
              </span>
            </h2>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
              From the lobby wall to the laptop sticker — every touchpoint
              built around the same bird, the same navy, the same promise.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {APPLICATIONS.map((a) => (
              <article
                key={a.label}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="overflow-hidden">
                  <img
                    src={a.src}
                    alt={a.title}
                    className="block h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: 'rgba(0,187,255,0.35)',
                        backgroundColor: 'rgba(0,187,255,0.08)',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={a.icon}
                        className="h-3.5 w-3.5"
                        style={{ color: ACCENT }}
                      />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: ACCENT }}
                    >
                      {a.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-white md:text-xl">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70 md:text-base">
                    {a.body}
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

export default Branding;
