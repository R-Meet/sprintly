
"use client";

import { useState } from "react";
import {
  User,
  Mail,
  BriefcaseBusiness,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AdminFormProps {
  onBack: () => void;
  onNext: () => void;
}

export function AdminForm({ onBack, onNext }: AdminFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {/* Admin Name */}
        <div className="space-y-2">
          <Label htmlFor="admin-name">Full name</Label>

          <div className="relative">
            <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="admin-name"
              placeholder="Enter admin's full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Admin Email */}
        <div className="space-y-2">
          <Label htmlFor="admin-email">Email address</Label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="admin-email"
              type="email"
              placeholder="Enter admin's email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Designation */}
        <div className="space-y-2">
          <Label htmlFor="admin-designation">
            Designation <span className="text-muted-foreground">(Optional)</span>
          </Label>

          <div className="relative">
            <BriefcaseBusiness className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="admin-designation"
              placeholder="e.g. Project Manager, Director"
              value={formData.designation}
              onChange={(e) => handleChange("designation", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t pt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>

        <Button type="button" onClick={onNext}>
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}
