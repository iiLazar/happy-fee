import { values } from '../settings/settings';

export const text = {
    // TODO or delete
    commonNote: "Zajednicka poruka",
    netNote: "Sve izražene vrednosti su <b>neto</b>.",
    monthNote: `Mesečne vrednosti podrazumevaju <b>${values.workHPercent * 100}%</b> radnog vremena (više u odeljku "Metodologija")`,
    methodology: "Tekst metodologije",
    verySad: {
        smiley: "😞",
        title: "Very Sad",
        note: "<b>...</b><br><br>Daleko, daleko ispod nečega što bi bilo u redu."
    },
    sad: {
        smiley: "😔",
        title: "Sad",
        note: `<b>...</b><br>Manje od proseka, mnogo manje od onga što je moj brat zarađivao sa godinu dana iskustva (${values.milanAdjustedString}).`
    },
    okay: {
        smiley: "🙂",
        title: "Okay",
        note: `Sasvim u redu.<br>Moj brat je sa godinu dana iskustva zarađivao <b>${values.milanAdjustedString}</b> (neto, uračunata inflacija), što sam drastično umanjio na <b>${values.tresholdOkay()}€/h</b>, zato što nisam diplomirani inženjer.`
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
