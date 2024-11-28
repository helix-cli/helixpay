'use client';

import {mainnet} from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

const projectId = 'YOUR_PROJECT_ID';


export const config = getDefaultConfig({
    appName: 'Helix Pay',
    projectId,
    chains: [mainnet],
    ssr: true,
    // storage: createStorage({
    //     storage: cookieStorage,
    // }),
    // transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
});
