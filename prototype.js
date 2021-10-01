//ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ

const Hero = function ({ type, hp, mana } = {}) {
  this.type = type;
  this.hp = hp;
  this.mana = mana;
};

Hero.prototype.changeHp = function (newHp) {
  this.hp = newHp;
};
const myHero = new Hero({
  type: "warrior",
  hp: 1640,
  mana: 500,
});

const myHero1 = new Hero({
  type: "mag",
  hp: 940,
  mana: 900,
});

const myHero2 = new Hero({
  type: "agile",
  hp: 1140,
  mana: 700,
});
console.log(myHero.__proto__ === Hero.prototype);
myHero.changeHp(1400);
console.log(myHero);
console.log(myHero1);
console.log(myHero2);

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
