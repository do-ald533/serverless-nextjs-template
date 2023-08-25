import Image from "next/image";
import styles from "./page.module.css";

import { TodoList } from "@/app/_components";

export default function Home() {
	return (
		<>
			<h1>Hello world</h1> 
      <TodoList />
		</>
	);
}
