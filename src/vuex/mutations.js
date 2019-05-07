// export function add (state, n) {
//   state.count += n
// }
// export function reduce (state) {
//   state.count--
// }
import * as types from './mutation_types'
module.exports = {
  [types.ADD] (state, n) {
    state.count += n
  },
  [types.REDUCE]  (state) {
    state.count--
  }
}
