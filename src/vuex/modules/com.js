import * as types from '../types'

/**
 * App通用配置
 */
const state = {
	loading:  true,
	showToast: false,
	leftNavStatus: false,
	showSuccess: true,
	showFail: false,
	toastMsg: '操作成功',
	showTimePicker: false,
	alertMsg: '退出登录',
	showAlert: false
}

const actions = {

	setNavState({ commit }, status) {
		commit(types.COM_NAV_STATUS, status)
	}
}

const getters = {
	loading: state => state.loading,
	showToast: state => state.showToast,
	showAlert: state => state.showAlert
}


const mutations = {
	[types.COM_NAV_STATUS](state, status) {
        localStorage.setItem("loading",status)
		state.loading = status
	}
}


export default {
	state,
	actions,
	getters,
	mutations
}