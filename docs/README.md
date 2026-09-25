# README screenshots

GitHub shows images from **this folder**, not from Mihir’s old repo URLs.

## How to use your own photos on GitHub

1. Run the site locally: `npm start`
2. Open [http://localhost:3000](http://localhost:3000) (with your `bannerImg.png`, `logo.png`, etc. already updated in `src/assets/images/`)
3. Take a screenshot of each section
4. Save them here with these exact names:

| File | Section |
|------|---------|
| `home.png` | Hero / banner (your main photo) |
| `features.png` | What I Do |
| `projects.png` | My Projects |
| `resume.png` | My Resume |
| `education.png` | Education History |
| `contact.png` | Contact |

5. Commit and push to `github.com/edgene121/Profile`

The root `README.md` uses paths like `./docs/home.png`, so GitHub will load **your** images from **your** repository.

## Website photos (not README)

These files control the live site:

| Image | Path |
|-------|------|
| Hero photo | `src/assets/images/bannerImg.png` |
| Logo / favicon | `src/assets/images/logo.png`, `public/profilePhoto.png` |
| Contact photo | `src/assets/images/contact/contactImg.png` |

Replace those PNG files, then rebuild or refresh the dev server.
