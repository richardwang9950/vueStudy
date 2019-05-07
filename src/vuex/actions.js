import * as types from './mutation_types'
// export function addAction ({commit}) {
//   commit(types.ADD, 10)
//   setTimeout(() => { commit(types.REDUCE) }, 3000)
//   console.log('我比reduce提前执行')
// }
// export function reduceAction ({commit}) {
//   commit(types.REDUCE)
// }
module.exports = {
  addAction: ({commit}) => {
    commit(types.ADD, 10)
    setTimeout(() => { commit(types.REDUCE) }, 3000)
    console.log('我比reduce提前执行')
  },
  reduceAction: ({commit}) => {
    commit(types.REDUCE)
  }
}
