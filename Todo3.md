# Prompt For Your AI IDE Agent

I am working on my company website called **TwineCapital**.

I want to implement **Option 4: Auto Aggregated News / External Sources** for the Blog page so the website displays **real, fresh business / finance / AI / technology news content** automatically.

The current blog page needs to become a live insights/news page.

---

## 🎯 Main Goal

Build a scalable blog/news system that automatically fetches relevant external news data and displays it beautifully on the TwineCapital website.

The content should focus on:

* Accounting
* Finance
* AI
* Business Growth
* Startups
* Technology
* SaaS
* Digital Transformation
* African Business Trends

---

# Core Requirements

## 1. Build News Aggregation System

Create a clean architecture that can fetch data from external news sources/APIs such as:

* RSS feeds
* News APIs
* Public finance/technology news feeds

Use a provider abstraction so sources can be swapped later.

---

## 2. Fetch and Normalize Data

Every article should map into this format:

* title
* slug
* summary
* image
* source
* publishDate
* category
* url
* author (if available)

---

## 3. Smart Filtering

Only show relevant articles related to:

* finance
* accounting
* AI
* business
* startups
* technology
* digital transformation

Exclude irrelevant gossip / entertainment / sports content.

---

## 4. Build TwineCapital Blog / Insights Page

Create a premium modern page with:

### Hero Section

Heading:
Insights & Market Intelligence

Subtext:
Fresh updates in finance, AI, accounting, and business innovation.

---

### Main Layout

Include:

* Featured top article
* Latest news grid
* Category filters
* Search bar
* Source badges
* Publish dates
* Read more buttons
* Responsive design

---

## 5. Optional AI Enhancement (Preferred)

For each article:

* generate short rewritten summaries
* generate cleaner excerpts
* classify categories automatically

Do NOT plagiarize full content.
Only show headline, short summary, and link to original source.

---

## 6. Branding

Match TwineCapital visual style:

* modern fintech startup
* dark navy / blue / white palette
* premium cards
* smooth hover effects
* elegant typography
* fast loading

Fonts:

* Inter
* Poppins
* Montserrat

---

## 7. Performance Requirements

* cache fetched news results
* avoid hitting APIs every page load
* support refresh schedule
* lazy load images
* graceful fallback if source fails

---

## 8. SEO Friendly

Generate clean routes like:

/blog/insights

If individual pages are created, use slugs.

---

## 9. Future-Proofing

Structure so it can later support:

* internal TwineCapital original posts
* AI-generated articles
* CMS content
* newsletter feed

---

## 10. Deliverables

1. Fully working real-data blog/news page
2. Auto-updating external content system
3. Professional UI
4. Fast and scalable architecture
5. Clean maintainable code

---

# Important Rules

* Inspect my existing project structure first.
* Use the cleanest solution matching current stack.
* Do not break existing routes/components.
* Make it production ready.
* Prioritize reliability and simplicity.

---

# Final Goal

Turn the TwineCapital blog into a real-time authority hub that makes the company look informed, active, and trusted.
