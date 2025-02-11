import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
  env: {
    WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID,
    ALCHEMY_SEPOLIA_URL: process.env.ALCHEMY_SEPOLIA_URL,
    ALCHEMY_SEPOLIA_PRIVATE_KEY: process.env.ALCHEMY_SEPOLIA_PRIVATE_KEY,
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    KV_URL: process.env.KV_URL,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    MORALIS_API_KEY: process.env.MORALIS_API_KEY,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    IRON_SESSION_PASSWORD: process.env.IRON_SESSION_PASSWORD,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
