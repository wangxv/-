# Vue 3 + Vite


自定义事件
const emit = defineEmit(['change', 'cancel'])

触发自定义事件
emit('change');

#### 状态管理
import {userStore} from 'vuex';
const store = userStore();

// mutations
store.commit('add', 3);

// actions
store.dispatch('asyncAdd', 5);