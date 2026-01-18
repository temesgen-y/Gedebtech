# Gedeb Technologies - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing from enterprise tech leaders:
- **Primary Inspiration**: Linear (clean, technical precision) + Stripe (trust, clarity) + Vercel (modern, performance-focused)
- **Core Principle**: Professional sophistication with modern edge—conveying enterprise reliability without corporate stuffiness

---

## Typography

**Font Stack**:
- **Primary**: Inter (via Google Fonts CDN) - body text, UI elements
- **Display**: Cal Sans or Space Grotesk - hero headlines, section titles

**Hierarchy**:
- Hero H1: 4xl-6xl (text-4xl lg:text-6xl), font-bold
- Section H2: 3xl-4xl (text-3xl lg:text-4xl), font-semibold
- Card/Feature H3: xl-2xl (text-xl lg:text-2xl), font-semibold
- Body: base-lg (text-base lg:text-lg), font-normal, leading-relaxed
- Captions/Meta: sm (text-sm), font-medium

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** (e.g., p-4, gap-8, mt-12, py-20)

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Content-focused sections: `max-w-6xl`
- Text content: `max-w-3xl` for readability

**Vertical Rhythm**: `py-12 md:py-20 lg:py-24` for major sections

---

## Page-Specific Layouts

### Home Page
1. **Hero**: Full-width with background image (modern office/tech environment, team collaborating on code). Height: `min-h-[600px] lg:min-h-[700px]`. Headline + subheadline + dual CTAs ("Contact Us" primary, "View Services" secondary). Buttons with backdrop-blur-md background.

2. **Services Overview**: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) with icon + title + brief description cards

3. **Industries Served**: 2-column alternating layout showcasing 4-6 industries with supporting imagery

4. **Featured Projects**: Masonry-style or staggered grid (3 projects) with hover reveals

5. **Trust Section**: Stats bar with 4 columns (Years Experience | Projects | Team Size | Client Satisfaction)

6. **CTA Section**: Full-width with subtle gradient background, centered messaging

### Services Page
- Hero: Minimal (30vh) with breadcrumb
- Service Cards: Detailed 2-column layout (lg:grid-cols-2) with icon, title, description list, CTA
- 6-8 service offerings presented

### Projects Page
- Filterable grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Project cards with thumbnail, title, tech stack tags, brief description
- Individual project pages: Hero image + challenge/solution/results sections

### About Page
- Mission/Vision hero
- Team section: 4-column grid with headshots (if available) or initials
- Timeline component showcasing company milestones
- Values cards: 3-column grid

### Hire Talents Page
- Hero explaining talent offerings
- Talent categories: Grid layout with role types (Frontend, Backend, DevOps, Design, etc.)
- Engagement models: 3-column comparison (Contract | Dedicated Team | Staff Augmentation)
- Process timeline visualization

### Contact Page
- 2-column layout: Form (left, 60%) | Info + Map placeholder (right, 40%)
- Form fields: Name, Email, Company, Message with proper validation states

---

## Component Library

**Navigation**: 
- Desktop: Horizontal with dropdowns for Services, Industries
- Mobile: Slide-in drawer
- Sticky header with shadow on scroll

**Buttons**:
- Primary: Solid with hover lift effect
- Secondary: Outlined
- Sizes: sm, md, lg

**Cards**:
- Service cards: Bordered, hover shadow elevation
- Project cards: Image + overlay on hover
- Feature cards: Icon (top) + content vertical layout

**Forms**:
- Input fields with floating labels
- Focus states with ring offset
- Error states with red accent

**Icons**: Heroicons via CDN (outline for navigation, solid for features)

---

## Images

**Required Images**:
1. **Hero (Home)**: Large, high-quality image of modern workspace/tech team (1920x800px minimum). Overlay gradient for text readability.
2. **Industries**: 4-6 industry-specific images (manufacturing, healthcare, finance, etc.)
3. **Projects**: 6-9 project thumbnails/screenshots
4. **About**: Team photo or office environment
5. **Hire Talents**: Professional workplace imagery

Use `next/image` with lazy loading, WebP format, responsive srcsets.

---

## Animations

**Minimal & Purposeful**:
- Fade-in on scroll for section reveals (use Intersection Observer)
- Hover transitions on cards: transform scale-105, transition-all duration-300
- Nav dropdown: slide-down animation
- NO parallax, NO complex scroll-triggered animations

---

## Accessibility
- Semantic HTML5 throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators with visible ring
- Color contrast minimum AA compliance
- Alt text for all images