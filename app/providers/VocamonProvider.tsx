"use client";

import { cookieToInitialState, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config } from "@/app/config";
// import * as Ably from 'ably'
// import { AblyProvider, ChannelProvider } from 'ably/react';
import { useSession } from "next-auth/react";

/* import UserProvider from "./providers/UserProvider";
import MessageProvider from "./providers/MessageProvider"; */
// import { Session } from "next-auth";
import {
    RainbowKitAuthenticationProvider,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { ReactNode } from "react";

import { ThemeProvider } from "./ThemeProvider";
import { authenticationAdapter } from "@/utils/authenticationADapter";
import { TelegramProvider } from "./TelegramProvider";


const queryClient = new QueryClient();

type GolfinMarketplaceProviderProps = {
    children: ReactNode;
    cookie: string;
};

/* function AuthProvider({ children, session }: {
    children: React.ReactNode,
    session: Session
}) {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : 'http://localhost:3000'
    return (
        <SessionProvider session={session} baseUrl={baseUrl}>
            {children}
        </SessionProvider>
    )
} */

export default function VocabmonProvider({ children, cookie }: GolfinMarketplaceProviderProps) {
    /*  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : 'http://localhost:3000' */

    /*     const client = new Ably.Realtime({
            authUrl: `${baseUrl}/api/ably`,
            authMethod: 'POST',
            authHeaders: {
                'Authorization': `Bearer 123`
            },
            autoConnect: typeof window !== 'undefined'
        }) */


    const { status } = useSession();
    const initialState = cookieToInitialState(config, cookie);
    return (

        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitAuthenticationProvider adapter={authenticationAdapter} status={status}>
                    <RainbowKitProvider coolMode>
                        {/*  <AblyProvider client={client}> */}
                        {/*  <ChannelProvider channelName='golfin-marketplace-dev'> */}
                        {/*  <MessageProvider>
                                    <UserProvider> */}

                        {/*     <StyleProvider> */}
                        <ThemeProvider attribute="class">
                            <TelegramProvider>
                                {children}
                            </TelegramProvider>
                        </ThemeProvider>

                        {/*  </StyleProvider> */}
                        {/*           </UserProvider>
                                </MessageProvider> */}
                        {/* </ChannelProvider> */}
                        {/*  </AblyProvider> */}
                    </RainbowKitProvider>
                </RainbowKitAuthenticationProvider>

            </QueryClientProvider>
        </WagmiProvider >
    );
}