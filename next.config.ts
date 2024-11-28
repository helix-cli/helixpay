import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
    webpack: (config: Configuration) => {
        // Ensure config.module exists and has rules
        if (config.module && Array.isArray(config.module.rules)) {
            config.module.rules.push(
                {
                    test: /\.d\.ts$/,
                    use: "ignore-loader", // Ignore TypeScript declaration files
                },
                {
                    test: /\.d\.ts\.map$/,
                    use: "ignore-loader", // Ignore TypeScript declaration map files
                },
                {
                    test: /\.map$/,
                    use: "ignore-loader", // Exclude .map files
                }
            );
        }
        return config;
    },
};

export default nextConfig;
