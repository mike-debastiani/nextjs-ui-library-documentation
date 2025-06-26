"use client";

import React, { useState } from "react";
import { TextInput } from "@/components/ui-library/TextInput";
import { Button } from "@/components/ui/button";

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg px-8 py-6 border border-gray-200">
      <div className="mb-4">
        <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
        <p className="text-gray-400 text-base mt-1">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
      </div>
      <form className="space-y-7">
        <div className="space-y-4">
          <TextInput
            id="newsletter-email"
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit" className="w-full" variant="default">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup; 