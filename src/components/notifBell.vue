<template>
    <div id="modal-pin" class="modal-notif"
    v-on:click="document.getElementById('modal-pin').style.display='none'">
      <form class="modal-content-notif" action=" ">
        <div class="today">
          <p>Today</p>
          <div class="notif-list transferred">
            <img src="../assets/img/arrow-up.svg">
            <div class="notif-list-detail">
              <p class="notif-list-desc">Transfered from Joshua Lee</p>
              <p class="notif-list-amount">Rp220.000</p>
            </div>
          </div>
          <div class="notif-list transfer">
            <img src="../assets/img/arrow-up.svg">
            <div class="notif-list-detail">
              <p class="notif-list-desc">Netflix subscription</p>
              <p class="notif-list-amount">Rp149.000</p>
            </div>
          </div>
        </div>
        <div class="this-week">
          <p>This Week</p>
          <div class="notif-list transfer">
            <img src="../assets/img/arrow-up.svg">
            <div class="notif-list-detail">
              <p class="notif-list-desc">Transfer to Jessica Lee</p>
              <p class="notif-list-amount">Rp100.000</p>
            </div>
          </div>
          <div class="notif-list transferred">
            <img src="../assets/img/arrow-up.svg">
            <div class="notif-list-detail">
              <p class="notif-list-desc">Top up from BNI E-Banking</p>
              <p class="notif-list-amount">Rp300.000</p>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*Modal Styling*/
/* Full-width input fields */

.today p, .this-week p {
    color: #7A7886;
    font-size: 16px;
}

.show-notif {
  display: block;
}

.notif-list {
    width: 100%;
    height: 92px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.transferred img {
    filter: invert(51%) sepia(100%) saturate(346%) hue-rotate(91deg) brightness(97%) contrast(99%);
    transform: rotate(-180deg);
    margin: auto 0 auto 0;
    margin-left: 20px;
}

.transfer img {
    filter: invert(41%) sepia(51%) saturate(1731%)
    hue-rotate(337deg) brightness(106%) contrast(106%);
    margin: auto 0 auto 0;
    margin-left: 20px;
}

.notif-list-desc {
    font-size: 14px;
    margin-bottom: 8px;
}

.notif-list-detail {
    margin-left: 15px;
}

.notif-list-amount {
    color: #43484F !important;
    font-size: 18px;
    font-weight: bold;
}

/* The Modal (background) */
.modal-notif {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    padding-top: 60px;
}
/* Modal Content/Box */
.modal-content-notif {
    background-color: #fefefe;
    margin: 5% auto 15% 58%; /* 5% from the top, 15% from the bottom and centered */
    box-shadow: 0px 0px 70px rgba(99, 99, 99, 0.15);
    border-radius: 20px;
    padding: 30px;
    width: 403px; /* Could be more or less, depending on screen size */
    font-family: Nunito Sans;
}
</style>
