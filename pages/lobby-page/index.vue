<template>
  <div />
</template>

<script>
export default {
  middleware: [
    function ({ redirect }) {
      return redirect('/lobby-pages/slots')
    }
  ]
}
</script>

<style>

</style>
