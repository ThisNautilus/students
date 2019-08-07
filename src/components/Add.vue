<template>
  <div class="add container">
    <h1 class="page-header">添加学生</h1>
    <form @submit.prevent="addStudents">
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
            <button class="btn btn-primary">添加</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add',
  data(){
      return {
          students:{}
      }
  },
  methods:{
      addStudents(){
        //   console.log(123);
        if(!this.students.name || !this.students.score || !this.students.id){
            console.log("请添加对应信息");
        }else{
            let newStudent = {
                name:this.students.name,
                id:this.students.id,
                score:this.students.score,
                age:this.students.age,
                college:this.students.college
            }
            axios.post('http://localhost:3005/students',newStudent)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
