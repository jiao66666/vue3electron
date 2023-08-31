// vue.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


module.exports = {
  publicPath: './', // 或者根据你的实际情况配置正确的路径
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
          verifyUpdateCodeSignature: false,
          icon: "./dist_electron/myicon.png",
          artifactName: "${productName}_Setup_${version}.${ext}",
          publish: [
              {
                "provider": "generic",
                "url": "http://www.xzx725.store/"
              }
          ]
        },
        cscLink:'./jiao.pfx',
        cscKeyPassword:'jiao66666',
        compression: 'maximum'
      },
      preload:'src/preload.js'
    }
  }
}
