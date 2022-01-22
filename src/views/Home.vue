<template>
	<div :style="mainContainerStyle" class="mainContainer horizCont round-S">
		<div :style="{backgroundColor: colors.primary}" class="leftC vertCont round-S">
			<div class="aboveSlider horizCont">
				<SalaryAmountDisplay title="RSD/h" amount="48"/>
				<SalaryAmountDisplay title="€/h" amount="48"/>
			</div>
			<div class="inputSliderCont">
				Use slider to
				<br> set fee value:
				<VueSlider class="inputSlider"
					v-model="happySlideValue"
					:color=colors.levelHappy
					:trackColor=colors.tertiary
					:min=happySliderMin
					:max=happySliderMax
					:step=happySliderStep
					:height=inputSliderHeight
				/>

			</div>
			<div class="belowSlider horizCont">
				<SalaryAmountDisplay title="RSD/Month" amount="48"/>
				<SalaryAmountDisplay title="€/Month" amount="48"/>
			</div>
		</div>
		<div :style="{backgroundColor: colors.primary}" class="rightC horizCont round-S">
			<div id="happySliderContainer">
				<VueSlider
					v-model="happySlideValue"
					:color=happySliderColor
					:trackColor=colors.secondary
					:min=happySliderMin
					:max=happySliderMax
					:step=happySliderStep
					:width=happySliderWidth
					:height=happySliderHeight
					orientation="vertical"
				/>
			</div>

			<div id="happyDescriptionContainer">
				slide {{ happySlideValue }}
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
			happySlideValue: 4,
			// Need these slider values to be numbers to avoid type warnings (expected nubmer 2 got string "2")
			happySliderMin: 2,
			happySliderMax: 12,
			happySliderStep: 0.1,
			happySliderWidth: "100%",
			happySliderHeight: 70,
			inputSliderHeight: 20,

			mainContainerStyle: {
				backgroundColor: this.colors.secondary,
			},
		}
	},
	methods: {
		// updateHappySlideValue() {
		// 	this.happySlideValue = this.eurPHInput;
		// },
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
			if (this.happySlideValue < 4) {
				return "#e60000"; // red
			} else if (this.happySlideValue < 5) {
				return "#e68a00"; // amber
			} else if (this.happySlideValue < 7) {
				return "#ffe100"; // yellow
			} else if (this.happySlideValue < 10) {
				return this.colors.levelHappy; // green
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

.aboveSlider, .belowSlider, .inputSliderCont {
	width: 100%;
	padding: 1vh 2vw;
}

.inputSliderCont {
	font-size: 1.7rem;
	text-align: left;
	padding-top: 4rem;
	padding-bottom: 4rem;
}

.inputSlider {
	margin-top: 0.8rem;
}

#happySliderContainer {
	padding: 5vh 5vw 5vh 5vw;
}
#happyDescriptionContainer {
	padding: 3rem;
}
</style>