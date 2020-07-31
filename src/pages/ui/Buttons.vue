<template>
  <div class="buttons">
    <el-card class="box-card" header="基础按钮">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
    </el-card>
    <el-card class="box-card" header="图标按钮">
      <el-button type="primary" icon="el-icon-edit">编辑</el-button>
      <el-button type="primary" icon="el-icon-share">分享</el-button>
      <el-button type="primary" icon="el-icon-delete">删除</el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-card>
    <el-card class="box-card" header="Loading按钮">
      <el-button type="primary" :loading="true">加载中</el-button>
      <el-button type="primary" :loading="loading" @click="onLoading">点击加载</el-button>
    </el-card>
    <el-card class="box-card" header="按钮组合">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </el-card>
    <el-card class="box-card" header="按钮尺寸">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'buttons',
  data () {
    return {
      msg: '这是 component 组件',
      loading: false
    }
  },
  methods: {
    onLoading () {
      this.loading = true
    }
  }
}
</script>
<style lang="scss">
.box-card {
  text-align: left;
  margin-bottom: 10px;

  .el-button-group {
    margin-right: 20px;
  }
}

.buttons {
  height: inherit;

  
}
</style>