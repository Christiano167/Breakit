"use client"
import React from 'react'
import type { Node as NodeType } from '../../types/node'
import NodeItem from './NodeItem'

export default function NodeTree({ nodes }: { nodes: NodeType[] }) {
    return (
        <div className="node-tree space-y-2">
            {nodes.map((n) => (
                <NodeItem key={n.id} node={n} />
            ))}
        </div>
    )
}
