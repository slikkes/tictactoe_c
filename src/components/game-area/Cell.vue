<template>
    <div class="cursor-pointer cell" :class="!cell.value ? 'cell-active' : 'cell-filled'" >
        <q-icon :name="icons[cell.value]" size="5rem"/>
    </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    cell: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      icons: {
        x: "fas fa-times",
        o: "far fa-circle"
      }
    }
  },
}
</script>

<style scoped>
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