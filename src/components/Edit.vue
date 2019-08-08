<template>
  <div class="edit container">
    <h1 class="page-header">编辑用户</h1>
    <form @submit.prevent="updateStudents">
        <div class="well">
            <h4>添加学生信息</h4>
            <div class="form-group">
                <label>姓名</label>
                <input type="text" class="form-control" placeholder="请输入姓名" v-model="students.name">
            </div>
            <div class="form-group">
                <label>分数</label>
                <input type="text" class="form-control" placeholder="请输入分数" v-model="students.score">
            </div>
            <div class="form-group">
                <label>学号</label>
                <input type="text" class="form-control" placeholder="请输入学号" v-model="students.id">
            </div>
            <div class="form-group">
                <label>年龄</label>
                <input type="text" class="form-control" placeholder="请输入年龄" v-model="students.age">
            </div><div class="form-group">
                <label>学校</label>
                <input type="text" class="form-control" placeholder="请输入学校" v-model="students.college">
            </div>
            <button class="btn btn-primary">确认</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'edit',
  data(){
      return {
          students:{},
          alter:''
      }
  },
  methods:{
      getStudents(id){
           axios.get("http://localhost:3005/students/" + id)
    .then(response=>{
      console.log(response);
      this.students = response.data      
    })
      },
      updateStudents(){
        //   console.log(123);
        if(!this.students.name || !this.students.score || !this.students.id){
            console.log("请添加对应信息");
        }else{
            let updateStudent = {
                name:this.students.name,
                id:this.students.id,
                score:this.students.score,
                age:this.students.age,
                college:this.students.college
            }
            this.$axios.put('http://localhost:3005/students/' + this.$route.params.id,updateStudent)
            .then(response => {
                // console.log(response);
                // 添加成功之后跳转到主页上去
                this.$router.push({path:'/',query:{alter:"用户信息更新成功！"}})
            })
            .catch(function (error) {
                console.log(error);
            });
        }
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
