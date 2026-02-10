import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/logo.png"

const navItems = [
  { name: "HOME", path: "/" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "EVENT", path: "/events" },
  { name: "ABOUT US", path: "/about" },
  { name: "SPONSORS", path: "/sponsors" },
  { name: "POSTERS", path: "/posters" },
]

const Navbar = ({ transparent = false}) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
      if (!transparent) return

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [transparent])

    const showScrolledStyle = transparent ? isScrolled : true

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        showScrolledStyle
          ? "bg-[#DFE8F6] backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
            <img src={logo} alt="CNTC" className="h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-15 md:flex">
          {navItems.map((item) => (
            <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                cn(
                    "text-[13px] font-bold tracking-wider transition-colors duration-200",
                    isActive
                    ? "text-[#A3B4D0]"
                    : showScrolledStyle
                      ? "text-black hover:text-black/70"
                      : "text-white hover:text-white/80"
                )
                }
            >
                {item.name}
            </NavLink>
            ))}

         <Link
            to="/register"
            className="rounded-full bg-[#1F40AF] px-4 py-2 text-[12px] font-bold tracking-wider text-white transition hover:bg-blue-800"
          >
            REGISTER
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-50"
        >
          {isMenuOpen ? (
            <X size={24} className={showScrolledStyle ? "text-black" : "text-white"} />
          ) : (
            <Menu size={24} className={showScrolledStyle ? "text-black" : "text-white"} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center bg-slate-100/95 backdrop-blur-md transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-8 text-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold tracking-wider text-slate-800 hover:text-blue-700"
              >
                {item.name}
              </a>
            ))}

            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-[#1F40AF] px-6 py-3 text-sm font-bold tracking-wider text-white"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar