import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShinyButton from '../ShinyButton';
import { scrollToSection as scrollToPageSection } from '../../utils/scrollToSection';

const NAV_LINKS = [
  { label: 'The Shift', sectionId: 'the-shift' },
  { label: 'AI-Native', sectionId: 'ai-native' },
  { label: 'Our Approach', sectionId: 'our-approach' },
  { label: 'Why Now', sectionId: 'why-now' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'Branding', href: '/branding' },
  { label: 'Contact Us', sectionId: 'contact' },
];

const NavLinkItem = ({ link, className, onSectionClick, onClick }) =>
  link.href ? (
    <Link to={link.href} onClick={onClick} className={className}>
      {link.label}
    </Link>
  ) : (
    <button
      type="button"
      onClick={(event) => onSectionClick(event, link.sectionId)}
      className={className}
    >
      {link.label}
    </button>
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
  const handleSectionClick = (event, sectionId) => {
    event?.preventDefault();
    closeMenu();

    scrollToPageSection(sectionId);
  };

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
        <button
          type="button"
          onClick={(event) => handleSectionClick(event, 'top')}
          aria-label="Avreo home"
          className="flex items-center"
        >
          <div
            aria-hidden="true"
            className="h-7 w-[98px] md:h-8 md:w-[112px] bg-white"
            style={logoMaskStyle}
          />
        </button>

        <ul className="hidden min-[900px]:flex items-center gap-7 text-sm font-medium text-white/85">
          {NAV_LINKS.map((link) => (
            <li key={link.href ?? link.sectionId}>
              <NavLinkItem
                link={link}
                onSectionClick={handleSectionClick}
                className="transition-colors hover:text-brand-200"
              />
            </li>
          ))}
        </ul>

        <div className="hidden min-[900px]:block">
          <ShinyButton onClick={(event) => handleSectionClick(event, 'contact')}>
            Get in Touch
          </ShinyButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="min-[900px]:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
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
        <div className="min-[900px]:hidden border-t border-white/10 px-5 pb-4 pt-2">
          <ul className="flex flex-col gap-1 text-sm font-medium text-white/90">
            {NAV_LINKS.map((link) => (
              <li key={link.href ?? link.sectionId}>
                <NavLinkItem
                  link={link}
                  onClick={closeMenu}
                  onSectionClick={handleSectionClick}
                  className="block w-full rounded-lg px-3 py-2 text-left transition-colors hover:bg-white/10 hover:text-brand-200"
                />
              </li>
            ))}
          </ul>
          <div className="mt-3 px-1">
            <ShinyButton
              onClick={(event) => handleSectionClick(event, 'contact')}
              className="w-full"
            >
              Get in Touch
            </ShinyButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
