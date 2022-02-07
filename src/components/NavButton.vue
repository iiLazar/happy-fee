<template>

    <router-link class="round-S" :to=link>{{ title }}</router-link>
    
</template>

<script>

import { colorMixin } from "../mixins/color-mixin";
import { text } from "../data/text";

export default {
    name: "NavButton",
    props: {
        title: String,
        link: String,
    },
    mixins: [colorMixin],
    data() {
        return {
            text: text,
        }
    }
}

</script>

<style scoped>

a {
    z-index: 1;
    box-sizing: content-box;
    font-weight: bold;
	text-decoration: none;
	padding: 0.8rem;
    margin-left: 0.1rem;

    border: 6px solid v-bind("secondary");
	color: v-bind("light");

}
a:hover {
    background-color: v-bind("secondary");
    border-color: v-bind("tertiary");
	color: v-bind("light");
	font-weight: bold;
	text-decoration: none;
}

a.router-link-exact-active {
	background-color: v-bind("secondary");
    border: 6px solid v-bind("tertiary");
	color: v-bind("lightGrey");
}
</style>