import { Link } from 'react-router-dom';

//eslint-disable-next-line
export default function Button ({ children, disabled, to, type, onClick })
{
  const base = 'inline-block ' +
    'border ' +
    'rounded-full ' +
    'font-semibold uppercase tracking-wide ' +
    'text-stone-800 ' +
    'transition-colors duration-300 ';
  const big = base + 'px-4 py-2.5 md:px-6 md:py-3.5 ' +
    'min-[320px]:px-2 ' +
    'text-xs min-[414px]:text-sm text-stone-500  ';
  const small = base + 'px-3 py-2 ms:px-5 ms:py-2.5 text-xs ';
  const ruond = base + 'px-3 py-1 ms:px-3.5 ms:py-2 text-base ';
  const primary = 'bg-yellow-400 ' +
    'border-yellow-400 ' +
    'hover:bg-yellow-300 ' +
    'focus:bg-yellow-300 focus:outline-none ' +
    'focus:ring focus:ring-yellow-300 focus:ring-offset-2 ' +
    'disabled:cursor-not-allowed ';
  const secondary = 'border-stone-300 ' +
    'hover:bg-stone-200 hover:text-stone-700 ' +
    'focus:bg-stone-200 focus:outline-none ' +
    'focus:text-stone-700 ' +
    'focus:ring focus:ring-stone-200 focus:ring-offset-1 ' +
    'disabled:cursor-not-allowed ';

  //'text-xs min-[414px]:text-sm text-stone-500 ' + 

  const styles = {
    primaryBig: big + primary,
    primarySmall: small + primary,
    roundPrimary: ruond + primary,
    roundSecondary: ruond + secondary,
    secondaryBig: big + secondary,
    secondarySmall: small + secondary,
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
