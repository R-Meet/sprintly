"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { OnboardingStepper } from "./components/onboarding-stepper";
import { OrganizationForm } from "./components/steps/organization-form";
import { AdminForm } from "./components/steps/admin-form";
import { SuccessScreen } from "./components/steps/success-screen";

const STEPS = [
  {
    title: "Add Organization",
    description: "Set up your organization details.",
  },
  {
    title: "Assign an Admin",
    description: "Choose your organization's administrator.",
  },
  {
    title: "You're All Set",
    description: "Your organization is ready to go.",
  },
];

export default function Onboard() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [invitedAdmin, setInvitedAdmin] = useState(false);

  const handleFinish = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[30%_70%]">

        {/* Sidebar */}
        <aside className="flex flex-col border-b bg-muted/30 px-8 py-10 md:border-b-0 md:border-r md:px-10 md:py-14 lg:px-14">
          <div className="mb-16">
            <h1 className="text-2xl font-bold tracking-tight">
              Sprintly<span className="text-primary">.</span>
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Let's get your organization ready. Complete these steps
              to get started.
            </p>
          </div>

          <OnboardingStepper
            steps={STEPS}
            currentStep={currentStep}
          />

          <div className="mt-auto hidden pt-16 md:block">
            <p className="text-xs text-muted-foreground">
              © Sprintly. All rights reserved.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <section className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12 lg:px-20">
          <div className="w-full max-w-2xl">

            {currentStep === 1 && (
              <OrganizationForm
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <AdminForm
                onBack={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && (
              <SuccessScreen
                invitedAdmin={invitedAdmin}
                onFinish={handleFinish}
              />
            )}

          </div>
        </section>
      </div>
    </main>
  );
}