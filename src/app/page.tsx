"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type Dispatch, type SetStateAction, useState } from "react"

type MotionInputProps = {
	name: string
	focused: string | null
	order: number
	setFocused: Dispatch<SetStateAction<string | null>>
}

const MotionInput = ({ name, focused, order, setFocused }: MotionInputProps) => {
	return (
		<motion.input
			layout={"position"}
			layoutId={`layout-${name}`}
			transition={{
				duration: 1
			}}
			style={{
				order: focused === name ? 0 : order
			}}
			className={cn("p-2", "rounded-md", "border", "focus:outline-none")}
			placeholder={name}
			onFocus={() => setFocused(name)}
			onBlur={() => setFocused(null)}
		/>
	)
}

export default function Home() {
	const [focused, setFocused] = useState<string | null>(null)

	const names = ["one", "two", "three", "four"]

	return (
		<main className={cn("container", "relative", "max-w-sm", "mx-auto", "mt-12")}>
			<div className={cn("flex", "flex-col", "gap-y-2")}>
				{names.map((name, index) => (
					<MotionInput key={name} name={name} order={index + 1} setFocused={setFocused} focused={focused} />
				))}
			</div>
		</main>
	)
}
