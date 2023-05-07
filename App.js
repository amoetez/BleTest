import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, StyleSheet, ScrollView,Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./componenet/Home/Header";
import Items from "./componenet/Home/Items";
import Article from "./componenet/Articles/Article";
import CustumeDrawer from "./componenet/Home/CustumeDrawer";
import Table from "./componenet/TableControl/Table";
import FeedBack from "./componenet/feedback/Feedback";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <Items navigation={navigation} />
    </View>
  );
}

function ArticleScreen({ navigation }) {
  return (
    <ScrollView style={styles.articles}>
      <Article title={"Article 1"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure . "} />
      <Article title={"Article 2"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure . "}/>
      <Article title={"Article 3"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure . "} />
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const height = Dimensions.get("window").height

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustumeDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: "#5F7045",
          drawerActiveTintColor: "white",
          drawerLabelStyle: {
            fontSize: 20,
            marginLeft: -18,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
            drawerItemStyle:{height: height * 0.08}
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <Ionicons name="book" size={22} color={color} />
            ),
            drawerItemStyle:{height: height * 0.08}
          }}
          name="Article"
          component={ArticleScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="desk" size={26} color={color} />
            ),
            drawerItemStyle:{height: height * 0.08}
          }}
          name="Table"
          component={Table}
        />
        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="feedback" size={22} color={color} />
            ),
            drawerItemStyle:{height: height * 0.08}
          }}
          name="FeedBack"
          component={FeedBack}
        />

        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="logout" size={22} color={color} />
            ),
            drawerItemStyle:{marginTop: height * 0.5, height: height * 0.08}
          }}
          
          name="logout"
          component={FeedBack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  drawer: {},
  articles:{

  }
});
