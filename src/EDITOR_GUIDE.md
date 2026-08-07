# St. Ann's College Website - Editor Guide for Non-Coders

This guide explains how non-technical staff or editors can update the website content (like scrolling announcements, placements, fee structures, and phone numbers) without writing code or setting up developer tools.

---

## Method 1: Edit Directly on GitHub (Easiest & Recommended)
You do not need to install any programming software. You can edit files directly in your web browser on GitHub.

### Step 1: Go to the File on GitHub
1. Open your repository on GitHub: [https://github.com/mohanse007/st-anns-college-landing-page](https://github.com/mohanse007/st-anns-college-landing-page)
2. Navigate to the folder containing the file you want to edit.

### Step 2: Edit the File
1. Click on the file name.
2. In the top-right corner of the file view, click the **Pencil icon (Edit this file)**.
3. Modify the text inside the quotation marks (see below for what to look for).
4. Click the green **Commit changes...** button at the top right.
5. Add a short note explaining what you changed (e.g., "Updated admissions date"), and click **Commit changes**.
6. If the website is connected to an automated hosting provider (like Vercel, Netlify, or GitHub Pages), your changes will go live automatically in 1–2 minutes!

---

## 📋 Common Updates Cheat Sheet

### 1. Update Scrolling Announcements (News Ticker)
*   **File Path**: `src/components/Ticker.tsx`
*   **What to look for**: Scroll down to line 18 where you see `const announcements = [ ... ]`.
*   **How to edit**: Change the text inside the quotation marks. Make sure to keep the commas and quotation marks intact.
    ```typescript
    const announcements = [
      "Admissions Open for Degree & PG (Intermediate, Degree, MBA, MCA) for 2026-27",
      "Insert your new announcement here",
      "Another announcement text here"
    ];
    ```

### 2. Update Placement Partners list
*   **File Path**: `src/components/SocialProof.tsx`
*   **What to look for**: Scroll down to the `logos` list:
    ```typescript
    const logos = [
      'Infosys',
      'Tata Consultancy Services (TCS)',
      'Wipro',
      'Add New Company Name Here'
    ];
    ```
*   **How to edit**: Simply add, remove, or rename the companies listed inside the single quotes.

### 3. Update Contact Numbers or Header Links
*   **File Path**: `src/components/Navbar.tsx`
*   **What to look for**: Search for the phone number (e.g. `+91 8978098870`) on line 151 and change it directly.

---

## ⚠️ Important Rules for Non-Coders
1.  **Do not delete quotation marks `""` or `''`**: All text must remain enclosed in quotes.
2.  **Do not delete commas `,`**: Items in lists must be separated by commas.
3.  **Do not delete brackets `[]` or `{}`**: These define the start and end of lists and sections.
4.  **Save/Commit**: Always click **Commit changes** to save your edits.
