# App Legal Pages Template

A small static site for an app landing page plus public Privacy, Terms, Support, Delete Account, FAQ, and Changelog pages. It is designed for GitHub Pages, requires no build step, and works on any static host.

This is a hosting and visual template. It does **not** create a legally complete privacy policy or terms for you.

## Quick start

1. Select **Use this template** on GitHub, or clone this repository.
2. Edit `assets/config.js`: app name, developer name, support email, App Store URL, and accent color.
3. Replace the placeholder text in the pages you use, especially `privacy.html`, `terms.html`, and `delete-account.html`.
4. Commit and push your changes.
5. In GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.
6. Your pages will be available at:
   - `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/privacy.html`
   - `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/terms.html`
   - `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/support.html`

For a cleaner URL such as `https://legal.example.com/privacy.html`, configure a custom domain in GitHub Pages.

## Optional landing page

`index.html` is an optional landing page. Keep it, simplify it, or redirect it to `privacy.html` if you only need legal pages.

## Optional pages

- `delete-account.html` explains the in-app deletion path and what data is removed.
- `faq.html` answers common support questions.
- `changelog.html` lists product releases. Duplicate its release block when you ship a version.

## Before using the URL in an app store

- Open the final URL in a private browser window.
- Confirm it returns HTTPS and does not require a login.
- Verify the policy accurately lists your app’s real data collection, sharing, permissions, retention, and account-deletion behavior.
- Use the exact final URL in your app and store listing.

## License

MIT. Replace `[YOUR NAME]` in `LICENSE` before publishing if desired.
