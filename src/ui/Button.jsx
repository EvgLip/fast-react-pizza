import { Link } from 'react-router-dom';

//eslint-disable-next-line
export default function Button ({ children, disabled, to, type, onClick })
{
  const base = 'inline-block ' +
    'rounded-full ' +
    'bg-yellow-400 ' +
    'font-semibold uppercase tracking-wide ' +
    'text-stone-800 ' +
    'transition-colors duration-300 ' +
    'hover:bg-yellow-300 ' +
    'focus:bg-yellow-300 focus:outline-none ' +
    'focus:ring focus:ring-yellow-300 focus:ring-offset-2 ' +
    'disabled:cursor-not-allowed ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4 text-xs min-[414px]:text-sm  ',
    small: base + 'px-3 py-2 ms:px-5 ms:py-2.5 text-xs ',
    secondary: 'inline-block ' +
      'px-4 py-2.5 md:px-6 md:py-3.5 ' +
      'rounded-full ' +
      'border-2 border-stone-300 ' +
      'font-semibold uppercase tracking-wide ' +
      'text-xs min-[414px]:text-sm text-stone-500 ' +
      'transition-colors duration-300 ' +
      'hover:bg-stone-200 hover:text-stone-700 ' +
      'focus:bg-stone-200 focus:outline-none ' +
      'focus:text-stone-700 ' +
      'focus:ring focus:ring-stone-200 focus:ring-offset-1 ' +
      'disabled:cursor-not-allowed ',
  };

  if (to) return (
    <Link className={styles[type]} to={to}>
      {children}
    </Link>
  );

  return (
    <button
      className={styles[type]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
