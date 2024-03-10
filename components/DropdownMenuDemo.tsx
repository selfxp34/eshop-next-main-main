import {
  Apple,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-blue-300 hover:bg-gray-300" variant="outline">
          Каталог
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Каталог товаров</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Image src="/apple.png" alt="apple" width={33} height={33} />
            <span className="ml-3">Apple</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image src="/samsung.png" alt="samsung" width={33} height={33} />
            <span className="ml-2">Samsung</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image src="/xiaomi.png" alt="xiaomi" width={33} height={33} />
            <span className="ml-3">Xiaomi</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image src="/honor.png" alt="honor" width={33} height={33} />

            <span className="ml-3">Honor</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image src="/infinix.png" alt="Infinix" width={33} height={33} />

            <span className="ml-3">Infinix</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image src="/realne.png" alt="realme" width={33} height={33} />

            <span className="ml-3">Realme</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
