import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const LOGOS = [
  { src: '/success/zeus-7E_igzt7.jpeg', alt: 'Zeus Street Greek', invert: false },
  { src: '/success/download-1.png', alt: 'Fliit', invert: false },
  { src: '/success/download.jpeg', alt: 'Zancon', invert: false },
  { src: '/success/greener-white-Bj450jtr.png', alt: 'Greener', invert: true },
  { src: '/success/download.png', alt: 'Never Sit Still', invert: false },
  { src: '/success/highland-white-Cpv2k-F1.png', alt: 'Highland', invert: true },
];

const SuccessStories = () => {
  return (
    <section
      id="success"
      className="relative isolate overflow-hidden scroll-mt-24 py-24 md:py-28"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/clouds.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(29,52,97,0.92) 0%, rgba(31,72,126,0.72) 30%, rgba(31,72,126,0.55) 50%, rgba(31,72,126,0.72) 70%, rgba(29,52,97,0.92) 100%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 md:h-56"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #1D3461 0%, rgba(29,52,97,0.7) 50%, rgba(29,52,97,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 md:h-56"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(31,72,126,0) 0%, rgba(31,72,126,0.7) 50%, #1F487E 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <FontAwesomeIcon
              icon={faStar}
              className="h-3 w-3"
              style={{ color: ACCENT }}
            />
            Success Stories
          </span>

          <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Our{' '}
            <span
              style={{ color: ACCENT }}
              className="font-display italic font-medium"
            >
              success stories
            </span>
          </h2>

          <p className="mt-5 text-balance text-sm leading-relaxed text-white/80 md:text-base">
            We have an ever-growing number of businesses that we have helped on
            their AI and technology journeys.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:mt-16 md:gap-6 lg:grid-cols-6">
          {LOGOS.map((logo) => (
            <li key={logo.alt} className="group">
              <div
                className="flex h-32 items-center justify-center rounded-2xl bg-white px-6 py-6 ring-1 ring-white/30 transition duration-300 group-hover:-translate-y-1 group-hover:ring-white/60 md:h-36"
                style={{
                  boxShadow:
                    '0 18px 40px -18px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.7)',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-14 max-w-full object-contain md:max-h-16"
                  style={logo.invert ? { filter: 'invert(1)' } : undefined}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SuccessStories;
