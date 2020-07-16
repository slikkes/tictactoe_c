<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="fas fa-bars"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <main-menu></main-menu>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
      <Test />
    </q-page-container>
  </q-layout>
</template>

<script>
import GameTable from "./components/game-area/GameTable";
import Test from "./components/game-area/Test";
import MainMenu from "./components/main/Menu";

export default {
  name: 'LayoutDefault',

  components: {
    GameTable, Test, MainMenu
  },

  data () {
    return {
      leftDrawerOpen: false,

    }
  }
}
</script>

<style>
</style>
