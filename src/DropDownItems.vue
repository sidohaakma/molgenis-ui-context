<template>
  <div :class="{'dropdown-menu': depth === 0}" :aria-labelledby="parent.id">
    <template v-for="item in items">
      <a v-if="item.type === 'plugin'" class="dropdown-item"
         :href="`/menu/${parent.id}/${href(item)}`">
        {{ item.label }}
      </a>

      <span v-else>
        <h5 class="dropdown-header" :class="'menu-depth-'+depth">
          <b>{{item.label}}</b>
        </h5>
        <drop-down-items :parent="item" :items="item.items" :depth="depth + 1"/>
      </span>
    </template>
  </div>
</template>

<script>
  import {href} from './href'

  export default {
    name: 'drop-down-items',
    props: {
      parent: {
        type: Object,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      depth: {
        type: Number,
        required: false,
        default: 0
      }
    },
    methods: {
      href
    }
  }
</script>
