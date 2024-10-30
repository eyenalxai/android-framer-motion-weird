"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type Dispatch, type SetStateAction, useState } from "react"

type MotionInputProps = {
	name: string
	focused: string | null
	setFocused: Dispatch<SetStateAction<string | null>>
}

const MotionInput = ({ name, focused, setFocused }: MotionInputProps) => {
	return (
		<motion.input
			layout={"position"}
			layoutId={`layout-${name}`}
			transition={{
				duration: 1
			}}
			className={cn(
				"p-2",
				"rounded-md",
				"border",
				"focus:outline-none",
				"max-w-fit",
				focused === name && ["absolute", "top-0", "inset-x-0"]
			)}
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
		<main className={cn("container", "relative", "max-w-sm", "mx-auto", "mt-12", "space-y-2")}>
			{names.map((name) => (
				<MotionInput key={name} name={name} setFocused={setFocused} focused={focused} />
			))}
		</main>
	)
}
