# kahdev.me

A minimal, terminal-inspired personal site built with Jekyll and hosted on GitHub Pages.
```
    __ __ ___    __  __
   / //_//   |  / / / /
  / ,<  / /| | / /_/ / 
 / /| |/ ___ |/ __  /  
/_/ |_/_/  |_/_/ /_/   
```

## Live Site

[https://kahdev.me](https://kahdev.me)

## Local Development

### Prerequisites

- Ruby 2.7+ 
- Bundler (`gem install bundler`)
- Jekyll (`gem install jekyll`)

### Setup
```bash
# Clone the repo (SSH)
git clone git@github.com:khesse-757/kahdev.me.git
cd kahdev.me

# Or clone via HTTPS
git clone https://github.com/khesse-757/kahdev.me.git
cd kahdev.me

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Open http://localhost:4000
```

### Generate ASCII Banner

The ASCII art banner is generated using `figlet`:
```bash
# Install figlet
# macOS: brew install figlet
# Ubuntu/Debian: sudo apt-get install figlet

# Generate banner
./scripts/generate-banner.sh KAH slant
```

## Structure
```
.
├── _config.yml          # Site configuration
├── _layouts/            # HTML templates
│   ├── default.html     # Base layout
│   └── post.html        # Blog post layout
├── _posts/              # Blog posts (markdown)
├── assets/
│   ├── css/style.css    # Styles
│   ├── js/              # JavaScript files
│   └── favicon.svg      # Favicon
├── scripts/             # Helper scripts
├── CNAME                # Custom domain configuration
├── index.html           # Homepage
├── blog.html            # Blog listing
├── projects.html        # Projects page
├── about.html           # About page
└── 404.html             # 404 page
```

## Adding Content

### New Blog Post

Create a file in `_posts/` with the format `YYYY-MM-DD-title.md`:
```markdown
---
layout: post
title: "Title"
date: 2025-11-23
tags: [tag1, tag2]
---

Stuff...
```

### New Project

Edit `projects.html` and add a new project card:

```html
<div class="project-card">
  <h3><a href="https://github.com/...">Project Name</a></h3>
  <p>Description of the project.</p>
  <div class="project-tech">tech stack</div>
</div>
```

## Customization

- **Colors and fonts:** Edit CSS variables in `assets/css/style.css`
- **Site info:** Edit `_config.yml`
- **ASCII banner:** Use `scripts/generate-banner.sh` with different fonts

## Deployment

This site uses GitHub Actions to automatically build and deploy to GitHub Pages when you push to `main`.

The workflow is defined in `.github/workflows/pages.yml` and runs on every push.

## Versioning and Releases

This repository uses automated versioning with GitHub Actions. To create a new release:

```bash
# Use the helper script (recommended)
./scripts/bump-version.sh

# Or manually edit VERSION file
echo "1.2.0" > VERSION

# Commit and push
git add VERSION
git commit -m "Bump version to 1.2.0"
git push origin main
```

The GitHub Action will automatically create a tag and release with a generated changelog.

See [VERSIONING.md](VERSIONING.md) for detailed documentation.

## License

MIT License - feel free to use this as a template.
