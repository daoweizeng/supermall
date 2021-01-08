module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        // @表示src文件夹
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}