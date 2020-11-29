<template>
    <div class="container">
        <Header :nameUser="name" :phoneNumber="phoneNumber"/>
        <div class="body-contaier">
          <SideBar/>
          <main>
            <header class="main-head">
              <div class="head-balance">
                <p>Balance</p>
                <p class="amount">Rp.{{balance}}</p>
                <p class="phone">{{phoneNumber}}</p>
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
                  <a href="./history.html">
                    <p class="see-all">
                        See All
                    </p>
                  </a>
                </div>
                <div class="transaction" v-for="history in history" :key="history">
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
                <!-- <div class="transaction">
                  <div class="history">
                      <img src="../../assets/img/logo.svg">
                      <div class="name1">
                          <p>
                              Netflix
                          </p>
                          <p class="desc">
                              Subscription
                          </p>
                      </div>
                  </div>
                  <p class="red">
                      -Rp.149.000
                  </p>
                </div>
                <div class="transaction">
                  <div class="history">
                      <img src="../../assets/img/2.svg">
                      <div class="name1">
                          <p>
                              Christine Mar...
                          </p>
                          <p class="desc">
                              Transfer
                          </p>
                      </div>
                  </div>
                  <p class="green">
                      +Rp.150.000
                  </p>
                </div>
                <div class="transaction">
                  <div class="history">
                      <img src="../../assets/img/adobe.svg">
                      <div class="name1">
                          <p>
                              Adobe Inc.
                          </p>
                          <p class="desc">
                              Transfer
                          </p>
                      </div>
                  </div>
                  <p class="red">
                      -Rp.249.000
                  </p>
                </div> -->
              </div>
            </div>
      </main>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from '../../components/header'
import SideBar from '../../components/sideBar'
export default {
  components: {
    Header,
    SideBar
  },
  data () {
    return {
      history: [],
      balance: 0,
      phoneNumber: '',
      name: ''
    }
  },
  methods: {
    getHistory () {
      console.log('ini axios WAH')
      axios.get('http://localhost:4000/transactions/history?id=1&page=3')
        .then((res) => {
          this.history = res.data.result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDetail () {
      console.log('ini axios WAH')
      axios.get('http://localhost:4000/users/1')
        .then((res) => {
          const data = res.data.result
          this.balance = data.balance
          this.phoneNumber = data.phone_number
          this.name = data.first_name + ' ' + data.last_name
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
.body-container {
    margin: 30px 10vw;
    width: 80vw;
    display: flex;
    flex-direction: row;
}

.sidebar {
    width: 100%;
    height: 678px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    margin-right: 30px;
}

.menu, .logout {
    display: flex;
    flex-direction: row;
    padding: 47px 0px 0px 30px;
}

.menu p, .logout p {
    margin: auto;
    margin-left: 20px;
    color: #6379F4;
    color: rgba(58, 61, 66, 0.8);
}

.menu img, .logout img {
    filter: invert(0%) sepia(96%) saturate(0%) hue-rotate(68deg) brightness(95%) contrast(104%);
}

.logout {
    padding-bottom: 47px;
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
    filter: invert(41%) sepia(51%) saturate(1731%) hue-rotate(337deg) brightness(106%) contrast(106%);
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
}
.red {
    margin: auto;
    margin-right: 0;
    color: #FF5B37;
}
footer {
    height: 50px;
    width: 100%;
}
</style>
