const {override, fixBabelImports, addLessLoader} = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: true,
    }),
    addLessLoader({
      lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
        javascriptEnabled: true,
        modifyVars: {'@brand-primary': '#1DA57A'},
      },
    }),
);