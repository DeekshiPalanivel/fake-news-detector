import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FN</span>
                </div>
                <span className="font-bold">NewsVerify</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fighting misinformation with AI-powered news verification technology.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Navigate</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#detector" className="hover:text-foreground transition-colors">
                    Detector
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contact@newsverify.com" className="hover:text-foreground transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Copyright 2025 NewsVerify. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>to fight misinformation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
