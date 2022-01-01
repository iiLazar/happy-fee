<template>
	<div :style="mainContainerStyle" class="mainContainer horizCont round-70">
		<div :style="{backgroundColor: colors.primary}" class="leftC round-50">

		</div>
		<div :style="{backgroundColor: colors.primary}" class="rightC round-50">

		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
	},
	data() {
		return {
			mainContainerStyle: {
				backgroundColor: this.colors.secondary,
			},
		}
	}
}
</script>

<style scoped>
.mainContainer {
	width: 80vw;
	height: 80vh;
	padding: 1.5%;
}

.leftC {
	width: 35%;
	height: 100%;
}

.rightC {
	width: 63%;
	height: 100%;
}
</style>