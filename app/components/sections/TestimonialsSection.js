"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Lana Gavrilović",
    role: "Prvakinja IronMan 2025",
    text: "New Balance Fresh Foam 1080 v14 mi je legla odmah – jako mekana i udobna. Na asfaltu daje baš prijatan, 'gladak' korak i dobro upija udarce. Posle trčanja noge su mi dosta svežije nego u tvrđim patikama. Patika koju obuješ i samo trčiš. Udobna, mekana i pouzdana za svakodnevne kilometre.",
    rating: 5,
    initials: "LG",
  },
  {
    name: "Jelena Zukorlic",
    role: "Rekreativac na 21K",
    text: "Hoka Mach X 2 – posle perioda privikavanja istrčan polumaraton u njima. Osećaj jako lagane patike, stabilne a light. Posle 20 km i dalje odličan osećaj, udobne i reaktivne. Razmišljam da trčim maraton u njima – stopala i noge odmorne. Apsolutno preporučujem!",
    rating: 5,
    initials: "JZ",
  },
  {
    name: "Momir Kuljanin",
    role: "Fitnes instruktor",
    text: "Puma Fast-R Nitro Elite – carbon plate daje odličan odgovor i na stazi i na betonu. Potpuna udobnost, noge nakon trčanja su lagane, nikakvu neprijatnost nisam osetio ni u listovima ni Ahilovoj tetivi. Zbog kvaliteta i odnosa cene uzeo sam preko 5 pari. Svaka preporuka!",
    rating: 5,
    initials: "MK",
  },
  {
    name: "Tanja Maljković",
    role: "Trail rekreativac",
    text: "Altra Experience Wild 2 mi je odmah legla – isprobala sam je i na ravnoj trail stazi i na planinskom terenu. Stabilna i sigurna na neravnoj podlozi, nema žuljeva ni plavih noktiju. Imam široko stopalo i čukljeve, pa su mi ove patike pravo otkriće. Definitivno preporučujem svima sa sličnim tipom stopala.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Joso Šipoš",
    role: "Rekreativac",
    text: "Nike Zoom Fly 6 – veličina odgovara, na asfaltu lepo amortizuje udarac i čuva zglobove. Posle dužeg trčanja noge su manje umorne i ne osećam nikakve tegobe. Preporučujem svakome ko trči na duže staze i drži tempo. Savet pre kupovine mi je izuzetno pomogao u izboru pravog broja.",
    rating: 5,
    initials: "JŠ",
  },
  {
    name: "Branislav Arsić",
    role: "Rekreativac",
    text: "Adidas Adizero EVO SL ATR – udobne, slične kao EVO SL, ali malo kruće. Na asfaltu za neverovati slično kao EVO SL, kramponi se ne osete. Ne kližu se po kiši i snegu. Prvo trčanje 18km bez problema. Preporučujem ih za lošije vremenske uslove, pa i kao all around.",
    rating: 5,
    initials: "BA",
  },
  {
    name: "Željko Đukić",
    role: "Maratonac",
    text: "Alphafly 3 Next% – patika koja savršeno stoji na nozi, obavija stopalo, napred dovoljno mesta za prste. Savršeno udobna, stabilna i pri skretanju. Posle polumaratonskog trčanja noge su u sasvim dobrom stanju, nema bolova i ne prave žuljeve kao Alphafly 2. Velika preporuka!",
    rating: 5,
    initials: "ŽĐ",
  },
  {
    name: "Mihajlo Gojić",
    role: "Rekreativac dugoprugaš",
    text: "Nike Invincible Run 3 FK – na prvo korišćenje super odgovarala, oduševio sam se povratnom energijom. Na asfaltu se ponaša dobro, udobnost dolazi do izražaja. Savetujem osobama bez problema sa čukljevima – u tom slučaju je odlična patika.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Jovan Mitić",
    role: "Kuvar koji trči",
    text: "Asics Novablast 4 TR savršeno odgovara širem stopalu i već na prvo obuvanje se oseća udobnost. Kramponi se na asfaltu ne osećaju, trk teče glatko i pri većim brzinama. Koristim je i za šetnju – nema nikakve 'težine' tokom i nakon nošenja. Definitivno preporučujem!",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Stefan Dovragović",
    role: "Šabački maratonac",
    text: "Asics Metaspeed Sky Tokyo – jedna od najboljih patika koje sam koristio do sada. Jako dobra za tvrdu podlogu i ima dobar odziv na većim brzinama. Noge ne trpe jer apsorbuje veliki deo udarca. Za svaku preporuku – vikend pre kupovine istrčan najbrži maraton u njima.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Anđela Aleksandrić",
    role: "Dugoprugašica",
    text: "Asics Superblast 2 je svestrana patika – odlična i za long run, brze intervale, tempo i recovery. Nošena na maratonskim i polumaratonskim trkama, odlična responzivnost i oboreni rekordi – bez povreda, žuljeva i bilo kakve nelagodnosti. Definitivno patika za sve preporuke!",
    rating: 5,
    initials: "AA",
  },
  {
    name: "Danica Sosa",
    role: "Rekreativka",
    text: "Asics GT-1000 13 TR – trčanje po gradu (asfalt/trava/zemlja) je prošlo sjajno, na traci takođe. Nakon trčanja i odmora sve super! Velika preporuka za ovaj model.",
    rating: 5,
    initials: "DS",
  },
  {
    name: "Luka Stajić",
    role: "Brzi maratonac",
    text: "Adidas Adizero Adios Pro 4 mi je legla kao kec na desetku. Testirao sam je na jakom intervalnom treningu – patika je brza, stabilna, osećao sam se kao da trčim po oblacima. Posle trčanja noge kao da trening uopšte nije bio realizovan. Preporučujem svakome, i rekreativcima i ozbiljnijim atletičarima.",
    rating: 5,
    initials: "LS",
  },
  {
    name: "Boško Paunović",
    role: "Fan Pegasusa",
    text: "Dugogodišnji sam korisnik Nike Pegasus patika i izbor Pegasus 41 je bio logičan. Neutralni sam trkač većih dimenzija i stabilnost mi je bitna. Mekše su od starijih generacija, ali upper je pojačan pa nema gubitka stabilnosti. Stvorene su za asfalt i stopalo lepo diše u njima.",
    rating: 5,
    initials: "BP",
  },
  {
    name: "Igor Andrejević",
    role: "Novosadski polumaratonac",
    text: "Saucony Triumph 23 Wide – lepo drži nogu i ima dovoljno prostora za ljude sa širim stopalom. Dobro se ponaša na stazi, ne kliže se kad je mokro – testirano i na snegu! Čak i posle 16km noga nije previše umorna. Preporučujem svima.",
    rating: 5,
    initials: "IA",
  },
  {
    name: "Teodora Stepanović",
    role: "Pronator",
    text: "Saucony Tempus 2 u potpunosti odgovara mom stopalu i gazištu – daje stabilnost bez osećaja krutosti. Kontakt sa podlogom je kratak i responzivan, kao da nisam ni trčala. Apsolutno preporučujem svima koji su pronatori i traže sigurnu, a laganu stability patiku.",
    rating: 5,
    initials: "TS",
  },
  {
    name: "Tanja Stanić",
    role: "Polumaratonka",
    text: "Asics Novablast 5 – trčanje kao po oblacima, lagana, udobna i stabilna. Odlična na asfaltu i na stazi, amortizuje udare, nemam težinu u nogama nakon trčanja. U njima sam napravila svoj PB na 5K i 21K. Preporučujem ovaj model za sva trčanja!",
    rating: 5,
    initials: "TaS",
  },
  {
    name: "Ljiljana Antonović",
    role: "Trail trkačica",
    text: "Hoka Mafate 5 mi je odlično legla. Izuzetno stabilna patika sa širim toe-boxom. Prošla je trail test na svim podlogama – zemlja, blato, rizla, kamenje, šuma. Malo teža od Speedgoat 5, ali nije zamorna. Nakon trčanja noge ostaju odmorne. Svaka preporuka za trail!",
    rating: 5,
    initials: "LA",
  },
  {
    name: "Marko Petrović",
    role: "Rekreativni trkač",
    text: "Sesame Shop mi je pomogao da pronađem savršene patike za moj prvi polumaraton. Stručni savet i odlična usluga – preporučujem svima!",
    rating: 5,
    initials: "MP",
  },
  {
    name: "Ana Jovanović",
    role: "Maratonac",
    text: "Odličan izbor brendova i uvek tačne informacije o modelima. Kupujem ovde već 3 godine i nikad nisam bila razočarana.",
    rating: 5,
    initials: "AJ",
  },
  {
    name: "Stefan Nikolić",
    role: "Trail trkač",
    text: "Konačno prodavnica koja zaista razume potrebe trkača. Dobio sam sjajan savet za trail patike koje mi savršeno odgovaraju.",
    rating: 5,
    initials: "SN",
  },
  {
    name: "Jovana Milić",
    role: "Početnik u trčanju",
    text: "Nisam znala ništa o patikama za trčanje, a ovde su mi strpljivo objasnili sve što treba. Odlična iskustvo od prvog do poslednjeg koraka!",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Nemanja Đorđević",
    role: "Ultramaraton trkač",
    text: "Jedino mesto gde uvek mogu da nađem ono što tražim. Poznavanje brendova i modela je na nivou – pravi stručnjaci.",
    rating: 5,
    initials: "NĐ",
  },
  {
    name: "Milica Stojanović",
    role: "Fitnes entuzijasta",
    text: "Brza dostava, savršeno pakovanje i patike koje su odmah odgovarale opisu. Više ne kupujem nigde drugde!",
    rating: 5,
    initials: "MS",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const PER_PAGE = 9;

export default function TestimonialsSection() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="py-8 md:py-16 bg-[#3a2d6a] text-white">
      <div className="container mx-auto px-2 md:px-10">
        <SectionHeader
          title="Šta kažu naši kupci?"
          description="Iskustva zadovoljnih trkača koji su pronašli svoje savršene patike."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((t, index) => (
            <div
              key={index}
              className="bg-[#e6e0f8] rounded-2xl p-8 flex flex-col relative"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-[#494179] opacity-30 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="text-[#494179] mb-6 flex-1 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#494179] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#494179]">{t.name}</p>
                  <p className="text-sm text-[#494179] opacity-70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-[#494179] text-white disabled:opacity-30 hover:bg-[#5c5294] transition-colors"
            >
              &#8592;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                  p === page
                    ? "bg-white text-[#3a2d6a]"
                    : "bg-[#494179] text-white hover:bg-[#5c5294]"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg bg-[#494179] text-white disabled:opacity-30 hover:bg-[#5c5294] transition-colors"
            >
              &#8594;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
