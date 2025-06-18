"use client";

import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  checked: controlledChecked,
  disabled = false,
  onChange,
  className = "",
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    if (controlledChecked === undefined) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <label
      className={`flex items-start gap-3 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="mt-1 h-4 w-4 rounded border border-gray-300 bg-white checked:bg-black checked:border-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:border-gray-200 transition-all"
      />
      <div>
        <span className={`block text-base font-semibold ${disabled ? "text-gray-400" : "text-gray-900"}`}>{label}</span>
        {description && (
          <span className="block text-sm text-gray-400 mt-1">{description}</span>
        )}
      </div>
    </label>
  );
};

export default Checkbox;
