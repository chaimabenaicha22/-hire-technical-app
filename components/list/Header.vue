<template>
    <header>
      <h1>Mon super header</h1>
      <p>{{ pageCount }} entrées dans la liste de pages</p>
    </header>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['pages']),
      pageCount() {
        return this.pages.length;
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  