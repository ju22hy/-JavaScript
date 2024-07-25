// 1. 산술 연산자
// 산술 연산자는 +, -, *, /의 사칙 연산이 있다.
// 문자열의 경우 + 연산을 가능하나 결과는 문자의 조합이다.
const a = 3;
const b = 6;
console.log(a / b);

const c = 'JAVA';
const d = 'script';
console.log(c + d);

// 숫자형 문자열의 경우 + 연산은 문자 조합이지만 그 외 연산은 자동 변환(암묵적 변환)된다.
const e = '3';
const f = 6;
console.log(e + f);

// 각 연산자는 우선순위가 있으며, 우선순위를 피하기 위해 먼저 연산될 부분을 ()로 감싼다.
// 연산자 우선순위 참조 : https://velog.io/@bami/Javascript-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84
const g = (5 + 3) * 2;
console.log(g);

// 2. 나머지 연산자(%)
// 나머지 연산자는 두 수를 나눈 나머지 값을 반환한다.
const h = 7;
const i = 5;
console.log(h % i);

function isODD(num) {
  if (num % 2 == 0) {
    console.log(num + '은 짝수입니다');
  }

  if (num % 2 == 1) {
    console.log(num + '은 홀수입니다.');
  }
}

isODD(51);
isODD(50);

// 두 숫자 중 앞의 숫자가 작으면 앞의 숫자와 뒤의 숫자가 같아지기 이전까지 앞의 숫자를 반환한다.
const j = 7;
const k = 9;
console.log(j % k);

// 두 숫자가 같아지면 나눈 값이 0이므로 0을 반환한다.
const j1 = 9;
const k1 = 9;
console.log(j1 % k1);

// 3. 비교 연산자
// 비교 연산자는 boolean 타입을 리턴한다.
//  '=' - 변수에 값을 할당하는 데 사용되는 연산자 ( 오른쪽을 가르키는 화살표라고 생각하기)
// '==' - 동등 연산자, '값'의 동등성을 비교할 때 사용되는 연산자
// '===' - 일치 연산자(identity operator), 두 피연산자의 '값'과 '타입'이 완전히 동일한지를 비교하는 연산자 '=='보다 사용이 권장된다
// > 크다, < 작다, >= 크거나 같다, <= 작거나 같다
const l = 3;
console.log(3 === '3'); //flase - 값은 같으나 타입이 다름

let sum = 0;

for (let m = 0; m <= 100; m++) {
  sum += m;
}
console.log(sum);

// 4 부정 연산자
// 비교 연산자 또는 boolean타입 앞에 ! 문자를 사용하면 true와 false가 반대로 리턴된다.
console.log(!true); //원래 값은 true이나 !로 리턴
// ===: !==, ==: !=

// 5. 논리 연산자
// && : 합성곱 - 좌우의 '모든 항이 true'일때 'true' 리턴
// || : 합성합 - 좌우 중 '한 항만 true'면 'true' 리턴
const o = 3 > 4;
const p = 5 === 5;
console.log(o && p); //false
console.log(o || p); //true

// 6. 복합 대입 연산자
// += : 기본 변수의 값에 값을 더한다. 나머지 연산자도 마찬가지다(-=, *=, /=, %=)
let q = 10;
q = q + 1;
q = q + 1;
q += 2; // 더해질 숫자 단위를 지정할 수 있는 형식, +=은 누적 개념이다
q++; // 언제나 +1 증가
console.log(q);
