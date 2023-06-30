<template>
  <div>
    <h3>nuxt-proxy-request (demo)</h3>
    
    <p> Use the login form below to test the proxy request. </p>

    <div style="max-width: 500px;">
      <ElForm :model="form" label-width="100px">
        <ElFormItem label="username">
          <ElInput v-model="form.username" type="text" />
        </ElFormItem>

        <ElFormItem label="password">
          <ElInput v-model="form.password" type="password" />
        </ElFormItem>

        <ElFormItem>
          <ElButton type="primary" @click="handleLogin">Login</ElButton>
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElFormItem } from 'element-plus'
import { useLogin } from '~/composables/api/modules/user'

const form = ref({
  username: '',
  password: '',
})

const { loginSubmit } = useLogin()
const handleLogin = async () => {
  const { code } = await loginSubmit(form.value)

  if (code === 0) {
   alert('Login success!')
  } else {
    alert('Login failed, but HTTP proxy request test success!')
  }
}
</script>
