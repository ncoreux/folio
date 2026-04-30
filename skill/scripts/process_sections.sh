# Map generic names to your project structure
while IFS='|' read img section; do
  case "$section" in
    "Information Architecture")
      echo "$img|1. HackensackUMC - IA"
      ;;
    "Design Samples: iPhone")
      echo "$img|2. HackensackUMC - Patient Care App iPhone wireframes"
      ;;
    "IC1101")
      echo "$img|4. IC1101-Datalake"
      ;;
    "readabl")
      echo "$img|5. readabl.ai"
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
      echo "$img|10. Predictive Rx iPhone"
      ;;
    "Marvin")
      echo "$img|12. Marvin"
      ;;
    "Hoteling App")
      echo "$img|?"
      ;;
    "Automobile Portal")
      echo "$img|?"
      ;;
    "Expense")
      echo "$img|?"
      ;;
    *)
      echo "$img|UNMAPPED: $section"
      ;;
  esac
done < /tmp/img_sections.txt | grep -v "^$" | sort
