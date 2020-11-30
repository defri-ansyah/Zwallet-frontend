<template>
  <div class="container">
    <SideLogin/>
    <form class="form-container">
      <p class="text2">
        Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.
      </p>
      <p class="text4">
        Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
      </p>
      <div class="form-input">
        <input id="codeBox1" type="number" maxlength="1" @keyup="onKeyUpEvent(1, event)" @focus="onFocusEvent(1)"/>
        <input id="codeBox2" type="number" maxlength="1" @keyup="onKeyUpEvent(2, event)" @focus="onFocusEvent(2)"/>
        <input id="codeBox3" type="number" maxlength="1" @keyup="onKeyUpEvent(3, event)" @focus="onFocusEvent(3)"/>
        <input id="codeBox4" type="number" maxlength="1" @keyup="onKeyUpEvent(4, event)" @focus="onFocusEvent(4)"/>
        <input id="codeBox5" type="number" maxlength="1" @keyup="onKeyUpEvent(5, event)" @focus="onFocusEvent(5)"/>
        <input id="codeBox6" type="number" maxlength="1" @keyup="onKeyUpEvent(6, event)" @focus="onFocusEvent(6)"/>
        <a href="./pin-success.html" type="submit" id="confirm" class="btn-register">Confirm
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import SideLogin from '../../components/sideLogin'

export default {
  name: 'Login',
  components: {
    SideLogin
  },

  methods: {
    // onKeyUpEvent (index, event) {
    //   const eventCode = event.which || event.keyCode
    //   const confirm = document.getElementById('confirm')
    //   if (getCodeBoxElement(index).value.length === 1) {
    //     if (index !== 6) {
    //       getCodeBoxElement(index + 1).focus()
    //     } else {
    //       getCodeBoxElement(index).blur()
    //       // Submit code
    //       confirm.classList = 'btn-1'
    //     }
    //   }
    //   if (eventCode === 8 && index !== 1) {
    //     getCodeBoxElement(index - 1).focus()
    //   }
    // }
  }
}
</script>

<style scoped>
.form-container {
    margin-left: 40px;
}
.form-container p {
    font-family: Nunito Sans;
}

.text2 {
    width: 320px;
    margin-top: 100px;
    color: #3A3D42;
    font-size: 20px;
}

.text3 {
    width: 380px;
    line-height: 22px;
    margin-top: 30px;
    color: rgba(58, 61, 66, 0.6);
    font-size: 12px;
}

.text4 {
    width: 380px;
    line-height: 22px;
    margin-top: 30px;
    color: rgba(58, 61, 66, 0.6);
    font-size: 13px;
    margin-bottom: 50px;
}

.text5 {
    width: 320px;
    color: #3A3D42;
    font-size: 20px;
}

.success {
    margin-top: 100px;
    margin-bottom: 30px;
}

.login-input {
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    color: #D0CCCC;
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    margin-top: 50px;
}

#email,
#password,
#username,
#fullname, #text {
    box-sizing: border-box;
    width: 100%;
    border: none;
    display: block;
    font-size: 14px;
    margin-left: 20px;
    font-family: Nunito Sans;
    color: #A9A9A9 80%;
}

.forgot-password{
    font-size: 14px;
    width: 380px;
    text-align: right;
    margin-top: 30px;
    margin-left: 150px;
    color: rgba(58, 61, 66, 0.8);
}

.btn-1 {
    border: 1px solid #d0cccc;
    color: #D0CCCC;
    font-size: 18px;
    background: #6379F4;
    color: #fff;
    border-radius: 12px;
    display: block;
    text-align: center;
    padding: 10px 0px;
    margin-top: 70px;
}

.btn-register {
    border: 1px solid #d0cccc;
    color: #88888F;
    font-size: 18px;
    background: #DADADA;
    border-radius: 12px;
    display: block;
    text-align: center;
    padding: 10px 0px;
    margin-top: 70px;
}

.sign-up {
    font-family: Nunito Sans;
    color: rgba(58, 61, 66, 0.8);
    text-align: center;
    margin-top: 40px;
}

.sign-up a {
    color: #6379F4;
}

.eye {
    cursor: pointer;
}

input[type=number] {
    height: 60px;
    width: 48px;
    font-size: 30px;
    color: #3A3D42;
    text-align: center;
    margin-right: 10px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 768px) {
    .pict-container {
        display: none;
    }
    form {
        width: 100%;
        margin-left: 0;
    }
    .form-container {
        margin: 0px 5px 0px 5px;
    }

}
</style>
