'use client'
import React from 'react'

const emptySubscribe = () => () => {}

export default function ClientGate({ children }) {
  const isServer = React.useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  )

  return isServer ? null : children
}
