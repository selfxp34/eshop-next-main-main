"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user ?? null;
  return (
    <div className="flex items-center justify-center space-x-4">
      {!user ? (
        <p className="font-normal">Avatar</p>
      ) : (
        <Avatar>
          <AvatarImage
            src={user?.image ?? undefined}
            alt={user?.name ?? undefined}
          />
          <AvatarFallback>
            {user?.email ? user.email.slice(0, 2).toUpperCase() : "GO"}
          </AvatarFallback>
        </Avatar>
      )}
      <p className="font-normal">{!user ? "Name" : `Hello ${user.name}`}</p>
    </div>
  );
}
