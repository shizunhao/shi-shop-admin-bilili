import { type InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, type Store } from 'vuex'
export interface Istate {
  count: number
}
export const key: InjectionKey<Store<Istate>> = Symbol('store')
// 创建一个 stroe 实例
export const store = createStore<Istate>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
// 定义自己的userStroe函数
export function useStore (): Store<Istate> {
  return baseUseStore(key)
}
