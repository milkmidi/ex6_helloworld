console.log('05-classes')
class Mario {
  run(){
    console.log('Mario run')
  }
  jump(){
    console.log('Mario jump');
  }
}
class BigMario extends Mario {
}
class FireballMario extends BigMario {
  fire(){
    console.log('Fire');
  }
}
var mario = new Mario();
mario.run();
mario.jump();

var bigMario = new BigMario();
bigMario.run();
bigMario.jump();

var fireMario = new FireballMario();
fireMario.run();
fireMario.jump();
fireMario.fire();