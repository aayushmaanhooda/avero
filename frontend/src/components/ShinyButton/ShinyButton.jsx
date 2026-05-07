import './ShinyButton.css';

const baseClassName =
  'shiny-btn inline-flex items-center justify-center ' +
  'rounded-2xl bg-white px-5 py-2 text-sm font-semibold ' +
  'text-brand-950 shadow-sm ring-1 ring-white/30 ' +
  'transition duration-300 ease-out ' +
  'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-400/40 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ';

const ShinyButton = ({ href, children, className = '', onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={baseClassName + className}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClassName + className}
    >
      <span>{children}</span>
    </button>
  );
};

export default ShinyButton;
