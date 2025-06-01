#!/bin/sh

# TypeScript kompilieren
npx tsc --project tsconfig.scripts.json

# Alle .js-Dateien in .mjs umbenennen
for file in dist/scripts/**/*.js; do
  mv "$file" "${file%.js}.mjs"
done

# Bestimmte Dateien verarbeiten
for file in dist/scripts/scripts/content.mjs dist/scripts/lib/pageroutes.mjs; do
  if [ -f "$file" ]; then
    echo "Processing $file..."

    # Plattformabhängige sed-Ausführung
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' 's|import { Documents } from "@/settings/documents"|import { Documents } from "../settings/documents.mjs"|g' "$file"
    else
      sed -i 's|import { Documents } from "@/settings/documents"|import { Documents } from "../settings/documents.mjs"|g' "$file"
    fi

    # Fehlerbehandlung
    if [ $? -ne 0 ]; then
      echo "Error: Failed to update $file"
      exit 1
    fi

    echo "$file updated successfully."
  else
    echo "$file not found!"
  fi
done

# Skript ausführen
node dist/scripts/scripts/content.mjs || exit 1