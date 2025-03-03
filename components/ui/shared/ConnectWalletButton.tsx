"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import '@rainbow-me/rainbowkit/styles.css'
import { Button } from "../button";
import Image from "next/image";
export const isTelegramWebView = () => {
    if (typeof window === "undefined") return false;
    return /Telegram/.test(navigator.userAgent) && /WebView/.test(navigator.userAgent);
};
export const ConnectWalletButton = () => {

    return (
        <ConnectButton.Custom>{({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
            const ready = mounted && authenticationStatus !== "loading";
            const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
            const handleMetaMaskConnect = () => {
                if (isTelegramWebView()) {
                    const walletConnectUri = `https://metamask.app.link/wc?uri=${encodeURIComponent(process.env.WALLET_CONNECT_PROJECT_ID!)}`
                    window.location.href = walletConnectUri;
                } else {
                    openConnectModal()
                }
            }
            return (
                <div
                    {...(!ready && {
                        "aria-hidden": true,
                        style: {
                            opacity: 0,
                            pointerEvents: "none",
                            userSelect: "none",
                        },
                    })}
                >
                    {(() => {
                        if (!connected) {
                            return (
                                <div className="mx-auto w-fit">
                                    <Button
                                        className="rounded-xl font-normal hover:opacity-90"
                                        onClick={handleMetaMaskConnect}
                                        type="button">
                                        Connect
                                    </Button>
                                </div>
                            );
                        }
                        if (chain.unsupported) {
                            return (
                                <Button
                                    variant={"destructive"}
                                    onClick={openChainModal}
                                    type="button"
                                    className="rounded-xl">
                                    Wrong network
                                </Button>
                            );
                        }
                        return (
                            <div className="flex gap-2 max-md:flex-col-reverse md:justify-center md:items-center">
                                <Button
                                    className="rounded-xl"
                                    variant={"outline"}
                                    onClick={openChainModal}
                                    style={{ display: "flex", alignItems: "center" }}
                                    type="button">
                                    {chain.hasIcon && (
                                        <div
                                            style={{
                                                background: chain.iconBackground,
                                                width: 12,
                                                height: 12,
                                                borderRadius: 999,
                                                overflow: "hidden",
                                                marginRight: 4,
                                            }}
                                        >
                                            {chain.iconUrl && (
                                                <Image
                                                    alt={chain.name ?? "Chain icon"}
                                                    src={chain.iconUrl}
                                                    width={12}
                                                    height={12}
                                                />
                                            )}
                                        </div>
                                    )}
                                    {chain.name}
                                </Button>
                                <Button
                                    variant={"outline"}
                                    onClick={openAccountModal}
                                    className="bg-gradient rounded-xl font-normal hover:opacity-90 text-gray-100 :text-foreground"
                                    type="button">
                                    {account.displayName}
                                    {account.displayBalance
                                        ? ` (${account.displayBalance})`
                                        : ""}
                                </Button>
                            </div>
                        );
                    })()}
                </div>
            );
        }
        }
        </ConnectButton.Custom>
    );
};