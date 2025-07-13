import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";

const TabBarContext = createContext({
  visible: true,
  setVisible: (value: boolean) => {},
});

const TabBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  return (
    <TabBarContext.Provider value={{ visible, setVisible }}>
      {children}
    </TabBarContext.Provider>
  );
};

export default TabBarProvider;

export const useTabBar = () => useContext(TabBarContext);
