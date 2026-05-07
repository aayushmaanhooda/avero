import { Link, useLocation, useNavigate } from 'react-router-dom';

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

const LinkedInIcon = ({ className = 'h-4 w-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.5c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.6h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46z" />
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-brand-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 md:h-64"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #1F487E 0%, rgba(31,72,126,0.85) 30%, rgba(31,72,126,0.4) 65%, rgba(31,72,126,0) 100%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16 lg:px-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              to="/"
              onClick={goHome}
              aria-label="Avreo home"
              className="inline-flex items-center"
            >
              <div
                aria-hidden="true"
                className="h-8 w-[112px] bg-white"
                style={logoMaskStyle}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              We help organisations rebuild around AI —{' '}
              <span style={{ color: ACCENT }} className="font-display italic">
                strategy, design, build.
              </span>
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
              Sitemap
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li>
                <Link
                  to="/"
                  onClick={goHome}
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
              Contact
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href="mailto:hello@avreo.digital"
                  className="transition hover:text-white"
                >
                  hello@avreo.digital
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/avreo/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© 2026 Avreo Pty Ltd</span>
          <span>Made with intent.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
