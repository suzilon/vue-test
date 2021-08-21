const state = {
  sidebar: {
    name: "suzilong",
    type: "hello word"
  }
};

const mutations = {
  SET_SIDEBAR: (state, name) => {
    state.sidebar.name = name;
  }
};

const actions = {
  sideBar({ commit }, name) {
    debugger;
    setTimeout(() => {
      commit("SET_SIDEBAR", name);
    }, 1000);
  }
};

export default {
  namespaced: true, // namespaced: true 的方式使其成为带命名空间的模块
  state,
  mutations,
  actions
};
