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
        note: `Sasvim u redu.<br>Moj brat je sa godinu dana iskustva zarađivao <b>${values.milanAdjustedString}</b> (neto, uračunata inflacija), što sam značajno umanjio na <b>${values.tresholdOkay()}€/h</b>, zato što nisam diplomirani inženjer.`
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
};
