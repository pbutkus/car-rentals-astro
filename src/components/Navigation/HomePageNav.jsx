import { useState, useEffect } from "preact/hooks";
import "../../styles/nav.css";

export default function HomePageNav() {
  const [bg, setBg] = useState("sm:bg-gray-950/40");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  setBg(window.scrollY > 10 ? "sm:bg-gray-950" : "sm:bg-gray-950/40");

  const handleScroll = () => {
    setBg(window.scrollY > 10 ? "sm:bg-gray-950" : "sm:bg-gray-950/40");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.addEventListener("scroll", handleScroll, { passive: true });

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(hamburgerOpen ? false : true);
  };

  return (
    <nav
      id="navbar"
      class={`${bg} bg-gray-950 fixed sticky-top-0 w-screen z-50 h-auto transition duration-500 shadow-lg`}
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-1 relative">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              id="toggle-menu-button"
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-800 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
              aria-controls="mobile-menu"
              aria-expanded={`${hamburgerOpen}`}
              onClick={toggleHamburgerMenu}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                id="open-menu"
                class={`${hamburgerOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
              <svg
                id="close-menu"
                class={`${hamburgerOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="/images/uploads/companynamelogo.png"
                alt="Company Name"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="/images/uploads/companynamelogo.png"
                alt="Company Name"
              />
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div>
              <ul class="flex space-x-4">
                <li id="nav-home">
                  <a class="p-2 active nav-link" href="/">
                    Home
                  </a>
                </li>
                <li id="nav-services">
                  <a class="p-2 inactive nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li id="nav-about">
                  <a class="p-2 inactive nav-link" href="/fleet">
                    Fleet
                  </a>
                </li>
                <li id="nav-how-it-works">
                  <a class="p-2 inactive nav-link" href="/contacts">
                    Contacts
                  </a>
                </li>
                <li id="nav-faq">
                  <a class="p-2 inactive nav-link" href="/blog/1">
                    Blog
                  </a>
                </li>
                <li id="nav-contacts" class="">
                  <a
                    class="text-gray-50 text-sm bg-red-700 rounded-md hover:bg-red-800 transition-colors p-2 px-3"
                    href="/fleet"
                  >
                    Rent a car
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class={`sm:hidden ${
          hamburgerOpen ? "block" : "hidden"
        } bg-black absolute w-full transition duration-300`}
        id="mobile-menu"
      >
        <div class="px-2 pb-3 pt-2">
          <ul class="space-y-1 text-gray-50">
            <li>
              <a
                id="nav-home-mobile"
                href="/"
                class="mobile-active block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="nav-about-mobile"
                href="/about"
                class="mobile-inactive block rounded-md px-3 py-2 text-base font-medium"
              >
                About us
              </a>
            </li>
            <li>
              <a
                id="nav-how-it-works-mobile"
                href="/fleet"
                class="mobile-inactive block rounded-md px-3 py-2 text-base font-medium"
              >
                Fleet
              </a>
            </li>
            <li>
              <a
                id="nav-faq-mobile"
                href="/contacts"
                class="mobile-inactive block rounded-md px-3 py-2 text-base font-medium"
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                id="nav-contacts-mobile"
                href="/blog/1"
                class="mobile-inactive block rounded-md px-3 py-2 text-base font-medium"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
