<template>
  <div>
    <router-view></router-view>
    <router-link to="/auth/login">login</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: #0056C3;
}
</style>
