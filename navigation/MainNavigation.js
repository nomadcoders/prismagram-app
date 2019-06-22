import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
