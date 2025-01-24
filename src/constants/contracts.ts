import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

export const predictionMarketContractAddress = "0xB1e7C3ae8E8847b844Bc287428768c29090bEE0B";
export const tokenContractAddress = "0xe7e7bE9Ed1040be2741A6610Cd21100e3d47F42c";

export const predictionMarketContract = getContract({
    client: client,
    chain: defineChain(41),
    address: predictionMarketContractAddress,
});

export const tokenContract = getContract({
    client: client,
    chain: defineChain(41),
    address: tokenContractAddress,
});