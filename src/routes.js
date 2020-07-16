import VueRouter from 'vue-router'

import GameContainer from "./components/game-area/GameContainer";
import Test from "./components/game-area/Test";
import HelloWorld from "./components/HelloWorld";

const routes = [
  { path: '/', component: HelloWorld },
  { path: 'game', component: GameContainer },
  { path: 'test', component: Test }
]

const router = new VueRouter({
  routes
})

export default router;