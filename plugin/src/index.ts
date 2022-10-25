import {
  withInfoPlist,
  ConfigPlugin,
} from "@expo/config-plugins";

const withAccessoryProtocols: ConfigPlugin = (config, props) => {
  return withInfoPlist(config, (config) => {
    if (!Array.isArray(config.modResults.UISupportedExternalAccessoryProtocols)) {
      config.modResults.UISupportedExternalAccessoryProtocols = [];
    }

    config.modResults.UISupportedExternalAccessoryProtocols.push("jp.star-m.starpro")

    return config;
  });
};

export default withAccessoryProtocols


