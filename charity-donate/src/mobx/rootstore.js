import { observable, action, computed } from 'mobx';
import CharityDetailViewModel from '../viewmodel/detail/detailViewModel';
import CharityListViewModel from '../viewmodel/list/listcharities';

export default class RootStore {
	constructor() {
		this.detailPage = new CharityDetailViewModel();
		this.listPage = new CharityListViewModel();
	}
}