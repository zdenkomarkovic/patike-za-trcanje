"use client";
import Image from "next/image";
import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const BestShoesSection = () => {
  const shoesData = [
    {
      id: 1,
      name: "Asics Novablast 5",
      image: "/ASI15344_1000_8__72481.jpg",
      alt: "ASICS-Novablast-5",
      content:
        "Novablast je jedan od najpopularnijih Asics modela kada su u pitanju patike sa maksimalnim jastučićem. Svaka nova verzija donosi više pene i veću udobnost, ali uz smanjenu težinu. Model 5 dolazi sa potpuno novim međuđonom od FF Blast Max pene, koja pruža mekan, ali i responzivan osećaj. Ono što ovu patiku izdvaja jeste to što je lagana i pogodna i za svakodnevno trčanje. Iako spada u kategoriju neutralnih patika, široka platforma pruža stabilnost i smanjuje prekomernu pronaciju.",
      specs: [
        "Drop: 8 mm",
        "Težina: 224 g (ženske), 258 g (muške)",
        "Visina đona: 41,5 mm",
      ],
    },
    {
      id: 2,
      name: "On Running Cloudeclipse",
      image: "/On Running Cloudeclipse.webp",
      alt: "On Running Cloudeclipse",
      content:
        "Model Cloudeclipse namenjen je trkačima koji žele udobne patike za lagana i oporavna trčanja. Sa dvostrukim slojem CloudTec Phase® amortizacije, patika pruža odličnu zaštitu od udara, a zahvaljujući Speedboard ulošku zadržava i potrebnu čvrstinu i stabilnost. Posebna prednost ovog modela jeste novi dizajn đona, koji eliminiše problem zaglavljivanja kamenčića – česta mana starijih On modela. Zbog svoje konstrukcije, Cloudeclipse je odličan izbor i za duga trčanja, ne samo za oporavak.",
      specs: [
        "Drop: 6 mm",
        "Težina: 238 g (ženske), 283 g (muške)",
        "Visina đona: 37 mm",
      ],
    },
    {
      id: 3,
      name: "Brooks Glycerin Max",
      image: "/Brooks-Glycerin-Max-12-900x620.jpeg",
      alt: "Brooks Glycerin Max",
      content:
        "Brooks je poznat po stabilnim i udobnim patikama, a Glycerin Max je dokaz da maksimalno jastučenje može biti i izdržljivo i responzivno. U poređenju sa standardnim Glycerin modelom, ova verzija donosi znatno veću visinu đona – čak 45 mm – i osećaj kao da trčite po oblaku. Ono što izdvaja Glycerin Max jeste kombinacija meke pene i lagane čvrstine, pa patika pruža odličnu podršku tokom dužih distanci. Tehnologija GlideRoll Rocker omogućava prirodan prelaz sa pete na prste, što pogoduje trkačima koji imaju izraženiji korak na prednjem delu stopala.",
      specs: [
        "Drop: 6 mm",
        "Težina: 283 g (muške), 244 g (ženske)",
        "Visina đona: 45 mm",
      ],
    },
    {
      id: 4,
      name: "New Balance Fresh Foam 1080 v14",
      image: "/M108012O_800_800px.jpg.webp",
      alt: "New Balance Fresh Foam 1080 v14",
      content:
        "Model Fresh Foam 1080 godinama je među omiljenim patikama za svakodnevno i dugačko trčanje. Najnovija verzija v14 donosi još više udobnosti, dok je istovremeno lakša i bolje oblikovana za stopalo. Međuđon sa Fresh Foam X tehnologijom pruža odličnu apsorpciju udara, a pri tom ostaje dovoljno responzivan za brže treninge. Novi pleteni gornji deo od Hypoknit materijala omogućava dobro prijanjanje i prozračnost, dok povećana visina đona ne utiče negativno na stabilnost. Patika je idealna za maratonce i rekreativce koji žele balans između mekoće i podrške.",
      specs: [
        "Drop: 6 mm",
        "Težina: 284 g (muške), 227 g (ženske)",
        "Visina đona: 38 mm",
      ],
    },
    {
      id: 5,
      name: "HOKA Skyflow",
      image: "/HOKA-Skyflow-3-900x620.webp",
      alt: "HOKA Skyflow",
      content:
        "HOKA je sinonim za maksimalnu amortizaciju, a novi model Skyflow predstavlja evoluciju popularnog Bondi-ja. Za razliku od prethodnika, Skyflow koristi superkritičnu penu koja pruža mekoću sa dodatnim odskokom, pa patika nije samo udobna, već i efikasna za duže treninge i maratonske trke. Ono što je posebno važno jeste da Skyflow eliminiše osećaj utapanja u patiku, što je kod nekih trkača izazivalo probleme sa formom i bolove u leđima. Prostran prednji deo cipele omogućava prirodno širenje stopala tokom dugih trčanja, a dostupna je i verzija za šire stopalo.",
      specs: [
        "Drop: 5 mm",
        "Težina: 244 g (ženske), 283 g (muške)",
        "Visina đona: 39–41 mm",
      ],
    },
    {
      id: 6,
      name: "Altra Torin 7",
      image: "/406539_27479_XXL.jpg",
      alt: "Altra Torin 7",
      content:
        "Torin 7 je jedan od najpopularnijih modela brenda Altra, poznatog po filozofiji zero drop patika. Sa razlikom visine od pete do prstiju od 0 mm, ova patika omogućava prirodniji položaj stopala i ravnomernu raspodelu pritiska. Torin 7 donosi izbalansiranu amortizaciju i neutralan dizajn, što je čini pogodnom za trkače koji žele da pređu sa klasičnih patika na modele koji podstiču prirodniji korak. Dostupna je u više verzija – od standardnih do vodootpornih – a popularnost ovog modela pokazuje koliko je univerzalan i prilagodljiv različitim tipovima trkača.",
      specs: [
        "Drop: 0 mm",
        "Težina: 235 g (ženske), 280 g (muške)",
        "Visina đona: 28 mm",
      ],
    },
    {
      id: 7,
      name: "On Cloudboom Strike",
      image: "/On-Cloudboom-Strike-Review.webp",
      alt: "On Cloudboom Strike",
      content:
        "Iako primarno spada u kategoriju takmičarskih patika, Cloudboom Strike zaslužuje mesto na listi zbog vrhunskog jastučenja i karbonske ploče koja pruža snažan odskok. Ovaj model je lagan, elastičan i namenjen trkačima koji žele brzinu, ali i udobnost na dužim distancama. U poređenju sa Nike Vaporfly modelima, Cloudboom Strike nudi više prostora u prednjem delu patike, pa bolje odgovara i širim stopalima. Novi dizajn đona eliminiše problem zadržavanja kamenčića, dok dodatno povećana visina pene pruža mekoću bez gubitka stabilnosti.",
      specs: [
        "Drop: 4 mm",
        "Težina: 192 g (ženske), 218 g (muške)",
        "Visina đona: 40 mm",
      ],
    },
  ];

  return (
 <div className="bg-gradient-to-br from-gray-200 to-white">
         <div className="container px-2 md:px-10 mx-auto py-6 md:py-16">
      <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-6 md:mb-10 text-center">
        7 modela patika za trčanje na duge staze koje čine maratonske pripreme
        lakšim
      </h2>
      <div className=" space-y-3 ">
        <p className="first-letter:pl-6">
          Ako ste ljubitelj{" "}
          <span className="font-bold"> patika za trčanje sa jastučićima</span>,
          onda ste u pravom trenutku – sportski brendovi nikada više nego sada
          nisu ulagali u razvoj upravo ovakvih modela. Svaka nova kolekcija
          podiže visinu đona i donosi inovativne pene, jer svi žele da ponude
          najudobnije patike za duge staze i maratonski trening.
        </p>
        <p className="first-letter:pl-6">
          Kao trkač koji je na stazi još od 2002. godine, imao sam priliku da
          ispratim brojne promene u svetu sportske obuće. Poslednjih sezona
          jasno je da dominira trend{" "}
          <span className="font-bold">više jastuka, još više jastuka</span>.
        </p>
        <p className="first-letter:pl-6">
          U početku sam bio skeptičan i pitao se da li povećana visina đona može
          dovesti do većeg rizika od povreda. Ipak, moje iskustvo sa modelima
          poput HOKA pokazalo je da to ne mora biti slučaj. Dodatno, poslednjih
          godina pojavila su se istraživanja koja su pokazala šta zapravo znači
          nova generacija amortizacije.
        </p>
        <p className="font-bold first-letter:pl-3">
          Dakle, da li je dobro trčati u patikama sa super jastucima?
        </p>
        <ul>
          <li>
            - Ako imate problema sa{" "}
            <span className="font-bold">Ahilovom tetivom</span>, možda vam veći
            stub neće prijati.
          </li>
          <li>
            - Kod tegoba kao što je{" "}
            <span className="font-bold">plantarni fascitis</span>, dodatna
            amortizacija može ublažiti bol, ali nemojte zaboraviti da je jačanje
            stopala i dalje obavezno.
          </li>
        </ul>
        <p>
          Iako studije još uvek ne potvrđuju da mekše patike smanjuju broj
          povreda, sigurno je da one ublažavaju udarac pri doskoku. A možda je i
          najvažnije to da kada pronađete patiku koja vam savršeno odgovara,
          vaše trčanje odmah postaje prijatnije – bez obzira na kategoriju ili
          tip modela.
        </p>
        <p className="font-bold">Šta uopšte znači „maksimalni jastučić"?</p>
        <p>
          Većina modela koje ćete videti u nastavku spada u kategoriju sa
          maksimalnim jastučićem. To u praksi znači da patika ima najveći
          jastučić u odnosu na druge modele iz iste linije. Takve patike pružaju
          osećaj mekoće i ublažavaju udarce, ali donose i nešto višu
          konstrukciju đona, što ne mora uvek da odgovara svakom trkaču.
        </p>
        <p className="font-bold text-center text-2xl md:text-3xl mb-6 md:mb-10">
          Najbolje patike za trčanje sa jastučićima u 2024. godini
        </p>
        {/* <ul>
          <li>1. Asics Novablast 5</li>
          <li>2. On Running Cloudeclipse</li>
          <li>3. Brooks Glycerin Max</li>
          <li>4. New Balance Fresh Foam 1080 v14</li>
          <li>5. HOKA Skyflow</li>
          <li>6. Altra Torin 7</li>
          <li>7. Cloudboom Strike</li>
        </ul> */}
        <div className="grid gap-4 md:gap-6">
          {shoesData.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              className="p-2 md:p-5 space-y-2 text-base  md:text-lg  bg-gradient-to-r from-[#f75760] to-[#954ffd] rounded-3xl text-white shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <h3
                className={`text-xl md:text-3xl font-bold text-center ${index === 0 ? "text-xl md:text-3xl" : "text-2xl"}`}
              >
                {shoe.name}
              </h3>
              <div className="grid md:grid-cols-3 gap-2 md:gap-6 md:items-center">
                <Image
                  src={shoe.image}
                  width={500}
                  height={500}
                  alt={shoe.alt}
                  className="w-full aspect-video object-cover md:col-span-1  rounded-3xl"
                />
                <div className="md:col-span-2  space-y-3 ">
                  <p className="first-letter:pl-6">{shoe.content}</p>
                  <ul className="text-base italic text-center md:text-left">
                    {shoe.specs.map((spec, specIndex) => (
                      <li key={specIndex}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="first-letter:pl-6 mt-10">
          Patike sa maksimalnim jastučićima danas su među najtraženijima kada je
          u pitanju trčanje na duge staze i priprema za maraton. Iako se
          razlikuju po konstrukciji, tehnologiji i nameni, zajedničko im je to
          što čine trening udobnijim i manje napornim. Izbor prave patike zavisi
          od vaših potreba – bilo da tražite maksimalnu mekoću, bolju stabilnost
          ili patiku sa karbonskom pločom za brzinu.
        </p>
      </div>
    </div>  
    </div>
  );
};

export default BestShoesSection;
