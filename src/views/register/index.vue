<template>
  <div class="login">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="layout" @finish="handleFinish" :model="form"
              :rules="rules">
        <a-form-item name="userName" >
          <label>用户名</label>
          <a-input type="text" style="width: 300px" v-model:value="form.userName"/>
        </a-form-item>
        <a-form-item name="password">
          <label>密码</label>
          <a-input type="password" v-model:value="form.password"  style="width: 300px"/>
        </a-form-item>
        <a-form-item name="passwordConfirm">
          <label>确认密码</label>
          <a-input type="password" v-model:value="form.passwordConfirm"  style="width: 300px"/>
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <div style="display: flex;align-items: center;width: 300px;justify-content: space-between">
            <a-input type="password" v-model:value="form.code"  style="width: 190px;margin-right: 10px"/>
            <a-button type="primary" @click="getCode">获取验证码</a-button>
          </div>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block style="width: 300px"
          >登录
          </a-button
          >
        </a-form-item>

        <a-form-item>
          <Captcha></Captcha>
        </a-form-item>
      </a-form>
      <div class="center fs-12">
        <a href="" class="white">忘记密码</a> |
        <a href="" class="white">注册</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {toRefs, reactive, onMounted, UnwrapRef} from "vue";
  import Captcha from '../../components/Captcha/index.vue'
  import {RuleObject} from 'ant-design-vue/es/form/interface';
  import { isPhone } from "../../utils/validateCommon";
  export default {
    components: {
      Captcha
    },
    setup() {
      const checkUserName = async (rule: RuleObject, value: any) => {
        if (!value) {
          return Promise.reject('请输入');
        }
      };
      const initData = reactive({
        layout: {
          labelCol: {span: 4},
          wrapperCol: {span: 14}
        },
        form: {
          userName: '',
          password: '',
          passwordConfirm: '',
          code: '',
        },
        rules: {
          userName: [{validator: checkUserName, trigger: 'blur'}],
          password: [{validator: checkUserName, trigger: 'blur'}],
          passwordConfirm: [{validator: checkUserName, trigger: 'blur'}],
          code: [{validator: checkUserName, trigger: 'blur'}],
        }
      })
      const data = toRefs(initData)

      const handleFinish = () => {
        // alert(123)
      }
      const getCode = () => {
        // alert(123)
      }
      return {
        ...data,
        handleFinish,
        getCode,
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "styles/registger";
</style>
