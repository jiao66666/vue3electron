// vue.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  outputDir: './build',
  // 和webpapck属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    //配置webpack自动按需引入element-plus，
    plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()]
        }),
        Components({
          resolvers: [ElementPlusResolver()]
        })
    ]
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "vue3Electron",
        appId: "com.jiao66666",
        win: {
          target: "nsis",
          icon: "./dist_electron/myicon.png",
          artifactName: "${productName}_Setup_${version}.${ext}"
        }
      },
      preload:'src/preload.js'
    }
  }
}
