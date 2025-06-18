
"use client";

import React from "react";

type TextAreaProps = {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
  className?: string;
};

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder = "",
  value,
  disabled = false,
  rows = 4,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        rows={rows}
        onChange={(e) => onChange?.(e.target.value)}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
      />
    </div>
  );
};