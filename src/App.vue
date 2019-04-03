<template>
  <div id="app">
    <img id="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <section class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Edit</h3>
          <textarea id="editor" name="editor" @change="getText"></textarea>
          <button class="mr-auto btn btn-outline-dark mt-2" @click="getText">Render</button>
        </div>
        <div class="col-md-6">
          <h3>Result</h3>
          <article id="result"></article>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import Jodit from 'jodit/build/jodit.min.js'

  export default {
    name: 'app',
    components: {},
    data () {
      return {
        text: '',
        o : {}
      }
    },
    mounted () {
      this.o = new Jodit('#editor', {
        'uploader': {
          'insertImageAsBase64URI': true,
          'toolbarButtonSize': 'large',
          'direction': 'ltr'
        },
      })

    },
    methods: {
      getText () {
        const texto = this.o.getEditorValue();
        let resHTML = this.$el.querySelector('#result');
        resHTML.innerHTML =texto ;
      },
    },
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
    border: 1px #ddd solid ;
    min-height: 300px;
  }
</style>
