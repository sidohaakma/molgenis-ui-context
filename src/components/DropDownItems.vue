<template>
  <div :class="{'dropdown-menu': depth === 0}" :aria-labelledby="parent.id">
    <template v-for="item in items">
      <a v-if="item.type === 'PLUGIN'" class="dropdown-item" :key="item.id"
         :href="'/menu/' + parent.id + '/' + item.href">
        {{ item.label }}
      </a>

      <span v-else :key="item.id">
        <h5 class="dropdown-header" :class="'menu-depth-'+depth">
          <b>{{item.label}}</b>
        </h5>
        <drop-down-items :parent="item" :items="item.items" :depth="depth + 1"/>
      </span>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
  }
})
</script>
