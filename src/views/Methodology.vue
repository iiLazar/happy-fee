<template>
	<div class="pageContainer">
		<h1 class="title">Metodologija</h1>
		<div class="pageContent">


			<div v-html="methodology.foreword"></div>

			<!-- Basic Values -->
			<h3 class="chapterTitle">Osnovne vrednosti</h3>
			<table>
				<tr v-for="item in methodology.basics">
					<td>{{ item.title }}:</td>
					<td class="tdPad">{{ item.value() }}</td>
					<td v-if="item.src" class="tdPad">
						<a :href=item.src target="_blank" rel="noopener">[izvor]</a>
					</td>
				</tr>
			</table>

			<!-- Chapters -->
			<template v-for="chapter in methodology.chapter">
				<h3 class="chapterTitle">{{ chapter.title }}</h3>
				<div class="chapterContent" v-html="chapter.content"></div>
			</template>
		</div>
	</div>
</template>

<script>

import { colorMixin } from "../mixins/color-mixin";
import { text } from "../data/text";

export default {
	name: "Methodology",
	mixins: [colorMixin],
	data() {
        return {
            methodology: text.methodology,
        }
    }
}
</script>

<style scoped>

.pageContainer {
	width: 60%;
	min-width: 600px;
	height: 90%;
	margin-top: 4.5rem;
}
.title {
	font-size: 2.3rem;
	padding-bottom: 10px;
	border-bottom: 5px solid v-bind(secondary);
	margin: 1px;
}
.pageContent {
	height: 85%;
	font-size: 1.5rem;
	text-align: left;
	padding: 0px 20px;

	overflow: auto;
	overflow-x: hidden;
	scroll-behavior: smooth;
}
/* Scrollbar for Chrome, Safari and Opera */
/* width */
::-webkit-scrollbar {
	width: 20px;
}
/* Track */
::-webkit-scrollbar-track {
  /* background: v-bind(secondary);  */
	background: #007;
}
/* Handle */
::-webkit-scrollbar-thumb {
	background: v-bind(secondary); 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: v-bind(tertiary); 
}
/* ////////////////////////////////// */
/* /////////// END Scroll ////////// */
/* //////////////////////////////// */


.tdPad {
	padding-left: 50px;
}

.chapterTitle {
	font-size: 1.9rem;
	margin-top: 80px;
}
.chapterContent {
	text-align: justify;
}

</style>