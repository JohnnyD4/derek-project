import { observable, action, computed } from 'mobx';
import ViewModels from '../viewmodel';

export default class RootStore {
	constructor() {
		this.detailPage = new ViewModels.CharityDetailViewModel();
		this.listPage = new ViewModels.CharityListViewModel();
	}
}