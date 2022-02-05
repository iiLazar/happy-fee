<template>
	<div :style="backgroundContainerStyle" class="backgroundContainer vertCont">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/old">Old Home</router-link>
		</div>

		<router-view/>
		
	</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
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
	/* TODO change global text color */
	color: #acae50;
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

/* TODO remove */
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
