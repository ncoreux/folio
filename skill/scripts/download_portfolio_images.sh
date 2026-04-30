#!/bin/bash
BASE="https://static.wixstatic.com/media"
DIR="d:/Users/sali/Documents/projects/refresh/images/portfolio"

dl() {
  local wixfile="$1" dest="$2" w="$3" h="$4"
  local url="${BASE}/${wixfile}/v1/fill/w_${w},h_${h},al_c,q_90,enc_auto/${wixfile}"
  echo "Downloading: $dest (${w}x${h})"
  curl -s -o "$dest" "$url"
  local sz=$(wc -c < "$dest")
  echo "  -> $sz bytes"
}

# Section 1: Hackensack IA (already decent at 920x365 and 705x363, but let's get 2x)
dl "5a1d6f_3e6a19c57e7544809b8df721c8ec714e~mv2.png" "$DIR/hero/design-thinking-approach.png" 1840 730
dl "5a1d6f_2f0f232dc4834a7ca21f582edc0af0bd~mv2.png" "$DIR/hackensack/ia-wireframe.png" 1410 726

# Section 2: Hackensack iPhone wireframes (phone portraits - display at ~200px, download at 450px)
dl "5a1d6f_23896175704f47f18d29e3a0cc33a596~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-01.png" 450 800
dl "5a1d6f_f43c3f46089e4463a3ab431869dc3ab8~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-02.png" 450 800
dl "5a1d6f_975ed4940e4a442baeabe240007f1a66~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-03.png" 450 800
dl "5a1d6f_0010977b84bd443aafadf6a66ac86360~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-04.png" 450 800
dl "5a1d6f_ff0d6f56605a4e1783bbe52e01403301~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-05.png" 450 800
dl "5a1d6f_9538f9629bfa4323aca5b9981ae935d0~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-06.png" 450 800
dl "5a1d6f_a6e593cf76514fceb56e62993178c5d0~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-07.png" 450 800
dl "5a1d6f_d9d54cc13a36416d8c27849eb48ddbb6~mv2_d_1500_2668_s_2.png" "$DIR/hackensack/iphone-wireframe-08.png" 450 800

# Section 3: Hackensack Visual Designs (phone portraits, download at 400px wide)
dl "5a1d6f_4e5f9b58510a43fc963341a72f406fc1~mv2.png" "$DIR/hackensack/visual-design-01.png" 400 740
dl "5a1d6f_bb0b18f23c294996a15252fbeda314ef~mv2.png" "$DIR/hackensack/visual-design-02.png" 400 740
dl "5a1d6f_8fb3936c5f434b5aae6a2e0cb96debc8~mv2.png" "$DIR/hackensack/visual-design-03.png" 400 740
dl "5a1d6f_4993994acc0c4d30ad01dca59f35ff20~mv2.png" "$DIR/hackensack/visual-design-04.png" 400 740

# Section 4: IC1101-Datalake (desktop screenshots)
dl "5a1d6f_acde4aa39da549df820028c37738b686~mv2.png" "$DIR/datalake/datalake-detail-01.png" 960 600
dl "5a1d6f_8fa2683bf78945ab941921ba5c41882a~mv2.png" "$DIR/datalake/datalake-detail-02.png" 960 600

# Section 5: StaySMARTCARE (the 3 images between datalake and readabl)
dl "5a1d6f_e540da2766104381a147cf232185ced2~mv2.png" "$DIR/staysmartcare/staysmartcare-dashboard.png" 960 600
dl "5a1d6f_4aeb29dc11c64ca1aec7b351f29f7a45~mv2.png" "$DIR/staysmartcare/staysmartcare-mobile-01.png" 400 570
dl "5a1d6f_17841354ab88419c8fafcaf34055cc9b~mv2.png" "$DIR/staysmartcare/staysmartcare-mobile-02.png" 400 570

# Section 6: DataEZ (desktop screenshots)
dl "5a1d6f_7cf8532b62e24a34af8e2609cbf3cb47~mv2.png" "$DIR/dataez/dataez-overview.png" 960 600
dl "5a1d6f_10c91e4bf1fc4de282e48976a0633934~mv2.png" "$DIR/dataez/dataez-detail-01.png" 960 600
dl "5a1d6f_8c9237e06575486484c3db42144c9a97~mv2.png" "$DIR/dataez/dataez-detail-02.png" 960 600

