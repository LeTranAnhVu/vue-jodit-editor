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
          <article id="result"></article>
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
        customButtons: [
          {
            name: 'insertDate',
            iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Shutdown_button.svg/1024px-Shutdown_button.svg.png',
            exec: function (editor) {
              // editor.selection.insertHTML('-----HI-----')
              let elHtml = editor.selection.getHTML();
              // convert to  code
              console.log(elHtml)
              editor.selection.insertHTML(`<pre class="blog-code">${elHtml}</pre>`)
            },
          },
        ]
      }
    },
    mounted () {

    },
    methods: {
      renderText(){
        let resEl = this.$el.querySelector('#result');
        resEl.innerHTML = this.text;
      }
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
  .blog-code{
    display: block;
    background: #333;
    color: #fff;
    padding: 20px;
    height: auto;
    font-weight: 700;
  }
</style>
