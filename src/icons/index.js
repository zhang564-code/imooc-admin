//  1.导入所有的svg图标
//  2.完成svgIcon的全局注册
import svgIcon from '@/components/SvgIcon/SvgIcon_index'

//  https://webpack.docschina.org/guides/dependency-management/#requirecontext
const svgRequire = require.context('./svg', false, /\.svg$/)
//  此时返回了一个Require 函数 可以接收一个request 参数 用于require 的导入
//  该函数提供了三个属性  可以通过svgRequire.keys()获得所有的svg图标
//  遍历图标 把图标作为 request 参数传入到 svgRequire 函数中，完成本地svg 图标的导入
console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', svgIcon)
}
