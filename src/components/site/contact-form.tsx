"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/i18n/get-dictionary";

type Interest = "erp" | "excel" | "digital" | "unsure";

export function ContactForm({ labels }: { labels: Dictionary["contact"]["form"] }) {
  const [interest, setInterest] = useState<Interest>("erp");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      interest,
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setInterest("erp");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Card className="shadow-md">
      <CardContent className="p-6 sm:p-8">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1.5">
            <Label htmlFor="name">{labels.fullName}</Label>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder={labels.fullNamePlaceholder}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">{labels.workEmail}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={labels.workEmailPlaceholder}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">{labels.phone}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder={labels.phonePlaceholder}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company">{labels.company}</Label>
            <Input
              id="company"
              name="company"
              required
              autoComplete="organization"
              placeholder={labels.companyPlaceholder}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="interest">{labels.interest}</Label>
            <Select
              value={interest}
              onValueChange={(value) => {
                if (value) setInterest(value as Interest);
              }}
            >
              <SelectTrigger id="interest" className="w-full" aria-label={labels.interest}>
                <SelectValue placeholder={labels.interestPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="erp">{labels.interests.erp}</SelectItem>
                <SelectItem value="excel">{labels.interests.excel}</SelectItem>
                <SelectItem value="digital">{labels.interests.digital}</SelectItem>
                <SelectItem value="unsure">{labels.interests.unsure}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">{labels.message}</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder={labels.messagePlaceholder}
            />
          </div>
          <Button type="submit" variant="signal" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? labels.submitting : labels.submit}
          </Button>
          {status === "success" && (
            <p className="text-center text-sm font-medium text-emerald-700">{labels.success}</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-destructive">{labels.error}</p>
          )}
          <p className="text-center text-xs text-muted-foreground">{labels.consent}</p>
        </form>
      </CardContent>
    </Card>
  );
}
