interface TypeCodeBadgeProps {
  code: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'overlay' | 'solid';
  className?: string;
}

export default function TypeCodeBadge({
  code,
  size = 'md',
  variant = 'outline',
  className = ''
}: TypeCodeBadgeProps) {
  const sizeClasses: Record<NonNullable<TypeCodeBadgeProps['size']>, string> = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-wider',
    lg: 'text-sm px-4 py-1.5 tracking-widest'
  };
  const variantClasses: Record<NonNullable<TypeCodeBadgeProps['variant']>, string> = {
    outline: 'text-neon border border-neon/40 bg-transparent',
    overlay: 'text-neon bg-black/90 border border-neon/40 backdrop-blur-sm',
    solid:   'text-black bg-neon font-bold'
  };
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full font-mono ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {code}
    </span>
  );
}
