"use client"
import React from 'react'
import type { Node as NodeType } from '../../types/node'

export default function NodeItem({ node }: { node: NodeType }) {
    return (
        <div className="node-item p-2 border rounded-sm">{node.label ?? node.type}</div>
    )
}
