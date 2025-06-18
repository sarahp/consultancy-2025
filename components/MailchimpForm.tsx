"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function MailchimpForm() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch(
        "https://mailchimpsites.us7.list-manage.com/subscribe/post?u=3f162428f33af07963101e8f5&id=f09c8ece09",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            EMAIL: email,
            FNAME: firstName,
            LNAME: lastName,
            b_3f162428f33af07963101e8f5_f09c8ece09: "",
          }).toString(),
        }
      )

      if (response.ok) {
        setStatus("success")
        setMessage("Thanks for subscribing!")
        setEmail("")
        setFirstName("")
        setLastName("")
      } else {
        throw new Error("Subscription failed")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="mx-auto max-w-[600px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="mce-EMAIL" className="text-left block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="mce-EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-left w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mce-FNAME" className="text-left block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="mce-FNAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mce-LNAME" className="text-left block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="mce-LNAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {message && (
          <div
            className={`rounded-md p-4 ${
              status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>

        <p className="text-center text-sm text-gray-500">
          By subscribing, you agree to receive updates about my work and tips for building accessible web experiences.
        </p>
      </form>
    </div>
  )
} 