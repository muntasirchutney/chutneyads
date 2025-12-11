"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      <div className="grid grid-cols-2 gap-6">
        <FormField
          id="firstName"
          label="First Name"
          focused={focusedField === "firstName"}
          onFocus={() => setFocusedField("firstName")}
          onBlur={() => setFocusedField(null)}
        />
        <FormField
          id="lastName"
          label="Last Name"
          focused={focusedField === "lastName"}
          onFocus={() => setFocusedField("lastName")}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <FormField
        id="email"
        label="Email"
        type="email"
        focused={focusedField === "email"}
        onFocus={() => setFocusedField("email")}
        onBlur={() => setFocusedField(null)}
      />

      <div className="grid grid-cols-2 gap-6">
        <FormField
          id="organization"
          label="Organization"
          focused={focusedField === "organization"}
          onFocus={() => setFocusedField("organization")}
          onBlur={() => setFocusedField(null)}
        />
        <FormField
          id="role"
          label="Role"
          focused={focusedField === "role"}
          onFocus={() => setFocusedField("role")}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <div className="!mt-6">
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          className="w-full bg-transparent border-0 border-b-2 border-border rounded-none px-0 py-3 
                     focus:border-chutney-primary focus:ring-0 focus:outline-none transition-colors duration-300 
                     resize-none text-foreground placeholder:text-muted-foreground/50"
          placeholder="Tell us about your project..."
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <div className="!mt-10 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 px-8 py-3 text-sm font-medium uppercase tracking-[0.15em]
                     border-2 border-chutney-dark text-chutney-dark rounded-full
                     hover:bg-chutney-dark hover:text-white transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting
            </>
          ) : (
            <>
              Submit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

interface FormFieldProps {
  id: string
  label: string
  type?: string
  focused: boolean
  onFocus: () => void
  onBlur: () => void
}

function FormField({ id, label, type = "text", focused, onFocus, onBlur }: FormFieldProps) {
  return (
    <div className="relative py-4">
      <label
        htmlFor={id}
        className={`block text-xs uppercase tracking-[0.15em] transition-colors duration-200 ${focused ? "text-chutney-primary" : "text-muted-foreground"
          }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="w-full bg-transparent border-0 border-b-2 border-border rounded-none px-0 py-2 
                   focus:border-chutney-primary focus:ring-0 focus:outline-none transition-colors duration-300 
                   text-foreground"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  )
}
