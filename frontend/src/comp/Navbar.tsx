import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center bg-black text-white p-6 z-50">
      <div>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*cu-UNKqSgFfRfFvK0rpGYA.jpeg"
          className="w-36 h-24 mr-8"
          alt="Arweave AO"
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white">Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-black text-white">Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white">Opportunities</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-black text-white">Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white">Communities</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-black text-white">nbvhjvhjvhj</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto">
        <Button className="bg-blue-500 text-white border-white hover:bg-blue-700 px-6 py-2">
          Sign in
        </Button>
      </div>
    </div>
  );
};
