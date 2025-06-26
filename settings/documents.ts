import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Mentoring",
    href: "/mentoring",
  },
  {
    title: "Concept",
    href: "/concept",
  },
  {
    spacer: true,
  },
  {
    heading: "UI Components",
    title: "Form Controls",
    href: "/ui-components/form-controls",
    items: [
      {
        title: "Button",
        href: "/button",
      },
      {
        title: "Checkbox",
        href: "/checkbox",
      },
      {
        title: "Radio Button",
        href: "/radio-button",
      },
      {
        title: "Select Dropdown",
        href: "/select-dropdown",
      },
      {
        title: "Switch",
        href: "/switch-toggle",
      },
      {
        title: "Text Input",
        href: "/text-input",
      },
      {
        title: "Textarea",
        href: "/textarea",
      },
    ],
  },
  {
    title: "Feedback & Status",
    href: "/ui-components/feedback-status",
    items: [
      {
        title: "Alerts",
        href: "/alerts",
      },
      {
        title: "Badges",
        href: "/badges",
      },
      {
        title: "Tooltips",
        href: "/tooltips",
      },
    ],
  },
  {
    title: "Composite Components",
    href: "/ui-components/composite-components",
    items: [
        {
            title: "Login Card",
            href: "/login-card",
        },
        {
            title: "Newsletter Signup",
            href: "/newsletter-signup",
        },
        {
          title: "User Settings Form",
          href: "/user-settings-form",
      },
    ],
  },
]
