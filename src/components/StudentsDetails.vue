<template>
  <div class="studentsdetails container">
      <router-link to='/' class="btn btn=default">返回</router-link>
    <h1 class="page-header">{{student.name}}
        <span class="pull-right">
            <router-link class="btn btn-primary" :to="'/edit/' + student.id">编辑</router-link>
            <button class="btn btn-danger" v-on:click="delStudent(student.id)">删除</button>
        </span>
    </h1>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-ok">{{student.score}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-list">{{student.age}}</span></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'studentsdetails',
  data(){
      return {
          student:''
      }
  },
  methods:{
    getStudents(id){
      axios.get("http://localhost:3005/students/"+id)
    .then(response=>{
      console.log(response);
      this.student = response.data;
    })
    },
    delStudent(id){
        axios.delete("http://localhost:3005/students/"+id)
    .then(response=>{
      this.$router.push({path:'/',query:{alter:"删除成功！"}})
    })
    }
  },
  created(){
    this.getStudents(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
