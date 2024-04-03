import React from "react";
import { SafeAreaView } from "react-native";
import Books from "./Books";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Books />
    </SafeAreaView>
  );
};

export default App;
