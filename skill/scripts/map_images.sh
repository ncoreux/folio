#!/bin/bash

# Array of portfolios
declare -A portfolio_sections=(
  ["Hackensack"]="HackensackUMC"
  ["Datalake"]="IC1101-Datalake"
  ["readabl"]="readabl"
  ["StaySMARTCARE"]="StaySMARTCARE"
  ["DataEZ"]="DataEZ"
  ["Automaton"]="Automaton"
  ["HAL"]="HAL"
  ["PredictiveRx"]="PredictiveRx"
  ["Marvin"]="Marvin"
  ["Movimento"]="Movimento"
)

for section in "${!portfolio_sections[@]}"; do
  search_term="${portfolio_sections[$section]}"
  echo "=== $section ==="
  
  # Find the line numbers where this section appears
  grep -n -i "$search_term" /d/Users/sali/Documents/projects/refresh/portfolio_ncoreUX.html | head -1 | while read line; do
    linenum=$(echo "$line" | cut -d: -f1)
    # Extract next 500 lines and get all image URIs
    sed -n "${linenum},$((linenum+1000))p" /d/Users/sali/Documents/projects/refresh/portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*~mv2\.png"' | \
      sed 's/"uri":"//; s/"$//' | sort -u | head -20
  done
done
