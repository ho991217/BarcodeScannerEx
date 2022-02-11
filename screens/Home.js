import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

const API_KEY = "9916e9e8224f4b5ea885";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text``;

const ScanButton = styled.Button``;

const FlatList = styled.FlatList`
  flex: 1;
  background-color: black;
`;

const Text = styled.Text``;

const Home = ({ navigation: { navigate } }) => {
  //   const [barcodeNumber, setBarcodeNumber] = useState("");
  const handleScanButton = () => {
    navigate("BarcodeScanner", { onGetBarcode: onGetBarcode });
  };
  const [stuffData, setStuffData] = useState([]);

  const GetData = async (barcodeNumber) => {
    await axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/I2570/json/1/5/BRCD_NO=${barcodeNumber}`
      )
      //   .then((res) => setStuffData(res.data.row))
      .then(function (res) {
        if (res.data.I2570.RESULT.CODE === "INFO-000") {
          setStuffData(res.data.I2570.row);
          Alert.alert(res.data.I2570.row[0].PRDT_NM);
        } else {
          Alert.alert("제품 정보가 없습니다!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useState(() => {}, []);

  const onGetBarcode = (barcodeVal) => {
    // setBarcodeNumber(barcodeVal);
    GetData(barcodeVal);
  };
  return (
    <Container>
      {/* <Title>{barcodeNumber}</Title> */}
      <ScanButton title="스캔하기" onPress={handleScanButton} />
      {/* <ScanButton title="log" onPress={GetData} /> */}
      {/* {stuffData && (
        <FlatList
          data={stuffData}
          keyExtractor={(item) => item.PRDLST_REPORT_NO}
          renderItem={({ item }) => <Text>{item.PRDT_NM}</Text>}
        />
      )} */}
    </Container>
  );
};

export default Home;
