"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Image from "next/image";

const TrailSection = () => {
  const trailCards = [
    {
      id: 1,
      title: "Kako izabrati prve trail patike?",
      content: (
        <p className="text-lg leading-tight">
          Za početak birajte univerzalne (all-terrain) modele koji su pogodni za
          blaže staze. Kada steknete više iskustva, preći ćete na
          specijalizovanije varijante.
        </p>
      ),
    },
    {
      id: 2,
      title: "Ključne razlike u odnosu na patike za asfalt:",
      content: (
        <ul className="text-lg leading-tight space-y-2">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Jača podrška u peti i bočnim stranama.</span>
          </li>
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span>Robusniji đon sa izraženim šarama.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Materijali otporni na vlagu, blato i kamenje.</span>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Veličina i udobnost",
      content: (
        <>
          <p className="text-lg leading-tight mb-1">
            Uvek uzimajte barem pola broja veće od obične obuće – zbog oticanja
            stopala i udaraca nizbrdo. Obratite pažnju i na širinu patike, jer
            neki modeli dolaze u više širina.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Stabilnost i zaštita",
      content: (
        <p className="  text-lg leading-tight">
          Za početnike je bolji stabilniji model sa širim đonom. Vodootporne
          patike su korisne u hladnim i vlažnim uslovima, ali modeli koji se
          brzo suše često su praktičniji.
        </p>
      ),
    },
    {
      id: 5,
      title: "Vrste trail patika",
      content: (
        <ul className="text-lg leading-tight space-y-1">
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span>
              <span className="font-bold">Light trail</span> – za parkove i
              lakše staze.
            </span>
          </li>

          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span>
              <span className="font-bold">Ultra trail</span> – sa dodatnim
              slojevima i jakim kramponima, za duže i teže staze.
            </span>
          </li>
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span>
              <span className="font-bold">Planinske patike</span> – za duže
              pešačenje na zahtevnijim rutama.
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "Završni savet",
      content: (
        <p className="text-lg leading-tight">
          Ne postoji idealna patika za sve. Počnite sa udobnim i univerzalnim
          modelom. Kako rastete u iskustvu, lakše ćete prepoznati šta vam zaista
          treba.
        </p>
      ),
    },
  ];

  return (
    <div className="secondary text-[#494179] primary py-8 md:py-16">
      <div className="container mx-auto px-2 md:px-10">
        <h2 className="text-2xl  primary md:text-3xl font-bold mb-6 md:mb-10 text-center">
          Trail patike – vodič za trčanje u prirodi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
          <Card className="p-6">
            <div className="space-y-4  ">
              <p className="first-letter:pl-6">
                Ako planirate da trčite van asfalta – po šumi, makadamu ili
                planinskim stazama – potrebne su vam trail patike, posebno
                dizajnirane za neravne terene.
              </p>

              <p className="first-letter:pl-6 font-bold">
                Za razliku od običnih patika za asfalt, trail modeli imaju:
              </p>
              <ul className="space-y-2 text-lg ">
                <li className="">
                  <span className="font-bold">
                    Niži profil i stabilniji đon
                  </span>{" "}
                  – pružaju sigurnost na nepredvidivom terenu.
                </li>
                <li className="">
                  <span className="font-bold">Ojačane delove</span> – štite
                  prste i stopalo od kamenja i korenja.
                </li>
                <li className="">
                  <span className="font-bold">Krampone</span> – poboljšavaju
                  prijanjanje i sprečavaju klizanje.
                </li>
                <li className="">
                  <span className="font-bold">Vodootporne materijale</span> –
                  korisni u mokrim uslovima (npr. Gore-Tex).
                </li>
              </ul>
            </div>
          </Card>

          {/* Osnovne karakteristike trail patika */}

          <Image
            src="/20251008_124707.jpg"
            alt="Trail patike"
            width={1000}
            height={1000}
            className="rounded-3xl aspect-[9/6] object-cover"
          />
        </div>
        {/* Poslednje 6 kartica u grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trailCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Card
                key={card.id}
                className="p-6 primarybg text-white hover:scale-105 transition-all duration-300 h-full"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">
                  {card.title}
                </h3>
                {card.content}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailSection;
