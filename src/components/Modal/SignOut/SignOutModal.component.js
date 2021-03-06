import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./SignOutModal.component.style";
import Button from "../../Button/Button.component";
import useSignOut from "../../../hooks/useSignOut";

const SignOutModal = ({ modalVisible, onCancel }) => {
  const [performSignOut] = useSignOut();

  const signOut = () => {
    performSignOut();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Are you sure you want to sign out?</Text>
          <View style={{ width: "100%", marginTop: 16 }}>
            <Button title="Yes" secondary onPress={signOut} />
            <Button title="No" primary onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;
