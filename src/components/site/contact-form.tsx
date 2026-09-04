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

export function ContactForm({ labels }: { labels: Dictionary["contact"]["form"] }) {
  const [sent, setSent] = useState(false);

  return (
    <Card className="shadow-md">
      <CardContent className="p-6 sm:p-8">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
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
            <Select defaultValue="erp">
              <SelectTrigger id="interest" aria-label={labels.interest}>
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
          <Button type="submit" variant="signal" className="w-full">
            {labels.submit}
          </Button>
          {sent && (
            <p className="text-center text-sm font-medium text-emerald-700">{labels.success}</p>
          )}
          <p className="text-center text-xs text-muted-foreground">{labels.consent}</p>
        </form>
      </CardContent>
    </Card>
  );
}
