const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const outputdir = () => {
  console.log(`outputdir==>  ${process.env['NODE_ENV_DIR']}`)
  return process.env['NODE_ENV_DIR']
}
// vue.config.js
module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
  //baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
  publicPath: './',

  // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
  outputDir: outputdir(),
  //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'assets',
  //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  // indexPath: "myIndex.html",
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  //如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
  // lintOnSave: process.env.NODE_ENV !== 'production',

  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  // runtimeCompiler: false,

  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,
  // 调整内部的 webpack 配置。
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload-login')
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('scss')
      .test(/\.scss/)
      .oneOf('vue')
      .end()
  },
  configureWebpack: {
    // cdn部署
    externals: {
      // vue: 'Vue',
      // 'vue-router': 'VueRouter',
      // axios: 'axios',
      // 'element-ui': 'ELEMENT',
      BMap: 'BMap',
      BMapLib: 'BMapLib',
    },
    resolve: {
      alias: {
        'assets': path.resolve(__dirname, './src/assets'),
        'components': path.resolve(__dirname, './src/components'),
        'views': path.resolve(__dirname, './src/views'),
      }
    }
  },
  // 它支持webPack-dev-server的所有选项
  devServer: {
    // open: true,
    host: '0.0.0.0', // 本机ip
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://192.168.16.64:9001`,
        // target: `http://192.168.16.253:9000`,
        // target: `http://192.168.16.61:9000`,
        // target: `http://192.168.16.225:9001`,   // 张辉
        // target: `http://192.168.16.62:9000`,// 石双双
        target: `https://test.shfda.org/p3`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '',
        }
      },
      // 沪冷链接口
      [process.env.VUE_APP_BASE_API_SHCC]: {
        // target: `http://192.168.16.64:9001`,
        // target: `http://192.168.16.253:8090`,
        // target: `http://192.168.16.61:9000`,
        // target: `http://192.168.16.225:9001`,   // 张辉
        // target: `http://192.168.16.62:8090`,// 石双双
        target: `https://test.shfda.org`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API_SHCC]: '',
        }
      },
    },
  },
}
