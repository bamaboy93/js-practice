// Замыкания

// function foo() {
//   let a = 2;

//   function bar() {
//     console.log(a);
//   }

//   return bar;
// }

// const baz = foo();

// baz(); // 2 -- Ого, замыкание только что было раскрыто, мужики!

const fnA = function () {
  const value = 2;

  const innerFunc = function () {
    console.log(value);
  };

  return innerFunc;
};

const fnB = fnA();

fnB();
