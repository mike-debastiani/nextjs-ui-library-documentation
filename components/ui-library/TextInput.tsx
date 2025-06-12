"use client";

// Temporary change to trigger redeploy
import React from "react";
import { cn } from "@/lib/utils";

type TextInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-1", className)}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
      />
    </div>
  );
};