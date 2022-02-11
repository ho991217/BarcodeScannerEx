import React, { useState } from "react";
import styled from "styled-components/native";
import { CameraScreen } from "react-native-camera-kit";
import { Alert, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
`;

const onSuccedContainer = styled.View``;

const BarcodeScanner = ({ navigation: { navigate } }) => {
  const { params } = useRoute();

  const handleOnReadCode = (barcodeVal) => {
    params.onGetBarcode(barcodeVal);
    navigate("Home");
  };

  return (
    <Container>
      <CameraScreen
        scanBarcode={true}
        showFrame={true}
        onReadCode={(e) => handleOnReadCode(e.nativeEvent.codeStringValue)}
      />
    </Container>
  );
};

export default BarcodeScanner;
