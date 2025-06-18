import React from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "blue";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-black text-white",
  secondary: "bg-gray-100 text-black",
  destructive: "bg-red-600 text-white",
  outline: "border border-gray-300 text-black bg-white",
  blue: "bg-blue-600 text-white",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  return (
    <span className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
};