import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "../src/components/utils/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
  /*
   * Head
   * Body
   *    SideBar
   *       MenuITems
   *    MainContainer
   *       ButtonList
   *       VideoContainer
   *          VideoCard
   * Footer */
}

export default App;
