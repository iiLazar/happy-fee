<template>
	<div :style="mainContainerStyle" class="mainContainer horizCont round-S">
		<div :style="{backgroundColor: colors.primary}" class="leftC vertCont round-S">
			<div class="aboveSlider horizCont">
				<SalaryAmountDisplay title="€/h" :amount=eurPh />
				<SalaryAmountDisplay title="€/Month" :amount=eurPM />
			</div>
			<div class="inputSliderCont">
				▶ Use slider
				<br> to set fee value:
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
				<SalaryAmountDisplay title="RSD/Month" :amount=rsdPM />
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

			<div id="happyResultContainer">
				<HappyResult
					:fee=eurPh
					:color=happySliderColor
					:smiley=text[currentLevel].smiley
					:title=text[currentLevel].title
					:note=text[currentLevel].note
				/>
			</div>
		</div>
	</div>
</template>

<script>

import { text } from "../data/text";

import slider from "vue3-slider";
import SalaryAmountDisplay from "../components/SalaryAmountDisplay.vue"
import HappyResult from "../components/HappyResult.vue"

export default {
	name: 'Home',
	components: {
		"VueSlider": slider,
		"SalaryAmountDisplay" : SalaryAmountDisplay,
		"HappyResult" : HappyResult,
	},
	data() {
		return {
			text: text,
			happySlideValue: this.values.tresholdOkay(),
			// Need these slider values to be numbers to avoid type warnings (expected nubmer 2 got string "2")
			happySliderMin: 2.90,
			happySliderMax: 8.88,
			happySliderStep: 0.01,
			happySliderWidth: "100%",
			happySliderHeight: 80,
			inputSliderHeight: 20,

			mainContainerStyle: {
				backgroundColor: this.colors.secondary,
			},
		}
	},
	// TODO remove
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
		// TODO refactor using currentLevel
		happySliderColor: function() {
			if (this.happySlideValue < this.values.tresholdSad) {
				return this.colors.levelVerySad; // red - very sad
			} else if (this.happySlideValue < this.values.tresholdOkay()) {
				return this.colors.levelSad; // amber - sad
			} else if (this.happySlideValue < this.values.tresholdVeryHappy()) {
				return this.colors.levelOkay; // yellow - okay
			} else if (this.happySlideValue < this.values.tresholdExtatic) {
				return this.colors.levelVeryHappy; // green - very happy
			} else {
				return this.colors.levelExtatic // blue - extatic
			}
		},
		currentLevel: function() {
			if (this.happySlideValue < this.values.tresholdSad) {
				return this.values.currentLevel[0]; // very sad
			} else if (this.happySlideValue < this.values.tresholdOkay()) {
				return this.values.currentLevel[1]; // sad
			} else if (this.happySlideValue < this.values.tresholdVeryHappy()) {
				return this.values.currentLevel[2]; // okay
			} else if (this.happySlideValue < this.values.tresholdExtatic) {
				return this.values.currentLevel[3]; // very happy
			} else {
				return this.values.currentLevel[4] // extatic
			}
		}
	}
}
</script>

<style scoped>
.mainContainer {
	width: 90vw;
	height: 85vh;
	padding: 1.5%;
	margin-top: 3rem;
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
#happyResultContainer {
	flex-grow: 1;
	padding: 1rem 1rem 1rem 0rem;
}
</style>