<template>
    <div class="q-pa-md row shadow-7">
        <cell v-for="(cell,idx) in gameState" :cell="cell" @click.native="move(cell)" :key="idx"></cell>
    </div>
</template>

<script>
import Cell from "./Cell";

export default {
  name: "GameTable",
  components:{Cell},
  mounted() {
    this.$store.commit ("initGame");
  },
  data() {
    return {
    }
  },
  computed: {
    gameState() {
      return this.$store.getters ["getGameState"]
    },
  },
  methods: {
    move(cell) {

      this.$store.dispatch ("move", {x: cell.x, y: cell.y})
        .then (() => {
        })
        .catch (err => {
          console.log (err);
        })
    },
  },
}
</script>

<style scoped>
    .row {
        width: 384px !important;
    }

</style>