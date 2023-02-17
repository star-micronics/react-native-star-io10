"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withAccessoryProtocols = (config, props) => {
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        if (!Array.isArray(config.modResults.UISupportedExternalAccessoryProtocols)) {
            config.modResults.UISupportedExternalAccessoryProtocols = [];
        }
        config.modResults.UISupportedExternalAccessoryProtocols.push("jp.star-m.starpro");
        return config;
    });
};
exports.default = withAccessoryProtocols;
