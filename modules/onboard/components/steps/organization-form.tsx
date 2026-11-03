"use client";

import { ArrowRight, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrganizationFormProps {
  onNext: () => void;
}

export function OrganizationForm({ onNext }: OrganizationFormProps) {
  return (
    <div className="max-w-xl space-y-8">
      <div className="space-y-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Building2 className="size-6" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Create your organization
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Tell us a little about your organization to get your workspace
            ready.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label>Organization name *</Label>
          <Input placeholder="e.g. Acme Technologies" />
        </div>

        <div className="space-y-2">
          <Label>Website</Label>
          <Input placeholder="https://example.com" />
        </div>

        <div className="space-y-2">
          <Label>Industry *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Organization size *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select organization size" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1-10">1–10 employees</SelectItem>
              <SelectItem value="11-50">11–50 employees</SelectItem>
              <SelectItem value="51-200">51–200 employees</SelectItem>
              <SelectItem value="201-500">201–500 employees</SelectItem>
              <SelectItem value="500+">500+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext}>
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}