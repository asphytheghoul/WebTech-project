import React, { Component } from 'react';
import {CanvasJSChart,CanvasJS} from "canvasjs-react-charts"
import answers from "./answers_2.json"
export default class Example extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Performance Analysis"
			},
			axisX: {
				title: "Marks Percentage %",
				reversed: true,
			},
			axisY: {
				title: "Quiz",
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y: Math.floor(answers[1].percentage) , label: "Maths" },
					{ y: 95 , label: answers[0].quiz_name},
					// { y:  1800000000, label: "YouTube" },
					// { y:  800000000, label: "Instagram" },
					// { y:  563000000, label: "Qzone" },
					// { y:  376000000, label: "Weibo" },
					// { y:  336000000, label: "Twitter" },
					// { y:  330000000, label: "Reddit" }
				]
			}]
		}
		return (
		<div style={{width:"600px",position:"relative",left:"320px",paddingTop:"40px"}}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}