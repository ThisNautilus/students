<template>
  <div class="students container">
    <h1 class="page-header">学生管理系统</h1>
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
        <tr v-for="item in students" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.score}}</td>
          <td>{{item.age}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { log } from 'util';
export default {
  name: 'students',
  data(){
    return {
      students:[]
    }
  },
  created(){
    axios.get("http://localhost:3005/students")
    .then(response=>{
      // console.log(response);
      this.students = response.data      
    })
    .catch(error=>{
      console.log(errror);
      alert("网络无法访问")
    })
  }
}
</script>


<style scoped lang="less">

</style>
