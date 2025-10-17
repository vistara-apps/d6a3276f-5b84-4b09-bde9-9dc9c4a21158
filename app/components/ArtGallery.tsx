'use client'

import { useState } from 'react'
import { ExternalLink, Shield, Clock } from 'lucide-react'

interface ArtPiece {
  id: string
  title: string
  creator: string
  model: string
  timestamp: string
  imageUrl: string
  provenanceHash: string
}

const mockArtPieces: ArtPiece[] = [
  {
    id: '1',
    title: 'Digital Dreams',
    creator: '@artist1',
    model: 'DALL-E 3',
    timestamp: '2024-01-15',
    imageUrl: '/placeholder-art-1.jpg',
    provenanceHash: '0xabcd...1234',
  },
  {
    id: '2',
    title: 'Neon Futures',
    creator: '@creator2',
    model: 'Midjourney v6',
    timestamp: '2024-01-14',
    imageUrl: '/placeholder-art-2.jpg',
    provenanceHash: '0xefgh...5678',
  },
  {
    id: '3',
    title: 'Abstract Visions',
    creator: '@artist3',
    model: 'Stable Diffusion XL',
    timestamp: '2024-01-13',
    imageUrl: '/placeholder-art-3.jpg',
    provenanceHash: '0xijkl...9012',
  },
]

export function ArtGallery() {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null)

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-fg mb-2">Art Gallery</h3>
        <p className="text-fg/70">
          Browse verified AI art with immutable provenance records
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArtPieces.map((art) => (
          <div
            key={art.id}
            className="bg-surface rounded-lg border border-white/10 overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
            onClick={() => setSelectedArt(art)}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Palette className="w-16 h-16 text-fg/30" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-fg mb-1">{art.title}</h4>
              <p className="text-sm text-fg/60 mb-3">{art.creator}</p>
              
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs text-fg/70">{art.model}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-fg/50" />
                <span className="text-xs text-fg/50">{art.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="bg-surface rounded-lg max-w-2xl w-full p-6 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-fg mb-1">
                  {selectedArt.title}
                </h3>
                <p className="text-fg/70">{selectedArt.creator}</p>
              </div>
              <button
                onClick={() => setSelectedArt(null)}
                className="text-fg/50 hover:text-fg"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
              <Palette className="w-24 h-24 text-fg/30" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                <span className="text-sm text-fg/70">AI Model</span>
                <span className="text-sm font-medium text-fg">{selectedArt.model}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                <span className="text-sm text-fg/70">Provenance Hash</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-fg">{selectedArt.provenanceHash}</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                <span className="text-sm text-fg/70">Minted</span>
                <span className="text-sm font-medium text-fg">{selectedArt.timestamp}</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="btn-primary flex-1">View on BaseScan</button>
              <button className="btn-secondary flex-1">Manage Rights</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Palette({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}
