<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #0056C3;
}

.container{
    display: flex;
    align-items: flex-start;
    font-family: Nunito Sans;
    width: 100%;
    height: 100%;
}
.dashboard {
    display: flex;
    flex-direction: column;
    background: rgba(99, 121, 244, 0.05);
}
.body-container {
    margin: 30px 10vw;
    width: 80vw;
    display: flex;
}

.green {
    margin: auto;
    margin-right: 0;
    color: #1EC15F;
}
.red {
    margin: auto;
    margin-right: 0;
    color: #FF5B37;
}

.name1 p {
    color: #4D4B57
}
</style>
