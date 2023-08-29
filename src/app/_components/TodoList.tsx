"use client";

import { trpc } from "@/app/_trpc/client";
import { useState } from "react";

export function TodoList() {
	const getTodos = trpc.getTodos.useQuery();
	const addTodo = trpc.addTodo.useMutation({
		onSettled: () => {
			getTodos.refetch();
		},
	});

	const [content, setContent] = useState("");
	return (
		<div>
			<div className="text-black my-5 text-3xl">
				{getTodos?.data?.map(({ id, content, done }) => (
					<div key={id} className="flex gap-3 items-center">
						<input
							id={`check-${id}`}
							type="checkbox"
							checked={!!done}
							style={{ zoom: 1.5 }}
						/>
						<label htmlFor={`check-${id}`}>{content}</label>;
					</div>
				))}
			</div>
			<div className="flex gap-3 items-center">
				<input
					id="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button
					onClick={async () => {
						if (content.length) {
							addTodo.mutate(content);
							setContent("");
						}
					}}
				>
					Add Todo
				</button>
			</div>
		</div>
	);
}
