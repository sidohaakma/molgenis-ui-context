<template>
  <header id="molgenis-header-container" class="fixed-top">
    <div v-if="topLogo" id="top-logo-vue-banner" :style="topLogoVueBannerStyle" class="bg-light">
      <span :style="helperStyle"></span>
      <a href="/"><img id="logo-top" :src="topLogo" alt="" border="0" :style="topLogoStyle"></a>
    </div>

    <nav class="navbar navbar-expand-md navbar-light bg-light" role="navigation">
      <a v-if="navBarLogo" class="navbar-brand" :href="'/menu/main/'+menu.items[0].href">
        <img :src="navBarLogo" height="20">
      </a>
      <a v-else class="navbar-brand" href="#"></a>

      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-content"
              aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav mr-auto">

          <template v-for="item in menu.items">
            <li v-if="item.type === 'PLUGIN' && item.id !== 'home'"
                :class="['nav-item', {'active': isSelectedPlugin(item.id)}]">

              <a class="nav-link" :href="'/menu/main/'+item.href">
                {{ item.label }}
              </a>
            </li>

            <li v-else-if="item.id !== 'home'" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" :id="item.id" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                {{ item.label }}
              </a>
              <drop-down-items :parent="item" :items="item.items"/>
            </li>
          </template>

        </ul>

        <ul class="navbar-nav justify-content">
          <li v-if="authenticated && languages.length > 1" class="nav-item">
            <form id="language-form" class="navbar-form">
              <select class="nav-link" v-model="selectedLanguage" @change="handleLanguageSelect">
                <option v-for="language in languages" :value="language.id" :selected="language.id === selectedLanguage">
                  {{ language.label }}
                </option>
              </select>
            </form>
          </li>
        </ul>

        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" :href="helpLink.href" target="_blank">
              {{ helpLink.label }}
            </a>
          </li>

          <li class="nav-item">
            <form id="logout-form" class="form-inline" method="post" action="/logout">
              <button v-if="authenticated" id="signout-button" type="button" class="btn btn-outline-secondary"
                      @click="logout">
                Sign out
              </button>

              <a v-else class='btn btn-outline-primary' href="/login">Sign in</a>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import DropDownItems from './DropDownItems'

  import api from '@molgenis/molgenis-api-client'

  export default {
    name: 'molgenis-menu',
    computed: {
      topLogoStyle () {
        return this.topLogo ? {
          maxHeight: this.topLogoMaxHeight + 'px',
          verticalAlign: 'middle'
        } : undefined
      },
      topLogoVueBannerStyle () {
        return window.molgenisMenu.topLogo ? {
          height: this.topLogoMaxHeight + 'px'
        } : undefined
      }
    },
    data () {
      return {
        selectedLanguage: null,
        languages: [],
        menu: window.molgenisMenu.menu,
        topLogo: window.molgenisMenu.topLogo,
        topLogoMaxHeight: window.molgenisMenu.topLogoMaxHeight,
        navBarLogo: window.molgenisMenu.navBarLogo,
        helpLink: window.molgenisMenu.helpLink,
        authenticated: window.molgenisMenu.authenticated,
        selectedPlugin: window.molgenisMenu.selectedPlugin,
        showLanguageDropdown: window.molgenisMenu.showLanguageDropdown,
        logoutFunction: window.molgenisMenu.logoutFunction,
        googleSignIn: window.molgenisMenu.googleSignIn,
        helperStyle: window.molgenisMenu.topLogo ? {
          display: 'inline-block',
          height: '100%',
          verticalAlign: 'middle'
        } : undefined
      }
    },
    methods: {
      isSelectedPlugin (plugin) {
        return plugin === this.selectedPlugin
      },
      logout () {
        if (this.logoutFunction) {
          this.logoutFunction()
        }
        document.getElementById('logout-form').submit()
      },
      handleLanguageSelect () {
        api.post('/plugin/useraccount/language/update?languageCode=' + this.selectedLanguage).then(() => {
          location.reload(true)
        })
      }
    },
    mounted () {
      if (this.authenticated) {
        api.get('/api/v2/sys_Language?q=active==true').then(response => {
          this.languages = response.items.map(item => {
            const language = {id: item.code, label: item.name}
            if (item.code === response.meta.languageCode) {
              this.selectedLanguage = language.id
            }
            return language
          })
        })
      }
    },
    components: {
      DropDownItems
    }
  }
</script>
