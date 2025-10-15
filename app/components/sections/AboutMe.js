import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div id="o-meni" className="primarybg text-white">
      <div className="container mx-auto px-2 md:px-32 md:space-y-6 py-10 md:py-16">
        <h2 className="text-xl md:text-4xl text-center font-bold py-6 ">
          2015. godine sam istrčao svojih prvih 5K na trci Nike Run BGD. Svidela
          mi se atmosfera među trkačima i nekako sam tu sebe pronašao.{" "}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          {" "}
          <div className="md:space-y-6 ">
            <p className="first-letter:pl-6">
              Naredne godine, nakon svoje prve trke, poželeo sam da ponovo
              stanem na start. Ovoga puta želeo sam da trčim u šarenim patikama,
              onakvim kakve sam video kod drugih trkača. Pomislio sam da patike
              za trčanje treba da budu lagane i živih boja, a ne obične crne.
              Izabrao sam u outletu takav par, uveren da ću sa njima biti brži i
              bolji. Međutim, već na kraju trke shvatio sam da to nije bio pravi
              izbor – dobio sam ozbiljne žuljeve i naučio prvu veliku lekciju:
              <span className="font-bold text-[#f5b800]">
                {" "}
                nije svaka patika, dobra patika za trčanje.
              </span>
            </p>
            <p className="first-letter:pl-6">
              Sledeće godine prijavio sam se za trku na 10 kilometara, ali ovog
              puta uz edukaciju o tome koje patike za trčanje zaista odgovaraju
              mom stopalu i stilu trčanja. Tako sam otkrio model{" "}
              <span className="font-bold"> Saucony Axon</span>. Nažalost, te
              2018. godine u zvaničnim radnjama kod nas nije bilo Saucony
              brenda, a pojedini prodavci nisu ni znali o kom proizvođaču
              govorim. Zato sam te godine 10K ipak istrčao u običnim patikama,
              trudeći se da budem oprezan i da izbegnem nove žuljeve.
            </p>{" "}
          </div>
          <Image
            src={"/prva.jpg"}
            width={400}
            height={500}
            alt="patike za trcanje"
            className="rounded-xl w-full md:w-[350px] aspect-[10/11] object-cover "
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 mb-6 md:mb-10">
          <Image
            src={"/druga.jpg"}
            width={400}
            height={500}
            alt="patike za trcanje"
            className="rounded-xl w-full md:w-[350px] aspect-[10/13] object-cover  object-bottom"
          />
          <p className="first-letter:pl-6">
            Od 2019. do 2021, zbog pandemije korone, nisam bio aktivan na
            trkama, ali sam nastavio da proučavam trkačku opremu i posebno
            modele patika za trčanje. Krajem 2021. pojavio se model Saucony Axon
            2, ali ga ponovo nije bilo u našim radnjama. Odlučio sam da ga
            nabavim po svaku cenu. Preko prijatelja sam uspeo da ga poručim iz
            Nemačke i već na jesen 2022. pojavio sam se na trci 10K u svom
            novom, žutom Axon 2 modelu,{" "}
            <span className="font-bold text-[#f5b800]">
              {" "}
              potpuno neočekivano nekoliko trkača me je zaustavljalo i pitalo
              gde sam ja to našao, da li mogu i njima da nabavim.
            </span>
            <span className="font-bold">
              {" "}
              Tada sam odlučio da pomognem domaćim trkačima da dođu do brenda
              Saucony. Potražio sam ovlašćene distributere u Nemačkoj koji mogu
              pouzdano da isporuče patike i ubrzo sam krenuo sa prvim
              porudžbinama.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 ">
          <div className="space-y-6">
            <p className="first-letter:pl-6">
              U proleće 2023. u Srbiju je stigao moj prvi paket – pet pari
              Saucony modela:
              <span className="font-bold">
                {" "}
                Axon 2, Endorphin Shift 2, Ride 15 i Guide 15
              </span>
              . Ljudi su bili oduševljeni kvalitetom, isporukom i načinom
              saradnje. Tako je nastao
              <span className="font-bold"> Sesame Shop</span>.
            </p>
            <p className="first-letter:pl-6">
              Od tada pa do danas, kroz našu malu zajednicu prošlo je više od{" "}
              <span className="font-bold">600 pari patika za trčanje</span>, ne
              samo Saucony, već i drugih brendova. Pored patika, trkači su kod
              nas poručivali i{" "}
              <span className="font-bold">
                {" "}
                satove za trčanje, trail štapove, majice, šorceve, čarape
              </span>{" "}
              i drugu opremu koja prati ljubav prema trčanju.
            </p>
            <p className="first-letter:pl-6">
              {" "}
              Danas,<span className="font-bold"> Sesame Shop</span> predstavlja
              mesto gde trkači mogu pronaći pouzdane modele patika za trčanje i
              opremu, sa sigurnom isporukom i podrškom nekoga ko je i sam prošao
              sve faze – od prvog koraka do pravog izbora.
            </p>
          </div>
          <Image
            src={"/20251005_033443.jpg"}
            width={500}
            height={500}
            alt="patike za trcanje"
            className="rounded-xl w-full md:w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
