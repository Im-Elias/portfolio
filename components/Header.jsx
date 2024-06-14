'use client';

import React, { useState, useEffect } from 'react';

//components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
   /*    const [header, setHeader] = useState(false);
   const pathname = usePathname();
   console.log(pathname); */

   return (
      <header>
         <div className="container mx-auto">
            <div className="flex items-center justify-between">
               <Logo />
               <div className="flex items-center gap-x-6">
                  {/* Nav */}
                  <Nav
                     containerStyles="hidden xl:flex gap-x-8 items-center"
                     linkStyles="relative hover:text-primary transition-all"
                     underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                  />
                  <ThemeToggler />
                  {/* Mobile nav */}
                  <div className="xl:hidden">
                     <MobileNav />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
