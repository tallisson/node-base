const { EventEmitter } = require('events');

const ev = new EventEmitter();

ev.on('tncFdp', (message) => {
  console.log(message);
});

ev.emit('tncFdp', 'Vtf');