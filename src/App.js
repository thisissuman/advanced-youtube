import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "../src/components/utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SerarchedContainer from "./components/SerarchedContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "searchcontainer",
          element: <SerarchedContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    }
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
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
