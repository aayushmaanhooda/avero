import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const Hero = () => {
  return (
    <div className="flex min-h-screen w-full items-center px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 md:px-12 md:pt-40 lg:px-20">
      <div className="w-full max-w-5xl text-left 2xl:max-w-6xl">
        <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:px-4 sm:text-xs">
          <FontAwesomeIcon
            icon={faRocket}
            className="h-3 w-3"
            style={{ color: ACCENT }}
          />
          Strategic AI Transformation
        </span>

        <h1 className="mt-6 text-balance text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.75rem]">
          <span className="block">Most AI programs never leave the ground.</span>
          <span
            style={{ color: '#00BBFF' }}
            className="mt-3 inline-block rounded-2xl border border-white/10 bg-brand-950/40 px-3 py-1.5 font-display italic font-medium backdrop-blur-md sm:mt-4 sm:px-5 sm:py-2 md:mt-6 md:px-6 md:py-3"
          >
            Avreo gets you airborne.
          </span>
        </h1>

        <div className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base md:text-lg 2xl:max-w-3xl 2xl:text-xl">
          <p>
            The way we work, how products are built, and how your entire
            company operates has changed forever.
          </p>
          <p className="mt-3 sm:mt-4">
            We help you discover it and build it with AI.
          </p>
        </div>

        <div className="mt-10 max-w-3xl text-balance text-base font-semibold text-white sm:mt-12 sm:text-lg md:text-xl 2xl:max-w-4xl 2xl:text-2xl">
          The organisations that win are not the ones that adopt AI, but the
          ones that re-design themselves around it.
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-start sm:gap-4">
          <a
            href="#ai-native"
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-brand-950 shadow-lg shadow-brand-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:text-base"
          >
            Explore your AI-native future
          </a>

          {/* Secondary — the only white button */}
          <a
            href="#our-approach"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-950 ring-1 ring-white/40 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:text-base"
          >
            Learn how we work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
