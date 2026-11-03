"use client";

import { Check } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface OnboardingStepperProps {
  steps: Step[];
  currentStep: number;
}

export function OnboardingStepper({
  steps,
  currentStep,
}: OnboardingStepperProps) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const completed = currentStep > stepNumber;
        const active = currentStep === stepNumber;

        return (
          <div key={step.title} className="relative flex gap-4 pb-12 last:pb-0">

            {/* Connecting line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border">
                <div
                  className={`w-full bg-primary transition-all duration-500 ${
                    completed ? "h-full" : "h-0"
                  }`}
                />
              </div>
            )}

            {/* Step circle */}
            <div
              className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all ${
                completed
                  ? "border-primary bg-primary text-primary-foreground"
                  : active
                    ? "border-primary bg-primary/10 text-primary ring-4 ring-primary/10"
                    : "border-border bg-background text-muted-foreground"
              }`}
            >
              {completed ? <Check className="size-5" /> : stepNumber}
            </div>

            {/* Step information */}
            <div className="pt-1">
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}