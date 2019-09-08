console.log('06-classes')
class Mario {
  constructor(name){
    this.name = name;
    this.hp = 1;
    console.log('%cMario constructor ' + this.name, 'background: #222; color: #bada55');
  }
  run(){
    console.log('%cMario run ' + this.name, 'background: #222; color: #bada55');
  }
  jump(){
    console.log('%cMario jump ' + this.name, 'background: #222; color: #bada55');
  }
}
class BigMario extends Mario {
  constructor(name){
    super(name);
    this.hp = 2;
  }
}
class FireballMario extends BigMario {
  fire(){
    console.log('%cFireballMario fire', 'background: #222; color: #e74c3c');
  }
}
var mario = new Mario('Mario');
mario.run();
mario.jump();
console.log('mario.hp', mario.hp);
console.log('----');

var bigMario = new BigMario('Mario');
bigMario.run();
bigMario.jump();
console.log('bigMario.hp', bigMario.hp);
console.log('----');

var fireMario = new FireballMario('Mario');
fireMario.run();
fireMario.jump();
fireMario.fire();
console.log('bigMario.hp', bigMario.hp);
console.log('----');

var luigi = new Mario('Luigi');
luigi.run();
luigi.jump();
console.log('luigi.hp', luigi.hp);