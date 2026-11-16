import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.rumoefomm.app",
  appName: "Rumo à EFOMM",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchFadeOutDuration: 400,
      backgroundColor: "#0A192F",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
    },
    StatusBar: {
      overlaysWebView: false,
      style: "DARK",
      backgroundColor: "#0A192F",
    },
  },
};

export default config;
