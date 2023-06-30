
import { defineNuxtConfig } from 'nuxt/config'
import envConfig from './config'
import { getPublicRuntimeConfig } from './config/util'

const NUXT_APP_ENV = process.env.NODE_ENV

const allConfig = envConfig(NUXT_APP_ENV)
const publicRuntimeConfig = getPublicRuntimeConfig(allConfig)

export default defineNuxtConfig({
  appConfig: publicRuntimeConfig,
  nitro: {
    preset: 'vercel',
  },
  modules: [
    '@element-plus/nuxt',
    'nuxt-proxy-request',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  proxy: allConfig.proxy,
})
