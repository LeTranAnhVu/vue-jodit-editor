<template>
  <div id="app">
    <img id="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <section class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Edit</h3>
          <jodit-vue :config="opt" v-model="text"/>
        </div>
        <div class="col-md-6">
          <h3>Result</h3>
          <article v-html="text"></article>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import 'jodit/build/jodit.min.css'
  import JoditVue from 'jodit-vue'

  export default {
    name: 'app',
    components: {
      JoditVue,
    },
    data () {
      return {
        text: '',
        opt: {
          'uploader': {
            'insertImageAsBase64URI': true,
            'toolbarButtonSize': 'large',
            'direction': 'ltr',
          },
        },
      }
    },
    mounted () {

    },
    methods: {},
  }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #editor {
    width: 70%;
  }

  #result {
    border: 1px #ddd solid;
    min-height: 300px;
  }
</style>
