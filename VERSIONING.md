# Versioning and Releases

This repository uses automatic versioning and releases based on a `VERSION` file and GitHub Actions.

## How It Works

1. **VERSION file** - Contains the current version (e.g., `1.1.0`)
2. **GitHub Action** - Automatically creates tags and releases when VERSION changes
3. **Semantic Versioning** - Follows the `MAJOR.MINOR.PATCH` format

## Making a Release

### Option 1: Using the Helper Script (Recommended)

```bash
# Make the script executable (first time only)
chmod +x scripts/bump-version.sh

# Run the script
./scripts/bump-version.sh
```

The script will:
- Show you the current version
- Ask what type of bump you want (patch/minor/major)
- Update the VERSION file
- Tell you the next steps

Then just:
```bash
git add VERSION
git commit -m "Bump version to X.Y.Z"
git push origin main
```

### Option 2: Manual Version Bump

```bash
# Edit the VERSION file
echo "1.2.0" > VERSION

# Commit and push
git add VERSION
git commit -m "Bump version to 1.2.0"
git push origin main
```

### What Happens Next

The GitHub Action will automatically:
1. Read the new version from the VERSION file
2. Check if a tag with that version already exists
3. If not, create a new tag `vX.Y.Z`
4. Generate a changelog from commit messages since the last tag
5. Create a GitHub release with the changelog

## Version Types

- **Patch** (1.1.X) - Bug fixes, minor changes
- **Minor** (1.X.0) - New features, backwards compatible
- **Major** (X.0.0) - Breaking changes

## Viewing Releases

All releases are available at:
`https://github.com/khesse-757/kahdev.me/releases`

## Tips

- The workflow only runs on pushes to `main`
- If you push a VERSION that already has a tag, it skips release creation
- Commit messages between tags become your changelog
- Write clear commit messages

## Troubleshooting

**If you forgot to bump the version:**
Just bump it in a new commit and push. The next push will create the release.

**If you want to skip a release:**
Don't change the VERSION file. The action only creates releases when VERSION changes and the tag doesn't exist.

**If you made a mistake:**
You can delete the tag and release on GitHub, then push a corrected VERSION.