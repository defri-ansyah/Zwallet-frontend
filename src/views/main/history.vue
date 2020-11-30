<template>
    <div class="container dashboard">
        <Header :nameUser="name" :phoneNumber="phoneNumber"/>
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
                <p class="this-week">
                  This Week
                </p>
                <div class="history-list">
                  <div class="transaction history-transaction">
                    <div class="history">
                      <img src="../../assets/img/1.svg">
                      <div class="name1">
                        <p>
                          Samuel Suhi
                        </p>
                        <p class="desc">
                          Transfer
                        </p>
                      </div>
                    </div>
                    <p class="green">
                      +Rp.50.000
                    </p>
                  </div>
                  <div class="transaction history-transaction">
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
                </div>
              </div>
              <div class="week-history">
                <p class="this-week">
                  This Month
                </p>
                <div class="history-list">
                  <div class="transaction history-transaction">
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
                </div>
                <div class="transaction">
                  <div class="history history-transaction">
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
                </div>
              </div>
            </div>
          </main>
      </section>
      <Footer/>
    </div>
</template>

<script>
// import axios from 'axios'
import Header from '../../components/header'
import SideBar from '../../components/sideBar'
import Footer from '../../components/footer.vue'
export default {
  name: 'Home',
  components: {
    Header,
    SideBar,
    Footer
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

</style>
