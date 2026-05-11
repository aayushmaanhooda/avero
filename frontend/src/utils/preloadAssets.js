import m1 from '../assets/marketing/m1.png';
import m2 from '../assets/marketing/m2.png';
import m3 from '../assets/marketing/m3.png';
import m4 from '../assets/marketing/m4.png';
import m5 from '../assets/marketing/m5.png';
import newlogo from '../assets/branding/newlogo.png';
import b0 from '../assets/branding/b0.png';
import b1 from '../assets/branding/b1.png';
import b2 from '../assets/branding/b2.png';
import b3 from '../assets/branding/b3.png';
import b4 from '../assets/branding/b4.png';
import b6 from '../assets/branding/b6.png';
import b7 from '../assets/branding/b7.png';
import b8 from '../assets/branding/b8.png';
import b9 from '../assets/branding/b9.png';

const SECONDARY_ASSETS = [
  m1, m2, m3, m4, m5,
  newlogo, b0, b1, b2, b3, b4, b6, b7, b8, b9,
];

export function preloadSecondaryAssets() {
  if (typeof window === 'undefined') return;

  const run = () => {
    SECONDARY_ASSETS.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      if ('fetchPriority' in img) img.fetchPriority = 'low';
      img.src = src;
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 4000 });
  } else {
    setTimeout(run, 1500);
  }
}
