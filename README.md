# Aqua Insight

Sports commentary blog, plain HTML/CSS/JS, hosted on GitHub Pages.

## Adding a new post

1. Copy `posts/_template.html` to `posts/your-slug.html` and fill in the title, date, and content.
2. Add an entry to `posts.json`:
   ```json
   {
     "slug": "your-slug",
     "title": "Your Post Title",
     "date": "YYYY-MM-DD",
     "excerpt": "One or two sentences shown on the homepage card."
   }
   ```
3. (Optional) Add a matching `<item>` to `feed.xml` for RSS subscribers.
4. Commit and push to `main` — GitHub Pages redeploys automatically.

## Local preview

Open `index.html` directly, or run a local server (needed for `posts.json` to load via `fetch`):

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
