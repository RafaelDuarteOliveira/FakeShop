import React from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useUserContext } from "../contexts/UserContext";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: userData?.user.avatar
        }}
      />
      <Text style={styles.text}>
        {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
      </Text>
      <Text style={styles.text}>{userData?.user.email ?? ""}</Text>
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Icon name="exit-to-app" size={20} color="#fff" />
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 5,
  },
  logoutButtonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
});