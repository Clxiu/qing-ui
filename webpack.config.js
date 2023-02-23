const path = require('path');

module.exports = {
  entry: './src/index.jsx', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'bundle.jsx', // 输出文件名
    library: 'MyLibrary', // 库名称，需要在使用时使用这个名称来引用库
    libraryTarget: 'umd', // 库打包成的模块格式，可以在任何模块环境下使用
    umdNamedDefine: true // 如果库是通过 AMD 或者 CommonJS 模块引入的，就会给模块名加上一个名字
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, // 排除node_modules文件夹
        use: {
          loader: 'babel-loader', // 使用babel-loader处理js文件
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // 使用@babel/preset-env和@babel/preset-react进行转换
          }
        }
      },
      {
        test: /\.css$/, // 匹配所有css文件
        use: [
          'style-loader', // 使用style-loader将样式插入到HTML中
          'css-loader' // 使用css-loader处理css文件
        ]
      }
    ]
  },
  plugins: []
};
