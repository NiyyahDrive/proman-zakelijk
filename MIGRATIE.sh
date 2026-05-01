#!/bin/bash
# Copieer proman-zakelijk vanuit Claude's outputs-folder naar je Projects-map
# en initialiseer git voor GitHub-push.

set -e

SRC="$HOME/Library/Application Support/Claude/local-agent-mode-sessions/c0171569-3524-4587-bfc6-c211b446483b/c12bc9a3-8086-46f3-ae1c-fd2c6a50fc38/local_00034cd9-6ce5-4e06-a362-ce9d4a2a14ad/outputs/proman-zakelijk"
DST="$HOME/Documents/AI_Projects/MojoWebdesign/Projects/proman-zakelijk"

echo "→ Kopieer source code (zonder node_modules en dist)..."
mkdir -p "$DST"
rsync -av --exclude=node_modules --exclude=dist --exclude=.astro "$SRC/" "$DST/"

echo "→ Naar de doel-folder..."
cd "$DST"

echo "→ Init git en eerste commit..."
git init -q -b main
git add -A
git commit -q -m "Initial commit: PROMAN Zakelijk B2B-acquisitie site"

echo "→ Klaar. Volgende stappen:"
echo "   1. Maak een nieuwe lege GitHub-repo aan: https://github.com/new (naam: proman-zakelijk)"
echo "   2. Voer uit:"
echo "      cd $DST"
echo "      git remote add origin https://github.com/NiyyahDrive/proman-zakelijk.git"
echo "      git push -u origin main"
echo "   3. Sluit aan op Cloudflare Pages → Connect Git → kies repo proman-zakelijk"
echo "      Framework: Astro · Build: npm run build · Output: dist"
