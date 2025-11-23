# kah.dev

A minimal, terminal-inspired site built with Jekyll.

```
    __ __ ___    __  __
   / //_//   |  / / / /
  / ,<  / /| | / /_/ / 
 / /| |/ ___ |/ __  /  
/_/ |_/_/  |_/_/ /_/   
```

## Live Site

[https://kah.dev](https://kah.dev)

## Local Development

### Prerequisites

- Ruby 2.7+ 
- Bundler (`gem install bundler`)
- Jekyll (`gem install jekyll`)

### Setup

```bash
# Clone the repo
git clone https://github.com/khesse-757/kah.dev.git
cd kah.dev

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
│   └── favicon.svg      # Favicon
├── scripts/             # Helper scripts
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
title: "Your Post Title"
date: 2025-11-23
tags: [tag1, tag2]
---

Your content here...
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

- Colors and fonts: Edit CSS variables in `assets/css/style.css`
- Site info: Edit `_config.yml`
- ASCII banner: Use `scripts/generate-banner.sh` with different fonts

## License

MIT License - feel free to use this as a template.
