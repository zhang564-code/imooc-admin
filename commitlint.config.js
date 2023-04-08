module.exports = {
  extends: ['@commitlint/config-conventional'],
  roles: {
    'type-enum': [
      //当前验证的错误级别
      2,
      //在什么情况下进行验证
      'always',
      //泛型的内容具体是什么
      [
        'feat',//增加新功能
        'fix',//修复 bug
        'docs',//文档注释
        'style',//代码格式
        'refactor',//重构
        'perf',//性能优化
        'test',//新增测试
        'chore',//构建过程或辅助工具的变动
        'revert',//回退
        'build'//打包
      ]

    ],
    //大小写不作校验
    'subject-case': [0]
  }
}