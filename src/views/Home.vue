<template>
	<div :style="mainContainerStyle" class="mainContainer horizCont round-S">
		<div :style="{backgroundColor: colors.primary}" class="leftC vertCont round-S">
			<div class="aboveSlider horizCont">
				<SalaryAmountDisplay title="RSD/Month" :amount=rsdPM />
				<SalaryAmountDisplay title="€/Month" :amount=eurPM />
			</div>
			<div class="inputSliderCont">
				Use slider to
				<br> set fee value:
				<VueSlider class="inputSlider"
					v-model="happySlideValue"
					:color=colors.levelVeryHappy
					:trackColor=colors.tertiary
					:min=happySliderMin
					:max=happySliderMax
					:step=happySliderStep
					:height=inputSliderHeight
				/>

			</div>
			<div class="belowSlider horizCont">
				<SalaryAmountDisplay title="RSD/h" :amount=rsdPh />
				<SalaryAmountDisplay title="€/h" :amount=eurPh />
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
			happySlideValue: this.values.tresholdOkay,
			// Need these slider values to be numbers to avoid type warnings (expected nubmer 2 got string "2")
			happySliderMin: 2.90,
			happySliderMax: 9.99,
			happySliderStep: 0.01,
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

	computed: {
		eurPh: function() {
			return this.happySlideValue.toFixed(2);
		},
		eurPM: function() {
			return Math.ceil(this.values.workHPercent * this.happySlideValue * this.values.workHoursPMonth).toString();
		},
		rsdPh: function() {
			return Math.ceil(this.happySlideValue * this.values.rsdPEur).toString();
		},
		rsdPM: function() {
			return Math.ceil(this.values.workHPercent * this.rsdPh * this.values.workHoursPMonth).toString();
		},
		happySliderColor: function() {
			if (this.happySlideValue < this.values.tresholdSad) {
				return this.colors.levelVerySad; // red - very sad
			} else if (this.happySlideValue < this.values.tresholdOkay) {
				return this.colors.levelSad; // amber - sad
			} else if (this.happySlideValue < this.values.tresholdVeryHappy) {
				return this.colors.levelOkay; // yellow - okay
			} else if (this.happySlideValue < this.values.tresholdExtatic) {
				return this.colors.levelVeryHappy; // green - very happy
			} else {
				return this.colors.levelExtatic // blue - extatic
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