<template>
  <div>
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    'app-header': Header
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Arial';
}
</style>
