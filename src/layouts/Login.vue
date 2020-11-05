<template>
    <q-layout >
        <q-page-container>
            <q-page
                class="flex-center row justify-center item-center"
            >
                <div class="column q-pa-lg">
                    <div class="row">
                        <q-card class="my-card">
                            <q-card-section>
                                <div class="text-h6 text-blue">Sign in to your account</div>
                            </q-card-section>
                            <q-card-section>
                                <span class="text-grey">
                                    Please enter your email and password to log in.
                                </span>
                            </q-card-section>
                            <q-linear-progress
                                rounded
                                track-color="grey"
                            />
                            <q-card-section>
                                <q-input outlined class="q-mb-lg"  v-model="email" stack-label label="Email" />
                                <q-input outlined v-model="password" stack-label type="password" label="Password" />
                            </q-card-section>
                            <q-card-section>
                                <q-checkbox v-model="keepLogin" label="Keep Me Login" />
                            </q-card-section>
                            <q-card-actions vertical>
                                <q-btn color="primary" class="full-width" @click="login()" label="Login" />
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import Vue from 'vue'
import { LocalStorage } from 'quasar'
import { Ability, AbilityBuilder } from '@casl/ability'
import defineRulesFor from '../config/ability'
import { abilitiesPlugin, Can } from '@casl/vue'

// Vue.use(abilitiesPlugin)

const ability = new Ability()


export default {
    name: "Login",
    data () {
        return {
            keepLogin: false,
            email: '',
            password: ''
        }
    },
    methods: {
        login () {
            const dataLogin = {
                email: this.email,
                password: this.password,
                strategy: 'local',
                remember_me: this.keepLogin
            }

            this.$axios.post('https://jpdigi-kioskapi-uat.rintis.co.id/authentication', dataLogin, {root: true})
            .then(response => {
                const params = {
                    params: {
                        email: this.email
                    }
                }

                this.$axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                this.$axios.get('https://jpdigi-kioskapi-uat.rintis.co.id/users', params )
                .then(result => {
                    const role = result.data.data[0].roles[0]
                    console.log(defineRulesFor(role))
                    ability.update(defineRulesFor(role))

                    this.$router.push('/')
                })
            })
        }
    }
}
</script>