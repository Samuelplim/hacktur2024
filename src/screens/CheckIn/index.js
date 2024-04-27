import { useState, useEffect, useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ButtonPrimary } from "../../components/ButtonPrimary";

export const CheckIn = () => {
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
      <View style={styles.wrapper}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={youRegion} title="Você" />
        </MapView>
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
