# Arnab Gupta — Personal Professional Website

A multi-page static website for [Arnab Gupta](https://www.wur.nl/en/persons/arnab-gupta), Senior Researcher and Seed Systems Advisor at Wageningen University & Research.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, highlights, recent work |
| About | `pages/about.html` | Biography, timeline, affiliations |
| Research | `pages/research.html` | Publications with filter |
| Projects | `pages/projects.html` | Digital tools and field work |
| Writing | `pages/writing.html` | Substack and LinkedIn content |
| Teaching | `pages/teaching.html` | Courses and training |
| Personal | `pages/personal.html` | Travel, interests, reading |
| Contact | `pages/contact.html` | Contact methods and engagements |

## Structure

```
arnab-site/
├── index.html              # Homepage
├── pages/
│   ├── about.html
│   ├── research.html
│   ├── projects.html
│   ├── writing.html
│   ├── teaching.html
│   ├── personal.html
│   └── contact.html
├── css/
│   └── style.css           # Full design system
├── js/
│   ├── main.js             # Scroll, animation, filter logic
│   └── components.js       # Shared nav + footer injection
└── README.md
```

## Deploy to GitHub Pages

1. Create a new repository: `github.com/[username]/[username].github.io`
   - OR any repo name, then enable Pages under Settings → Pages

2. Push all files:
```bash
git init
git add .
git commit -m "Initial site"
git remote add origin https://github.com/[username]/[repo].git
git push -u origin main
```

3. In GitHub → Settings → Pages:
   - Source: Deploy from branch
   - Branch: `main` / `(root)`

4. Your site will be live at `https://[username].github.io/[repo]/`

## Customisation

- **Profile photo**: Replace the `AG` initials avatar in `index.html` with `<img src="assets/photo.jpg" ...>`
- **Publications**: Add new `.pub-item` entries to `pages/research.html`
- **Projects**: Add new `.project-card` entries to `pages/projects.html`
- **Substack posts**: Update the `writing-card` entries in `pages/writing.html` as new essays are published
- **Colours**: Edit CSS variables in `css/style.css` (`:root` block) to adjust palette

## Design

- **Typography**: Cormorant Garamond (serif headings) + DM Sans (body) + DM Mono (labels)
- **Palette**: Forest green (#1a3a2a) + Amber (#c8863a) + Warm cream (#f5f0e8)
- **No framework dependencies** — pure HTML/CSS/JS, zero build step
- **Fully responsive** — mobile hamburger menu, adaptive grid layouts

## ORCID
[0000-0002-5672-5735](https://orcid.org/0000-0002-5672-5735)
