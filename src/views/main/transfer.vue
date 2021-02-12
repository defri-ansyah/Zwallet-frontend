<template>
    <div class="container dashboard">
        <Header :nameUser="userDetail.first_name +' '+ userDetail.last_name" :phoneNumber="userDetail.phone_number"/>
        <section class="transfer-container">
          <SideBar/>
          <main>
            <div class="history-section">
              <div class="transaction-history">
                <p>
                  Search Receiver
                </p>
              </div>
              <div class="search">
                <div class="nav-search">
                  <img src="../../assets/img/search.svg">
                  <input type="search" name="search" placeholder="search receiver here" v-model="search" @input="searchUsers">
                </div>
              </div>
              <div class="week-history">
                <div class="history-list">
                  <div class="transaction receiver-list" v-for="users in userList" :key="users">
                    <router-link to="./transfer-amount.html" class="history receiver">
                      <img src="../../assets/img/1.svg">
                      <div class="name1">
                        <p>
                          {{users.first_name + ' ' + users.last_name}}
                        </p>
                        <p class="desc">
                          {{users.phone_number}}
                        </p>
                      </div>
                    </router-link>
                    <!-- <div class="history receiver">
                      <img src="../../assets/img/momo.png">
                      <div class="name1">
                        <p>
                          Momo Taro
                        </p>
                        <p class="desc">
                          +62 812-4343-6731
                        </p>
                      </div>
                    </div>
                    <div class="history receiver">
                      <img src="../../assets/img/jessica.png">
                      <div class="name1">
                        <p>
                          Jessica Keen
                        </p>
                        <p class="desc">
                          +62 811-3452-5252
                        </p>
                      </div>
                    </div>
                    <div class="history receiver">
                      <img src="../../assets/img/Rectangle 25.png">
                      <div class="name1">
                        <p>
                          Michael Le
                        </p>
                        <p class="desc">
                          +62 810-4224-4613
                        </p>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      <Footer/>
    </div>
</template>

<script>

import axios from 'axios'
import Header from '../../components/header'
import SideBar from '../../components/sideBar'
import Footer from '../../components/footer.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    SideBar,
    Footer
  },
  created () {
    this.$store.dispatch('loadUserDetail')
    this.$store.dispatch('loadUserList', '')
  },
  computed: mapState([
    'userDetail',
    'userList'
  ]),
  data () {
    return {
      url: 'http://localhost:4000/users?search=',
      users: [],
      balance: 0,
      phoneNumber: '',
      name: '',
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    ...mapActions(['loadUserList']),
    getUsers () {
      console.log('ini axios WAH')
      axios.get(this.url)
        .then((res) => {
          this.users = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    searchUsers () {
      this.loadUserList(this.search)
    }
  },
  mounted () {
    this.getUsers()
    this.getDetail()
  }
}
</script>

<style scoped>
.transfer-container {
    margin: 30px 10vw;
    width: 80vw;
    display: flex;
    flex-direction: row;
}

.search {
    display: none;
    position: relative;
    height: 54px;
    color: #CACACA;
    box-sizing: border-box;
    border-radius: 12px;
    background: rgba(58, 61, 66, 0.1);
    margin-top: 30px;
    padding-top: 12px;
}

.search img {
    text-decoration: none;
    color: #CACACA;
    padding-left: 20px;
    padding-bottom: 8px;
}

.search input {
    outline: none;
    border: none;
    width: 90%;
    margin-left: 5px;
    color: rgba(58, 61, 66, 0.4);
    font-size: 17px;
    background: rgba(58, 61, 66, 0.001);
}

.nav-search {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.history-section {
    width: 57vw;
    background: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 30px !important;
}

.transaction-history {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    color: #3A3D42;
}

.history-transaction {
    margin-top: 50px;
}

.receiver {
    height: 110px;
    width: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin-bottom: 10px;
}

.receiver img {
    margin-left: 30px;
}

.receiver-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.week-history {
  margin-top: 20px;
}

.receiver img {
    margin-left: 30px;
}

.history {
  color: #3A3D42;
}
.history {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.name1 {
    margin-left: 10px;
}

.name1 p {
  font-weight: bolder;
}

.desc {
    font-size: 14px;
    font-weight: normal;
    color: #7A7886;
}

@media only screen and (min-width: 992px) {
    .search {
        display: block;
    }
}

</style>
