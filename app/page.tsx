"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MailchimpForm from "./../components/MailchimpForm"
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Heart,
  Zap,
  Users,
  Eye,
  Code,
  Accessibility,
} from "lucide-react"

export default function ConsultancyPage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Frontend Expert</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Support
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Portfolios That Convert.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
              Frontend that includes.
            </span>{" "}
              Affordable Results.{""}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Raising $3,000 to stay stable into July — and offering powerful ways to support while getting real value in
            return.
          </p>

          <Button
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Offerings
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50/30 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services & Offerings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the level of support that works for you — from quick reviews to full builds
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Live Review */}
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-100 text-orange-800">Starting at $25</Badge>
                  <Eye className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Live Review (Twitch)</CardTitle>
                <CardDescription>Get 4 actionable suggestions to improve your online presence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Tech portfolio site review
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    App or product site analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    LinkedIn profile optimization
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Optional shout-out & link share
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Reviews streamed live (12–1PM EST next week, sooner if you book fast). Perfect for job seekers!
                </p>
              </CardContent>
            </Card>

            {/* Private Review */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-100 text-blue-800">Starting at $50</Badge>
                  <Accessibility className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Private Accessibility & UX Review</CardTitle>
                <CardDescription>
                  Detailed, private review focusing on accessibility and user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Accessibility gaps analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Navigation flow review
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Visual hierarchy assessment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Structure and clarity improvements
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Delivered via written report or Loom video walkthrough</p>
              </CardContent>
            </Card>

            {/* Livestream Portfolio */}
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors shadow-lg hover:shadow-xl md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-100 text-orange-800">$400</Badge>
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Livestream Portfolio Build</CardTitle>
                <CardDescription>Watch your custom React/Next.js portfolio come to life on Twitch</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    1:1 strategy call
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Fully personalized React/Next.js site
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    GitHub repo + easy deployment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Shout-outs during the stream
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Private Portfolio */}
            <Card className="border-2 border-blue-300 hover:border-blue-400 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-100 text-blue-800">$500</Badge>
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vibe-Coded Portfolio</CardTitle>
                <CardDescription>Private build with the same quality, built off-stream</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Strategy session
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Clean, accessible React/Next.js codebase
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Light copy support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Deployed to your Vercel account
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Optional: add $100 for personal domain setup</p>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-2 border-orange-300 hover:border-orange-400 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-100 text-orange-800">$1,200+</Badge>
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Enterprise Consulting</CardTitle>
                <CardDescription>Custom proposals for organizations needing expert support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Accessibility audits
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Frontend architecture support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Portfolio & hiring pipeline evaluations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Accessible UI implementation consulting
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Perfect for orgs supporting seasoned engineers while improving systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Just Want to Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you just want to chip in and help, you can make a donation via Ko-fi. Every contribution helps me stay
            housed and focused.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="mr-2 w-5 h-5" />
              Donate via Ko-fi
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 font-semibold"
            >
              Book a Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Meet the Dev Behind the Work</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm Sarah — a frontend engineer with over a decade of experience building accessible, human-centered websites
            and applications. I've worked on everything from cancer screening tools to open-source design systems, with a
            focus on equity, clarity, and beautiful user experiences.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This consultancy is part of a short-term effort to raise $3,000 to keep my family housed and stable through a
            challenging transition. If you choose to work with me, you're not just getting solid code and thoughtful design —
            you're also supporting a working parent doing their best to stay upright and give back.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Want to work together or have questions? Join the Discord or DM me on LinkedIn. Let's talk about how I can
            support you — or your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Join Discord
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 font-semibold"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn DM
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Sign up for my newsletter</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'll send you updates on my work and tips for building accessible, beautiful web experiences.
          </p>
          <MailchimpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© 2025 Frontend Expert. Building accessible, beautiful web experiences.</p>
        </div>
      </footer>
    </div>
    </>
  )
}
