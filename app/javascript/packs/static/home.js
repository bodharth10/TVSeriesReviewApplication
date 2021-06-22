import Homepage from '../../views/static/home.vue';

document.addEventListener('DOMContentLoaded', () => {
  var element = document.getElementById('vue')
  if (element != null) {
    var app = new Vue({
      el: element,
      components: { Homepage }
    })
    console.log(app)
  }
});
