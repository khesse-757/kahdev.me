#!/bin/bash
#
# generate-banner.sh - Generate ASCII art banner for kahdev.me
#
# Usage: ./generate-banner.sh [text] [font]
#
# This script uses figlet to generate ASCII art banners.
# Install figlet: apt-get install figlet (Debian/Ubuntu)
#                 brew install figlet (macOS)
#

set -e

TEXT="${1:-KAH}"
FONT="${2:-slant}"

# Check if figlet is installed
if ! command -v figlet &> /dev/null; then
    echo "Error: figlet is not installed." >&2
    echo "Install it with:" >&2
    echo "  Ubuntu/Debian: sudo apt-get install figlet" >&2
    echo "  macOS: brew install figlet" >&2
    exit 1
fi

# Generate the banner
figlet -f "$FONT" "$TEXT"

# Optional: Add a decorative line
WIDTH=$(figlet -f "$FONT" "$TEXT" | head -1 | wc -c)
printf '%*s\n' "$WIDTH" '' | tr ' ' '-'
