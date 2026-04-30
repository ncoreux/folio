#!/bin/bash

cd /d/Users/sali/Documents/projects/refresh

# For each section, find the images associated with it
echo "DETAILED IMAGE MAPPING FROM ORIGINAL PORTFOLIO HTML"
echo "===================================================="
echo ""

# Hackensack section
echo "HACKENSACK (HackensackUMC)"
echo "------------------------"
grep -n "HackensackUMC" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  sed -n "${line_start},$((line_start+1500))p" portfolio_ncoreUX.html | \
    grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
}
echo ""

# Datalake section  
echo "DATALAKE (IC1101-Datalake)"
echo "-------------------------"
grep -n "IC1101-Datalake" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
    grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
}
echo ""

# readabl section
echo "READABL"
echo "-------"
grep -n -i "class=\"color_38 wixui-rich-text__text\">readabl<" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}
echo ""

# StaySMARTCARE section
echo "STAYSMARTCARE"
echo "-------------"
grep -n "StaySMARTCARE" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}
echo ""

# DataEZ section
echo "DATAEZ"
echo "------"
grep -n "DataEZ" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}
echo ""

# Automaton section
echo "AUTOMATON"
echo "---------"
grep -n "Automaton" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}
echo ""

# HAL section
echo "HAL"
echo "---"
grep -n ">HAL<" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}
echo ""

# PredictiveRx section
echo "PREDICTIVERX"
echo "------------"
grep -n "PredictiveRX" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}
echo ""

# Marvin section
echo "MARVIN"
echo "------"
grep -n ">Marvin<" portfolio_ncoreUX.html | head -1 | cut -d: -f1 | {
  read line_start
  if [ ! -z "$line_start" ]; then
    sed -n "${line_start},$((line_start+800))p" portfolio_ncoreUX.html | \
      grep -o '"uri":"5a1d6f_[^"]*"' | sed 's/"uri":"//; s/"$//' | sort -u
  fi
}

