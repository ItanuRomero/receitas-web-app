<template>
  <div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowConfirmacaoRedefinir">
        <b-col id="colConfirmacaoRedefinir">
          <div role="group">
            <h4>Um e-mail com instruções para redefinir sua senha foi enviado para você 🎉</h4>
          </div>
          <br>
          <b-button block variant="primary" id="ConfirmarButton">Confirmar</b-button>
        </b-col>
        <b-col align-self="stretch">
          <div id="imgLogin">
            <h4 id="textThatMeal">that.meal</h4>
            <h4 id="textDescrubra">Descubra temperos<br />incríveis</h4>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'FormConfirmacaoRedefinir',
}
</script>

<style>
#ConfirmarButton {
  background-color: #ffc452 !important;
  border-color: #ffc452 !important;
  border-radius: 3px;
}

#colConfirmacaoRedefinir {
  margin-top: 15%;
  margin-right: 10%;
  margin-left: 10%;
}

#colDivis {
  width: 10px;
}

#imgLogin {
  height: 100%;
  width: 100%;
  background: url('~assets/logo.png') no-repeat;
  background-position: center;
  background-color: #ffc452;
}
#rowConfirmacaoRedefinir {
  height: 100vh;
}

#textThatMeal {
  color: white;
  display: flex;
  align-content: right;
  justify-content: right;
  padding-right: 8%;
  padding-top: 8%;
}

#textDescrubra {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 40%;
  padding-right: 5%;
}

#h4Voltar {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 0.8rem;
  color: gray;
  padding-top: 5px;
}
</style>
