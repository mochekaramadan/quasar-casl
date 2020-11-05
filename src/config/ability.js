import { defineAbility, AbilityBuilder, Ability } from '@casl/ability'
import { LocalStorage } from 'quasar'

// const userData =  LocalStorage.getItem('users')


// export default defineAbility(can => {
    
//     // can(['add', 'read', 'update', 'delete'], 'button');
//     if (userData[0].roles[0] === 'admin') {
//         can(['add', 'read', 'update', 'delete'], 'button');
//     } else {
//         can(['read'], 'button');
//     }

// });

export default function defineAbilitiesFor(role) {
    const {rules, can } = new AbilityBuilder()
    
    if (role === 'admin') {
        can(['add', 'read', 'update', 'delete'], 'button');
        console.log('a')
    } else {
        can(['read'], 'button');
        console.log('b')
    }

    return rules
    
}

