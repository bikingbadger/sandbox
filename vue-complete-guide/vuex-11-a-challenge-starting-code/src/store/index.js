import { createStore } from 'vuex';
import defaultMutations from './mutations.js';
import defaultActions from './actions.js';
import defaultGetters from './getters.js';

// modules
import cartModule from './modules/cart/index.js';
import productModule from './modules/products/index.js';

const store = createStore({
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: defaultMutations,
  actions: defaultActions,
  getters: defaultGetters,
  modules: {
    cart: cartModule,
    product: productModule
  }
});

export default store;
