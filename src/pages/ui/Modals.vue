<template>
  <div class="modals">
    <el-card class="box-card" header="MessageBox 弹框">
      <el-button type="primary" @click="open1">信息提示</el-button>
      <el-button type="primary" @click="open2">确认消息</el-button>
    </el-card>
    <el-card class="box-card" header="Message 消息提示框">
      <el-button  @click="message1">消息</el-button>
      <el-button type="success" @click="message2">成功</el-button>
      <el-button type="warning" @click="message3">警告</el-button>
      <el-button type="danger" @click="message4">错误</el-button>
    </el-card>
    <el-card class="box-card" header="Dialog 对话框">
      <el-button  @click="dialogTableVisible = true">嵌套表格</el-button>
      <el-button  @click="dialogFormVisible = true">嵌套表单</el-button>
    </el-card>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog class="text-l" title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Modals',
  data () {
    return {
      msg: '这是 Modals 组件',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        gridData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }]
    }
  },
  methods: {
    open1 () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'success',
            message: `操作成功: ${ action }`
          });
        }
      });
    },
    open2 () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    message1() {
      this.$message('这是一条消息提示');
    },
    message2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },

    message3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },

    message4() {
      this.$message.error('错了哦，这是一条错误消息');
    }
  }
}
</script>
<style lang="scss">
.modals {
  height: inherit;
}
</style>