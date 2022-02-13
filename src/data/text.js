import { values } from '../settings/settings';

export const text = {
    netNote: "Sve izražene vrednosti su <b>neto</b>.",
    monthNote: `Mesečne vrednosti su izražene za <b>${values.workHPercent * 100}%</b> radnog vremena (više u odeljku "Metodologija")`,
    verySad: {
        smiley: "😞",
        title: "Very Sad",
        note: "<b>...</b>Daleko, daleko ispod nečega što je adekvatno..."
    },
    sad: {
        smiley: "😔",
        title: "Sad",
        note: `<b>...</b>Manje od proseka, mnogo manje od onoga što je moj brat zarađivao sa godinu dana radnog iskustva.`
    },
    okay: {
        smiley: "🙂",
        title: "Okay",
        note: `Sasvim u redu.<br>Moj brat je sa godinu dana iskustva zarađivao <b>${values.milanAdjustedString()}</b> (neto, uračunata inflacija), što sam značajno umanjio na <b>${values.tresholdOkay()}€/h</b>, zato što nisam diplomirani inženjer.`
    },
    veryHappy: {
        smiley: "😀",
        title: "Happy",
        note: "Ovo je trenutno iznad mojih očekivanja. 😉"
    },
    extatic: {
        smiley: "🤩",
        title: "Extatic",
        note: "Nadrealno 😂<br>Ali morao sam da se zabavim sa sliderom 😂"
    },


    methodology: {
        foreword: `U procesu postavljanja i procene referentnih vrednosti, uzeo sam u obzir:<br>
        <ul>
            <li>zaradu koju je moj brat imao kao programer sa godinu dana radnog iskustva u struci;</li>
            <li>inflaciju;</li>
            <li>prosečnu platu Junior programera u Srbiji u 2020. godini;</li>
            <li>anegdotalna iskustva poznanika.</li>
        </ul>
        `,
        basics: [
            {
                title: "Prosečno radnih dana u nedelji",
                value: function() {return `${values.workHoursPMonth} sati mesečno`},
                src: values.workHoursPMonthSrc,
            },
            {
                title: "Procenat radnog vremena",
                value: function() {return `${values.workHPercent * 100}%`},
            },
            {
                title: "Vrednost Evra",
                value: function() {return `${values.rsdPEur}RSD`},
            },
            {
                title: "Vrednosti izražene kao",
                value: function() {return `NETO`},
            },
        ],

        chapter: [
            {
                title: `Zarada mog brata`,
                content: `Sa godinu dana iskustva, Milan je zarađivao 6-7€/h, bruto, što sam računao da je neto ${values.milanFrom} - ${values.milanTo}€/h.
                            <br>Pomnoženo godišnjim inflacijama, to je <b>${values.milanAdjustedString()}</b> u današnjem novcu.`,
            },
            {
                title: `Inflacija`,
                content: `Zvanične vrednosti inflacije uzeo sam sa sajtova 
                    <a href="${values.inflation.srcStat}" target="_blank" rel="noopener">
                        Republičkog zavoda za statistiku
                    </a> za 2021. godinu, i 
                    <a href="${values.inflation.srcMtt}" target="_blank" rel="noopener">
                        Ministarstva trgovine, turizma i telekomunikacija
                    </a> Republike Srbije, za ostale godine, na osnovu razlika decembarskih vrednosti potrošačke korpe u odnosu na prethodnu godinu (npr. procentualno povećanje potrošačkih cena u decembru 2019. godine u odnosu na cene u decembru 2018. godine).
                    <br>
                    <br>
                    <br>Zvanične vrednosti inflacije
                    <br>
                    <br>
                    ${values.inflation.table()}`,
            },

        ],
    },
};
