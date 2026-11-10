'use client';

import React from 'react';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-4 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5'
  };

  const variantStyles = {
    primary:
      'bg-[#00F2FE] hover:bg-[#4FACFE] text-[#080C10] shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:shadow-[0_0_25px_rgba(0,242,254,0.7)] border-none',
    secondary:
      'bg-[#0D1117] hover:bg-cyan-950/60 text-[#00F2FE] border border-[#2A363F] hover:border-[#00F2FE] shadow-[0_0_10px_rgba(0,242,254,0.15)] hover:shadow-[0_0_18px_rgba(0,242,254,0.3)]',
    danger:
      'bg-[#FF5E3A] hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(255,94,58,0.4)] hover:shadow-[0_0_25px_rgba(255,94,58,0.7)] border-none',
    ghost:
      'bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-[#00F2FE] border border-transparent'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
      }}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

