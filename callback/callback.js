function greeting(name) {
  console.log('Hello, ' + name + '!');
}

function processUserInput(callback) {
  var name = prompt('Please enter your name:');
  callback(name);
}

processUserInput(greeting);

//processUserInput 함수의 인자로 greeting 함수를 호출했기 때문에 greeting 함수를 콜백함수라 지칭할 수 있다.
