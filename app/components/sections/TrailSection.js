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
        <p className="text-lg leading-tight md:mt-14">
          Ako tek ulazite u svet traila, univerzalne „all terrain" patike mogu biti odličan izbor. One nisu namenjene za najzahtevnije staze, ali su dobre za upoznavanje terena i prve kilometre van asfalta. Kada osetite draž planinskih staza, prirodnih mirisa i svežeg vazduha, verovatno ćete želeti specijalizovaniji model.
        </p>
      )
    },
    {
      id: 2,
      title: "Ključne razlike u odnosu na asfaltne patike",
      content: (
        <ul className="text-lg leading-tight space-y-2">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Jača podrška stopalu, naročito u peti i bočnim delovima.</span>
          </li>
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span>Robusniji đon sa kramponima – za bolje prijanjanje na mokrim i klizavim površinama.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Otporniji materijali – izrađeni da izdrže kamenje, blato i vlagu.</span>
          </li>
        </ul>
      )
    },
    {
      id: 3,
      title: "Veličina i fit",
      content: (
        <>
          <p className="text-lg leading-tight mb-1">
            Kod trail patika obavezno uzimajte barem pola broja veće modele, jer nizbrdo prsti udaraju o vrh patike. Tokom dugih trčanja stopalo otiče, pa mnogi trkači biraju i za ceo broj veću patiku nego u gradskoj obući. Kalupi se razlikuju:
          </p>
          <ul className=" text-lg leading-tight space-y-1 mb-1">
            <li className="flex items-start">
              <span className="   font-bold mr-2">•</span>
              <span><span className="font-bold">Asics</span> – realne veličine.</span>
            </li>
            <li className="flex items-start">
              <span className=" font-bold mr-2">•</span>
              <span><span className="font-bold">Adidas</span> – nešto manji kalup.</span>
            </li>
            <li className="flex items-start">
              <span className=" font-bold mr-2">•</span>
              <span><span className="font-bold">Salomon</span> – uglavnom „true to size".</span>
            </li>
          </ul>
          <p className="text-lg leading-tight">
            Takođe, obratite pažnju na širinu stopala – postoje uži i širi modeli, što je često naglašeno u opisu proizvoda.
          </p>
        </>
      )
    },
    {
      id: 4,
      title: "Stabilnost i vodonepropusnost",
      content: (
        <p className="  text-lg leading-tight">
          Za početnike je uvek bolji izbor stabilniji model, sa ojačanjem pete i širim đonom. Kada je reč o vodootpornosti, patike sa Gore-Tex slojem korisne su u zimskim uslovima jer greju i čuvaju nogu od kvašenja. Međutim, imajte u vidu da pri trčanju po kiši i snegu vlaga može ući odozgo, pa je uvek moguće da stopala ipak budu mokra. Zato su mnogi trkači skloniji modelima koji se brzo suše, umesto onih potpuno zatvorenih.
        </p>
      )
    },
    {
      id: 5,
      title: "Zaštita i tipovi trail patika",
      content: (
        <ul className="text-lg leading-tight space-y-1">
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span><span className="font-bold">Light trail</span> – lagani modeli za parkove, makadam i blaže staze.</span>
          </li>
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span><span className="font-bold">Planinske patike</span> – robustniji đon, često EVA pena za duže i zahtevnije uspone i spusteve.</span>
          </li>
          <li className="flex items-start">
            <span className=" font-bold mr-2">•</span>
            <span><span className="font-bold">Tehnički teren</span> – poliuretanski slojevi, dodatna punjenja i izraženi kramponi za maksimalnu sigurnost na steni, blatu i snegu.</span>
          </li>
        </ul>
      )
    },
    {
      id: 6,
      title: "Završna preporuka",
      content: (
        <p className="text-lg leading-tight">
          Ne postoji savršena trail patika za svakog trkača. Najvažnije je da odaberete model koji najbolje odgovara vašem stopalu i načinu trčanja. Za prvi par izbegavajte previše specijalizovane modele – odaberite udobne patike srednjeg ranga, koje će vas uvesti u svet trail trčanja. A kada vam staze postanu svakodnevica, lako ćete pronaći model prilagođen baš vašim potrebama.
        </p>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-200 to-white py-8 md:py-16">
      <div className="container mx-auto px-2 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
          Trail patike – vodič za trčanje u prirodi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6"> 
        <div className="space-y-4  ">
          <p className="first-letter:pl-6">
            Mnogi trkači koji se odluče da pređu sa asfalta na prirodne staze shvate da im je potrebna posebna obuća. Za ovakve uslove postoje trail patike, specijalno dizajnirane za brdske staze, šume, makadam i sve vrste neravnih terena.
          </p>
          
          <p className="first-letter:pl-6">
            Za razliku od običnih patika za asfalt, trail modeli imaju nizak profil bliži zemlji, što obezbeđuje stabilnost na neravnom terenu. Đon je izrađen od izdržljivih gumenih i plastičnih delova koji štite stopalo od kamenja i oštrih predmeta, dok je peta sa manjom amortizacijom – jer se pretpostavlja da se trči na mekšim podlogama poput zemlje, trave ili šumskih staza. Vrh patike dodatno je ojačan kako bi prsti bili zaštićeni.
          </p>
          <Image src="/2149157066.jpg" alt="Trail patike" width={1000} height={1000} className="rounded-3xl" />
        </div>

     
          {/* Osnovne karakteristike trail patika */}
          <Card className="p-6">
            <h3 className=" font-bold mb-4 text-center text-gray-800">
              Osnovne karakteristike trail patika
            </h3>
            <ul className="space-y-2 text-lg ">
              <li className="">
              
                <span className="font-bold">Ojačan prednji deo</span> – guma ili sintetička zaštita na vrhu prstiju sprečava povrede od kamenja i korenja.
              </li>
              <li className="">
             
                <span className="font-bold">Zaštitni gornji elementi</span> – jači i izdržljiviji materijali od onih na asfaltnim patikama, često i nepromočivi.
              </li>
              <li className="">
                <span className="font-bold">Krampone (ripne) na đonu</span> – omogućavaju bolje prijanjanje i smanjuju rizik od klizanja; veličina zavisi od namene.
              </li>
              <li className="">
              
                <span className="font-bold">Elementi stabilizacije</span> – plastični ulošci u đonu koji smanjuju uvrtanje patike.
              </li>
              <li className="">
                <span className="font-bold">Povišeni bočni delovi đona</span> – deluju kao „blatobrani" i sprečavaju ulazak blata i vode.
              </li>
              <li className="">
              
                <span className="font-bold">Pertle ili brzi sistem vezivanja</span> – klasičan izbor kod većine modela, ali neki imaju i inovativna rešenja.
              </li>
              <li className="">
             
                <span className="font-bold">Jezičak sa džepom za pertle</span> – sprečava kačenje o granje i slučajno odvezivanje.
              </li>
                  <li className="">
             
                <span className="font-bold">Unutrašnja postava</span> – brzo se suši i pruža dodatnu zaštitu peti.
              </li>
              <li className="">

                <span className="font-bold">Gornji materijal</span> – kombinacija mrežastih i vodonepropusnih slojeva (često Gore-Tex).
              </li>
              <li className="">
            
                <span className="font-bold">Ušice za brzo obuvanje i kačenje</span> – praktičan detalj kod modernih modela.
              </li>
              <li className="">
             
                <span className="font-bold">Povijeni zadnji deo đona</span> – daje bolji kontakt sa neravnom podlogom i sigurnije kočenje nizbrdo.
              </li>
            </ul>
          </Card>
</div>
          {/* Poslednje 6 kartica u grid-cols-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trailCards.map((card) => (
              <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}> 
              <Card key={card.id} className="p-6 bg-gradient-to-br from-[#f75760] to-[#954ffd] text-white hover:scale-105 transition-all duration-300 h-full">
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
