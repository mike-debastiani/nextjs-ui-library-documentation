"use client";

import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

interface CheckboxPreviewProps {
  label: string;
  description?: string;
  initialChecked?: boolean;
  disabled?: boolean;
}

export const CheckboxPreview: React.FC<CheckboxPreviewProps> = ({
  label,
  description,
  initialChecked = false,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <Checkbox
      label={label}
      description={description}
      checked={checked}
      disabled={disabled}
      onChange={setChecked}
    />
  );
};

export default CheckboxPreview; 