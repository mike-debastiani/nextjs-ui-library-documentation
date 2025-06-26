"use client";

import React, { useState } from "react";
import { TextInput } from "@/components/ui-library/TextInput";
import { SelectDropdown } from "@/components/ui-library/SelectDropdown";
import { RadioButton } from "@/components/ui-library/RadioButton";
import { SwitchToggle } from "@/components/ui-library/SwitchToggle";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui-library/Alert";

const languageOptions = [
  { label: "German", value: "german" },
  { label: "English", value: "english" },
  { label: "French", value: "french" },
];

export const UserSettingsForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [gender, setGender] = useState<string>("");
  const [publicProfile, setPublicProfile] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [shareLocation, setShareLocation] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-lg w-full bg-white rounded-xl shadow-lg px-8 pb-6 pt-0 border border-gray-200">
      <h3 className="text-xl font-bold mb-2">User Settings</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <TextInput
          id="name"
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextInput
          id="email"
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div>
          <label className="text-sm font-medium mb-1 block">Language</label>
          <SelectDropdown
            placeholder="Select language"
            groups={[
              { groupLabel: "Languages", options: languageOptions }
            ]}
            value={language}
            onChange={setLanguage}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Gender</label>
          <div className="flex gap-6 mt-1">
            <RadioButton
              id="gender-male"
              name="gender"
              label="Male"
              value="male"
              onChange={setGender}
              defaultChecked={gender === "male"}
            />
            <RadioButton
              id="gender-female"
              name="gender"
              label="Female"
              value="female"
              onChange={setGender}
              defaultChecked={gender === "female"}
            />
            <RadioButton
              id="gender-other"
              name="gender"
              label="Other"
              value="other"
              onChange={setGender}
              defaultChecked={gender === "other"}
            />
          </div>
        </div>
        <label className="text- font-medium mb-2 block">Privacy & Security</label>
        <SwitchToggle
          label="Make profile public"
          checked={publicProfile}
          onChange={setPublicProfile}
          className="mb-4"
        />
        <SwitchToggle
          label="Enable two-factor authentication"
          checked={twoFactorAuth}
          onChange={setTwoFactorAuth}
          className="mb-4"
        />
        <SwitchToggle
          label="Share location"
          checked={shareLocation}
          onChange={setShareLocation}
          className="mb-4"
        />
        <Button type="submit" className="w-full mt-2" variant="default">
          Save Settings
        </Button>
        {submitted && (
          <Alert
            title="Settings Saved!"
            description="Your preferences have been updated successfully."
            variant="success"
            className="mt-4"
          />
        )}
      </form>
    </div>
  );
};

export default UserSettingsForm;
