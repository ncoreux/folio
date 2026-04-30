# Mapping based on discoveries:
# 1. HackensackUMC - IA (Information Architecture)
# 2. HackensackUMC - Patient Care App iPhone wireframes (Design Samples: iPhone)
# 3. HackensackUMC - Visual Design iPhone (not clearly found in mapping yet)
# 4. IC1101-Datalake
# 5. readabl.ai
# 6. StaySMARTCARE
# 7. DataEZ
# 8. Automaton
# 9. HAL
# 10. Predictive Rx iPhone
# 11. Predictive Rx Web
# 12. Marvin
# (Others found: Movimento, Community Platform, Fitoori, Mobile Expense App, Hoteling App)

while IFS='|' read img section; do
  case "$section" in
    "Information Architecture")
      echo "$img|1. HackensackUMC - IA"
      ;;
    "Design Samples: iPhone")
      echo "$img|2. HackensackUMC - Patient Care App iPhone"
      ;;
    "IC1101")
      echo "$img|4. IC1101-Datalake"
      ;;
    "readabl")
      echo "$img|5. readabl.ai"
      ;;
    "StaySMARTCARE")
      echo "$img|6. StaySMARTCARE"
      ;;
    "DataEZ")
      echo "$img|7. DataEZ"
      ;;
    "Automaton")
      echo "$img|8. Automaton"
      ;;
    "HAL")
      echo "$img|9. HAL"
      ;;
    "Predictive Rx")
      echo "$img|10/11. Predictive Rx"
      ;;
    "Marvin")
      echo "$img|12. Marvin"
      ;;
    "Expense")
      echo "$img|UNKNOWN - Mobile Expense App"
      ;;
    "Hoteling App")
      echo "$img|UNKNOWN - Hoteling App"
      ;;
    "Automobile Portal")
      echo "$img|UNKNOWN - Automobile Portal"
      ;;
    *)
      echo "$img|UNMAPPED: $section"
      ;;
  esac
done < /tmp/img_sections.txt
