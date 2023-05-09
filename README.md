cors

도메인 이름이 서로 다른 사이트간 api 요청을 할 때 허락된 사이트만 정보를 오갈수있게,
그렇지 않으면 접근 못하게 차단;

a.com
b.com

link, src

cors요청을 통해 a에서 b로 접근 도와줌
script - same origin polish



splice(제거를 시작할 인덱스, 몇개를 제거할 것인가);

newBasket.splice(index,1)

findIndex()
: array == [5, 12, 8, 130, 44];
9보다 큰 곳의 위치를 알고싶다?
3개가 존재?
맨처음 조건을 만족하는 곳의 index를 반환한다.

const OverNine = (e) => e > 9;

array.findIndex(OverNine);
// 1을 반환
배열에서 12값의 위치

동일한 제품에는 문제가 생긴다.

이것을 해결하기 위해 Redux

export const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0)
}

0 처음 값
amount : 초기값이자 앞으로 축적될 값들이 저장도리 인수
item : 현재의 아이템의 속성이 들어가는데 item.price 장바구니 아이템의 가격
reduce 배열의 모든 값을 합산할 때 사용
basket 배열에서 item의 price를 합산하기 위해 reduce 사용

0 <- 처음값이 얼마냐

1000 + (item.price 1, item.price2, item.price3)


-----------ex------------
basket [2323,33,22]

첫번째 콜백 0(amount) + 2323(item.price 1)
두번째 콜백 2323(amount) + 33 (item.price 2)
세번째 콜백 2356(amount) + 22 (item.price 3)


setprocess "
setSucceed fasle
setDisable true

disable => 처음에 true였다가 카드 적으면 false 됨
process => ""엿다가 구매하기 누르면 ture였다가 false됨
succeed => false 였다가 구매하기 누르면 false됨

1. process false여서, 구매하기 글자나오고, disabled true 이므로 버튼이 disabled된 상태(눌러도 아무것도 없음)
2. 카드 CardElement, handleChange에 의해서 disable이 false가 되므로, 버튼은 succeeded 상태로 되는데, false이므르ㅗ form에 handleSubmit 활성호 되서,

process가 true 였다가 버튼은 disabled된 채로 처리중이라는 글자 뜨고,
중간 과정처리후 다시 구매하기로 바귀면서 navigate에 의해 페이지 넘어간다.
