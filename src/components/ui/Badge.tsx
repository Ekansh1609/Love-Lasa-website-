import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  dot = false,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center space-x-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-sans transition-colors";

  const variantStyles = {
    default:
      "bg-[#FAF8F5]/90 text-[#191817] border border-[#E5DFD3]/80 backdrop-blur-xs",
    outline:
      "bg-transparent text-[#191817] border border-[#191817]/30",
    accent:
      "bg-[#FAF8F5] text-[#191817] border border-[#E5DFD3] shadow-xs",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] flex-shrink-0"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
