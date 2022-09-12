// 自动注册vant组件
import {
  Button,
  Cell,
  Image as VanImage,
  NavBar,
  Tabbar,
  TabbarItem,
  Form,
  Field,
  Grid,
  GridItem,
} from "vant";

const components = [
  Button,
  Cell,
  VanImage,
  NavBar,
  Tabbar,
  TabbarItem,
  Form,
  Field,
  Grid,
  GridItem,
];

const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component));
};

export default registerVant;
