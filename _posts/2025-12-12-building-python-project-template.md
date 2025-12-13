---
layout: post
title: "Building a Python Project Template"
date: 2025-12-12
tags: [python, tooling, automation]
---

I was getting tired of starting from scratch every time I began a new Python project. Whether at home on Ubuntu or macOS, or at work on RHEL, I found myself recreating the same structure over and over. Documentation setup, testing configuration, CI/CD pipelines... it was all repetitive boilerplate.

So I built a template that handles all of it. It's not perfect, but it gets the job done with some manual tweaking when needed.

## The Stack

The template uses modern Python tooling:

- **pyproject.toml** for packaging and dependency management
- **pytest** for testing
- **ruff** for linting and formatting
- **Sphinx** for documentation
- **Docker** for containerization
- **GitHub Actions** for CI/CD

The nice thing about pyproject.toml is that it consolidates configuration. No more juggling setup.py, requirements.txt, and a dozen config files. Everything lives in one place.

## Key Features

**Automated Releases**

The template includes GitHub Actions that automatically create releases when you bump the VERSION file. Change the version number, commit, and push, that's it. The workflow handles the rest. It builds, tests across platforms, and publishes the release.

**Cross-Platform Testing**

The CI/CD pipeline tests on Ubuntu, macOS, and Windows.

**Flexible Documentation Deployment**

This was interesting to figure out. The template supports two documentation strategies:

1. **gh-pages branch** - The standard approach where Sphinx docs are built and pushed to a separate branch. GitHub Pages serves from there.
2. **In-repo docs folder** - For sites like mine where I'm already using GitHub Pages for the main site. The docs get built into a folder that lives alongside everything else.

I was already using GitHub Pages for hosting kahdev.me, so I needed the workflow to support both approaches. The first version only did gh-pages branch deployment, but after some testing I realized I wanted the flexibility.

**Docker Integration**

Getting Docker to properly use pyproject.toml for dependencies took some iteration. The Dockerfile and compose files are set up so that dependencies are installed from the pyproject.toml file, not a separate requirements.txt. This keeps everything in sync.

Learning how Dockerfiles and compose files work together was valuable. The Dockerfile defines the image, like what goes into the container. The compose file defines how to run it (all the ports, volumes, environment variables). Docker Desktop makes this pretty straightforward to work with.

**Initialization**

There's a setup.sh script that handles the basic setup. It replaces placeholder names and sets up the initial structure. Run it once when starting a new project. I'll need to think about a potential backout if you type something wrong and need to start over.

## Challenge

The documentation deployment was the trickiest part. I initially set up GitHub Actions to deploy docs to gh-pages branch, but I was already using GitHub Pages for the main site. I wanted the template to work for both use cases, so I had to iterate on the workflow to handle either approach cleanly.

## LLMs

If you know what you're doing they are great. Really good for getting off the ground quickly. I refined this template through testing and conversations with Claude.

The process of building, testing, and adjusting is where LLMs help. You can prototype quickly, see what breaks, and fix it without contstantly googling and searching on stackoverflow. Amazing what we can do with natural language. 

## Fin

The template lives at [https://github.com/khesse-757/python-project-template](https://github.com/khesse-757/python-project-template).

Check it out, fork it, modify it for your needs. That's what it's there for.