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
        title: "Text Input",
        href: "/text-input",
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
        title: "Textarea",
        href: "/textarea",
      },
    ],
  },
  {
    title: "Composite Components",
    href: "/ui-components/composite-components",
    items: [
        {
            title: "Login Form",
            href: "/login-form",
        },
        {
            title: "Newsletter Signup",
            href: "/newsletter-signup",
        },
        {
            title: "Contact Form",
            href: "/contact-form",
        },
        {
            title: "Date Picker",
            href: "/date-picker",
        },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "Documentation",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    title: "Markdown Components",
    href: "/markdown",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
  {
     title: "Structure",
     href: "/structure",
     items: [
       {
         title: "Deep",
         href: "/deep",
         items: [
           {
             title: "Deeper",
             href: "/deeper",
             items: [
               {
                 title: "Even deeper",
                 href: "/even-deeper",
               },
             ],
           },
         ],
       },
     ],
   },
]
