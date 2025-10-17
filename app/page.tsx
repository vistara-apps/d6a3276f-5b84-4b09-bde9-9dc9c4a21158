'use client'

import { useEffect, useState } from 'react'
import { Shield, Palette, FileCheck, Users } from 'lucide-react'
import { ConnectWallet } from './components/ConnectWallet'
import { ArtGallery } from './components/ArtGallery'
import { MintArtForm } from './components/MintArtForm'
import { RightsManager } from './components/RightsManager'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'mint' | 'rights'>('gallery')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Signal frame is ready
    setIsReady(true)
  }, [])

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">AI Art Provenance</h1>
                <p className="text-sm text-fg/60">Verify & Control Your AI Art</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-fg mb-4">
            Immutable Provenance for AI Art
          </h2>
          <p className="text-lg text-fg/70 max-w-2xl mx-auto">
            Create verifiable records of your AI-generated art on Base blockchain.
            Manage usage rights with dynamic NFTs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">
              Provenance Registry
            </h3>
            <p className="text-fg/70 text-sm">
              Mint NFTs with immutable metadata: AI model, parameters, and input hashes.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">
              Dynamic Rights Tokens
            </h3>
            <p className="text-fg/70 text-sm">
              Create tradeable NFTs for specific usage rights: commercial, remix, print.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-base-light/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-base-light" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">
              Remix Attribution
            </h3>
            <p className="text-fg/70 text-sm">
              Track derivative works and ensure original creators receive recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="card">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === 'gallery'
                  ? 'bg-primary text-white'
                  : 'text-fg/70 hover:text-fg hover:bg-surface'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('mint')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === 'mint'
                  ? 'bg-primary text-white'
                  : 'text-fg/70 hover:text-fg hover:bg-surface'
              }`}
            >
              Mint Art
            </button>
            <button
              onClick={() => setActiveTab('rights')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === 'rights'
                  ? 'bg-primary text-white'
                  : 'text-fg/70 hover:text-fg hover:bg-surface'
              }`}
            >
              Manage Rights
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'gallery' && <ArtGallery />}
            {activeTab === 'mint' && <MintArtForm />}
            {activeTab === 'rights' && <RightsManager />}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-surface/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-fg/60 text-sm">
              Built on Base • Powered by OnchainKit
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-fg/60 hover:text-primary text-sm transition-colors">
                Docs
              </a>
              <a href="#" className="text-fg/60 hover:text-primary text-sm transition-colors">
                GitHub
              </a>
              <a href="#" className="text-fg/60 hover:text-primary text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
