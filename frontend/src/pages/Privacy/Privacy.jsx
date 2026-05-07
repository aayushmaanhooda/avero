import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
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

const PARAGRAPHS = [
  'Avreo ("we," "our," or "us") is committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal information when you visit our website https://avreo.digital and use our services.',
  'We collect and process personal information that you voluntarily provide to us when you use our website, particularly when you fill out the "Contact Us" form. This will include your name, email address and any other information you provide in your message.',
  'We use the information you provide to respond to your inquiries or requests, communicate with you about our services, and improve our website and offerings. We do not use your information for marketing purposes without your explicit consent.',
  'We do not sell, rent, or trade your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website or providing services to you (e.g., web hosting or email service providers) or to comply with legal obligations or enforce our terms of use.',
  'We take reasonable measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
  'Depending on your location, you may have the right to access, update, or delete your information, withdraw your consent for us to use your data, or lodge a complaint with the relevant data protection authority if you believe your rights have been violated. To exercise these rights, please contact us.',
  'Our website may include links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.',
  'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with the revised date.',
  'If you have any questions about this Privacy Policy or our data practices, please contact us at hello@avreo.digital.',
];

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 text-white">
      <header className="border-b border-white/10 bg-brand-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 md:px-12">
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

      <main className="relative isolate overflow-hidden py-16 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: 'rgba(0,187,255,0.20)' }}
        />

        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="h-3 w-3"
              style={{ color: ACCENT }}
            />
            Privacy Policy
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
            Avreo{' '}
            <span
              style={{ color: ACCENT }}
              className="font-display italic font-medium"
            >
              Privacy Policy
            </span>
          </h1>

          <p className="mt-3 text-sm text-white/55">Last updated: 7 May 2026</p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-white/80 md:text-[17px] md:leading-[1.75]">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-12 text-sm text-white/55">© 2026 Avreo Pty Ltd</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
