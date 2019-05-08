<template>
  <header>
      <header-image v-if="molgenisMenu.topLogo" :imgSrc="molgenisMenu.topLogo" :imgMaxHeight="molgenisMenu.topLogoMaxHeight"/>
      <cookie-wall cookieName="permissionforcookies" />
      <nav-bar :molgenis-menu="molgenisMenu" />
  </header>
</template>

<script>
import { MolgenisMenu } from '../types'
import HeaderImage from './HeaderImage.vue'
import NavBar from './NavBar.vue'
import CookieWall from './CookieWall.vue'

export default {
  name: 'HeaderComponent',
  components: { NavBar, CookieWall, HeaderImage },
  props: {
    molgenisMenu: MolgenisMenu
  },
  data: function () {
    return {}
  }
}
</script>
