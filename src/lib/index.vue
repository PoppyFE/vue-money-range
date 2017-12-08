<template>
	<div class="money-range">
		<el-form :inline="true" :model="moneyRangeForm" ref="moneyRangeForm" :rules="rules" onsubmit="return false;">
			<el-form-item prop="moneyRange">
				<el-input v-model="moneyRangeForm.min_amount" prop="min_amount" @change="valueChange" placeholder="金额(元)"></el-input>
				元
				<el-input v-model="moneyRangeForm.max_amount" prop="max_amount" @change="valueChange" placeholder="金额(元)"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import Vue from 'vue';
	import { Form, FormItem, } from 'element-ui';
	
	Vue.use(Form);
	Vue.use(FormItem);
	export default {
		name: 'money-range',
		data() {
			const validateMoneyRange = (rule, value, callback) => {
				if (isNaN(this.moneyRangeForm.min_amount)) {
					callback(new Error('金额下限必须是数字'));
					return;
				}
				if (isNaN(this.moneyRangeForm.max_amount)) {
					callback(new Error('金额上限必须是数字'));
					return;
				}
				if (this.moneyRangeForm.min_amount && this.moneyRangeForm.max_amount) {
					const moneyMin = Number.parseFloat(this.moneyRangeForm.min_amount);
					const moneyMax = Number.parseFloat(this.moneyRangeForm.max_amount);
					if (moneyMin > moneyMax) {
						callback(new Error('金额下限不能大于上限'));
						return;
					}
				}
				callback();
			};
			return {
				moneyRangeForm: {
					min_amount: '',
					max_amount: '',
				},
				rules: {
					moneyRange: [
						{ validator: validateMoneyRange, trigger: 'blur' },
					],
				},
			};
		},
		methods: {
			valueChange() {
				this.$refs['moneyRangeForm'].validate((valid) => {
					if (valid) {
						this.$emit('valueChange', this.moneyRangeForm);
					}
				});
			},
		},
	}
</script>
<style>
	.money-range .el-input {
		width: 40%;
	}
</style>
