const HeroBackground = ({ children }) => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-brand-950"
    >
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero-optimized.mp4" type="video/mp4" />
      </video>

      {/* dark legibility wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/75 via-brand-950/55 to-brand-950/80" />

      {/* soft brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%)]" />

      {/* blend into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(29,52,97,0) 0%, rgba(29,52,97,0.65) 55%, #1D3461 100%)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
      />

      <div className="relative z-10 min-h-screen w-full">{children}</div>
    </section>
  );
};

export default HeroBackground;
