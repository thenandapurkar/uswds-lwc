# USWDS → Lightning Web Components

1:1 conversions of [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) components into Salesforce Lightning Web Components for Experience Cloud sites.

Each LWC maps directly to a USWDS component — same visual output, same accessibility patterns, zero external dependencies. Drop them into Experience Cloud and your site looks like a real government website.

## What is USWDS?

The [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) is the official design system of the federal government, created and maintained by the [General Services Administration (GSA)](https://www.gsa.gov/). It provides a library of open-source UI components, design tokens, and page templates that government agencies use to build their public-facing websites.

You can explore the full system at **[designsystem.digital.gov](https://designsystem.digital.gov/)**.

### Why it matters

Government digital services serve everyone — including people with disabilities, limited English proficiency, low bandwidth, and older devices. USWDS exists to make sure those services are **consistent** and **accessible** by default:

- **Consistency** — When every agency uses the same components, colors, typography, and interaction patterns, citizens get a familiar experience across all government websites. A form on a health benefits site works the same way as a form on a permit application. This reduces confusion, builds trust, and makes government feel like one coordinated service rather than hundreds of disconnected websites.

- **Accessibility** — USWDS components are built to meet [Section 508](https://www.section508.gov/) and [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/) accessibility standards out of the box. Proper color contrast, keyboard navigation, screen reader support, focus management, and semantic HTML are baked into every component. Agencies that adopt USWDS don't have to solve these problems from scratch — they inherit tested, compliant patterns.

- **Trust** — Elements like the .gov banner and consistent visual language signal to the public that they are on a legitimate government website, not a phishing site or unofficial source.

### Why convert USWDS to LWC?

Many state and local government agencies use Salesforce Experience Cloud for their public-facing portals — permit applications, service requests, case status lookups, and more. Out of the box, Experience Cloud doesn't look like a government website. This project bridges that gap by converting USWDS components into native LWCs so that Salesforce-powered government portals look and feel like the rest of the agency's web presence.

## Install

Click the button below to deploy all components directly into your Salesforce org:

<a href="https://githubsfdeploy.herokuapp.com?owner=thenandapurkar&repo=uswds-lwc&ref=main">
  <img alt="Deploy to Salesforce" src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

### Manual Install

1. Clone this repo
2. Deploy with Salesforce CLI:
   ```bash
   sf project deploy start --source-dir force-app
   ```
3. In Experience Cloud Builder, drag the components onto your pages

## Components

### uswdsBannerLwc

**USWDS Original:** [Banner](https://designsystem.digital.gov/components/banner/)

The official U.S. government website identification banner. This is the gray bar at the very top of every .gov site that says "An official website of the United States government" with an expand/collapse panel explaining .gov domains and HTTPS.

**Where to use:** Top of any Experience Cloud page that should look like a government website.

**How to use:**
1. In Experience Cloud Builder, drag `USWDS Banner LWC` onto the top of your page
2. It works out of the box — no configuration needed

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `expanded` | Boolean | `false` | Set to `true` to show the explanation panel open by default |

**Example (in a parent LWC):**
```html
<c-uswds-banner-lwc></c-uswds-banner-lwc>

<!-- Or start expanded -->
<c-uswds-banner-lwc expanded></c-uswds-banner-lwc>
```

---

## Shared Resources

### uswdsIconsLwc

A service component that exports SVG path data for 40+ commonly-used USWDS/Material icons plus the US flag and banner lock SVGs. Not a visible component — import it into your own LWCs.

**Icons included:** Menu, Close, Search, Login, Logout, Info, Check Circle, Warning, Error, Lock, Flag, Person, People, Location, Home, Settings, Calendar, Phone, Email, Edit, Delete, and more.

**How to use:**
```javascript
import { ICONS, FLAG_SVG, BANNER_LOCK_SVG } from 'c/uswdsIconsLwc';
```

Then reference in your template:
```html
<svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d={iconPath}></path>
</svg>
```

### uswdsTokens (Static Resource)

CSS custom properties matching USWDS design tokens — colors, spacing, typography, breakpoints, and focus styles. Load this in any LWC that needs consistent USWDS styling.

**How to use:**
```javascript
import uswdsTokens from '@salesforce/resourceUrl/uswdsTokens';
import { loadStyle } from 'lightning/platformResourceLoader';

connectedCallback() {
    loadStyle(this, uswdsTokens);
}
```

**Tokens included:**

| Category | Examples |
|----------|---------|
| Colors | `--uswds-color-primary`, `--uswds-color-success`, `--uswds-color-error`, `--uswds-color-warning`, `--uswds-color-info` |
| Spacing | `--uswds-spacing-1` (8px) through `--uswds-spacing-15` (120px) |
| Typography | `--uswds-font-sans` (Public Sans), `--uswds-font-size-sm` through `--uswds-font-size-3xl` |
| Layout | `--uswds-max-width` (1280px), breakpoint tokens for responsive design |

---

## Conversion Status

| USWDS Component | LWC Name | Status |
|-----------------|----------|--------|
| [Banner](https://designsystem.digital.gov/components/banner/) | `uswdsBannerLwc` | Done |
| [Header](https://designsystem.digital.gov/components/header/) | — | Planned |
| [Footer](https://designsystem.digital.gov/components/footer/) | — | Planned |
| [Identifier](https://designsystem.digital.gov/components/identifier/) | — | Planned |
| [Side Navigation](https://designsystem.digital.gov/components/side-navigation/) | — | Planned |
| [Card](https://designsystem.digital.gov/components/card/) | — | Planned |
| [Alert](https://designsystem.digital.gov/components/alert/) | — | Planned |
| [Step Indicator](https://designsystem.digital.gov/components/step-indicator/) | — | Planned |
| [Summary Box](https://designsystem.digital.gov/components/summary-box/) | — | Planned |

---

## Project Structure

```
uswds-lwc/
├── force-app/main/default/
│   ├── lwc/
│   │   ├── uswdsBannerLwc/        ← .gov identification banner
│   │   └── uswdsIconsLwc/         ← Shared SVG icon paths
│   └── staticresources/
│       └── uswdsTokens.css         ← USWDS design tokens
└── README.md
```

## Design References

- [USWDS Components](https://designsystem.digital.gov/components/overview/)
- [USWDS Tailwind (HTML patterns)](https://uswds-tailwind.com/)
- [React USWDS Tailwind (Storybook)](https://react.uswds-tailwind.com/)

## License

This project is provided as-is for demo and educational purposes. USWDS is a public domain design system maintained by the U.S. General Services Administration.
