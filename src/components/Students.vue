<template>
  <div class="students container">
    <h1 class="page-header">学生管理系统</h1>
    <table class="table table-stripede">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'students',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
