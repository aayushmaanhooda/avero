import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#00BBFF';

const inputClass =
  'w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder-white/30 transition focus:border-[#00BBFF] focus:outline-none md:text-base';

const labelClass =
  'mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-white/60';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));
  const onSubmit = (e) => e.preventDefault();

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden scroll-mt-24 bg-brand-800 py-16 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #1F487E 0%, rgba(31,72,126,0.85) 30%, rgba(31,72,126,0.4) 65%, rgba(31,72,126,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 md:h-80"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(31,72,126,0) 0%, rgba(29,52,97,0.4) 35%, rgba(29,52,97,0.85) 70%, #1D3461 100%)',
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

      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div
          className="grid overflow-hidden rounded-3xl border border-white/10 backdrop-blur-md lg:grid-cols-2"
          style={{
            backgroundColor: 'rgba(15, 30, 60, 0.55)',
            boxShadow:
              '0 30px 80px -30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div className="relative p-8 md:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-0 opacity-60"
              style={{
                backgroundImage:
                  'radial-gradient(60% 70% at 0% 100%, rgba(0,187,255,0.15) 0%, transparent 70%)',
              }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-3 w-3"
                  style={{ color: ACCENT }}
                />
                Contact Us
              </span>

              <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to embrace the{' '}
                <span
                  style={{ color: ACCENT }}
                  className="font-display italic font-medium"
                >
                  power of AI?
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                We're here to help. Reach out today and let's explore how Avreo
                can become your trusted partner.
              </p>

              <div className="mt-10 space-y-1">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                  Email
                </div>
                <a
                  href="mailto:hello@avreo.digital"
                  className="text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-[#00BBFF] md:text-lg"
                  style={{ textDecorationThickness: '1px' }}
                >
                  hello@avreo.digital
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-5 border-t border-white/10 bg-brand-950/40 p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={update('firstName')}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={update('lastName')}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={update('company')}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={form.message}
                onChange={update('message')}
                className={inputClass + ' resize-none'}
              />
            </div>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/50">We reply within 24 hours.</p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-brand-950 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
                style={{ backgroundColor: ACCENT }}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
