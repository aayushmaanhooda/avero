import './ShinyButton.css';

const ShinyButton = ({ href = '#', children, className = '', onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        'shiny-btn inline-flex items-center justify-center ' +
        'rounded-2xl bg-white px-5 py-2 text-sm font-semibold ' +
        'text-brand-950 shadow-sm ring-1 ring-white/30 ' +
        'transition duration-300 ease-out ' +
        'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-400/40 ' +
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ' +
        className
      }
    >
      <span>{children}</span>
    </a>
  );
};

export default ShinyButton;
