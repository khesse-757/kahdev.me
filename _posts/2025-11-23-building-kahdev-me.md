---
layout: post
title: "Building kahdev.me: Jekyll + GitHub Pages + Cloudflare"
date: 2025-11-23
tags: [jekyll, github-pages, cloudflare, tutorial]
---

I built this site as a simple personal landing page using Jekyll, GitHub Pages, and Cloudflare. Here's how I did it.

## The Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Free hosting with automatic deployment
- **Cloudflare** - Domain registration and DNS management
- **Figlet** - ASCII art generation

## Why This Setup?

Simple site with minimal complexity:
- No databases or servers to manage
- Free hosting and SSL
- Automatic deployments via git push
- Inexpensive domain pricing through Cloudflare

## Part 1: Domain Registration

I chose `kahdev.me` for $16/year on Cloudflare. The `.dev` TLD I originally wanted was $89/year - domain prices vary wildly by extension. Google Registry for devs costs more.

**Note:** Cloudflare Registrar sells domains at wholesale cost with no markup.

Popular TLD pricing on Cloudflare:
- `.com` - ~$10/year
- `.me` - ~$16/year
- `.dev` - ~$89/year
- `.io` - ~$45/year

## Part 2: Local Development

### Install Prerequisites

```bash
# macOS
brew install ruby bundler jekyll figlet

# Ubuntu/Debian
sudo apt-get install ruby bundler jekyll figlet
```

### Create the Site

```bash
mkdir kahdev.me
cd kahdev.me

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site locally.

### Generate ASCII Art

I used `figlet` to create the header banner:

```bash
figlet -f slant "KAH"
```

Try different fonts: `slant`, `banner`, `big`, `lean`, `shadow`

## Part 3: DNS Configuration

DNS (Domain Name System) translates human readable domains into IP addresses that computers understand. When someone types `kahdev.me`, DNS tells their browser which server to contact.

### The Two Record Types You Need

**A Records** - Point your domain to GitHub's servers

In Cloudflare DNS settings, add four A records:

| Type | Name | IPv4 Address | Proxy |
|------|------|--------------|-------|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |

These IPs are GitHub's public Pages servers. The `@` symbol means "the root domain."

**CNAME Record** - Handle www subdomain

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | www | yourusername.github.io | DNS only |

**Important:** Set proxy status to "DNS only" (gray cloud). GitHub Pages needs direct access.

### Verify DNS Configuration

Use the `dig` command to check your DNS records:

```bash
dig kahdev.me +noall +answer
```

Expected output:
```
kahdev.me.  300  IN  A  185.199.108.153
kahdev.me.  300  IN  A  185.199.109.153
kahdev.me.  300  IN  A  185.199.110.153
kahdev.me.  300  IN  A  185.199.111.153
```

DNS changes can take awhile to propagate globally.

## Part 4: Git Setup

### SSH vs HTTPS

Git supports two protocols for pushing code:

**HTTPS** - Easier to set up, requires password/token each push
```bash
git clone https://github.com/username/repo.git
```

**SSH** - No password needed after initial setup
```bash
git clone git@github.com:username/repo.git
```

I use SSH. Set it up once:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings -> SSH Keys -> New SSH key
```

Test the connection:
```bash
ssh -T git@github.com
# Should see: "Hi username! You've successfully authenticated..."
```

### CNAME File

Create a file named `CNAME` in your repo root with only your domain:

```
kahdev.me
```

This tells GitHub Pages which custom domain to serve your site from. Without it, your site only works at `username.github.io`.

### Git Commands

```bash
# Initialize repository
git init

# Stage all files
git add .

# Create commit
git commit -m "Initial commit"

# Set default branch to main
git branch -M main

# Add remote repository
git remote add origin git@github.com:username/repo.git

# Push code
git push -u origin main
```

If you need to change from HTTPS to SSH:

**Note: I mentioned this above. I did this so I never need to enter passwords or tokens when pushing/pulling code** 

```bash
git remote set-url origin git@github.com:username/repo.git
```

## Part 5: GitHub Pages Setup

### Enable GitHub Pages

1. Go to your repo -> Settings -> Pages
2. Under "Build and deployment" -> Source: select **GitHub Actions**
3. Under "Custom domain" -> enter your domain -> Save
4. Wait for DNS check, then enable **Enforce HTTPS** Mine was already checked

### GitHub Actions

GitHub Actions is a CI/CD system that automatically runs tasks when you push code. For Jekyll sites:

1. Checks out your code
2. Installs Ruby and dependencies
3. Builds the Jekyll site
4. Deploys to GitHub Pages

The workflow file `.github/workflows/pages.yml` defines these steps. It triggers on every push to `main`.

View your build progress: Actions tab

### Issues

**"Pages not enabled" error** - Enable Pages in Settings first, then re-run the Action

**DNS check stuck** - Wait 15-30 minutes for propagation, verify with `dig`
Example:
`dig kahdev.me +noall +answer`

**HTTPS not available** - DNS must fully propagate first (can take up to a day)

## Result

Things after following these steps:
- A custom domain pointing to your site
- Automatic HTTPS/SSL
- Automatic deployments on `git push`
- A static site (only pre-built HTML files no generating pages on demand)

Total cost: ~$15/year for the domain. Everything else is free.

## Key Takeaways

**DNS for GitHub** - GitHub's IPs (185.199.108-111.153) are public and used by millions of sites

**Test locally** - run `bundle exec jekyll serve` before pushing

**DNS takes time** - changes aren't immediate

**GitHub Actions are automatic** - Once configured, just push code and it deploys

## Next Steps

Now that the foundation is solid:
- Customize the CSS in `assets/css/style.css`
- Write blog posts in `_posts/`
- Add projects to `projects.html`
- Experiment with different Jekyll themes and layouts

The source code for this site is available at [github.com/khesse-757/kahdev.me](https://github.com/khesse-757/kahdev.me).