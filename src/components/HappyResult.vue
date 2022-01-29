<template>
<div class="container round-M" :style="{borderColor: colors.secondary}">
    <div class="smileyContainer" :style="{color: color}">
        {{ smiley }}
    </div>
    <div class="title" :style="{color: color}">
        {{ title }}
    </div>
    <div class="title" :style="{color: colors.medium}">
        {{ fee }} €/h
    </div>
</div>
</template>
<script>
export default {
    name: "HappyResult",
    props: {
        fee: String,
        smiley: String,
        title: String,
        color: String,
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    border: 3px solid;
    padding: 0.8rem;
}
.smileyContainer {
    font-size: 5rem;
    font-weight: bold;
}
.title {
    font-size: 2.5rem;
    font-weight: bold;
}
</style>