# Section 7: Automaton (desktop screenshots)
dl "5a1d6f_71f1384b6a4e48f78ee9e30a74098c6f~mv2.png" "$DIR/automaton/automaton-overview.png" 960 600
dl "5a1d6f_66441a4ccb2348f58bc65ebf5a72f85b~mv2.png" "$DIR/automaton/automaton-detail-01.png" 960 600
dl "5a1d6f_ce9462e51b8743a0a2643567fef541dc~mv2.png" "$DIR/automaton/automaton-detail-02.png" 960 600

# Section 8: HAL (desktop screenshots)
dl "5a1d6f_5485fcc33a0f4d38a017f1866bfd2af6~mv2_d_5333_3750_s_4_2.png" "$DIR/hal/hal-screen-01.png" 960 680
dl "5a1d6f_bf158c0b76fd4a4facf9959f8d850e00~mv2.png" "$DIR/hal/hal-screen-02.png" 960 600
dl "5a1d6f_d0552101ee9a424ca7c26586f9cd3188~mv2_d_2667_1458_s_2.png" "$DIR/hal/hal-screen-03.png" 960 525

# Section 9: PredictiveRx iPhone (7 phones, display ~206px wide)
dl "5a1d6f_c4f8a0b5135942b7906225b89b345dc8~mv2.png" "$DIR/predictiverx/predictiverx-iphone-01.png" 400 750
dl "5a1d6f_6434811c349e4f808ba0c9b558c6eede~mv2.png" "$DIR/predictiverx/predictiverx-iphone-02.png" 400 750
dl "5a1d6f_f88e9566c89d4c41a96ba4378693aeba~mv2.png" "$DIR/predictiverx/predictiverx-iphone-03.png" 400 750
dl "5a1d6f_96e74b500d514401b14975d2ae628dac~mv2.png" "$DIR/predictiverx/predictiverx-iphone-04.png" 400 750
dl "5a1d6f_be20bbaa61424f54ae46277709eeb8ae~mv2.png" "$DIR/predictiverx/predictiverx-iphone-05.png" 400 750
dl "5a1d6f_928a0e4e43d347afb8be966211369119~mv2.png" "$DIR/predictiverx/predictiverx-iphone-06.png" 400 750
dl "5a1d6f_d4fe0793f23f4e87bae092aae8ea9890~mv2.png" "$DIR/predictiverx/predictiverx-iphone-07.png" 400 750

# Section 10: PredictiveRx Web (4 desktop screenshots)
dl "5a1d6f_b3736684ec6c415388d90aa89679d476~mv2.png" "$DIR/predictiverx/predictiverx-web-01.png" 960 540
dl "5a1d6f_60cf7aabd59e4e45a7326de37eec57d8~mv2.png" "$DIR/predictiverx/predictiverx-web-02.png" 960 540
dl "5a1d6f_c93393488d244ff280a34c9d4db643aa~mv2.png" "$DIR/predictiverx/predictiverx-web-03.png" 960 540
dl "5a1d6f_de2a86ae9d8747a18e9714fc1af2568f~mv2.png" "$DIR/predictiverx/predictiverx-web-04.png" 960 540

# Section 11: Marvin (3 iPhones + 1 iPad)
dl "5a1d6f_439eff1e2ec04ddfa98027aa2d367ab8~mv2.png" "$DIR/marvin/marvin-iphone-01.png" 400 790
dl "5a1d6f_4813aa4691e943e494c54bbefe4b6d4f~mv2.png" "$DIR/marvin/marvin-iphone-02.png" 400 790
dl "5a1d6f_6e826e0c757c4f5d92cc228b41db12a0~mv2.png" "$DIR/marvin/marvin-iphone-03.png" 400 790
dl "5a1d6f_da8943b0b3a94081ad73582a3965bb70~mv2.png" "$DIR/marvin/marvin-ipad.png" 960 740

echo "Done!"
