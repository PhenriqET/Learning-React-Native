import { StatusBar } from 'expo-status-bar';
import { Home, style } from './src/screens/Home';
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: "#232F3E",
      alignItems: "flex-start",
  },

  header: {
      width: "100%",
      paddingTop: 80,
      alignItems: "center",
      justifyContent: "center",
  },

  amazonLogoImg: {
      margintop: -32,
  },

  
})
