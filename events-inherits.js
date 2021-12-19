const { EventEmitter } = require('events');

const Character = (name) => {
  let ev = new EventEmitter();

  const obj = {
    name,
    ev,
    on: (eventName, callback) => ev.on(eventName, callback),
    emit: (eventName) => ev.emit(eventName)
  }

  return obj;
};

const chapolin = Character('Chapolin');
chapolin.on('help', () => console.log(`Eu, o ${chapolin.name} colorado!`));

/*class Character extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const chapolin = new Character('chapolin');

chapolin.on('help', () => console.log('Quem poderá me defender?'));
*/
chapolin.emit('help');