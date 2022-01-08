<template>
	<div :style="mainContainerStyle" class="mainContainer horizCont round-S">
		<div :style="{backgroundColor: colors.primary}" class="leftC vertCont round-S">
			<div class="aboveSlider horizCont">
				<SalaryAmountDisplay title="rub/y" amount="48"/>
				<SalaryAmountDisplay title="rub/y" amount="48"/>
			</div>
			<div class="belowSlider horizCont">
				<SalaryAmountDisplay title="rub/y" amount="48"/>
				<SalaryAmountDisplay title="rub/y" amount="48"/>
			</div>
		</div>
		<div :style="{backgroundColor: colors.primary}" class="rightC horizCont round-S">
			<div id="happySliderContainer">
				<VueSlider
					v-model="happySlide"
					:color=happySliderColor
					:trackColor=happySliderTrackColor
					:min=happySliderMin
					:max=happySliderMax
					:step=happySliderStep
					:width=happySliderWidth
					:height=happySliderHeight
					orientation="vertical"
					@change="updateEurPHInput"
				/>
			</div>

			<div id="happyDescriptionContainer">
				slide {{ happySlide }}
				<br>
				input {{ eurPHInput }}
			</div>
		</div>
	</div>
</template>

<script>

import slider from "vue3-slider";
import SalaryAmountDisplay from "../components/SalaryAmountDisplay.vue"

export default {
	name: 'Home',
	components: {
		"VueSlider": slider,
		"SalaryAmountDisplay" : SalaryAmountDisplay,
	},
	data() {
		return {
			eurPHInput: 4,
			happySlide: 4,
			// Need these slider values to be numbers to avoid type warnings (expected nubmer 2 got string "2")
			happySliderMin: 2,
			happySliderMax: 12,
			happySliderStep: 0.1,
			happySliderWidth: "100%",
			happySliderHeight: 60,
			happySliderTrackColor: this.colors.secondary,

			mainContainerStyle: {
				backgroundColor: this.colors.secondary,
			},
		}
	},
	methods: {
		updateHappySlide() {
			this.happySlide = this.eurPHInput;
		},
	},

	// TODO remove or use
	computed: {
		// rsdPM: function() {
		// 	return Math.ceil(this.eurPHInput * 118 * 6 * 23);
		// },
		// monthlyMin: function() {
		// 	return Math.ceil(this.sliderMin * 118);
		// },
		// monthlyMax: function() {
		// 	return Math.ceil(this.sliderMax * 118);
		// },
		happySliderColor: function() {
			if (this.happySlide < 4) {
				return "#e60000"; // red
			} else if (this.happySlide < 5) {
				return "#e68a00"; // amber
			} else if (this.happySlide < 7) {
				return "#ffe100"; // yellow
			} else if (this.happySlide < 10) {
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

.aboveSlider, .belowSlider {
	width: 100%;
	padding: 1vh 2vw;
}

#happySliderContainer {
	padding: 5vh 5vw 5vh 5vw;
}
#happyDescriptionContainer {
	padding: 3rem;
}
</style>