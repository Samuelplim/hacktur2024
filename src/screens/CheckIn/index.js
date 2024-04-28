import { useState, useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { MapOpenLayer } from "../../components/MapOpenLayer";

export const CheckIn = () => {
  const zoomToGeoJSONFuncRef = useRef();
  const [mapRegion, setMapRegion] = useState({
    latitude: 2.854127,
    longitude: -60.6455059,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [youRegion, setYouRegion] = useState({
    latitude: 2.854127,
    longitude: -60.6455059,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  function addCheckIn() {
    console.log("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Você chegou no destino realize o check-In
      </Text>
      <MapOpenLayer
        onInitialized={(zoomToGeoJSON) =>
          (zoomToGeoJSONFuncRef.current = zoomToGeoJSON)
        }
      />
      <View style={styles.wrapper}>
        <ButtonPrimary onPress={addCheckIn} title={"Realizar Check-In"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 24,
  },
  textTitle: {
    fontSize: 24,
  },
  map: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height - 250,
  },
  wrapper: {
    gap: 16,
  },
});
