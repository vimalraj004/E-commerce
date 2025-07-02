import { AppRegistry } from "react-native";
import Home from "./app/(screen)/Home";
import appjson from "./app.json"

const appName = appjson.expo.name

AppRegistry.registerComponent(appName,()=>Home)