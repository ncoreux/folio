import re
import html

# Read the HTML file
with open('/d/Users/sali/Documents/projects/refresh/portfolio_ncoreUX.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all URLs from static.wixstatic.com
urls = re.findall(r'https://static\.wixstatic\.com/media/[^"\s\']+', content)

# Group by base ID
url_groups = {}
for url in urls:
    # Extract base ID (e.g., 5a1d6f_2f0f232dc4834a7ca21f582edc0af0bd~mv2.png)
    match = re.search(r'/media/([^/]+?)(?:/v1|~mv2)', url)
    if match:
        base_id = match.group(1)
        if base_id not in url_groups:
            url_groups[base_id] = []
        url_groups[base_id].append(url)

# Print unique base IDs and their associated URLs
for base_id in sorted(url_groups.keys()):
    print(f"\n{base_id}:")
    # Show one representative URL from each ID
    print(f"  {url_groups[base_id][0][:120]}...")
