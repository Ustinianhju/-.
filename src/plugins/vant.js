// 自动注册vant组件
import {
  Button,
  Cell,
  Image as VanImage,
  NavBar,
  Tabbar,
  TabbarItem,
  Form,
  Field
} from 'vant'

const components = [Button, Cell, VanImage, NavBar, Tabbar, TabbarItem,Form,Field]

const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component))
}

export default registerVant
