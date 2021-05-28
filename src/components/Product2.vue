<template>
  <div>
    <h1>I am product two</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        {{ product.price }}
      </li>
    </ul>

    <button @click="reducePrice">Reduce State!</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "Product2",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {


    ...mapActions(['reducePrice']),

    //  or reducePrice(amount){
    //   this.$store.dispatch('reducePrice',amount)
    // },

    // reducePrice() {
    //     this.$store.commit("reducePrice");
    // },
    //  reducePrice(){
    //   this.$store.state.products.forEach(product=>product.price+=2)
    // },
    alertcheck() {
      alert("clicked");
    },
  },
};
</script>

<style>
</style>