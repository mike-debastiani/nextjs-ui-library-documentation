// components/ui/RadioButton.tsx
"use client";

import React from "react";

type RadioButtonProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  label,
  value,
  defaultChecked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 cursor-pointer select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
        className="h-5 w-5 accent-blue-600 focus:ring-blue-500"
      />
      <span className="text-base text-gray-800">{label}</span>
    </label>
  );
};