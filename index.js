// let RNAndroidInstalledApps = require("react-native").NativeModules
//   .RNAndroidInstalledApps;

import { NativeModules } from "react-native";

const { RNAndroidInstalledApps } = NativeModules;

module.exports = {
  startApp(id: string) {
    RNAndroidInstalledApps.startApp(id);
  },
  getPackageName(): Promise<string> {
    return RNAndroidInstalledApps.getPackageName();
  },
  getApps(): Promise<any> {
    return RNAndroidInstalledApps.getApps();
  },
  getAllApps(): Promise<any> {
    return RNAndroidInstalledApps.getAllApps();
  },
  getNonSystemApps(): Promise<any> {
    return RNAndroidInstalledApps.getNonSystemApps();
  },
  getSystemApps(): Promise<any> {
    return RNAndroidInstalledApps.getSystemApps();
  }
};
