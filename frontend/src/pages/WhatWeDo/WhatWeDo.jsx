import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faUsers,
  faArrowsRotate,
  faRobot,
  faSitemap,
  faCode,
  faCoins,
  faBolt,
  faRocket,
  faLightbulb,
  faAward,
  faPeopleGroup,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

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

const SERVICES = [
  {
    icon: faCompass,
    title: 'AI & IT strategy, roadmaps & architectures',
    body:
      'Unlock the potential of AI to drive business outcomes. Our team guides you from vision to execution — strategic planning, tailored roadmaps and robust delivery governance — so your AI initiatives are seamlessly integrated into the business.',
  },
  {
    icon: faUsers,
    title: 'Fractional AI & IT leadership & advisory',
    body:
      'Executive-level technology leadership without the overhead of a full-time hire. Seasoned leaders embed in your organisation, blending AI-native thinking with enterprise experience.',
  },
  {
    icon: faArrowsRotate,
    title: 'AI legacy system modernisation',
    body:
      'We transform outdated systems into agile, modern solutions — uncovering and documenting core business logic, then upgrading to scalable platforms with confidence.',
  },
  {
    icon: faRobot,
    title: 'Agentic AI enablement',
    body:
      'We transform your IT operating model into one that is agent-driven and future-fit — chaining proprietary and custom agents to unlock automated process execution.',
  },
  {
    icon: faSitemap,
    title: 'AI-native operating models',
    body:
      'Reimagine the way your business runs by embedding AI at the core — automation, data-driven decisions and adaptive workflows that scale without adding complexity.',
  },
  {
    icon: faCode,
    title: 'AI-native product & platform development',
    body:
      'We build software differently. AI does the work; the team reviews and validates that it meets your needs — flipping the traditional development model.',
  },
];

const BENEFITS = [
  {
    icon: faCoins,
    title: 'Reduced costs',
    body:
      'It is simply cheaper to deliver using AI than not — when you have an experienced team behind it.',
  },
  {
    icon: faBolt,
    title: 'Boosted productivity',
    body:
      'Team members get their own AI assistants, surfacing the right information to solve problems faster.',
  },
  {
    icon: faRocket,
    title: 'Accelerated delivery',
    body:
      'By automating routine tasks we shrink timelines and free teams to tackle more complex challenges.',
  },
  {
    icon: faLightbulb,
    title: 'Foster innovation',
    body:
      'Freed from mundane tasks, teams have more time to brainstorm and explore new ideas.',
  },
  {
    icon: faAward,
    title: 'Elevated quality',
    body:
      'AI helps ensure solutions adhere to best practices and guidelines — consistent, efficient, maintainable.',
  },
  {
    icon: faPeopleGroup,
    title: 'Strengthened collaboration',
    body:
      'Seamless knowledge flow creates a more efficient and connected environment across teams.',
  },
];

const CenterIllustration = () => (
  <div className="relative mx-auto w-full max-w-sm">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-3xl"
      style={{
        backgroundColor: 'rgba(0,187,255,0.22)',
        borderRadius: '70% 30% 50% 60% / 50% 60% 40% 50%',
      }}
    />
    <img
      src="/gifs/whatwedo.png"
      alt="AI augmenting human work"
      className="relative w-full"
      style={{
        mixBlendMode: 'multiply',
        filter: 'brightness(1.1) contrast(1.05)',
      }}
    />
  </div>
);

const WhatWeDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 text-white">
      <header className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-white/10 bg-brand-950/70 backdrop-blur-md transition-colors duration-300 md:inset-x-8">
        <div className="flex items-center justify-between px-5 py-3 md:px-6 md:py-3">
          <Link to="/" aria-label="Avreo home" className="inline-flex items-center">
            <div
              aria-hidden="true"
              className="h-7 w-[98px] bg-white md:h-8 md:w-[112px]"
              style={logoMaskStyle}
            />
          </Link>

          <Link
            to="/"
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

      <section className="relative isolate overflow-hidden bg-brand-950 py-20 md:py-24">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[80%] w-full object-cover"
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
                icon={faBriefcase}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              What We Do
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              What{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                we do
              </span>
            </h1>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
              A range of services that span the entire lifecycle of AI &
              digital transformation — from forward-thinking strategies to
              architecting secure platforms and executing seamless builds.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
            {SERVICES.map((s, i) => (
              <li key={s.title} className="group relative flex">
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
                        icon={s.icon}
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
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70 md:text-base">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
                icon={faAward}
                className="h-3 w-3"
                style={{ color: ACCENT }}
              />
              The Benefits
            </span>

            <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              The{' '}
              <span
                style={{ color: ACCENT }}
                className="font-display italic font-medium"
              >
                benefits of our methods
              </span>{' '}
              that you will realise
            </h2>

            <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
              Integrating AI into your business empowers your teams to become
              more productive, efficient and innovative.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-10 md:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
            <ul className="space-y-7 md:space-y-8">
              {[BENEFITS[0], BENEFITS[2], BENEFITS[4]].map((b) => (
                <li key={b.title}>
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: 'rgba(0,187,255,0.35)',
                        backgroundColor: 'rgba(0,187,255,0.10)',
                        boxShadow:
                          '0 8px 24px -10px rgba(0,187,255,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={b.icon}
                        className="h-4 w-4"
                        style={{ color: ACCENT }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold tracking-tight md:text-lg"
                        style={{ color: ACCENT }}
                      >
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70 md:text-base">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="order-first lg:order-none">
              <CenterIllustration />
            </div>

            <ul className="space-y-7 md:space-y-8">
              {[BENEFITS[1], BENEFITS[3], BENEFITS[5]].map((b) => (
                <li key={b.title}>
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: 'rgba(0,187,255,0.35)',
                        backgroundColor: 'rgba(0,187,255,0.10)',
                        boxShadow:
                          '0 8px 24px -10px rgba(0,187,255,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={b.icon}
                        className="h-4 w-4"
                        style={{ color: ACCENT }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold tracking-tight md:text-lg"
                        style={{ color: ACCENT }}
                      >
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70 md:text-base">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
