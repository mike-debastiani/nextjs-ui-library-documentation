import * as React from "react"
import { Input } from "./input"
import { cn } from "@/lib/utils"

interface TextInputProps extends React.ComponentProps<typeof Input> {
  label?: string
  id: string
}

export function TextInput({ label, id, className, ...props }: TextInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <Input
        id={id}
        className={cn("w-full", className)}
        {...props}
      />
    </div>
  )
} 