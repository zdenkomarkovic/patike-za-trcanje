"use client";

import { useState } from "react";
import Link from "next/link";

export default function CTASection({
  title = "Potrebne su vam patike za trčanje?",
  description = "Kontaktirajte nas za savet o izboru pravih patika za vaš stil trčanja.",
}) {
  const [email, setEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert("Molimo vas da prihvatite politiku privatnosti.");
      return;
    }
    // Ovde bi išla logika za slanje email-a
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setPrivacyAccepted(false);
    }, 3000);
  };

  return (
    <div className="text-center py-8 md:py-16 bg-[#494179]">
      <div className="max-w-4xl text-white mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-4">{description}</p>
        <p className="text-3xl mb-6">
          Ostvarite dodatan popust na prvi poručeni par
        </p>

        {submitted ? (
          <div className="bg-green-500 text-white py-4 px-6 rounded-lg inline-block">
            Hvala! Uskoro ćete dobiti popust na svoj email.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto grid grid-cols-3 gap-3"
          >
            <div className=" col-span-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Unesite vašu email adresu"
                required
                className="w-full px-4 py-3 rounded-lg outline-white border-white border-1 "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF7A59] text-white py-1 px-4 rounded-lg font-semibold hover:bg-[#ff8a6d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A59] focus:ring-offset-2 focus:ring-offset-[#494179]"
            >
              Pošaljite
            </button>
            <div className="mb-6 flex items-start gap-2 text-left col-span-3">
              <input
                type="checkbox"
                id="privacy-checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required
                className="mt-1 w-4 h-4 text-[#FF7A59] focus:ring-[#FF7A59] border-gray-300 rounded"
              />
              <label htmlFor="privacy-checkbox" className="text-sm">
                Slažem se sa{" "}
                <Link
                  href="/politika-privatnosti"
                  className="underline hover:text-[#FF7A59] transition-colors"
                  target="_blank"
                >
                  politikom privatnosti
                </Link>
              </label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
