import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View>
        <Text style={{ fontFamily: "SpaceMono" }}>Notifications tab</Text>
      </View>
    </SafeAreaView>
  );
}
