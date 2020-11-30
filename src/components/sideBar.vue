<template>
    <aside class="sidebar">
        <div>
          <router-link to="/" class="menu blue">
            <img src="../assets/img/grid.png" alt="grid">
            <p class="blue">Dashboard</p>
          </router-link>
          <router-link to="/transfer-list" class="menu">
            <img src="../assets/img/arrow-up.svg" alt="transfer">
            <p>Transfer</p>
          </router-link>
          <a href="./topup.html" class="menu">
            <img src="../assets/img/plus.png" alt="topup">
            <p>Top Up</p>
          </a>
          <a href="./profile.html" class="menu">
            <img src="../assets/img/user.svg" alt="profile">
            <p>Profile</p>
          </a>
        </div>
        <router-link to="/login" class="logout">
          <img src="../assets/img/log-out.svg" alt="logout">
          <p>Logout</p>
        </router-link>
      </aside>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>
