"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './buttonconnect.module.css';
import cn from "classnames";
import Add from "@/components/Icons/Add";
import React from "react";

const ButtonConnect = () => {
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
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
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
