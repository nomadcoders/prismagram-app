import { View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const TabNavigation = createBottomTabNavigator({
  Home,
  Search,
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: () => {
        console.log("Add");
      }
    }
  },
  Notifications,
  Profile
});

export default createAppContainer(TabNavigation);
