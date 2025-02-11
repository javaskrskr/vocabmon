import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { http, createConfig, createStorage, cookieStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors';
import { metaMaskWallet, braveWallet, phantomWallet } from '@rainbow-me/rainbowkit/wallets';
const projectId = process.env.WALLET_CONNECT_PROJECT_ID!

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Vocabmon Approved Wallets',
            wallets: [metaMaskWallet, braveWallet, phantomWallet,],
        },
    ],
    {
        appName: "Vocabmon",
        appUrl: process.env.NEXT_PUBLIC_VERCEL_URL,
        appIcon: "",
        projectId: projectId,

    }
);
export const config = process.env.NEXT_PUBLIC_PROJECT_ENVIRONMENT === 'dev' ? createConfig({
    connectors,
    chains: [sepolia],
    transports: {
        [sepolia.id]: http(process.env.ALCHEMY_SEPOLIA_URL),
    },
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    })
}) : createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(process.env.ALCHEMY_MAINNET_URL),
    },
    connectors: [
        metaMask()
    ],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    })
})
