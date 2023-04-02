<script>
    export default {
        data() {
            return {
                List: [],
                value: 0,
                result: 0,
                rate: [],
            }
        },
        methods: {
          async tableau(){
            fetch('http://127.0.0.1:8000/api/get/currencies', {  
        }).then(response => {
            if (response.ok) {
                this.successMessage = "Connexion réussie !";
                this.errorMessage = "";
                console.log(response)
            } else {
                this.successMessage = "";
                this.errorMessage = "Échec de l'inscription";
            }
            console.log(response.status);
            return response.json();
        }).then(data => { this.list = data.data, console.log(this.list) })
        },

            async calculer() {
              this.pairsList.forEach(e => {
                this.convertion =e.convertion_rate ;
                console.log(e);
              });
                this.result = this.value * this.convertion;
                console.log(this.convertion);

                this.convertion.forEach(i => {
                  console.log(i)
                })
            },
        },
        created() {
            this.getData();
        }
    }
</script>
<template>
  <div>
    <form action="" class="convert">
            <div class="field_column">
                <label for="">Montant</label>
                <div>
                    <input type="text" name="convertion_rates" id="convertion_rates" v-model="value">
                </div>
            </div>
            <div class="field_column">
                <label for="">Vers</label>
                <div>
                  <select name="" id="">
                    <option v-for='(data, index) in pairsList' :key="index" :value="data.id">{{ data.firstCurrency + "->" + data.secondCurrency  }}</option>
                  </select>
                </div>
            </div>
        
            <div class="field_column">
                <input type="submit" @click.prevent="calculer()" value="Calculer">
            </div>
        </form>
  </div>

  <!-- {{ pairsList }} -->
  {{ result }}
</template>

<style scoped>
.convert {
    display: flex;
    text-align: center;
    align-items: center;
}

.head {
    display: flex;
}

.head #sur{
    /* text-decoration: underline; */
    text-decoration: overline;
}

.head a{
    margin: 2rem;
}

.head a li{
    list-style: none;
}

.field_column  {
    padding: 2rem;
}
</style>