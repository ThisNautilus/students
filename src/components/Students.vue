<template>
  <div class="students container">
    <alter v-if="alter" :msg="alter"></alter>
    <h1 class="page-header">学生管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="search">
    <br>
    <table class="table table-stripede">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>分数</th>
          <th>年龄</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in searchBy(students,search)" :key="student.id">
          <td>{{student.id}}</td>
          <td>{{student.name}}</td>
          <td>{{student.score}}</td>
          <td>{{student.age}}</td>
          <td><router-link class="btn btn-default" :to="'/student/'+ student.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>

<script>
import axios from 'axios'
// import { log } from 'util';
import Alter from "./Alter";
export default {
  name: 'students',
  data(){
    return {
      students:[],
      alter:'',
      search:''
    }
  },
  methods:{
    getStudents(){
      axios.get("http://localhost:3005/students")
    .then(response=>{
      // console.log(response);
      this.students = response.data      
    })
    .catch(error=>{
      console.log(errror);
      alert("网络无法访问")
    })
    },
    searchBy(students,value){
      return students.filter(function(student){
        return student.name.match(value);
      })
    }
  },
  created(){
    if(this.$route.query.alter){
      this.alter = this.$route.query.alter;
    }
    this.getStudents();
  },
  updated(){
    this.getStudents();
  },
  components:{
    Alter
  }
}
</script>


<style scoped lang="less">

</style>
