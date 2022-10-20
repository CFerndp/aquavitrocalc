import React, { useState } from "react";
import { Tab, Text, TabView } from "@rneui/themed";
import i18n from "./i18n";

import Npk from "./pages/Npk";
import Main from "./pages/Main";
import Ghkh from "./pages/Ghkh";
<ion-icon name="outline"></ion-icon>

export default () => {
  const [index, setIndex] = useState(1);
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="NPK"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "return-down-back-outline", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Hierro y Micronutrientes"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "remove-outline", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="GH y KH"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "return-down-forward-outline", type: "ionicon", color: "white" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <Npk />
        </TabView.Item>
        <TabView.Item style={{  width: "100%" }}>
          <Main />
        </TabView.Item>
        <TabView.Item style={{  width: "100%" }}>
          <Ghkh />
        </TabView.Item>
      </TabView>
    </>
  );
};
