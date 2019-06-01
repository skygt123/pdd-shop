var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: './',
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
  },

  configureWebpack: {
    devServer: {
      port: 8080, // 端口号
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '/api': '' // 通过pathRewrite重写地址，将前缀/api转为/
          }
        }
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
