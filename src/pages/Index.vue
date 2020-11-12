<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- ADMIN BUTTON -->
    <div class="row q-pa-sm">
      <q-btn class="q-mr-sm" v-if="$can('create', 'admin')" color="primary" label="Add Admin" />
      <q-btn class="q-mr-sm" v-if="$can('read', 'admin')" color="green" label="Read Admin" />
      <q-btn class="q-mr-sm" v-if="$can('update', 'admin')" color="yellow" label="Edit Admin" />
      <q-btn class="q-mr-sm" v-if="$can('delete', 'admin')" color="red" label="Delete Admin" />
    </div>

    <!-- MERCHANT BUTTON -->
    <div class="row q-pa-sm">
      <q-btn class="q-mr-sm" v-if="$can('create', 'merchant')" color="primary" label="Add Merchant" />
      <q-btn class="q-mr-sm" v-if="$can('read', 'merchant')" color="green" label="Read Merchant" />
      <q-btn class="q-mr-sm" v-if="$can('update', 'merchant')" color="yellow" label="Edit Merchant" />
      <q-btn class="q-mr-sm" v-if="$can('delete', 'merchant')" color="red" label="Delete Merchant" />
    </div>

    <!-- OUTLET BUTTON -->
    <div class="row q-pa-sm">
      <q-btn class="q-mr-sm" v-if="$can('create', 'outlet')" color="primary" label="Add Outlet" />
      <q-btn class="q-mr-sm" v-if="$can('read', 'outlet')" color="green" label="Read Outlet" />
      <q-btn class="q-mr-sm" v-if="$can('update', 'outlet')" color="yellow" label="Edit Outlet" />
      <q-btn class="q-mr-sm" v-if="$can('delete', 'outlet')" color="red" label="Delete Outlet" />
    </div>

    <!-- BRAND BUTTON -->
    <div class="row q-pa-sm">
      <q-btn class="q-mr-sm" v-if="$can('create', 'brand')" color="primary" glossy label="Add Brand" />
      <q-btn class="q-mr-sm" v-if="$can('read', 'brand')" color="green" label="Read Brand" />
      <q-btn class="q-mr-sm" v-if="$can('update', 'brand')" color="yellow" label="Edit Brand" />
      <q-btn class="q-mr-sm" v-if="$can('delete', 'brand')" color="red" label="Delete Brand" />
    </div>

  </div>
</template>

<script>

export default {
  name: 'PageIndex'
}
</script>
