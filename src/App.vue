<template>
  <div>
    <h1>Crud operations!</h1>
    <div id="name">
      <div>
        <label for="first">Name: </label>
        <input type="text" name="" id="first" v-model="name" />
      </div>
      <button style="margin-left: '10px'" @click="addNames" v-show="editDisplayFlag">addNames</button>
      <button style="margin-left: '10px'" @click="editName(name)" v-show="!editDisplayFlag">editName</button>
    </div>
    <div class="list" v-show="editDisplayFlag">
      <ul>
        <li v-for="name in names" :key="name">
          <span>{{ name }}</span> <button @click="editNames(name)">Edit</button><button @click="deleteName(name)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "",
      auxName:"",
      names: [],
      editDisplayFlag:true
    };
  },
  methods: {
    addNames: function () {
      console.log("==addNames");
      this.editDisplayFlag=true;
      this.names.push(this.name);
      this.name='';
    },

    deleteName: function (namez){
      console.log("==deleteName");
      this.names = this.names.filter(name=>name!==namez);

    },
    editNames:function (name){
      console.log("--editname")
      this.name = name;
  this.auxName = name
      this.editDisplayFlag=false;

    },
    editName:function(){
      const idx = this.names.indexOf(this.auxName);
      console.log(idx);
      this.names[idx] = this.name;
      this.editDisplayFlag=true;
    }
  },
};
</script>

<style >
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#name {
  display: flex;
  justify-content: space-around;
  margin: auto;
}
input {
  width: 800px;
}

.list {
  margin-top: 60px;
}
ul {
  margin: auto;
  /* background-color: blue; */
  width: 400px;
}

li {
  display: flex;
  justify-content: space-between;
  height: 20px;
  margin: 40px 0;
  align-items: center;
  font-size: 1.5rem;
}

span {
  border: 2px solid black;
  width: 200px;
}
</style>
