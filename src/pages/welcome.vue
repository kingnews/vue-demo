<template>

  <div>
    welcome
    <router-link to="/list/home">go home</router-link>
    <router-link to="/list/element">go element-layoutui</router-link>
    <router-view></router-view>
    <!--<router-view name = "home">go home</router-view>-->
    <!--<router-view name = "element">go element-layoutui</router-view>-->
  </div>
</template>

<script>
  export default {
    name: 'welcome',
  /*  data(){
      return
    }*/
  }
</script>
