<script>
export default {
  data() {
    return {
      list: [],
      value: 0,
      result: 0,
      selected: ""
    }
  },
  methods: {
    async tableau() {
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
      console.log(this.selected)
      this.result = this.value * this.selected;
    },

  },
  created() {
    this.tableau();
  }
}
</script>
<template>
  <div class="container">
    <h1 class="title" style="color: #00B054;">
      Bienvenue sur MoneyValue !
    </h1>

    <form action="" class="convert_form">
      <div class="field_column">
        <h3 style="color: white;">
      Montant
    </h3>
        <div>
          <input type="text" name="conversion_rates" id="conversion_rates" v-model="value">
        </div>
      </div>
      <div class="field_column">
        <h3 style="color: white;">
      Conversion
    </h3>
        <div>
          <select v-model="selected">
            <option v-for='lists in list' :value="lists.has_one_pair.conversion_rate">{{ lists.first_currency
              + "->" + lists.second_currency }}</option>
          </select>
        </div>
      </div>

      <div class="field_column">
        <input type="submit" @click.prevent="calculer()" value="Calculer">
      </div>
    </form>
    <div class="resultat_container" style="color: white;">
    <h3  style="color: white;">
      Résultat
    </h3>
    {{ result }}
  </div>
  </div>


  
</template>

<style scoped>

.container {
  margin-top: 2%;
  background-color: #2d2d2d;
  border-radius: 10px;
  width: 45%;
}

.resultat_container {
  padding-left: 5%;
}
.convert_form {
  display: flex;
  text-align: center;
  align-items: center;
}

.head {
  display: flex;
}

.head #sur {
  /* text-decoration: underline; */
  text-decoration: overline;
}

.head a {
  margin: 2rem;
}

.head a li {
  list-style: none;
}

.field_column {
  padding: 2rem;
}
</style>