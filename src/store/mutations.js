const ADD_COUNT = 'ADD_COUNT'

const mutations = {
  [ADD_COUNT] (state) {
    state.countA = state.countA + 2
  }
}

export default mutations
