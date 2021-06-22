<template>
  <div class="container mx-auto">
    <div class="md:px-32 w-full mt-8">
      <input class="fs-search-bar shadow-md" type="text" placeholder="Search" v-model="search_query"/>
    </div>
    <div class="md:px-32 py-8 w-full">
      <div class="shadow overflow-hidden rounded border-b border-gray">
        <table class="min-w-full bg-white">
          <thead class="bg-blue text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Tv Series</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Genre</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">No of seasons</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Date of release</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Director</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actor</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Shoot Location</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Country</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Average Rating</th>
            </tr>
          </thead>
          <tbody class="text-slategrey" v-for="(item, index) in this.filteredList">
            <tr>
              <td class="text-left py-3 px-4">{{item.attributes.tv_series}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.genre}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.no_of_seasons}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.date_of_first_release | moment("dddd, MMMM Do YYYY")}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.director}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.actor}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.shoot_location}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.country}}</td>
              <td class="text-left py-3 px-4">{{item.attributes.rating}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},

    props: {
      resource: Object
    },
    mounted (){
    },

    data: function() {
      return {
        tv_series: JSON.parse(this.resource).data,
        search_query: ""
      }
    },

    computed: {
      filteredList() {
        var _this = this;
        return this.tv_series.filter(item => {
          if (_this.search_query.toLowerCase()){
            var data = item.attributes
            var name = data.tv_series
            var search_text = _this.search_query.toLowerCase()
            return name.toLowerCase().includes(search_text)
          }
          return _this.tv_series
        })
      }
    },
  }  
</script>

<style type="text/css">
  
</style>