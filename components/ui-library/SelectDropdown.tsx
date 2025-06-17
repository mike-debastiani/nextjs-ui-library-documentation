"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface OptionGroup {
  groupLabel: string;
  options: Option[];
}

interface SelectDropdownProps {
  placeholder?: string;
  groups: OptionGroup[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  placeholder = "Select an option",
  groups,
  value,
  onChange,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  // Flatten all options to find the selected one
  const allOptions = groups.flatMap(group => group.options);
  const selectedValue = value !== undefined ? value : internalValue;
  const selectedOption = allOptions.find(opt => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSelect = (option: Option) => {
    if (value === undefined) {
      setInternalValue(option.value);
    }
    onChange?.(option.value);
    setOpen(false);
  };

  return (
    <div className={`relative w-72 ${className}`} ref={ref}>
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-2 animate-fade-in">
          {groups.map((group, idx) => (
            <div key={group.groupLabel + idx}>
              <div className="px-5 pt-2 pb-2 text-sm text-gray-400 font-semibold select-none">
                {group.groupLabel}
              </div>
              <div tabIndex={-1} role="listbox">
                {group.options.map((option) => (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    className={`px-5 py-2 cursor-pointer text-sm rounded transition-colors select-none ${selectedValue === option.value ? "bg-gray-100" : "hover:bg-gray-100"}`}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown; 