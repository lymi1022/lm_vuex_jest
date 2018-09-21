import store from '../store'
test('测试 vuex_odules', () => { //eslint-disable-line
  store.dispatch('lmCount/addCount')
  const result = store.state.lmCount.countB
  expect(result).toBe(2) //eslint-disable-line
})

test('测试 vuex_odules 的widget', () => { //eslint-disable-line
  store.dispatch('lmCount/updateWidget')
  const result = store.state.lmCount.widget
  expect(result).toEqual({name: 'lmm', age: 23}) //eslint-disable-line
})
