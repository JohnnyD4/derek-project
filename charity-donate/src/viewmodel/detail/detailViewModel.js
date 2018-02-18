import { observable, action, computed } from 'mobx';

export default class CharityDetailViewModel {
	@computed
	get charity() {
		return {
				id: '1',
				title: 'Eleven22',
				description: 'We are a non-profit church that helps people all over the world. We are currently in Zambia trying to give water to this beautiful country.',
				url: 'www.coe22.com',
			}
	}
}
