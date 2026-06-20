"use client"
import create from 'zustand'
import type { Project } from '../types/project'
import type { Node } from '../types/node'
import { v4 as uuidv4 } from 'uuid'

type State = {
    project: Project | null
    nodes: Node[]
    setProject: (p: Project) => void
    addNode: (node: Partial<Node>) => Node
}

export const useProjectStore = create<State>((set, get) => ({
    project: null,
    nodes: [],
    setProject: (p) => set({ project: p }),
    addNode: (node) => {
        const n: Node = {
            id: node.id ?? uuidv4(),
            type: node.type ?? 'node',
            label: node.label,
            data: node.data ?? {},
            children: node.children ?? [],
        }
        set({ nodes: [...get().nodes, n] })
        return n
    },
}))

export default useProjectStore
