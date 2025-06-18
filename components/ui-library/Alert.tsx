import React from "react";

type AlertVariant = "default" | "success" | "destructive";

interface AlertProps {
  title: string;
  description?: string;
  variant?: AlertVariant;
  className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  default: "bg-gray-100 text-gray-800 border border-gray-300",
  success: "bg-green-100 text-green-800 border border-green-300",
  destructive: "bg-red-100 text-red-800 border border-red-300",
};

export const Alert: React.FC<AlertProps> = ({
  title,
  description,
  variant = "default",
  className = "",
}) => {
  return (
    <div
      className={`w-full rounded-lg px-4 py-2 ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      <p className="font-semibold mb-0" style={{ marginBottom: 0 }}>{title}</p>
      {description && <p className="text-sm" style={{ marginTop: '0.5rem' }}>{description}</p>}
    </div>
  );
};

export default Alert;