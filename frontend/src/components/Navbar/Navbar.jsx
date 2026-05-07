import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShinyButton from '../ShinyButton';

const NAV_LINKS = [
  { label: 'The Shift', href: '#the-shift' },
  { label: 'AI-Native', href: '#ai-native' },
  { label: 'Our Approach', href: '#our-approach' },
  { label: 'Why Now', href: '#why-now' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Contact Us', href: '#contact' },
];

const NavLinkItem = ({ link, className, onClick }) =>
  link.href.startsWith('/') ? (
    <Link to={link.href} onClick={onClick} className={className}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  );

const logoMaskStyle = {
  WebkitMaskImage: 'url(/logo/logo.png)',
  maskImage: 'url(/logo/logo.png)',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={
        'fixed top-4 inset-x-4 md:inset-x-8 z-50 ' +
        'rounded-2xl border border-white/10 ' +
        'backdrop-blur-md ' +
        'transition-colors duration-300 ' +
        (scrolled ? 'bg-brand-950/70' : 'bg-brand-950/40')
      }
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-6 md:py-3">
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Avreo home"
          className="flex items-center"
        >
          <div
            aria-hidden="true"
            className="h-7 w-[98px] md:h-8 md:w-[112px] bg-white"
            style={logoMaskStyle}
          />
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-white/85">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLinkItem
                link={link}
                className="transition-colors hover:text-brand-200"
              />
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ShinyButton href="#contact">Get in Touch</ShinyButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-5 pb-4 pt-2">
          <ul className="flex flex-col gap-1 text-sm font-medium text-white/90">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLinkItem
                  link={link}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-brand-200"
                />
              </li>
            ))}
          </ul>
          <div className="mt-3 px-1">
            <ShinyButton href="#contact" onClick={closeMenu} className="w-full">
              Get in Touch
            </ShinyButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
