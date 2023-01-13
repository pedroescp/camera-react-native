import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "../Themed";

export default function Cameras() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [imagem, setImage] = useState(null);
  const [Type, setType] = useState(Camera.Constants);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const CameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraStatus.status === "granted");
    })();
  }, []);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
