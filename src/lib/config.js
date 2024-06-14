
export const DAPP_URL = "http://prime-ape.com";
export const DAPP_TITLE = "PrimeApe Farms & Pools";

export const networkChainId = 369;

export const MASTERCHEF_ADDRESS = "0xe0B30580EFc37cc4C5cB964dBbf8a0748eA7999A";    // Old Staking 0xDf2DF8c17423415E4Cc269075f42D5D455092D73
export const NATIVE_TOKEN_ADDRESS = "0xA1077a294dDE1B09bB078844df40758a5D0f9a27"; //WPLS
export const FARM_TOKEN_ADDRESS = "0xda0F4E3A170019f21728a8168A7236E8c0460f42"; //Yield
export const STABLECOIN_ADDRESS = "0xefD766cCb38EaF1dfd701853BFCe31359239F305"; //DAI
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEAD_ADDRESS = "0x000000000000000000000000000000000000dEaD";

//PulseX V1
export let PULSEX_V1_FACTORY_ADDRESS = "0x1715a3E4A142d8b698131108995174F37aEBA10D";
export let PULSEX_V1_ROUTER_ADDRESS = "0x98bf93ebf5c380C0e6Ae8e192A7e2AE08edAcc02";

//PulseX V2
export let PULSEX_V2_FACTORY_ADDRESS = "0x29ea7545def87022badc76323f373ea1e707c523";
export let PULSEX_V2_ROUTER_ADDRESS = "0x165C3410fC91EF562C50559f7d2289fEbed552d9";

//DEXTOP


export const Oracles = {
    PULSEX_V1: 0,
    PULSEX_V2: 1,
    
}

export const Types = {
    Pool: 0,
    Farm: 1
}

export const DepositTypes = {
    TOKEN: 0,
    PLS: 1
}


export let farms = [
    {
        
        displayName: 'Bananas/PLS v2',
        lpAbbreviation: 'LP ',
        
        stakingToken: '0xda0F4E3A170019f21728a8168A7236E8c0460f42',
        liquidityLink: 'https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/add/V2/0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0/PLS',
        depositFee: 3,
        withdrawFee: 3,
        poolWeight: 3,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.PULSEX_V2
    }


]