module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json",
            ".jsx",
            "android.tsx",
            "ios.tsx",
          ],
          alias: {
            components: "components",
            screens: "app",
            helpers: "helpers",
            stores: "stores",
            ui: "components/ui",
          },
        },
      ],

      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
        },
      ],
      "react-native-reanimated/plugin",
      "expo-router/babel",
      "transform-inline-environment-variables",
    ],
  }
}
