'use client'

import { useState } from 'react'
import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string>('')

  const handleConnect = async () => {
    // Simulate wallet connection
    setIsConnected(true)
    setAddress('0x1234...5678')
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress('')
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-lg bg-surface border border-white/10">
          <p className="text-sm font-medium text-fg">{address}</p>
        </div>
        <button
          onClick={handleDisconnect}
          className="btn-secondary text-sm"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="btn-primary flex items-center gap-2"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  )
}
