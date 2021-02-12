<template>
    <div class="container dashboard">
        <Header :nameUser="userDetail.first_name" :phoneNumber="userDetail.phone_number"/>
        <section class="body-container">
        <SideBar/>
         <main>
        <div class="profile-section">
          <p class="profile-title">Manage Phone Number</p>
          <p class="profile-desc">
            You can only delete the phone number and then you must add another phone number.
          </p>
          <div class="profile-detail-desc manage" v-for="userPhone in userPhones" :key="userPhone.id">
            <div>
              <p class="detail-title">Primary</p>
              <a href="./change-number.html">
              <p class="detail-field">{{userPhone.phone_number}}</p>
              </a>
            </div>
            <button @click="handleDelPhone(userPhone.id)">
            <img src="../../assets/img/trash.svg" style="margin-right: 20px;">
            </button>
          </div>
        </div>
      </main>
        </section>
      <Footer/>
    </div>
</template>

<script>
import Header from '../../components/header'
import SideBar from '../../components/sideBar'
import { mapState, mapActions } from 'vuex'
import Footer from '../../components/footer.vue'

export default {
  name: 'managePhone',
  components: {
    Header,
    SideBar,
    Footer
  },
  created () {
    this.$store.dispatch('loadUserDetail')
    this.$store.dispatch('loadUserPhones')
  },
  computed: mapState([
    'userDetail',
    'userPhones'
  ]),
  methods: {
    ...mapActions(['deleteUserPhones']),
    handleDelPhone (phoneId) {
      this.deleteUserPhones(phoneId)
        .then((res) => {
          // this.$router.push('/manage-phone')
        })
    }
  }
}
</script>

<style scoped>
.body-container{
      margin: 30px 10vw;
      width: 80vw;
      display: flex;
}
.profile-section {
    width: 57vw;
    background: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 30px !important;
}

.profile-title {
    color: #3A3D42;
    font-size: 18px;
    font-weight: bold;
}

.profile-desc {
    width: 342px;
    color: #7A7886;
    font-size: 16px;
    margin-top: 25px;
}

.profile-detail-desc {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 92px;
    width: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    align-items: left;
    justify-content: center;
}
.profile-detail-desc p {
    margin-left: 20px;
}

.detail-title {
    font-size: 16px;
    color: #7A7886;
}

.detail-field {
    color: #514F5B;
    font-weight: bold;
    font-size: 22px;
    margin-top: 10px;
}
</style>
