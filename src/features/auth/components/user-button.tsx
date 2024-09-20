"use client";

import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useCurrentUser } from "../hooks/use-current-user";

export const UserButton = () => {
	const { data, isLoading } = useCurrentUser();
    const {signOut} = useAuthActions();

	if (isLoading) {
		return (
			<Loader className="size-4 animate-spin text-muted-foreground" />
		);
	}

	if (!data) {
		return null;
	}

	const { name, email, image } = data;

	const avatarFallBack = name!
		.charAt(0)
		.toUpperCase();

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger className="outline-none relative">
				<Avatar className="size-10 hover:opacity-75 transition ">
					<AvatarImage
						alt={name}
						src={image}
					/>
					<AvatarFallback className="bg-stone-700 text-white">
						{avatarFallBack}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="center"
				side="right"
				className="w-60">
				<DropdownMenuItem onClick={() => signOut()} className="h-10">
					<LogOut className="size-4 mr-2"/>
                    Log Out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
