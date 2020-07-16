<template>
    <q-list>
        <q-item-label header>Essential Links</q-item-label>

        <q-item v-for="(item, idx) in menuItems" clickable :to="item.route" :key="idx">
            <q-item-section avatar>
                <q-icon :name="item.icon"/>
            </q-item-section>
            <q-item-section>
                <q-item-label>{{item.title}}</q-item-label>
                <q-item-label caption>{{item.text}}</q-item-label>
            </q-item-section>
        </q-item>

    </q-list>

</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuItems: [
        {
          route: "/",
          icon: "fas fa-graduation-cap",
          title: "Home",
          text: "Main page"
        },
        {
          route: "/game",
          icon: "fas fa-graduation-cap",
          title: "Game",
          text: "Play the game"
        },
        {
          route: "/test",
          icon: "fas fa-graduation-cap",
          title: "Test",
          text: "Test animations"
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>