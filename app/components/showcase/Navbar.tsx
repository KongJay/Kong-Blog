"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { CardSwapComponent } from "./CardSwap";
import { Movie } from "./Movie";
import { Music } from "./Music";
import { Skill } from "./Skill";

export function NavbarComponent() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is
        <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {
          [
            {
              id: 1,
              title: "First",
              width: "md:col-span-4",
              height: "h-120",
              component: CardSwapComponent,
            },
                 {
              id: 2,
              title: "Skill",
              width: "md:col-span-4",
              height: "h-150",
              component: Skill,
            },
            {
              id: 3,
              title: "Movie",
              width: "md:col-span-4",
              height: "h-600",
              component: Movie, 
            },
                  {
              id: 4,
              title: "Music",
              width: "md:col-span-4",
              height: "h-300",
              component: Music, 
            },

          ].map((box) => (
            <div
              key={box.id}
              className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {box.component ? (
                <box.component />
              ) : (
                <h2 className="text-xl font-medium">{box.title}</h2>
              )}
            </div>
          ))
        }
      </div>
    </div>
  );
};
