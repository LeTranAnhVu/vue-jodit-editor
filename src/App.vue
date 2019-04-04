<template>
  <div id="app">
    <img id="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <section class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Edit</h3>
          <jodit-vue
              :config="opt"
              v-model="text"
              :extra-buttons="customButtons"
          />
          <button class="btn btn-outline-primary mt-3" @click="renderText">review</button>
        </div>
        <div class="col-md-6">
          <h3>Result</h3>
          <div id="result" v-html="result"></div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import 'jodit/build/jodit.min.css'
  import JoditVue from 'jodit-vue'
  // import snippet from './components/snippet'

  export default {
    name: 'app',
    components: {
      JoditVue
    },
    data () {
      return {
        text: '',
        result: '',
        opt: {
          'uploader': {
            'insertImageAsBase64URI': true,
            'toolbarButtonSize': 'large',
            'direction': 'ltr',
          },
        },
        customButtons: [
          {
            name: 'insertDate',
            iconURL: 'http://simpleicon.com/wp-content/uploads/Code-Optimization.png',
            exec: function (editor) {
              let elHtml = editor.selection.getHTML()
              // convert to  code
              editor.selection.insertHTML(`<pre class="blog-code"><code>${elHtml}</code></pre>`)

            },
          },
        ],
      }
    },
    mounted () {

    },
    methods: {
      renderText () {
        this.result = this.text;
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
    border: 1px #ddd solid;
    min-height: 300px;
  }

  .blog-code {
    display: block;
    background: #444;
    color: #ddd;
    padding: 20px;
    height: auto;
    font-weight: 700;
    width: 80%;
    margin: auto;
    border-radius: 10px;
  }
</style>
