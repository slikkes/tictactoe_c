export default class GameTable {
  constructor(table) {
    this.solved = false;
    this.table = this._init (table);
  }
  
  _init(table) {
    if (!table) {
      return Array (9).fill ().map ((e, i) => {
        let row = Math.floor (i / 3);
        let col = i - row * 3
        return {x: col + 1, y: row + 1, value: null}
      });
    }
    return []
  }
  
  move(step) {
    this.table.map (e => {
      if (e.x === step.x && e.y === step.y) {
        e.value = e.value === null ? step.sign : e.value
      }
      return e;
    })
  }
  
  getGameState() {
    return this.table
  }
}
Object.defineProperty (Array.prototype, 'flat', {
  value: function (depth = 1) {
    return this.reduce (function (flat, toFlatten) {
      return flat.concat ((Array.isArray (toFlatten) && (depth > 1)) ? toFlatten.flat (depth - 1) : toFlatten);
    }, []);
  }
});