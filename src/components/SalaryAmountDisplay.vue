<template>
<div class="container round-S" :style="{borderColor: colors.tertiary}">
    <div class="title" :style="{color: colors.medium}">
        {{ title }}
    </div>
    <div class="amount">
        {{ amount }}
    </div>
</div>
</template>
<script>
export default {
    name: "SalaryAmountDisplay",
    props: {
        title: String,
        // TODO type
        amount: String,
    }
}
</script>
<style scoped>
.container {
    width: 46%;
    border: 3px solid;
    padding: 0.8rem;
}
.title {
    font-size: 1.3rem;
    text-align: left;
}
.amount {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: right;
    margin-right: 1rem;
}
</style>