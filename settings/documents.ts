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
    title: "Inputs",
    href: "/ui-components/inputs",
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
        title: "Switch Toggle",
        href: "/switch-toggle",
      },
    ],
  },
  {
    title: "Buttons",
    href: "/ui-components/buttons",
    items: [
      {
        title: "Primary Button",
        href: "/primary-button",
      },
      {
        title: "Secondary Button",
        href: "/secondary-button",
      },
      {
        title: "Icon Button",
        href: "/icon-button",
      },
    ],
  },
  {
    title: "Feedback",
    href: "/ui-components/feedback",
    items: [
      {
        title: "Alerts",
        href: "/alerts",
      },
      {
        title: "Tooltips",
        href: "/tooltips",
      },
      {
        title: "Badges",
        href: "/badges",
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
