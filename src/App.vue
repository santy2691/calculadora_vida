
<template>

  <div class="container d-flex flex-column justify-content-center align-items-center" style="height: 100%">
    <div style="height: 100px;">
     <p>
       años: {{tiempo.any}}
       meses : {{tiempo.meses}}
       dias : {{tiempo.dias}}
       horas : {{tiempo.horas}}
       minutos : {{tiempo.min}}
       segundos : {{tiempo.seg}}
      </p>
    </div>
    <div>
    <v-date-picker v-on:click="start" v-model="date" mode="dateTime" is24hr>
      <template v-slot="{ inputValue, inputEvents }">
        <input
          class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300 "
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </v-date-picker>
    </div>
  </div>
</template>

<script>
import {tiempoDeVida} from '../library/utils';



export default {
  name: "app",
  data() {
    return {
      titulo: "funciona",
      date: new Date(),
      tiempo : {any : 0, meses: 0, dias : 0, horas: 0, min: 0, seg : 0 },
    };
  },

mounted() {
  this.cuenta();
},

  methods : {
    cuenta() {
      setInterval(()=> {
        let nuevaFecha = tiempoDeVida(this.date.getTime(), new Date().getTime());
        this.tiempo.any = nuevaFecha.any;
        this.tiempo.meses = nuevaFecha.meses;
        this.tiempo.dias = nuevaFecha.dias;
        this.tiempo.horas = nuevaFecha.horas;
        this.tiempo.min = nuevaFecha.min;
        this.tiempo.seg = nuevaFecha.seg;

      },1000);
    },

    start() {
      this.$confetti.start({
        particles: [
          {
            size: 5
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
</style>
