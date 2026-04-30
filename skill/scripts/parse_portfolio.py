import re
import sys

# Read the HTML file
with open(r'd:\Users\sali\Documents\projects\refresh\portfolio_ncoreUX.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image references with their filenames
image_pattern = r'src="[./]*portfolio_ncoreUX_files/(5a1d6f_[a-zA-Z0-9]*~mv2\.[a-z]*)"'
images = re.finditer(image_pattern, content)

# For each image, find context around it
sections = [
    'HackensackUMC',
    'IC1101',
    'readabl.ai',
    'readabl',
    'StaySMARTCARE',
    'DataEZ',
    'Automaton', 
    'HAL',
    'Predictive Rx',
    'Marvin'
]

# Find section markers
section_pattern = r'(?:' + '|'.join(sections) + r')'

image_list = []
for match in re.finditer(image_pattern, content):
    filename = match.group(1)
    pos = match.start()
    
    # Find the section this image belongs to by looking backwards for section markers
    before_text = content[:pos]
    section = 'Unknown'
    
    for sec_name in sections:
        if sec_name.lower() in before_text.lower():
            last_pos = before_text.lower().rfind(sec_name.lower())
            # Check if this is a real section marker (not in URL or metadata)
            context_around = before_text[max(0, last_pos-50):last_pos+100]
            if 'color_' in context_around or 'font_' in context_around or 'wixui' in context_around:
                section = sec_name
    
    image_list.append((filename, pos, section))

# Sort by position to get order
image_list.sort(key=lambda x: x[1])

# Print results
for filename, pos, section in image_list:
    print(f"{filename} | {section}")
