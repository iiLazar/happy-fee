<template>
	<div :style="mainContainerStyle" class="mainContainer horizCont round-70">
		<div :style="{backgroundColor: colors.primary}" class="leftC round-50">

		</div>
		<div :style="{backgroundColor: colors.primary}" class="rightC round-50">
			<input
				type="number"
				v-model="eurPHInput"
				:min=sliderMin
				:max=sliderMax
				:step=sliderStep
				@change="updateEurPHSlide"
			/>
			<br>
			<VueSlider
				v-model="eurPHSlide"
				:color=sliderColor
				:trackColor=sliderTrackColor
				:min=sliderMin
				:max=sliderMax
				:step=sliderStep
				:width=sliderWidth
				:height=sliderHeight
				@change="updateEurPHInput"
			/>
			<br>
			slide {{ eurPHSlide }}
			<br>
			input {{ eurPHInput }}
		</div>
	</div>
</template>

<script>

import slider from "vue3-slider";

export default {
	name: 'Home',
	components: {
		"VueSlider": slider,
	},
	data() {
		return {
			eurPHInput: 4,
			eurPHSlide: 4,
			// Need these slider values to be numbers to avoid type warnings (expected nubmer 2 got string "2")
			sliderMin: 2,
			sliderMax: 20,
			sliderStep: 0.1,
			sliderWidth: "100%",
			sliderHeight: 20,
			sliderTrackColor: this.colors.secondary,

			mainContainerStyle: {
				backgroundColor: this.colors.secondary,
			},
		}
	},
	methods: {
		updateEurPHSlide() {
			this.eurPHSlide = this.eurPHInput;
		},
		updateEurPHInput() {
			this.eurPHInput = this.eurPHSlide.toFixed(1);
		}
	},
	computed: {
		sliderColor: function() {
			if (this.eurPHInput < 4) {
				return "#e60000"; // red
			} else if (this.eurPHInput < 5) {
				return "#e68a00"; // amber
			} else if (this.eurPHInput < 7) {
				return "#ffe100"; // yellow
			} else if (this.eurPHInput < 15) {
				return "#009900"; // green
			} else {
				return "#0099ff" // blue
			}
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