<template>
    <div style="margin:60px 60px">
    <vue-anime ref="demo1" :animate="animate" class="cell" direction="alternate"
               :playing="playing" @click="playing = !playing" :loop="true"
    ></vue-anime>
    </div>
</template>

<script>
import {VueAnime} from 'vue-anime'
import {VueAnimeGroup} from 'vue-anime'
import {VueAnimeTimeLine} from 'vue-anime'

export default {
  name: "Test",
  components: {
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine
  },
  data() {
    return {
      playing: false,
      animate: {
        scale:[
          { value: 0.94, duration: 200, elasticity: 600 },
          { value: 1, duration: 200, elasticity: 300 },
        ],
        'background-color':[
          {},
          {value: "rgba(64, 127, 26, 0.15)"}
        ]
      }
    }
  },
  methods: {
    anime() {
    }
  },
}
</script>

<style scoped>
    .test-sub {
        width: 64px;
        height: 64px;
        background-color: #027BE3;
        margin: 32px;
    }
    .cell {
        height: 128px;
        width:128px;
        background: rgba(86, 61, 124, .15);
        border: 1px solid rgba(86, 61, 124, .2);
        flex: 0 0 33%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>