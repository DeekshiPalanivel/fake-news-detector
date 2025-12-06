import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant predictions in seconds using advanced AI algorithms",
    },
    {
      icon: Shield,
      title: "Highly Accurate",
      description: "Trained on thousands of news articles for reliable detection",
    },
    {
      icon: TrendingUp,
      title: "Always Learning",
      description: "Our models continuously improve with new data and patterns",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Results",
      description: "Clear labels to help you make informed decisions",
    },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/50 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose NewsVerify?</h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines cutting-edge AI technology with user-friendly design to help you navigate the
              digital news landscape with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="relative group p-6 rounded-xl border border-white/10 bg-background/60 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mission Statement */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative p-8 md:p-12 rounded-2xl border border-white/10 bg-background/60 backdrop-blur">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In an era of misinformation and fake news, NewsVerify is dedicated to empowering users with
                  accessible, accurate tools to verify news authenticity. We believe in creating a more informed society
                  where people can trust the information they consume. Our AI-powered detector analyzes news articles
                  using advanced machine learning to identify patterns associated with fake news, helping you make
                  better-informed decisions about what you read and share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
