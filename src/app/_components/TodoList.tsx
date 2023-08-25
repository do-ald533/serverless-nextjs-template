"use client"

import { trpc } from '@/app/_trpc/client'

export function TodoList() {
    const getTodos = trpc.getTodos.useQuery();

    return (
        <div>
            <div>{JSON.stringify(getTodos.data)}</div>
        </div>
    )
}