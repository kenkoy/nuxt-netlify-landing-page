<template>
  <div />
</template>

<script>
export default {
  middleware: [
    function ({ redirect }) {
      return redirect('/marketing/lobby-pages/slots')
    }
  ]
}
</script>

<style>

</style>
