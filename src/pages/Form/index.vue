<template>
  <div class="form">
    <el-card class="box-card" header="行内表单">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formInline.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card" header="登录表单">
      <el-form :model="formInline" ref="ruleLoginForm" :rules="rules" label-width="80px" class="loaginForm">
        <el-form-item label="用户名" prop="user">
          <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formInline.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleLoginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card" header="注册表单">
      <el-form :model="formInline" ref="ruleForm" :rules="rules" label-width="80px" class="loaginForm">
        <el-form-item label="用户名" prop="user">
          <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formInline.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="formInline.sex">
            <el-radio label="男" vaule="1"></el-radio>
            <el-radio label="女" vaule="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-date-picker
            v-model="formInline.birthday"
            type="date"
            placeholder="请选择">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      formInline: {
        user: '',
        password: '',
        sex: '',
        birthday: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  inject: ['main']
}
</script>
<style lang="scss">
.form {
  height: inherit;

  .loaginForm {
    width: 460px;
  }
}
</style>