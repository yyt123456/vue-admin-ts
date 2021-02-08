<template>
  <div class="login">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="formRef" v-bind="layout">
        <a-form-item name="age" autocomplete="off">
          <label>用户名</label>
          <a-input type="text" style="width: 285px"/>
        </a-form-item>
        <a-form-item name="pass">
          <label>密码</label>
          <a-input type="password" autocomplete="off" style="width: 285px"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block style="width: 285px"
          >登录
          </a-button
          >
        </a-form-item>
        <a-form-item>
          <div id="captcha-dom"></div>
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
  import {defineComponent, toRefs, reactive} from "vue";
  import "./js/captcha";

  export default defineComponent({
    name: "Login",
    components: {},
    setup(props) {
      const initData = reactive({
        layout: {
          labelCol: {span: 4},
          wrapperCol: {span: 14}
        }
      })
      const data = toRefs(initData)

      return {
        ...data
      };
    }
  });
</script>
<style lang="scss" scoped>
  @import "styles/login";
</style>
