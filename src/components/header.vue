<template>
    <nav class="navbar">
      <div class="nav-child">
        <a href="./dashboard.html" class="zwallet">
          zwallet
        </a>
        <div class="user">
          <img src="../assets/img/Rectangle 25.png" alt="pict1">
          <div class="user-data">
            <p class="username">
              Robert Chandler
            </p>
            <p class="phonenumber">
              +62 8139 3877 7946
            </p>
          </div>
          <notif-bell/>
          <a href="#" class="bell" @click="modalBell">
            <img src="../assets/img/bell.svg" alt="bell">
          </a>
        </div>
      </div>
    </nav>
</template>

<script>
import NotifBell from '../components/notifBell.vue'
export default {
  name: 'Header',
  components: {
    NotifBell
  },

  methods: {
    modalBell () {
      const modal = document.querySelector('.notif-bell')
      modal.classList.toggle('show-notif')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    height: 100px;
    width: 100%;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
}
.nav-child {
    display: flex;
    justify-content: space-between;
    padding: 30px 100px;
}

.zwallet {
    color: #6379F4;
    font-family: Nunito Sans;
    font-size: 29px;
    font-weight: bold;
}

.user {
    display: flex;
}

.bell {
    margin: auto;
}

.user-data {
    font-family: Nunito Sans;
    margin: 0px 20px;
}

.username {
    font-size: 18px;
    color: #3A3D42;
    font-weight: bold;
}

.phonenumber {
    font-size: 13px;
    color: rgba(58, 61, 66, 0.9);
}
</style>
