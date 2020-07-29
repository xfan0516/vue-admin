const path = require('path')
function getAssetPath (assetsDir, filePath) {
  return assetsDir
    ? path.posix.join(assetsDir, filePath)
    : filePath
}
module.exports = {
  publicPath: './',
  // 输出文件目录`proxy`
  outputDir: process.env.outputDir,

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 配置js、css等文件夹的二级目录位置，不设置则会在dist下生成4个文件夹
  assetsDir: 'static',
  productionSourceMap: false,
  filenameHashing: false,

  chainWebpack: (config) => {
    const assetsDir = 'static'
    // 指定环境打包js路径
    if (process.env.NODE_ENV === 'testuction') {
      const filename = getAssetPath(
        assetsDir,
        `js/[name].js`
      )
      config.mode('production').devtool(false).output.filename(filename).chunkFilename(filename)
    }
    // 修改prefetch：
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  },
  devServer: {
    host: '0.0.0.0',
    port: 8008,
    proxy: {
      '/a': {
        // target: 'http://192.168.20.161:8086/',
        // target: 'http://172.16.1.215:30020/',
        // target: 'http://172.16.1.215:30020/', // 测试环境ip
        target: 'http://172.16.1.215:30023/', // 测试环境ip
        changeOrigin: true
      }
    }
  },
  // 配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/index.scss";`
      }
    },
    sourceMap: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  pluginOptions: {
    lintStyleOnBuild: true, // 添加了插件(@ascendancyy/vue-cli-plugin-stylelint), 所以需要配置
    stylelint: {
      fix: true // boolean (default: true)
      // files: ['src/common/css/*.scss', 'src/App.vue'] // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
      // formatter: () => { } // function (default: require('stylelint-codeframe-formatter'))
      // etc...
    }
  }
}
