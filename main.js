import './index.less';
import { registerMicroApps, start } from "qiankun";

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from "./render/ReactRender";
render({ loading: true });

const loader = (loading) => render({ loading });

registerMicroApps([
  {
    name: "reactapp",
    entry: "//localhost:5000",
    container: "#subapp-viewport",
    loader,
    activeRule: "/#/reactapp",
  },
]);

start();
