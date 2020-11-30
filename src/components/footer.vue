<template>
    <footer>
      <div class="footer">
          <div class="foot1">2020 Zwallet. All right reserved.</div>
          <div class="footer2">
              <div class="foot2">+62 5637 8882 9901</div>
              <div class="foot3">contact@zwallet.com</div>
          </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>
<style scoped>
  footer {
      height: 50px;
      width: 100%;
  }
  .footer {
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      background: rgba(99, 121, 244, 1);
      width: 100%;
  }
  .foot1{
      font-size: 16px;
      color: rgba(239, 239, 239, 0.9);
      margin-left: 100px;
  }
  .footer2 {
      display: flex;
      flex-direction: row;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      color: rgba(239, 239, 239, 1);
      margin-right: 100px;
  }
  .foot3{
      margin-left: 70px;

  }
</style>
