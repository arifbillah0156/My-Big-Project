"use client";
import { useState } from "react";
import NavHead from "./NavHead";
import NavLogo from "./NavLogo";
import NavDropdownDesktop from "./NavDropdownDesktop";
import NavDropdownMobile from "./NavDropdownMobile";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";
import { uid } from "uid";

const NavbarWithDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const QuranLinks = [
    {
      href: "/Quran/Surah-Yaseen",
      text: "↪ Surah Yaseen"
    },
    {
      href: "/Quran/Surah-Ar-Rahman",
      text: "↪ Surah Ar-Rahman"
    },
    {
      href: "/Quran/Surah-Al-Kahf",
      text: "↪ Surah Al-Kahf"
    },
    {
      href: "/Quran/Surah-Mulk",
      text: "↪ Surah Mulk"
    },
    {
      href: "/Quran/Last-Ten-Surah",
      text: "↪ Last Ten Surah"
    },
  ]
  // HadithLinks
  const HadithLinks = [
    {
      href: "/Bukhari",
      text: "↪ Bukhari"
    },
    {
      href: "/Muslim",
      text: "↪ Muslim"
    },
    {
      href: "/Tirmidhi",
      text: "↪ Tirmidhi"
    },
    {
      href: "/100-random-hadiths",
      text: "↪ 100 random hadiths"
    },
  ]
  // StoryLinks
  const StoryLinks = [
    {
      href: "/Islamic-Story",
      text: "↪ Islamic Story"
    },
    {
      href: "/Mystery-Story",
      text: "↪ Mystery Story"
    },
    {
      href: "/Funny-Story",
      text: "↪ Funny Story"
    },
    {
      href: "/AI-Story",
      text: "↪ AI Story"
    },
  ]
  // ToolsLinks
  const ToolsLinks = [
    {
      href: "/BG-Remover",
      text: "↪ BG-Remover"
    },
    {
      href: "/Passport-Photo",
      text: "↪ Passport Photo"
    },
    {
      href: "/Converter-Tools",
      text: "↪ Converter Tools"
    },
    {
      href: "/All-AI-Tools",
      text: "↪ All AI Tools"
    },
  ]

  return (
    <div className="merriweather-regular border-b">
      <NavHead />
      {/* Nav Links bg-[#0072BC] */}
      <nav className="text-lc py-3">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLogo />
            {/* Desktop Menu */}
            <div className="hidden lg:flex  font-bold tracking-wider">
              <NavLinksDesktop href="/" text="Home" />

              {/* Dropdown Menu */}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1">
                  Quran <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-[#0072BC] text-white ring-2 rounded-[6px] shadow-lg">
                    {QuranLinks.map(({ href, text }) => {
                      return (
                        <div key={uid()}>
                          <NavDropdownDesktop href={href} text={text} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              {/* Dropdown Hadith Gallery*/}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen2(true)}
                onMouseLeave={() => setIsDropdownOpen2(false)}
                onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1">
                  Hadith <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div className="absolute bg-[#0072BC] text-white ring-2 rounded-[6px] shadow-lg w-max">
                    {HadithLinks.map(({ href, text }) => {
                      return (
                        <div key={uid()}>
                          <NavDropdownDesktop href={href} text={text} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              {/* Dropdown Story Gallery*/}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen3(true)}
                onMouseLeave={() => setIsDropdownOpen3(false)}
                onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1">
                  Stories <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen3 && (
                  <div className="absolute bg-[#0072BC] text-white ring-2 rounded-[6px] shadow-lg w-max">
                    {StoryLinks.map(({ href, text }) => {
                      return (
                        <div key={uid()}>
                          <NavDropdownDesktop href={href} text={text} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              {/* Dropdown Tools Gallery*/}
              <div
                className="relative z-10"
                onMouseEnter={() => setIsDropdownOpen4(true)}
                onMouseLeave={() => setIsDropdownOpen4(false)}
                onClick={() => setIsDropdownOpen4(!isDropdownOpen4)}
              >
                <button className="linkDropdownMainText mt-[-6px]  mb-1">
                  Tools <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen4 && (
                  <div className="absolute bg-[#0072BC] text-white ring-2 rounded-[6px] shadow-lg w-max">
                    {ToolsLinks.map(({ href, text }) => {
                      return (
                        <div key={uid()}>
                          <NavDropdownDesktop href={href} text={text} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              <NavLinksDesktop href="/About" text="About" />
              <NavLinksDesktop href="/Contact" text="Contact" />
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#0072BC] border p-1 mr-6 rounded-md"
              >
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 md:mt-4 font-bold tracking-wider">
            <div className="space-y-2 py-4 px-6 mobileNavMenubar">
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/" text="Home" />
              </div>
              {/* Mobile Dropdown Menu */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText underline underline-offset-4"
                >
                  Quran <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div>
                    {
                      QuranLinks.map(({ href, text }) => {
                        return (
                          <div key={uid()} className="pl-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <NavDropdownMobile href={href} text={text} />
                          </div>
                        )
                      })
                    }
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Hadith Gallery */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText underline underline-offset-4"
                >
                  Hadith <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen2 && (
                  <div>
                    {
                      HadithLinks.map(({ href, text }) => {
                        return (
                          <div key={uid()} className="pl-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <NavDropdownMobile href={href} text={text} />
                          </div>
                        )
                      })
                    }
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Story Gallery */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText underline underline-offset-4"
                >
                  Stories <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen3 && (
                  <div>
                    {
                      StoryLinks.map(({ href, text }) => {
                        return (
                          <div key={uid()} className="pl-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <NavDropdownMobile href={href} text={text} />
                          </div>
                        )
                      })
                    }
                  </div>
                )}
              </div>
              {/* Mobile Dropdown Tools Gallery */}
              <div>
                <button
                  onClick={() => setIsDropdownOpen4(!isDropdownOpen4)}
                  className="block w-full text-left px-4 py-2 text-sm linkDropdownText underline underline-offset-4"
                >
                  Tools <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen4 && (
                  <div>
                    {
                      ToolsLinks.map(({ href, text }) => {
                        return (
                          <div key={uid()} className="pl-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <NavDropdownMobile href={href} text={text} />
                          </div>
                        )
                      })
                    }
                  </div>
                )}
              </div>

              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/About" text="About" />
              </div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <NavLinksMobile href="/Contact" text="Contact" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarWithDropdown;
