
"use client";

import {
  Building2,
  UserRound,
  Globe,
  BriefcaseBusiness,
  Users,
  Mail,
  Pencil,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SuccessScreenProps {
  organizationData: {
    name: string;
    website: string;
    industry: string;
    size: string;
  };
  adminData: {
    name: string;
    email: string;
    designation: string;
  };
  onEditOrganization: () => void;
  onEditAdmin: () => void;
  onBack: () => void;
  onConfirm: () => void;
}

export function SuccessScreen({
  organizationData,
  adminData,
  onEditOrganization,
  onEditAdmin,
  onBack,
  onConfirm,
}: SuccessScreenProps) {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <CheckCircle2 className="size-5" />
          <span className="text-sm font-medium">
            Final Step
          </span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight">
          Review your details
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          You're almost ready to get started. Review the information
          below and make sure everything is correct before proceeding.
        </p>
      </div>

      {/* Organization Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Building2 className="size-5" />
            </div>

            <div>
              <CardTitle className="text-base">
                Organization Details
              </CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Your organization information
              </p>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onEditOrganization}
          >
            <Pencil className="mr-2 size-3.5" />
            Edit
          </Button>
        </CardHeader>

        <CardContent className="grid gap-5 sm:grid-cols-2">
          <Detail
            icon={<Building2 />}
            label="Organization Name"
            value={organizationData?.name}
          />

          <Detail
            icon={<Globe />}
            label="Website"
            value={organizationData?.website}
          />

          <Detail
            icon={<BriefcaseBusiness />}
            label="Industry"
            value={organizationData?.industry}
          />

          <Detail
            icon={<Users />}
            label="Organization Size"
            value={organizationData?.size}
          />
        </CardContent>
      </Card>

      {/* Admin Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <UserRound className="size-5" />
            </div>

            <div>
              <CardTitle className="text-base">
                Admin Details
              </CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Organization administrator
              </p>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onEditAdmin}
          >
            <Pencil className="mr-2 size-3.5" />
            Edit
          </Button>
        </CardHeader>

        <CardContent className="grid gap-5 sm:grid-cols-2">
          <Detail
            icon={<UserRound />}
            label="Full Name"
            value={adminData?.name}
          />

          <Detail
            icon={<Mail />}
            label="Email Address"
            value={adminData?.email}
          />

          <Detail
            icon={<BriefcaseBusiness />}
            label="Designation"
            value={adminData?.designation}
          />
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>

        <Button type="button" onClick={onConfirm}>
          Confirm & Continue
          <CheckCircle2 className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="[&>svg]:size-4">{icon}</span>
        <span className="text-xs">{label}</span>
      </div>

      <p className="break-words pl-6 text-sm font-medium">
        {value || "Not provided"}
      </p>
    </div>
  );
}
