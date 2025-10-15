"use client";
import { SITE_CONFIG } from "../constants/site";
import Button from "../components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen secondary">
      {/* Hero Section */}
      <section className="primarybg  text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl pt-10 font-bold mb-6">
              Kontaktirajte nas
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Spremni smo da vam pomognemo u izboru savršenih patika za trčanje
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 primarytext">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telefon</h3>
                    <a
                      href="tel:+381643824647"
                      className=" hover:text-blue-700 transition-colors text-lg"
                    >
                      {SITE_CONFIG.company.phone}
                    </a>
                    <p className="text-sm mt-1">
                      Pozovite nas za brzu konsultaciju
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.company.email}`}
                      className=" hover:text-blue-700 transition-colors text-lg"
                    >
                      {SITE_CONFIG.company.email}
                    </a>
                    <p className=" text-sm mt-1">
                      Pošaljite nam detaljno pitanje
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Lokacija</h3>
                    <p className="text-lg">{SITE_CONFIG.company.location}</p>
                    <p className=" text-sm mt-1">
                      Dostava širom Srbije i ex Yu
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12  rounded-xl flex items-center justify-center">
                    <svg
                      className="w-7 h-7 "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Instagram</h3>
                    <a
                      href={SITE_CONFIG.company.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-blue-700 transition-colors text-lg"
                    >
                      {SITE_CONFIG.company.instagram}
                    </a>
                    <p className=" text-sm mt-1">
                      Pratite nas za najnovije vesti
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
            </div>
            <div className="primarybg text-white p-8 rounded-2xl space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Stupite u kontakt</h2>
                <p className="text-xl leading-relaxed">
                  Imate pitanja o našim proizvodima ili trebate savet za izbor
                  patika? Kontaktirajte nas - tu smo da vam pomognemo!
                </p>
              </div>
              <h3 className="text-xl font-bold  mb-4">Brze akcije</h3>
              <div className="space-y-3">
                <Button
                  variant="secondary"
                  className="w-full justify-center "
                  onClick={() =>
                    (window.location.href = `tel:${SITE_CONFIG.company.phone.replace(/\s/g, "")}`)
                  }
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Pozovi odmah
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-center bg-[#FF7A59] text-white  hover:text-[#494179]"
                  onClick={() =>
                    (window.location.href = `mailto:${SITE_CONFIG.company.email}`)
                  }
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Pošalji email
                </Button>
              </div>
            </div>
            {/* Contact Form */}
            {/* <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pošaljite nam poruku
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ime
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Prezime
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Vaše prezime"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="vasa@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+381 64 123 4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tema
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Izaberite temu</option>
                    <option value="savet">Savet za izbor patika</option>
                    <option value="informacije">Informacije o proizvodu</option>
                    <option value="dostava">Pitanja o dostavi</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Opišite vaše pitanje ili potrebu..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Pošaljite poruku
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {
        <div className="max-w-5xl mx-auto p-0.5 primarybg"></div> /* FAQ Section */
      }
      <section className="py-16 primarytext ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Često postavljana pitanja
            </h2>
            <p className="text-xl">
              Odgovori na najčešća pitanja o našim proizvodima
            </p>
          </div>

          <div className="space-y-6 text-white">
            <div className="primarybg rounded-xl p-6">
              <h3 className="text-lg font-semibold  mb-3">
                Kako da izaberem pravu veličinu patika?
              </h3>
              <p className="">
                Preporučujemo da izaberete patike za pola broja veće od vaše
                uobičajene veličine. Ovo je posebno važno za trail patike. Noge
                se šire tokom dana i dugog trčanja.
              </p>
            </div>

            <div className="primarybg rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Kako da poručim?</h3>
              <div className="space-y-3">
                <p className="">
                  <strong>1</strong> Odredite koliki vam je budžet za patike
                  koje želite da kupite,
                </p>
                <p className="">
                  <strong>2</strong> Izaberete neki od modela sa aktuelne ponude
                  ili ako nema u ponudi zatražite informaciju,
                </p>
                <p className="">
                  <strong>3</strong> Uplaćujete na dan poručivanja iznos u
                  dinarima u celosti,
                </p>
                <p className="">
                  <strong>4</strong> Poručujemo,
                </p>
                <p className="">
                  <strong>5</strong> Po obrađenoj porudžbini dobijate potvrdu o
                  poručenom proizvodu, sa konkretnim podacima o veličini,
                  dezenu, ceni i datumu poručivanja sa brojem porudžbine,
                </p>
                <p className="">
                  <strong>6</strong> Nakon 15 +/- dana stižu u Srbiju
                </p>
                <p className="">
                  <strong>7</strong> Lično preuzimanje na teritoriji Beograda
                  ili slanjem na vašu adresu Postexpress-om uz plaćanje dostave
                  pouzećem.
                </p>
              </div>
            </div>

            <div className="primarybg rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Koja je razlika između patika za početnike i naprednih trkača?
              </h3>
              <p className="">
                Patike za početnike imaju veću amortizaciju, stabilnost i
                zaštitu. Napredne patike su lakše, sa manje amortizacije,
                dizajnirane za brzinu i efikasnost.
              </p>
            </div>

            <div className="primarybg rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Da li nudite dostavu?
              </h3>
              <p className="">
                Da, nudimo dostavu širom Srbije i ex Jugoslavije. Kontaktirajte
                nas za informacije o cenama dostave i vremenu isporuke.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
