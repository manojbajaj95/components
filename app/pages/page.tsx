import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { GoogleGeminiEffectDemo } from "@/components/pages/hero/gemini"
import { SparklesPreview } from "@/components/pages/hero/particles"

export default function HeroSections() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hero Sections
        </h1>
      </div>
      <h2>Gemini Effect</h2>
      <GoogleGeminiEffectDemo />
      <h2>Sparkles Effect</h2>
      <SparklesPreview />
    </section>
  )
}
