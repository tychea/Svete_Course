<script>
  export let initialCount = 0
  export let maxCount = undefined
  let count = initialCount
  // console.log($$props, $$restProps)
  // function double(arr){
  //   let result = [];
  //   for(let i=0;i<arr.length;i++){
  //     result.push(arr[i]*2);
  //   }
  //   return result;
  // }

  $: string = `Let start learning <strong> Svelte </strong> by increasing count ${count} `
  function increment() {
    if (count === maxCount) return
    count += 1
  }
  function double(arr) {
    return arr.map((item) => item * 2)
  }
</script>

<p>{@html string}</p>
<button on:click={increment}> count {count}</button>
