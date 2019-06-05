import * as types from '../types'

/**
 * App通用配置
 */
const state = {
	loading:  localStorage.getItem("loading")||true
}

const actions = {
	setNavState({ commit }, status) {
		commit(types.COM_NAV_STATUS, status)
	}
}

const getters = {
	 loading: state => state.loading
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