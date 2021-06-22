<template lang="html">
  <div id="menu_parent">
    <i class="fas fa-th text-darkgrey cursor-pointer" @click="show"></i>
    <div id="menu_viewer" v-if="visible" class="fs-white-box absolute mr-2 p-4 ">
      <p class="text-sm font-semibold mb-3 text-center">Your Toolkit</p>
      <div class="flex flex-wrap">
        <div class="text-center w-1/3 mb-4">
          <a href="/toolkit/timer" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/148/148936.svg" alt="" class="mb-3 cursor-pointer w-12 h-12 mx-auto">
            <p class="text-xs font-semibold">Timer</p>
          </a>
        </div>
        <div class="text-center w-1/3 mb-4">
          <a href="/toolkit/random" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/339/339765.svg" alt="" class="mb-3 cursor-pointer w-12 h-12 mx-auto">
            <p class="text-xs font-semibold">Shuffle</p>
          </a>
        </div>
        <div class="text-center w-1/3 mb-4">
          <a href="/toolkit/group" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/1049/1049867.svg" alt="" class="mb-3 cursor-pointer w-12 h-12 mx-auto">
            <p class="text-xs font-semibold">Group</p>
          </a>
        </div>
        <div class="text-center w-1/3 mb-4">
          <a href="/toolkit/today" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/305/305139.svg" alt="" class="mb-3 cursor-pointer w-12 h-12 mx-auto">
            <p class="text-xs font-semibold">Today</p>
          </a>
        </div>
        <div class="text-center w-1/3 mb-4">
          <a href="/toolkit/directions" target="_blank">
            <img src="https://image.flaticon.com/icons/svg/1599/1599698.svg" alt="" class="mb-3 cursor-pointer w-12 h-12 mx-auto">
            <p class="text-xs font-semibold">Directions</p>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        visible: false
      }
    },
    created: function() {
      this.closeOnOutsideClick();
    },
    methods: {
      show() {
        this.visible = !this.visible
      },
      closeOnOutsideClick() {
        var that = this
        window.addEventListener('click', function(event) {
          if (event.target.parentNode.id != 'menu_parent' && event.target.parentNode.id != 'menu_viewer') {
            that.visible = false
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  #menu_viewer {
    max-height: 250px;
    max-width: 350px;
    overflow: scroll;
  }
</style>
