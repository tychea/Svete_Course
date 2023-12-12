<script>
  export let size = 'small'
  export let shadow = false
</script>

<!-- dynamic style with tenery operator -->
<!-- <button class={size==='small'?'btn-sml':'btn-lg'}>
<slot>Default Button</slot>
</button> -->
<!-- dynamic style with class directive clause -->
<button
  class:btn-lg={size === 'large'}
  class:btn-sml={size === 'small'}
  class:shadow
>
  <slot>Default Button</slot>
</button>

<style lang="scss">
  button {
    background-color: aqua;
    border-radius: 10px;

    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    &.btn-sml {
      padding: 20px 35px;
      background-color: darkslategray;
    }
    &.btn-lg {
      padding: 30px 45px;
      background-color: goldenrod;
    }
    &.shadow {
      box-shadow: 0 10px 10px rgba(1, 1, 1, 0.3);
    }
  }
</style>
