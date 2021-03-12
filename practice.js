let raddius = 6
let pai = 3
let area = raddius * raddius * pai
console.log(area)

[
function calCircleArea(raddius){
  let pai = 3
  let area = raddius * raddius * pai
  return area
}
calCircleArea(5)
// 75
]

[
function double(number){
  return number * 2
}
double(2)
// 2
double(10)
// 20
const result = double(20)
console.log(result)
// 40
]

[
function calCircleArea(raddius){
  let pai = 3
  let area = raddius * raddius * pai
  return area
}
calCircleArea(3)
// 27
]

[
  function showMessage(){
    console.log("こんにちは")
    console.log("さようなら")
  }
  showMessage()
  // こんにちは
  // さようなら
]

[
  const message = "こんにちは"
  function hello(){
    console.log(message)
  }
  hello()
  // こんにちは
]

[
  let message
  function say(){
    message = "hello"
  }
  say()
  console.log(message)
]

[
  if (true){
    console.log("True")
  }
  if (false){
    console.log("False")
  }
]

[
  let score = 89
  if(score>90){
    console.log("最高！")
  }
  if(score < 100){
    console.log("満点じゃない！")
  }
]

[
  if(score > 20 && score < 90){
    console.log("20 < score < 90")
  }
  if (score === 0 || score === 89)
  console.log("0or89")
]

[
  let score = 10
  switch(score){
    case 1:
      console.log("1")
      break
    case 2:
      console.log("2")
      break
    case 10:
      console.log("10")
      break
    default:
      console.log("その他")
  }
]

[
  const score = 10
  if (score === 1){
    console.log("1")
  }else if(score === 2){
    console.log("2")
  }else if(score === 10){
    console.log("10")
  }else{
    console.log("その他")
  }
]

[
  swich(score){
    case 1:
      console.log("1")
      break
    case 2:
      console.log("2")
      break
    case 10:
      console.log("10")
      break
    default:
      console.log("その他")
  }
]

// day2 scores=[89,56,78] 要素,要素,要素 0,1,2
const scores = [87,78,37]
console.log(scores)
Array(3)[ //アレイ＝配列のこと
  0:87
  1:78
  2:37
]
console.log(scores[0])
// 87
scores[1]=0 //スコアの2番目を書き換える
console.log(scores)
Array(3)[87,0,37]

scores.push(90)
scores.pushu("わーい")
scores.push(true)

console.log(scores)
Array(6)[87,0,37,90,"わーい",true]
scores.lgengh
// 6
scores.pop() //要素の最後が削除される
console.log(scores)
Array(5)[87,0,37,90,"わーい"]

scores.shift() //最初の要素を削除する
console.log(scores)
Array(4)[0,37,90,"わーい"]

[
  const scores ={
    math: 20,
    message: function(){
     console.log("メッセージだよ！")
   }
   }
  scores.message()
]

[
  const user = {
    firstName:'taro',
    lastName:'yamada',
    fullName:function(){
      return `${this.lastName} ${this.firstName}`
    },
    sayHi:function(){
      const fullName = this.fullName()
      console.log(`${fullName}だよ！`)
    }
  }
  user.sayHi()
]

[

]





