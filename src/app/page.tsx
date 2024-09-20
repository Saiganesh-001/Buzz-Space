"use client";

import { UserButton } from "@/features/auth/components/user-button";

export default function Home() {

	return (
		<div className="flex gap-10 justify-center items-center min-h-[100vh]">
			<UserButton />
		</div>
	);
}
