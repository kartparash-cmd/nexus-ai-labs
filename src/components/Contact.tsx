"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCalEmbed } from "@/lib/useCalEmbed";
import { supabase } from "@/lib/supabase";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const openCal = useCalEmbed();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputStyles =
    "w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-foreground transition-colors";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;
    const budget = formData.get("budget") as string;

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      company: company || null,
      message,
      budget: budget || null,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly.");
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="section-padding section-surface">
      <AnimatedSection className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Have an AI Idea?
          </h2>
          <p className="text-muted">
            Tell us what you&apos;re trying to build. We&apos;ll tell you if we
            can ship it in 2 weeks.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 size={48} className="text-[#22C55E] mx-auto" />
            <h3 className="text-xl font-semibold text-foreground">
              Message sent!
            </h3>
            <p className="text-muted">
              We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-glow rounded-md px-6 py-2 text-sm font-medium mt-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={inputStyles}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={inputStyles}
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                className={inputStyles}
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                required
                className={`${inputStyles} min-h-[120px]`}
              />
            </div>

            <div>
              <select name="budget" className={inputStyles} defaultValue="">
                <option value="" disabled>
                  Budget range
                </option>
                <option value="<$5k">&lt;$5k</option>
                <option value="$5k-$15k">$5k-$15k</option>
                <option value="$15k-$50k">$15k-$50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </div>

            {status === "error" && (
              <p className="text-accent text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full rounded-md py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  Sending... <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="text-center mt-12 space-y-2">
          <p className="text-muted">Or reach us directly:</p>
          <p>
            <a
              href="mailto:kart.parash@gmail.com"
              className="text-foreground font-medium underline underline-offset-2"
            >
              kart.parash@gmail.com
            </a>
          </p>
          <p>
            <button
              onClick={openCal}
              className="text-foreground font-medium underline underline-offset-2"
            >
              Book a 30-min call &rarr;
            </button>
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
