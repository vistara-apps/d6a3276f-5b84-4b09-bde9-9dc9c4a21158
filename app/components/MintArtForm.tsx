'use client'

import { useState } from 'react'
import { Upload, Sparkles, FileText } from 'lucide-react'

export function MintArtForm() {
  const [formData, setFormData] = useState({
    title: '',
    model: '',
    parameters: '',
    inputHash: '',
  })
  const [isMinting, setIsMinting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsMinting(true)
    
    // Simulate minting process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsMinting(false)
    alert('Art provenance minted successfully!')
    setFormData({ title: '', model: '', parameters: '', inputHash: '' })
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-fg mb-2">Mint Art Provenance</h3>
        <p className="text-fg/70">
          Create an immutable record of your AI-generated artwork
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-fg mb-2">
            Artwork Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="input"
            placeholder="Enter artwork title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-fg mb-2">
            AI Model Used
          </label>
          <select
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            className="input"
            required
          >
            <option value="">Select AI model</option>
            <option value="dall-e-3">DALL-E 3</option>
            <option value="midjourney-v6">Midjourney v6</option>
            <option value="stable-diffusion-xl">Stable Diffusion XL</option>
            <option value="firefly">Adobe Firefly</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-fg mb-2">
            Generation Parameters
          </label>
          <textarea
            value={formData.parameters}
            onChange={(e) => setFormData({ ...formData, parameters: e.target.value })}
            className="input min-h-[100px]"
            placeholder="Prompt, seed, steps, guidance scale, etc."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-fg mb-2">
            Input Data Hash
          </label>
          <input
            type="text"
            value={formData.inputHash}
            onChange={(e) => setFormData({ ...formData, inputHash: e.target.value })}
            className="input font-mono text-sm"
            placeholder="0x..."
            required
          />
          <p className="text-xs text-fg/50 mt-1">
            SHA-256 hash of your input data for verification
          </p>
        </div>

        <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-fg/30 mx-auto mb-3" />
          <p className="text-fg/70 mb-1">Upload artwork image</p>
          <p className="text-xs text-fg/50">PNG, JPG up to 10MB</p>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-fg mb-1">
                Gas-Free Minting
              </p>
              <p className="text-xs text-fg/70">
                Your transaction will be sponsored by Coinbase Paymaster. No gas fees required!
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isMinting}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isMinting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Minting...
            </>
          ) : (
            <>
              <FileText className="w-4 h-4" />
              Mint Provenance NFT
            </>
          )}
        </button>
      </form>
    </div>
  )
}
