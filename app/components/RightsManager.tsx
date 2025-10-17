'use client'

import { useState } from 'react'
import { Shield, DollarSign, Calendar, Users } from 'lucide-react'

interface RightsToken {
  id: string
  artTitle: string
  rightsType: string
  owner: string
  price: string
  expiration: string
  royalty: string
}

const mockRights: RightsToken[] = [
  {
    id: '1',
    artTitle: 'Digital Dreams',
    rightsType: 'Commercial Use',
    owner: '@artist1',
    price: '0.05 ETH',
    expiration: '2025-12-31',
    royalty: '10%',
  },
  {
    id: '2',
    artTitle: 'Neon Futures',
    rightsType: 'Remix License',
    owner: '@creator2',
    price: '0.02 ETH',
    expiration: 'Perpetual',
    royalty: '5%',
  },
]

export function RightsManager() {
  const [showMintForm, setShowMintForm] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-fg mb-2">Usage Rights Tokens</h3>
          <p className="text-fg/70">
            Manage and trade dynamic usage rights for your AI art
          </p>
        </div>
        <button
          onClick={() => setShowMintForm(!showMintForm)}
          className="btn-primary"
        >
          {showMintForm ? 'View Rights' : 'Mint New Right'}
        </button>
      </div>

      {showMintForm ? (
        <div className="bg-surface rounded-lg p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-fg mb-4">
            Create Usage Rights Token
          </h4>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-fg mb-2">
                Select Artwork
              </label>
              <select className="input">
                <option>Digital Dreams</option>
                <option>Neon Futures</option>
                <option>Abstract Visions</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-fg mb-2">
                Rights Type
              </label>
              <select className="input">
                <option>Commercial Use</option>
                <option>Remix License</option>
                <option>Personal Print</option>
                <option>NFT Derivative</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-fg mb-2">
                  Price (ETH)
                </label>
                <input
                  type="number"
                  step="0.001"
                  className="input"
                  placeholder="0.05"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-fg mb-2">
                  Royalty (%)
                </label>
                <input
                  type="number"
                  className="input"
                  placeholder="10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-fg mb-2">
                Expiration Date
              </label>
              <input
                type="date"
                className="input"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Mint Rights Token
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-4">
          {mockRights.map((right) => (
            <div
              key={right.id}
              className="bg-surface rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-fg mb-1">{right.artTitle}</h4>
                  <div className="flex items-center gap-2">
                    <span className="badge">{right.rightsType}</span>
                  </div>
                </div>
                <button className="btn-secondary text-sm">Transfer</button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-fg/50" />
                    <span className="text-xs text-fg/50">Owner</span>
                  </div>
                  <p className="text-sm font-medium text-fg">{right.owner}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-fg/50" />
                    <span className="text-xs text-fg/50">Price</span>
                  </div>
                  <p className="text-sm font-medium text-fg">{right.price}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-fg/50" />
                    <span className="text-xs text-fg/50">Expires</span>
                  </div>
                  <p className="text-sm font-medium text-fg">{right.expiration}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-fg/50" />
                    <span className="text-xs text-fg/50">Royalty</span>
                  </div>
                  <p className="text-sm font-medium text-fg">{right.royalty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
