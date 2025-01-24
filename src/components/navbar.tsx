"use client";

import { client } from "@/app/client";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { tokenContractAddress } from "@/constants/contracts";

const wallets = [
    inAppWallet({
      auth: {
        options: [
          "google",
          "discord",
          "telegram",
          "farcaster",
          "email",
          "x",
          "phone",
        ],
      },
    }),
    createWallet("io.metamask"),
    createWallet("me.rainbow"),
    createWallet("com.coinbase.wallet"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

export function Navbar() {
    return (
        <div className=" flex justify-between items-center mb-6">
            <h1 className=" text-2xl font-bold">Augur</h1>
            <div className=" items-center flex gap-2">
                <ConnectButton 
                    client={client} 
                    theme={lightTheme()}
                    chain={defineChain(41)}
                    connectButton={{
                        style: {
                            fontSize: '0.75rem !important',
                            height: '2.5rem !important',
                        }
                    }}
                    // wallets={wallets}
                    // accountAbstraction={{
                    //     chain: defineChain(41),
                    //     sponsorGas: true,
                    // }}
                    detailsButton={{
                        displayBalanceToken: {
                            [defineChain(41).id]: tokenContractAddress
                        }
                    }}
                />
            </div>
        </div>
    );
}