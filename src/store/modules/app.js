const state = {
  drawer: true,
  gredient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0 , .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Pages', icon: 'mdi-menu', items: [
        { title: 'Authentication', icon: 'mdi-login', items: [
          { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in' },
          { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up' },
        ] },
        { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list' },
      ] },
      { title: 'Grid System', icon: 'mdi-grid', to: '/grid-system' },
      { title: 'Grid List Page', icon: 'mdi-view-list-outline', to: '/grid-list-page' },
      { title: 'Breakpoints', icon: 'mdi-responsive', to: '/breakpoints' },
      { title: 'Typography', icon: 'mdi-format-text-variant', to: '/typography' },
      { title: 'Tables', icon: 'mdi-table-settings', items: [
        { title: 'Basic Table', icon: 'mdi-file-table-box', to: '/tables/basic-table' },
        { title: 'App Table', icon: 'mdi-file-table-box-multiple', to: '/tables/app-table' },
      ] },
      { title: 'Forms', icon: 'mdi-form-select', items: [
        { title: 'Validation Form', icon: 'mdi-format-list-checkbox', to: '/forms/validation-form' },
        { title: 'App Form', icon: 'mdi-format-list-bulleted-type', to: '/forms/app-form' },
      ] },
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },
    ],
};
const getters = {
  getDrawer: state => state.drawer
};
const mutations = {
  setDrawer (state, data) {
    state.drawer = data
  }
};
const actions = {
  toogleDrawer ({ commit }, value) {
    commit('setDrawer', value)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
