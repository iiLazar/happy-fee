<template>
<div class="container round-M vertCont" :style="{borderColor: colors.secondary}">
    <div class="topPart vertCont">
        <div class="valueContainer horizCont bold font-L" :style="{color: colors.greyLight}">
            <div class="value round-S" :style="{borderColor: colors.secondary}">
                {{ fee }} €/h
            </div>
        </div>
        <div class="smileyContainer">
            {{ smiley }}
        </div>
        <div class="title" :style="{color: color}">
            {{ title }}
        </div>
    </div>
    <div class="bottomPart vertCont">
        <div class="currentNote font-M" v-html="note" />
        <div class="commonNoteContainer">
            <ul>
                <li>
                    <div class="netNote bold font-L" v-html="text.netNote" />
                </li>
                <li>
                    <div class="monthNote bold font-S" v-html="text.monthNote" />
                </li>
            </ul>
        </div>
    </div>
</div>
</template>


<script>

import { text } from "../data/text";

export default {
    name: "HappyResult",
    props: {
        fee: String,
        smiley: String,
        title: String,
        note: String,
        color: String,
    },
    data() {
        return {
            text: text,
        }
    }
}
</script>
<style scoped>
.font-S {
    font-size: 1rem;
}
.font-M {
    font-size: 1.3rem;
}
.font-L {
    font-size: 1.5rem;
}
.bold {
    font-weight: bold;
}

.container {
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border: 4px solid;
    padding: 0.8rem;
}
.topPart {
    width: 100%;
    height: 50%;
}
.bottomPart {
    justify-content: space-between;
    height: 50%;
}

.valueContainer {
    justify-content: flex-end;
    width: 100%;
}
.value {
    border: 4px solid;
    padding: 0.5rem 1rem;
}
.smileyContainer {
    font-size: 5rem;
    font-weight: bold;
    padding: 1.2rem;
}
.title {
    font-size: 2.8rem;
    font-weight: bold;
}

.currentNote {
    height: 55%;
    margin-top: 2rem;
}
.commonNoteContainer {
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}
</style>