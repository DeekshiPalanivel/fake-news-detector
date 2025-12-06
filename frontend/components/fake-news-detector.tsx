"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Zap, Shield, AlertTriangle, CheckCircle2, XCircle } from "lucide-react"

interface PredictionResult {
  label: string
}

export function FakeNewsDetector() {
  const [newsText, setNewsText] = useState("")
  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePredict = async () => {
    if (!newsText.trim()) {
      setError("Please enter some news text to analyze")
      return
    }

    setIsLoading(true)
    setError(null)
    setPrediction(null)

    try {
      // ✔ USE API URL FROM ENV (works in Docker + local)

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

      const response = await fetch(`${apiUrl}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newsText }),
      })

      if (!response.ok) {
        throw new Error("Failed to get prediction")
      }

      const data = await response.json()
      setPrediction(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const isFakeNews = prediction?.label.toLowerCase().includes("fake")
  const charCount = newsText.length

  return (
    <section
      id="detector"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-20" />
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">AI-Powered Detection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Detect Fake News
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">Instantly</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Paste any news article or claim to get instant AI-powered analysis on whether it's real or fake news
            </p>
          </div>

          {/* Main detector card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-2xl opacity-30 blur group-hover:opacity-50 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-background/60 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="news-input"
                      className="text-sm font-semibold text-foreground flex items-center gap-2"
                    >
                      <Shield className="w-4 h-4 text-accent" />
                      News Content
                    </label>
                    <span
                      className={`text-xs font-medium transition-colors ${
                        charCount > 500 ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {charCount} characters
                    </span>
                  </div>
                  <textarea
                    id="news-input"
                    value={newsText}
                    onChange={(e) => {
                      setNewsText(e.target.value)
                      setError(null)
                    }}
                    placeholder="Paste your news article or claim here for instant AI analysis..."
                    className="w-full min-h-56 p-4 rounded-xl bg-muted/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all hover:border-white/20"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                <Button
                  onClick={handlePredict}
                  disabled={isLoading || !newsText.trim()}
                  className="w-full py-6 text-base font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Predict Now
                    </>
                  )}
                </Button>

                {prediction && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div
                      className={`relative overflow-hidden rounded-xl p-8 border backdrop-blur-sm transition-all duration-300 ${
                        isFakeNews
                          ? "bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/30 shadow-lg shadow-red-500/10"
                          : "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                      }`}
                    >
                      <div className="absolute inset-0 opacity-10 blur-xl" />
                      <div className="relative space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3">
                              {isFakeNews ? (
                                <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                              ) : (
                                <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                              )}
                              <div>
                                <h3
                                  className={`text-3xl font-bold ${
                                    isFakeNews
                                      ? "text-red-600 dark:text-red-400"
                                      : "text-emerald-600 dark:text-emerald-400"
                                  }`}
                                >
                                  {isFakeNews ? "Fake News" : "Real News"}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{prediction.label}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative group/info">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur opacity-0 group-hover/info:opacity-100 transition duration-300" />
                  <div className="relative p-4 rounded-lg bg-muted/30 border border-white/5 backdrop-blur-sm">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-accent">Pro Tip:</span> Paste complete articles for the most
                      accurate analysis. Always verify with multiple sources.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
