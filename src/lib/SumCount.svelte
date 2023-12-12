<script>
  let number1 = getRandomNumber(100)
  let number2 = getRandomNumber(100)
  let number3 = undefined
  export let hover = false

  //   $: sumValue = getSum()
  $: setNumber(number2)
  $: text = `this is number3 ${number3}`

  $: doubleValue = Math.pow(sumValue, 2)
  $: sumValue = getSum(number1, number2)

  //   function getSum() {
  //     let value = number1 + number2
  //     console.log(value)
  //     return value
  //   }
  function setNumber(num) {
    console.log(number3, num)
    number3 = num
  }
  function getSum(num1, num2) {
    return num1 + num2
  }
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
  }
  function getNumber() {
    number1 = getRandomNumber(100)
    number2 = getRandomNumber(100)
  }
</script>

<p>fist_number is {number1}</p>
<p>second_number is {number2}</p>
<p>third_number is {number3}</p>
<p>sum of both number is {sumValue}</p>
<p>double of both number is {doubleValue}</p>
<p>{text}</p>
<button class:hover on:click={getNumber}>
  <slot>random number</slot>
</button>

<style>
  .hover {
    padding: 10px;
    background-color: darkgrey;
    border: none;
    &:hover {
      background-color: darkolivegreen;
      color: white;
    }
  }
</style>
