"use client";

import React, { useState } from "react";

interface SwitchToggleProps {
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const SwitchToggle: React.FC<SwitchToggleProps> = ({
  label,
  description,
  checked: controlledChecked,
  disabled = false,
  onChange,
  className = "",
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = () => {
    const newValue = !isChecked;
    if (controlledChecked === undefined) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <label
      className={`flex items-start gap-3 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleChange}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isChecked ? "bg-blue-600" : "bg-gray-200"
        } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
            isChecked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
      {(label || description) && (
        <div>
          {label && (
            <span className={`block -mt-0.5 text-base font-semibold ${disabled ? "text-gray-400" : "text-gray-900"}`}>
              {label}
            </span>
          )}
          {description && (
            <span className="block text-sm text-gray-400 mt-0.5">{description}</span>
          )}
        </div>
      )}
    </label>
  );
};