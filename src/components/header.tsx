'use client';

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  DropdownSection,
} from "@heroui/react";
import Image from "next/image";
import { Logs, MessageCircleQuestion, BookOpen, MessageCircle, UserPlus, Newspaper } from "lucide-react";
import BienenLogo from "../../public/images/Bienen Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { key: "about", label: "Über die App", icon: MessageCircleQuestion, href: "/about" },
    { key: "satzung", label: "Unsere Satzung", icon: BookOpen, href: "/satzung" },
    { key: "contact", label: "Kontakt", icon: MessageCircle, href: "/contact-us" },
    { key: "anmeldung", label: "Minijobsystem und Anmeldung", icon: UserPlus, href: "/anmeldung" },
    { key: "blog", label: "Unser Blog", icon: Newspaper, href: "/blog" },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 left-0 w-full z-50 text-2xl py-4 px-4 bg-white/90 backdrop-blur-md shadow-md"
    >
      {/* Mobile-Navbar-Content */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Zentrierte Marke */}
      <NavbarContent justify="center">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-3 focus:outline-none rounded-full p-2">
            <Image src={BienenLogo} alt="BienenLogo" height={80} width={80} />
            <p className="hidden sm:block font-bold text-amber-500 text-3xl mt-2 tracking-wide">
              Wir helfen aus e.V.
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop-Menü */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-2xl text-default-600 tracking-wider">
                  <span className="flex items-center gap-2 cursor-pointer">
                    <Logs className="w-6 h-6" />
                    Wissenswertes
                  </span>
                </p>
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Custom item styles"
            className="p-3"
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "text-2xl",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
                "relative",
              ],
            }}
          >
            {menuItems.map(({ key, label, icon: Icon, href }) => (
              <DropdownSection key={key} showDivider>
                <DropdownItem
                  key={`item-${key}`}
                  as={Link}
                  href={href}
                  className="flex items-center gap-4 text-2xl font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-gray-700" />
                    <span className="text-2xl">{label}</span>
                    <span className="absolute left-0 bottom-[-8px] w-full h-0.5 bg-amber-500 origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </div>
                </DropdownItem>
              </DropdownSection>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Mobile-Menü */}
      <NavbarMenu className="mt-8">
        {menuItems.map(({ key, label, icon: Icon, href }) => (
          <NavbarMenuItem key={key}>
            <Link className="flex items-center gap-3 w-full text-2xl mt-4" href={href}>
              <Icon className="w-8 h-8 text-default-500" />
              <span className="text-3xl text-default-500">{label}</span>
            </Link>
            <div className="w-full h-px bg-gray-200 my-4"></div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}