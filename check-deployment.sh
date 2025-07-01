#!/bin/bash

echo "🔍 Checking GitHub Pages deployment status..."
echo ""

# Check latest workflow run
echo "📊 Latest deployment run:"
gh run list --workflow=deploy.yml --limit 1

echo ""
echo "🌐 Your site should be available at:"
echo "https://hazemelraffiee.github.io/cavalry-presentation/"
echo ""

# Try to fetch the site
echo "🔗 Checking if site is live..."
if curl -s -o /dev/null -w "%{http_code}" https://hazemelraffiee.github.io/cavalry-presentation/ | grep -q "200\|301\|302"; then
    echo "✅ Your site is live!"
    echo "🎉 Visit: https://hazemelraffiee.github.io/cavalry-presentation/"
else
    echo "⏳ Site is not yet available. This is normal if you just enabled GitHub Pages."
    echo "   It may take a few minutes for the site to become available."
    echo ""
    echo "📝 Make sure you've enabled GitHub Pages:"
    echo "   1. Go to: https://github.com/hazemelraffiee/cavalry-presentation/settings/pages"
    echo "   2. Under 'Source', select 'GitHub Actions'"
    echo "   3. Click 'Save'"
fi