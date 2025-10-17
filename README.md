# AI Art Provenance & Rights

A Base Mini App for creating immutable provenance records for AI-generated art and managing usage rights with dynamic NFTs.

## Features

- **Onchain Art Provenance Registry**: Mint NFTs with immutable metadata (AI model, parameters, input hashes)
- **Dynamic Usage Rights Tokens (dURT)**: Create tradeable NFTs for specific usage rights
- **AI Model Attribution Tracker**: Register and attribute AI models
- **Co-Creation & Remix Attribution**: Track derivative works with on-chain recognition

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base blockchain integration
- MiniKit for Farcaster social features
- Tailwind CSS with BASE theme
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

This app is designed to be deployed as a Base Mini App. Ensure your manifest is properly configured at `public/.well-known/farcaster.json`.

## Base Mini App Integration

- Uses OnchainKit for wallet connection and transactions
- Integrates with Farcaster via MiniKit
- Gas-free transactions via Coinbase Paymaster
- Social primitives for sharing and notifications

## License

MIT
