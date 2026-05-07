import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '../../utils/scrollToSection';

const ACCENT = '#00BBFF';

const Boarding = () => {
  return (
    <section
      id="boarding"
      className="relative isolate overflow-hidden scroll-mt-24 bg-brand-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: 'url(/logo/clouds.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(31,72,126,0.85) 0%, rgba(29,52,97,0.6) 50%, rgba(29,52,97,0.85) 100%)',
        }}
      />
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
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(31,72,126,0) 0%, rgba(31,72,126,0.4) 35%, rgba(31,72,126,0.85) 70%, #1F487E 100%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-12 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="h-3 w-3"
            style={{ color: ACCENT }}
          />
          Boarding now
        </span>

        <h2 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to discover your{' '}
          <span
            style={{ color: ACCENT }}
            className="font-display italic font-medium"
          >
            AI-native future?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-white/80 md:text-lg">
          Start the conversation. Let's explore what's possible for your
          business.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-brand-950 shadow-lg shadow-brand-950/40 transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
            style={{ backgroundColor: ACCENT }}
          >
            Start the conversation
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
            />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('our-approach')}
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/[0.08] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
          >
            Explore our approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default Boarding;
