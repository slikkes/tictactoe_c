<template>
    <div class="q-pa-md row shadow-7">
        <div v-for="(cell,idx) in gameState" class="cursor-pointer cell" :class="!cell.value ? 'cell-active' : 'cell-filled'"
             :key="idx" @click="move(cell)">
            <q-icon :name="icons[cell.value]" size="5rem"/>
        </div>
    </div>
</template>

<script>
export default {
  name: "GameTable",
  mounted() {
    this.$store.commit ("initGame");
  },
  data() {
    return {
      sign: "x",
      icons: {
        x: "fas fa-times",
        o: "far fa-circle"
      }
    }
  },
  computed: {
    gameState() {
      return this.$store.getters ["getGameState"]
    },
  },
  methods: {
    move(cell) {
      this.$store.dispatch ("move", {x: cell.x, y: cell.y, sign: this.sign})
        .then (() => {
          this.sign = this.sign === "x" ? "o" : "x"
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

    .cell {
        height: 128px;
        background: rgba(86, 61, 124, .15);
        border: 1px solid rgba(86, 61, 124, .2);
        flex: 0 0 33%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cell-active:hover {
        background: rgba(64, 127, 26, 0.15);
        border: 1px solid rgba(112, 186, 68, 0.15);
    }

    .cell-filled {
        cursor: default !important;
    }
    .cell-filled:hover {
        background: rgba(132, 17, 38, 0.15);
        border: 1px solid rgba(110, 83, 151, 0.2);
    }


</style>