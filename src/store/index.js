import { createStore } from 'vuex';
import { ElMessage } from 'element-plus';
import * as dataLoader from "@/data/dataLoader";

const debug = true;

export default createStore({
  state: {
    rem: null,
  },
  mutations: {
    changeRem(state, payload) {
      state.rem = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
