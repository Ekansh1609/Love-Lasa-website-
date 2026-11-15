import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "accent";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-[0.16em] uppercase text-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal disabled:opacity-40 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs tracking-[0.2em]",
  };

  const variantStyles = {
    primary:
      "bg-[#191817] text-[#FAF8F5] hover:bg-[#2C2926] active:scale-[0.99]",
    secondary:
      "bg-[#EFE9E0] text-[#191817] hover:bg-[#E5DFD3] active:scale-[0.99]",
    outline:
      "border border-[#191817]/80 text-[#191817] hover:bg-[#191817] hover:text-[#FAF8F5] active:scale-[0.99]",
    text:
      "p-0 text-[#191817] underline-offset-8 hover:underline decoration-1 decoration-[#191817]/40 hover:decoration-[#191817]",
    accent:
      "bg-[#D32F2F] text-white hover:bg-[#B71C1C] active:scale-[0.99] shadow-sm",
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
