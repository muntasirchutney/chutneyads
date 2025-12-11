import Link from "next/link"

const navLinks = [
  { href: "#why-dooh", label: "Why DOOH" },
  { href: "#benefits", label: "Benefits" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
             
              <span className="font-bold text-xl tracking-tight">
                <img src="/logo-w.svg" className="w-[220px]" alt="" />
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Digital out-of-home advertising solutions that transform how brands connect with audiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Connect</h4>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2025 ChutneyAds. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
