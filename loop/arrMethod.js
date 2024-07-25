// 일반적으로 배열은 for문으로 접근한다. 하지만 최근에(es6)는 forEach, map, filter 등의 메서드를 활용해 배열에 접근한다.

const arr = [1, 2, 3, 'a', 'b', { name: 'sora' }];

// 1. forEach
// - forEach 메서드는 배열이 가지고 있는 요소를 콜백 함수의 파라미터를 사용해서 호출한다.
// - 구조 : '배열'.forEach(function(요소, 인덱스, 배열) => {실행할 코드});

// arr.forEach(function (v, i, a) {
//   console.log(v);
//   console.log(i);
//   console.log(a);
// });

// arr.forEach((v, i) => {
//   console.log(v);
//   console.log(i);
// });

// - 콜백 함수의 파라미터로 3가지 값을 가져올 수 있다. 하지만 마지막 파라미터인 배열 반환은 잘 사용되지 않는다.
// - 배열의 모든 요소 합
const arr1 = [2345, 345, 234, 2345, 34656];
let sum = 0;
arr1.forEach((v) => {
  sum += v;
});
// console.log(sum);

//--------------------------------
//                  tabs
//--------------------------------
const btns = document.querySelectorAll('.buttons > button');
const panels = document.querySelectorAll('.panels > div');
console.log(panels);

// 1. 클릭 시 active 클래스 이동
// 2. 클릭한 버튼의 인덱스와 같은 인덱스의 패널의 display를 block으로 변경
btns.forEach(function (btn, idx) {
  // console.log(btn);
  btn.addEventListener('click', function () {
    btns.forEach(function (item) {
      // console.log(item);
      item.classList.remove('active');
    });
    panels.forEach(function (panel) {
      panel.style.display = 'none';
    });
    btns[idx].classList.add('active');
    panels[idx].style.display = 'block';
  });
});

// console.log(btns);

// 2. map
// - map 메서드는 콜백 함수의 파라미터로 배열의 요소를 반환하는 것은 forEach와 같지만 반환한 요소를 새로운 배열에 담아 return할 수 있다는 점이 다르다.

const arr2 = [2345, 345, 234, 2345, 34656];
const mapArr = arr2.map((v, i, a) => {
  // console.log(v);
  // console.log(i);
  // console.log(a);
  return v * 2; // 리턴 부분에 연산이 가능하다
});

console.log(mapArr);

// Btns : DOM 문서에 있는 bttons를 읽은 것
// const mapBtns = btns.map((btns) => {
//   console.log(btns); // error : map은 DOM 요소 배열을 사용할 수 없다
//   return btn;
// });

// DOM 요소 배열을 사용하려면 Array.from() 매서드를 사용해야 한다
const mapBtns = Array.from(btns).map((btn) => {
  console.log(btn);
  return btn;
});
console.log(mapBtns);

//--------------------------------
//                Header
//--------------------------------
const headerContents = ['Home', 'About', 'Services', 'Contact', 'Blog'];

headerContents.map((content) => {
  const headerWrapper = document.querySelector('.header-lists');
  const headerList = `<li>${content}</li>`;

  headerWrapper.insertAdjacentHTML('beforeend', headerList);
});

// 3. filter
// - filter 메서드는 콜백 함수에서 리턴되는 값을 특정 조건에 대입하고 true인 요소만 모아 새로운 배열을 만든다.
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

const even = arr3.filter((value, index, array) => {
  return value % 2 === 0; //value를 2로 나누었을 때 나머지가 0인 것 : 짝수만 반환
});
console.log(even);

// 4. reduce << 프론트에서는 잘 사용 안하기 때문에 천천히 이해해도 됨
// - signiture : array.reduce((accumulator, currentValue, currentIndex, arry) => {})
// const reduceArr = [0, 1, 2, 3, 4];
// const reduceNumber = reduceArr.reduce((accumulator, currentValue) => {
//   // console.log(accumulator);
//   // 0까지의 누적한 합산값 0
//   // 0, 1까지의 누적 합산값 1
//   // 0, 1, 2까지의 누적 합산값 3
//   // 0, 1, 2, 3까지의 누적 합산값 6
//   // 0, 1, 2, 3, 4까지의 누적 합산값 10

//   console.log(currentValue);
//   // 두번째 값부터 표시된다.
//   // 0, 1까지의 현재값 1
//   // 0, 1, 2까지의 현재값 2
//   // 0, 1, 2, 3까지의 현재값 3
//   // 0, 1, 2, 3, 4까지의 현재값 4
//   return accumulator + currentValue;
// });

// console.log(reduceNumber);
