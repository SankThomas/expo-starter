import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        <View>
          <Text
            style={{ fontFamily: "SpaceMono" }}
            className="border-b-2 border-neutral-900 pb-4 text-center text-xl text-neutral-800"
          >
            Expo Template with TailwindCSS
          </Text>
          <Text style={{ fontFamily: "SpaceMono" }} className="my-6 text-base">
            This template uses TypeScript and Nativewind (TailwindCSS for native
            platforms).
          </Text>
          <Text style={{ fontFamily: "SpaceMono" }} className="mb-6 text-base">
            I have added some default tabs to help me with the navigation when
            building a new application.
          </Text>
          <Text style={{ fontFamily: "SpaceMono" }} className="mb-6 text-base">
            The font is SpaceMono which is the default font in Expo. If you want
            to change the font, simply add the font files in the{" "}
            <Text className="bg-neutral-300">assets</Text> folder, and update
            the code in the <Text className="bg-neutral-300">_layout.tsx</Text>{" "}
            file.
          </Text>
          <Text style={{ fontFamily: "SpaceMono" }} className="mb-6 text-base">
            Update the app name in the{" "}
            <Text className="bg-neutral-300">app.json</Text> file.
          </Text>
          <Text
            style={{ fontFamily: "SpaceMono" }}
            className="mb-6 text-base underline"
          >
            Find me on YouTube, @tsbsankara. This is not a link. It is not
            clickable.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
