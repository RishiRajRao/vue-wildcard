import { createStore } from "vuex";

export const store = createStore({
  // state() {
  //   return {
  //     products: [
  //       { name: "rishi", price: 20 },
  //       { name: "nupur", price: 40 },
  //       { name: "rahul", price: 60 },
  //       { name: "Ashish", price: 80 },
  //     ],
  //   };
  // },

  state:{
    products: [
      { name: "rishi", price: 20 },
      { name: "nupur", price: 40 },
      { name: "rahul", price: 60 },
      { name: "Ashish", price: 80 },
    ]
  },
  mutations:{
    reducePrice:(state,payload)=>{
      console.log(payload)
      state.products.forEach(product=>{
        product.price+=2
      })
    }

   
  },
  actions:{
    reducePrice:(context,payload) =>{
      context.commit('reducePrice',payload)
    }
  }
});
