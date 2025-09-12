import Image from "next/image";

export default function AboutSection() {
  return (
    <div className=" bg-white">
      <div className="container px-2 md:px-10 mx-auto py-8 md:py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
          Saucony – istorija jednog od najstarijih sportskih brendova
        </h2>
        <div className=" grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4  text-gray-600 leading-relaxed">
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

<Image src="/logo.svg" alt="Saucony Logo" width={1000} height={1000} className="w-full h-full mt-14" />
         
            </div>
          </div>
          <div className="relative p-4 md:p-6 bg-gray-100 rounded-2xl ">
            <ul className=" text-base relative z-20 ">
              <li className="font-bold">
                Ključni trenuci iz istorije Saucony-ja
              </li>
              <li>• 1896 – prvi olimpijski maraton u Atini</li>
              <li>• 1897 – prvi Bostonski maraton</li>
              <li>
                1898. – četvorica prijatelja osnivaju{" "}
                <span className="font-bold">
                  Saucony Shoe Manufacturing Company u Kutztownu
                </span>
                .
              </li>
              <li>
                Do <span className="font-bold">1910</span>. fabrika, smeštena u
                staroj ciglani pored reke Saucony, proizvodila je oko 800 pari
                patika dnevno.
              </li>
              <li>
                Tokom prve polovine 20. veka trčanje postaje sport ozbiljnih
                atleta, a Saucony prepoznaje priliku da razvije pravu sportsku
                obuću, za razliku od tadašnjih kožnih patika sa šiljcima ili
                trčanja bosonogo.
              </li>
              <li>
                Do <span className="font-bold">1958</span>. proizvedeno je 7446
                ultra laganih patika sa šiljcima, napravljenih od kengurove kože
                – preteča današnjih sprinterica.
              </li>
              <li>
                <span className="font-bold">1968</span>. fabrika se seli u
                Cambridge, Massachusetts – dom Bostonskog maratona.
              </li>
              <li>
                <span className="font-bold">1972</span>. američki maratonac
                Frank Shorter osvaja zlato na Olimpijskim igrama, što izaziva
                pravu trkačku revoluciju u SAD-u, a Saucony dobija još veću
                popularnost.
              </li>
              <li>
                <span className="font-bold">1977</span>. brend dobija priznanje
                za
                <span className="italic">Best quality shoes</span>.
              </li>

              <li className="font-bold">
                Tokom osamdesetih nastaju kultni modeli koji su i danas
                popularni:
              </li>
              <li>1980 – TRAINER 80</li>
              <li>1981 – JAZZ</li>
              <li>1984 – DXN TRAINER</li>
              <li>1988 – SHADOW</li>
              <li>1991 – GRID</li>

              <li>
                Ovi modeli danas pripadaju liniji{" "}
                <span className="font-bold">Saucony Originals</span>, koja
                kombinuje sportsko nasleđe i lifestyle dizajn.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4  text-gray-600 leading-relaxed mt-10">    
           <p>
                Pored profesionalnih{" "}
                <span className="font-bold">trkačkih patika</span>, Saucony je
                razvio i liniju
                <span className="font-bold">retro modela – Originals</span>,
                koje su postale pravi modni hit. Posebno u zemljama poput
                Italije i Španije, gde se godišnje proda više od milion pari
                ovih patika. Kod nas je brend još uvek u fazi razvoja, ali
                interesovanje raste iz godine u godinu.
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
          Od malog proizvođača u Pensilvaniji, do globalnog lidera u inovacijama
          i udobnosti, ostao je veran svojoj misiji – da svakom trkaču ponudi
          patike koje će unaprediti njegovu formu i iskustvo na stazi.
        </p>
      </div>
      </div>
    </div>
  );
}
