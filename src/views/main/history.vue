<template>
    <div class="container dashboard">
        <Header :nameUser="userDetail.first_name +' '+ userDetail.last_name" :phoneNumber="userDetail.phone_number"/>
      <section class="body-container">
        <SideBar/>
        <main>
          <div class="history-section">
              <div class="transaction-history">
                <p>
                  Transaction History
                </p>
              </div>
              <div class="week-history">
                <div class="history-list" v-for="history in history.result" :key="history">
                  <div class="transaction history-transaction">
                    <div class="history">
                      <img src="../../assets/img/1.svg">
                      <div class="name1">
                        <p>
                          {{history.name}}
                        </p>
                        <p class="desc">
                          Transfer
                        </p>
                      </div>
                    </div>
                    <p class="green">
                      {{history.type === 'income' ? '+' : '-'}}Rp.{{history.amount}}
                    </p>
                  </div>
                </div>
              </div>
              <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                <div class="pagination-list">
                  <button class="pagination-prev" v-on:click="previous()">Previous</button>
                  <button class="pagination-next" v-on:click="next()">Next page</button>
                </div>
              </nav>
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
    this.$store.dispatch('loadHistory')
  },
  computed: mapState([
    'userDetail',
    'history',
    'urlHistory'
  ]),
  data () {
    return {
      // history: [],
      phoneNumber: '',
      name: '',
      user: JSON.parse(localStorage.getItem('user')),
      url: 'http://localhost:4000/transactions/history?id=1&page=1'
    }
  },
  methods: {
    ...mapActions(['loadHistoryPagination']),
    getHistory () {
      console.log('ini axios WAH')
      // axios.get(this.url)
      //   .then((res) => {
      //     this.history = res.data
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    getDetail () {
      console.log(this.user.id)
      axios.get('http://localhost:4000/users/' + this.user.id)
        .then((res) => {
          if (res) {
            const data = res.data.result
            this.balance = data.balance
            this.phoneNumber = data.phone_number
            this.name = data.first_name + ' ' + data.last_name
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    next () {
      console.log('next')
      this.loadHistoryPagination(this.history.next_link)
    },
    previous () {
      console.log(this.history)

      this.loadHistoryPagination(this.history.prev_link)
    }
  },
  watch: {
    url () {
      this.url = this.history.next_link
    }
  },
  mounted () {
    console.log('ini mounted')
    this.getHistory()
    this.getDetail()
  }
}
</script>

<style scoped>
.body-container{
      margin: 30px 10vw;
      width: 80vw;
      display: flex;
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

.history {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.this-week {
    font-size: 16px;
    color: #7A7886;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

.history-transaction {
    margin-top: 50px;
}

.transaction {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
}

.name1 {
    margin-left: 10px;
}
.desc {
    font-size: 14px;
    font-weight: normal;
    color: #7A7886;
}
.pagination-next{
  border: 1px solid #d0cccc;
    background:  #6379F4;
    display: block;
    text-align: center;
    width:90px;
    height: 30px;
    margin-left: 20px;
}
.pagination-prev{
  border: 1px solid #d0cccc;
    background:  #6379F4;
    display: block;
    text-align: center;
    height: 30px;
    width: 90px;
}
.pagination-list{
  display: flex;
  margin-left: 40%;
}

</style>
