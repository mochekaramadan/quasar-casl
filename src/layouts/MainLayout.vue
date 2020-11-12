<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <!-- <q-btn flat round dense icon="whatshot" /> -->
        <q-btn-dropdown flat round dense :label="userFullName">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Role - {{ userRole }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click.native="logout()">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      LocalStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    userFullName () {
      const user = LocalStorage.getItem('users')
      return user.fullName
    },
    userRole () {
      const user = LocalStorage.getItem('users')
      return user.roles[0]
    }
  }
}
</script>
