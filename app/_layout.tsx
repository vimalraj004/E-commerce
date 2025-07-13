import { Stack } from "expo-router";
import "./global.css";
import TabBarProvider from "@/context/TabBarProvider";
export default function RootLayout() {
  return (
    <TabBarProvider>
      <Stack>
        <Stack.Screen name="(screen)" options={{ headerShown: false }} />
      </Stack>
      
    </TabBarProvider>
  );
}
