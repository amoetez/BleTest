import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import BleScanner from "../Connect/BleConnect.js";

const ImgBtn = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [showBleScanner, setShowBleScanner] = useState(false);

  const handleConnectPress = () => {
    // Implement your connect logic here
    setIsConnected(true);
  };

  const handleShowScannerPress = () => {
    setShowBleScanner(!showBleScanner);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../images/chilift.png")}
          style={styles.logo}
        />
        <Pressable
          style={styles.connectButton}
          onPress={handleConnectPress}
          disabled={isConnected}
        >
          <Text style={styles.connectButtonText}>
            {isConnected ? "Connected" : "Connect"}
          </Text>
          <Feather name="bluetooth" size={17} style={styles.connectIcon} />
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../images/table.jpg")}
          style={styles.image}
        />
        <Pressable
          style={styles.showScannerButton}
          onPress={handleShowScannerPress}
        >
          <Text style={styles.showScannerButtonText}>
            {showBleScanner ? "Hide" : "Show"} Scanner
          </Text>
        </Pressable>
      </View>
      {showBleScanner && <BleScanner />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    width: "90%",
  },
  logo: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
  },
  connectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5F7045",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    opacity: 0.8,
    disabled: {
      opacity: 0.5,
    },
  },
  connectButtonText: {
    color: "#fff",
    fontSize: 17,
    marginRight: 10,
    textTransform: "uppercase",
  },
  connectIcon: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 50,
    resizeMode: "stretch",
    borderColor: "#5F7045",
    borderWidth: 2,
    marginBottom: 20,
  },
  showScannerButton: {
    backgroundColor: "#5F7045",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  showScannerButtonText: {
    color: "#fff",
    fontSize: 17,
    textTransform: "uppercase",
  },
});

export default ImgBtn;
