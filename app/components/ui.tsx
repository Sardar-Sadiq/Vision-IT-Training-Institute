import { Link } from "react-router";

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'tertiary' }) {

  const baseStyle = "inline-flex items-center justify-center rounded-md font-label uppercase tracking-widest text-xs px-6 py-3 transition-transform hover:scale-[1.02] active:scale-[0.98]";

  const variants = {
    primary: "bg-gradient-to-br from-primary to-on-primary-container text-white",
    secondary: "bg-surface-container-highest text-on-surface",
    tertiary: "text-on-primary-container bg-transparent hover:bg-surface-container-low"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  ...props
}: { to: string, children: React.ReactNode, variant?: 'primary' | 'secondary' | 'tertiary', className?: string }) {

  const baseStyle = "inline-flex items-center justify-center rounded-md font-label uppercase tracking-widest text-xs px-6 py-3 transition-transform hover:scale-[1.02] active:scale-[0.98]";

  const variants = {
    primary: "bg-gradient-to-br from-primary to-on-primary-container text-white",
    secondary: "bg-surface-container-highest text-on-surface",
    tertiary: "text-on-primary-container bg-transparent hover:bg-surface-container-low"
  };

  return (
    <Link to={to} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Badge({ children, variant = 'beginner' }: { children: React.ReactNode, variant?: 'beginner' | 'advanced' | 'legacy' | 'guide' }) {
  const baseStyle = "inline-block rounded-full px-3 py-1 font-label text-md uppercase tracking-wider font-semibold";

  const variants = {
    beginner: "bg-[#b3f2eb] text-[#006056]", // approximate secondary_container
    advanced: "bg-[#e8dafa] text-[#4d2d7c]", // approximate tertiary_container
    legacy: "bg-[#baf4ee] text-[#00645a]",
    guide: "bg-[#efe0fd] text-[#552c8b]",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </span>
  );
}
