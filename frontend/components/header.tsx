export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <span className="text-white font-bold text-sm">FN</span>
            </div>
            <span className="font-bold text-lg">NewsVerify</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#detector" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Detector
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#footer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
