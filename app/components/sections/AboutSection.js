import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="secondary primarytext">
      <div className="container px-2 md:px-10 mx-auto py-8 md:py-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 md:mb-10 text-center">
          Saucony – istorija jednog od najstarijih sportskih brendova
        </h2>
        <div className=" grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4 leading-relaxed">
              <p>
                Saucony je jedan od najstarijih i najpoznatijih svetskih
                proizvođača patika za trčanje. Osnovan je još davne 1898. godine
                u Pensilvaniji, u malom gradu Kutztown. Ime brenda potiče od
                rečice Saucony Creek, a pravilno se izgovara „sokoni“. Od samog
                početka misija kompanije bila je jasna – kreirati{" "}
                <span className="font-bold">
                  obuću vrhunskih performansi za trkače
                </span>
                .
              </p>
              <p>
                Još 1979. godine, magazin{" "}
                <span className="font-bold">Runner’s World</span> uvrstio je čak
                dva Saucony modela na listu najboljih patika za trčanje, čime je
                brend stekao međunarodnu reputaciju. Iako je tokom devedesetih
                bio nešto povučeniji, poslednjih godina Saucony je ponovo među
                vodećim imenima u trkačkom svetu, zahvaljujući inovativnim
                modelima i stalnom ulaganju u tehnologiju.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            {" "}
            <Image
              src="/20251004_215214.jpg"
              alt="Saucony Logo"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-4  text-gray-600 leading-relaxed mt-10">
          <p>
            Pored profesionalnih{" "}
            <span className="font-bold">trkačkih patika</span>, Saucony je
            razvio i liniju
            <span className="font-bold"> retro modela – Originals</span>, koje
            su postale pravi modni hit. Posebno u zemljama poput Italije i
            Španije, gde se godišnje proda više od milion pari ovih patika. Kod
            nas je brend još uvek u fazi razvoja, ali interesovanje raste iz
            godine u godinu.
          </p>
          <p>
            Danas se Saucony nalazi u vrhu liste kada je reč o{" "}
            <span className="font-bold">najboljim patikama za trčanje</span>.
            Njihovi modeli kombinuju inovativne pene, naprednu tehnologiju
            amortizacije i dizajn prilagođen profesionalnim sportistima i
            rekreativcima.
          </p>
          <p>
            Saucony je brend koji više od{" "}
            <span className="font-bold">120 godina oblikuje svet trčanja</span>.
            Od malog proizvođača u Pensilvaniji, do globalnog lidera u
            inovacijama i udobnosti, ostao je veran svojoj misiji – da svakom
            trkaču ponudi patike koje će unaprediti njegovu formu i iskustvo na
            stazi.
          </p>
        </div>
      </div>
    </div>
  );
}
