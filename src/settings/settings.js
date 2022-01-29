let values = {
    rsdPEur: 117.61,   // 2022 01 21
    /*  average work hours per month
        2022 average 173.33 https://www.paragraf.rs/statistika/minimalna_zarada.html
        bckp 174 2021 https://www.chr.ucla.edu/news/monthly-working-hours-calendar
     */
    workHoursPMonth: 173,
    workHPercent: 0.75,
    // happyness levels
    tresholdSad: 4,         // very Sad < 4
    tresholdOkay: 5,        // sad 4 - 5
    tresholdVeryHappy: 6,   // okay 5 - 6 (Milan 1y infl 1.25 adjusted: 4.93 - 5.34)
    tresholdExtatic: 8,     // happy 6 - 8
                            // extatic > 8

    currentLevel: ["verySad", "sad", "okay", "veryHappy", "extatic"],
};

let colors = {
    primary: "#002266",     // 20%
    secondary: "#002b80",   // 25%
    tertiary: "#003cb3",    // 35%
    medium: "#4d88ff",      // 60%
    light: "#80aaff",       // 75%
    greyLight: "#eeeeee",
    inputSlider: "00e600",

    // Happiness Colors
    levelVerySad: "#e60000",    // red
    levelSad: "#e68a00",        // amber
    levelOkay: "#ffe100",       // yellow
    levelVeryHappy: "#009900",  // green
    levelExtatic: "#0099ff",    // blue


    // Base Blue
    /* 
        100% 		 #ffffff
        95% 		 #e6eeff
        90% 		 #ccddff
        85% 		 #b3ccff
        80% 		 #99bbff
        75% 		 #80aaff
        70% 		 #6699ff
        65% 		 #4d88ff
        60% 		 #3377ff
        55% 		 #1a66ff
        50% 		 #0055ff
        45% 		 #004de6
        40% 		 #0044cc
        35% 		 #003cb3
        30% 		 #003399
        25% 		 #002b80
        20% 	     #002266
        15% 		 #001a4d
        10% 		 #001133
        05% 		 #00091a
        00% 		 #000000
     */
};

export {colors, values};