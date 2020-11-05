import { abilitiesPlugin, Can } from '@casl/vue'
import ability from '../config/ability'

export default ({ Vue }) => {
  console.log('XXXXX')
  Vue.use(abilitiesPlugin, ability)
  // Vue.prototype.$ability = ability
  Vue.component('Can', Can)
  console.log('SSSSS')
}
