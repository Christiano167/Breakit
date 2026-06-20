"use client"
import React from 'react'

export default function CenterCanvas({ children }: { children?: React.ReactNode }) {
    return (
        <main className="center-canvas flex-1 p-6">{children ?? <div>Canvas</div>}</main>
    )
}
