"use client";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-primary font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 text-black dark:text-white dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (to be added later) */}

        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark/80 backdrop-blur-sm rounded-lg p-4 mt-2">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="flex items-center py-2 hover:text-primary transition-colors">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center py-2 hover:text-primary transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="h-5 w-5 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
