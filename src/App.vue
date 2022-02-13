<template>
	<div :style="backgroundContainerStyle" class="backgroundContainer vertCont">
		<div id="nav">
			<NavButton title="Dashboard" link="/" />
			<NavButton title="Methodology" link="/methodology" />
		</div>

		<router-view/>
		
	</div>
</template>

<script>

import NavButton from "./components/NavButton.vue";

export default {
	name: 'App',
	components: {
		"NavButton": NavButton,
	},
	data() {
		return {
			// TODO refactor: bind colors in all component style's?
			primary: this.colors.primary,
			secondary: this.colors.secondary,
			tertiary: this.colors.tertiary,
			medium: this.colors.medium,
			light: this.colors.light,
			lighter: this.colors.lighter,
			greyLight: this.colors.greyLight,
			rootStyle: "{background-color: red;}",
			// only styling using setting.js; rest is in <style>
			backgroundContainerStyle: {
				backgroundColor: this.colors.primary,
				color: this.colors.greyLight,
			},
		}
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: v-bind("greyLight");
}

.vertCont {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.horizCont {
	display: flex;
	justify-content: space-between;
	align-items: stretch;
}

.round-S {
	border-radius: 15px;
}
.round-M {
	border-radius: 30px;
}

.backgroundContainer {
	width: 100vw;
	height: 100vh;
	padding-bottom: 0.5rem;
}

#nav {
	position: absolute;
	top: 1.1rem;
	right: 5.8rem;
	padding: 1rem;
}

a {
	color: v-bind(lighter);
	text-decoration: none;
}
a:hover {
	color: v-bind(light);
}

</style>
