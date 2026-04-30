#!/bin/bash

# For each portfolio section, find associated images
sections=("Hackensack" "Datalake" "readabl" "StaySMARTCARE" "DataEZ" "Automaton" "HAL" "PredictiveRx" "Marvin" "Movimento")

for section in "${sections[@]}"; do
  echo "=== $section ==="
  grep -o -i "$section" /d/Users/sali/Documents/projects/refresh/portfolio_ncoreUX.html | head -3
done
