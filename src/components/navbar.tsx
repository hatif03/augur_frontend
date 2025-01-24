"use client";

import { client } from "@/app/client";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { tokenContractAddress } from "@/constants/contracts";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

// const wallets = [
//     inAppWallet({
//       auth: {
//         options: [
//           "google",
//           "discord",
//           "telegram",
//           "farcaster",
//           "email",
//           "x",
//           "phone",
//         ],
//       },
//     }),
//     createWallet("io.metamask"),
//     createWallet("me.rainbow"),
//     createWallet("com.coinbase.wallet"),
//     createWallet("io.rabby"),
//     createWallet("io.zerion.wallet"),
//   ];

export function Navbar() {
    const account = useActiveAccount();
    const [isClaiming, setIsClaiming] = useState(false);

    const handleClaimTokens = async () => {
        setIsClaiming(true);
        try {
            const resp = await fetch("/api/claimToken", {
                method: "POST",
                body: JSON.stringify({ address: account?.address }),
            });
            
            if (!resp.ok) {
                throw new Error('Failed to claim tokens');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsClaiming(false);
        }
    };

    return (
        <div className=" flex justify-between items-center mb-6">
            <h1 className=" text-2xl font-bold">Augur</h1>
            <div className=" items-center flex gap-2">
                {account && (
                    <Button
                        onClick={handleClaimTokens}
                        disabled={isClaiming}
                        variant="outline"
                    >
                        {isClaiming ? (
                            <>
                                <Loader2 className=" mr-2 h-4 w-4 animate-spin"/>
                                Claiming...
                            </>
                        ) : (
                            'Claim Tokens'
                        )}
                    </Button>
                )}
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