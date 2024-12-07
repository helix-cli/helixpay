"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './buttonconnect.module.css';
import cn from "classnames";
import Add from "@/components/Icons/Add";
import React, {useEffect} from "react";
import { useSignMessage } from 'wagmi'

const ButtonConnect = () => {
    const { signMessage } = useSignMessage()

    const handleSignMessage = async () => {
        try {
            const message = "man utd is the best club all over the world";
            await signMessage({ message });
            console.log("Message signed successfully!");
        } catch (error) {
            console.error("Error signing message:", error);
        }
    };

    return (
        <ConnectButton.Custom
        >
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                useEffect(() => {
                    if (connected) {
                        handleSignMessage();
                    }
                }, [connected]);
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 1,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    // <button className={cn("button", styles.button)} onClick={openConnectModal}>
                                    //     {/*<p className={cn(styles.text)}>Connect Wallet</p>*/}
                                    //     Connect Wallet
                                    // </button>
                                    <button
                                        className={cn("label-small", styles.dropdown_btn)}
                                        onClick={openConnectModal}
                                    >
                                        Connect Wallet
                                        <span>
                                            <Add />
                                        </span>
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} className={cn("button", styles.button)}>
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div style={{ display: 'flex' }}>
                                    <button
                                        className={cn("button", styles.buttonChain)}
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: 999,
                                                    alignSelf: 'center',
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 24, height: 24 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {/*{chain.name}*/}
                                    </button>
                                    <button onClick={openAccountModal} type="button" className={cn("button", styles.button)}>
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default ButtonConnect;
