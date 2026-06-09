You are an expert Frontend Developer and Growth Engineer. We are refactoring our Next.js App Router codebase to separate our global corporate ecosystem identity from our specific accounting product ("TwineCapital"). 

Our parent/umbrella company name is now: TwineNexus
Our AI-powered accounting tool name remains: TwineCapital

CRITICAL GUARDRAIL: Do NOT change any backend API routes, environment variables, database keys, or folder paths (like /app/blog/[id]/page.tsx) that rely on the word "Twine" or "TwineCapital". Only refactor user-facing copy, metadata, headings, text elements, and layout navigation labels.

Here are the specific refactoring rules:

1. GLOBAL USER-FACING COPY TRANSITION:
   - Identify instances where "TwineCapital" or "Twine Capital" is used to describe the entire company, platform ecosystem, or parent brand.
   - Replace those instances with our new parent company name: "TwineNexus".
   - Example Change: "Welcome to TwineCapital, the ultimate business operating system" -> "Welcome to TwineNexus, the ultimate business operating platform."

2. ACCOUNTING PRODUCT ISOLATION:
   - Identify instances specifically mentioning accounting, bookkeeping, automated ledgers, cash flow forecasting, multi-entity reporting, or Stitch integrations.
   - Ensure the name "TwineCapital" remains strictly attached to THESE features as the official product/tool title.
   - Example Context: "TwineNexus presents TwineCapital: Our autonomous AI-driven accounting tool."

3. METADATA & SEO REFACTORING:
   - Search through global layout files (`layout.tsx`), page-level metadata configurations, and OpenGraph configurations.
   - Update the SEO site titles to reflect: "TwineNexus | AI Business Automation & Financial Operating System".

4. UI Theme Accent Implementation:
   - Locate the primary 'Get Started' and signup CTA buttons across the landing pages (`page.tsx`) and navbar.
   - Change their styling to isolate and apply a vibrant purple accent color (#4F46E5) specifically to those primary conversion elements. 
   - Ensure the remaining layout retains the clean, premium blue-and-white corporate identity base.

Review the codebase, identify the text arrays and components that match these conditions, and apply the textual/styling updates precisely.