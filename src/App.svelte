<script>
  import Button from './lib/Button.svelte'
  import Counter from './lib/Counter.svelte'
  import SumCount from './lib/SumCount.svelte'
  let count = {
    initialCount: 10,
    maxCount: 20,
  }
  let maxCount = 7
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<img
  src="https://media.homeanddecor.com.sg/public/2021/06/Home-_-Decor-House-Tour-HelloEmbryo-Tampines-HDB-custom-display-storage_studyroom1.jpg?compress=true&quality=80&w=640&dpr=2"
  alt="Some Image"
/>
<Button size="large" shadow={false}>Some Button Test</Button>
<!-- shorthand syntac for boolean true shadow={true} or shadow -->
<Button size="small" shadow />
<Counter initialCount={0} maxCount={10} />
<Counter initialCount={5} {maxCount} />
<Counter {...count} />
<hr />
<SumCount hover />

<style>
  img {
    width: 250px;
  }
</style>
