let values = {
    rsdPEur: 117.61,   // 2022 01 21
    /*  average work hours per month
        2022 average 173.33 src https://www.paragraf.rs/statistika/minimalna_zarada.html
        bckp 174 2021 https://www.chr.ucla.edu/news/monthly-working-hours-calendar
     */
    workHoursPMonth: 173.33,
    workHoursPMonthSrc: "https://www.paragraf.rs/statistika/minimalna_zarada.html",
    workHPercent: 0.75,
    
    // Reference values
    /* RS Junior Average 2021 736E
        https://www.helloworld.rs/blog/Programeri-u-Srbiji-zaradjuju-u-proseku-1225-evra/11299
        https://www.danas.rs/zivot/tehnologije/programeri-u-srbiji-zaradjuju-u-proseku-1-225-evra/
        https://www.b92.net/biz/vesti/srbija/koliko-zaista-zaraduju-programeri-u-srbiji-subotica-dvostruko-jeftinija-od-beograda-1823936?version=amp
     */
    rsJrAverage2020: 736,
    rsJrAverage2020SrcHelloW: "https://www.helloworld.rs/blog/Programeri-u-Srbiji-zaradjuju-u-proseku-1225-evra/11299",
    rsJrAverage2020SrcDanas: "https://www.danas.rs/zivot/tehnologije/programeri-u-srbiji-zaradjuju-u-proseku-1-225-evra/",
    rsJrAverage2020SrcB92: "https://www.b92.net/biz/vesti/srbija/koliko-zaista-zaraduju-programeri-u-srbiji-subotica-dvostruko-jeftinija-od-beograda-1823936?version=amp",
    rsJrAverageInflationAdjusted: function() {
        return this.rsJrAverage2020 * this.inflation.year2021;
    },
    rsJrAveragePerHourInflationAdjusted: function() {
        return this.rsJrAverageInflationAdjusted() / this.workHoursPMonth;
    },
    rsJrAverageWorkHPercentAndInflationAdjusted: function() {
        return this.rsJrAverageInflationAdjusted() * this.workHPercent;
    },
    rsJrAverageWorkHPercentAndInflationAdjustedRSD: function() {
        return this.rsJrAverageWorkHPercentAndInflationAdjusted() * this.rsdPEur;
    },

    milanFrom: 4,   // gross 6
    milanTo: 4.5,   // gross 7
    milanAdjustedFrom: function() {
        return this.milanFrom * this.inflation.calculateCumulativeSince2014();
    },
    milanAdjustedTo: function() {
        return this.milanTo * this.inflation.calculateCumulativeSince2014();
    },
    milanAdjustedString: function() {
        return `${this.milanAdjustedFrom().toFixed(2)} - ${this.milanAdjustedTo().toFixed(2)}€/h`;
    },

    /* happyness levels 2022
        very sad         < 4.25
        sad         4.25 - 4.93 (--> 4.58 non-engineer + average adjusted)
        okay        4.93 - 5.55 (--> 4.58 Milan 1yr inflation (+ non-eng + avrg) adjusted)
        happy       5.55 - 7
        extatic          > 7
     */
    tresholdSad: 4.25,              // very sad
    tresholdOkay: function() {      // sad
        // return this.milanFrom * this.inflation.calculateCumulativeSince2014();
        // Decrease to acount for not being an engineer + avrg
        return 4.58;
    },
    tresholdVeryHappy: function() {     // okay
        return this.milanTo * this.inflation.calculateCumulativeSince2014();
    },
    tresholdExtatic: 7,     // happy

    currentLevel: ["verySad", "sad", "okay", "veryHappy", "extatic"],
    
    inflation: {
        srcStat: "https://www.stat.gov.rs/vesti/statisticalrelease/?p=8542&a=03&s=0301?s=0301",
        srcMtt: "https://arhiva.mtt.gov.rs/informacije/potrosacka-korpa/",
        calculateCumulativeSince2014: function () {
            let result = 1;
            for (let i = new Date().getFullYear(); i > 2013; i--) {
                let currentRate = this[`year${i}`];
                if (currentRate) {
                    result *= currentRate;
                }
            }
            return result;
        },
        year2014: 1.023,    // https://arhiva.mtt.gov.rs/download/KUPOVNA%20MOC%20-%20DECEMBAR%202014.pdf
        year2015: 1.016,    // https://arhiva.mtt.gov.rs/download/potrosacka-korpa/Korpa%20Decembar%202015.pdf
        year2016: 1.014,    // https://arhiva.mtt.gov.rs/download/potrosacka-korpa/KUPOVNA%20MOC-DECEMBAR%202016.pdf
        year2017: 1.024,    // https://arhiva.mtt.gov.rs/download/KUPOVNA%20MO%C4%86DECEMBAR%202017.pdf
        year2018: 1.010,    // https://arhiva.mtt.gov.rs/download/kupovna.pdf
        year2019: 1.0197,   // https://arhiva.mtt.gov.rs/download/KUPOVNA%20MOC%20-%20decembar%202019.pdf
        year2020: 1.028,    // https://arhiva.mtt.gov.rs/download/KUPOVNA%20MOC%20-dec%202020.docx
        year2021: 1.079,    // https://www.stat.gov.rs/vesti/statisticalrelease/?p=8542&a=03&s=0301?s=0301

        // This is horrible xD
        table: function() {
            let table = `<table><tr><th>Godina</th><th align="right">%</th>`;
            for (let year = 2014; year < 2022; year++) {
                let currentRate = (this[`year${year}`] * 100 - 100).toFixed(2);
                table += `
                    <tr>
                        <td width="130px">${year}.</td><td align="right">${currentRate}</td>
                    </tr>
                `;
            }
            table += `
                <tr>
                    <td width="180px">Kumulativno</td>
                    <td align="right">${(this.calculateCumulativeSince2014() * 100 - 100).toFixed(2)}</td>
                </tr>
            `;
            return table + "</table>";
        },
    }
};

let colors = {
    primary: "#002266",     // 20%
    secondary: "#002b80",   // 25%
    tertiary: "#003cb3",    // 35%
    medium: "#4d88ff",      // 60%
    light: "#80aaff",       // 75%
    lighter: "#b3ccff",     // 85%
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