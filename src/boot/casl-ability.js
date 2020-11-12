import { abilitiesPlugin, Can } from '@casl/vue'
import { buildAbilityFor } from '../config/ability'
import { LocalStorage } from 'quasar'

const userData =  LocalStorage.getItem('users')
let role = ''
if (userData) {
  role = userData.roles[0]
} else {
  role = 'admin'
}
const ability = buildAbilityFor(role)

export default ({ Vue }) => {
  Vue.use(abilitiesPlugin, ability);
  Vue.config.productionTip = false;
  Vue.component('Can', Can)
}
