<template>
    <div class="container dashboard">
        <Header :nameUser="userDetail.first_name +' '+ userDetail.last_name" :phoneNumber="userDetail.phone_number"/>
        <section class="body-container">
          <SideBar/>
          <main>
            <header class="main-head">
              <div class="head-balance">
                <p>Balance</p>
                <p class="amount">Rp.{{userDetail.balance}}</p>
                <p class="phone">{{userDetail.phone_number}}</p>
              </div>
              <div class="head-button">
                <button>
                    <img src="../../assets/img/arrow-up.svg" alt="transfer">
                    <p>Transfer</p>
                </button>
                <button>
                    <img src="../../assets/img/plus.svg" alt="topup">
                    <p>Top Up</p>
                </button>
              </div>
            </header>
            <div class="main-section">
              <div class="article">
                <div class="resume">
                  <div class="income">
                    <img src="../../assets/img/arrow-up.svg" alt="income">
                    <p class="title-resume">Income</p>
                    <p class="amount2">Rp2.120.000</p>
                  </div>
                  <div class="expense">
                    <img src="../../assets/img/arrow-up.svg" alt="expense">
                    <p class="title-resume">Expense</p>
                    <p class="amount2">Rp1.560.000</p>
                  </div>
                </div>
                <div class="chart">
                  <div>
                    <img src="../../assets/img/Rectangle 34.svg" alt="sat">
                    <p>Sat</p>
                  </div>
                  <div>
                    <img src="../../assets/img/Rectangle 35.svg" alt="sun">
                    <p>Sun</p>
                  </div>
                  <div>
                    <img src="../../assets/img/Rectangle 36.svg" alt="mon">
                    <p>Mon</p>
                  </div>
                  <div>
                    <p class="point">+ Rp.65.000</p>
                    <img class="point2" src="../../assets/img/Group 5.svg" alt="tue">
                    <img src="../../assets/img/Rectangle 37.svg" alt="tue">
                    <p>Tue</p>
                  </div>
                  <div>
                    <img src="../../assets/img/Rectangle 38.svg" alt="wed">
                    <p>Wed</p>
                  </div>
                  <div>
                    <img src="../../assets/img/Rectangle 39.svg" alt="thu">
                    <p>Thu</p>
                  </div>
                  <div>
                    <img src="../../assets/img/Rectangle 40.svg" alt="fri">
                    <p>Fri</p>
                  </div>
                </div>
              </div>
              <div class="aside">
                <div class="transaction">
                  <p class="history">
                      Transaction History
                  </p>
                  <router-link to="/history">
                    <p class="see-all">
                        See All
                    </p>
                  </router-link>
                </div>
                  <div class="transaction" v-for="history in history.result" :key="history">
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
                      <p class="green">
                        {{history.type === 'income' ? '+' : '-'}}Rp.{{history.amount}}
                      </p>
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
import { mapState } from 'vuex'

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
    'history'
  ]),
  data () {
    return {
      balance: 0,
      phoneNumber: '',
      name: '',
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    getHistory () {
      console.log('ini axios WAH')
      // axios.get('http://localhost:4000/transactions/history?id=1&page=1')
      //   .then((res) => {
      //     this.history = res.data.result
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
  .main-head {
    width: 57vw;
    height: 190px;
    background: rgba(99, 121, 244, 1);
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }
  .head-balance {
    color: #E0E0E0;
  }
  .amount {
    color: #ffffff;
    font-size: 40px;
  }
  .head-button {
    display: flex;
    flex-direction: column;
    margin-top: -8px;
  }
  .head-button button {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    width: 162px;
    height: 57px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .head-button button p {
    margin-left: 5px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
  }

  .head-button button img {
    filter: invert(73%) sepia(71%) saturate(348%) hue-rotate(192deg) brightness(97%) contrast(91%);
  }

  .main-section{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
}

  .article{
    height: 468px;
    width: 55%;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  .resume {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px;
    padding-top: 30px;
    }
    .income img {
    filter: invert(51%) sepia(100%) saturate(346%) hue-rotate(91deg) brightness(97%) contrast(99%);
    transform: rotate(-180deg);
  }
  .income p, .expense p {
    line-height: 30px;
    color: #6A6A6A;
  }
  .title-resume {
    font-size: 14px;
    margin: 0;
  }
  .amount2 {
    font-weight: bold;
    font-size: 18px;
  }
  .expense img {
    filter: invert(41%) sepia(51%) saturate(1731%)
    hue-rotate(337deg) brightness(106%) contrast(106%);
  }

  .chart {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    align-items: flex-end;
    text-align: center;
    margin-top: 60px;
  }

  .chart p {
    font-size: 14px;
  }

  .point, .point2 {
    position: absolute;
    margin-left: -24px;
    margin-top: -24px;
    }

  .point {
    margin-top: -60px;
    box-shadow: 0px 4px 20px rgba(187, 187, 187, 0.25);
    border-radius: 6px;
    width: 94px;
    height: 25px;
    font-weight: bold;
    color: #1EC15F;
    padding-top: 5px;
  }

  .aside{
    height: 448px;
    width: 55%;
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .main-section{
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
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
  .history {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .name1 {
    margin-left: 10px;
  }
  .desc {
    font-size: 14px;
    font-weight: normal;
    color: #7A7886;
  }
  .see-all {
    font-size: 14px;
    color: #6379F4;
  }
  .green {
    margin: auto;
    margin-right: 0;
    color: #1EC15F;
    margin-left: 120px;
    /* justify-content: space-between; */
  }
  .red {
    margin: auto;
    margin-right: 0;
    color: #FF5B37;
  }

</style>
