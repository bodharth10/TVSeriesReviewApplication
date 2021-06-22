// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("@rails/activestorage").start();
require("channels");

require("stylesheets/application.scss");

// Customisable modal

import VModal from 'vue-js-modal';
Vue.use(VModal);

// global pagination component
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate);

// Infinite Scroll
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(InfiniteLoading);

import VueNumeralFilterInstaller from 'vue-numeral-filter';
Vue.use(VueNumeralFilterInstaller);

// vue-moment
import Moment from 'vue-moment'
Vue.use(Moment);

// For development purposes
Vue.config.devtools = true


