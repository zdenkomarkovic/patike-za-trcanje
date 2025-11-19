export const metadata = {
  title: "Politika privatnosti - Patike za trčanje",
  description:
    "Politika privatnosti za patike-za-trcanje.rs - Kako čuvamo i koristimo vaše podatke",
};

export default function PolitikaPrivatnosti() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#494179]">
        Politika privatnosti
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            1. Prikupljanje podataka
          </h2>
          <p className="text-gray-700 mb-4">
            Prikupljamo samo osnovne podatke koje nam dobrovoljno pružite
            prilikom popunjavanja kontakt formulara ili prijave za newsletter,
            uključujući vašu email adresu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            2. Upotreba podataka
          </h2>
          <p className="text-gray-700 mb-4">
            Vaše podatke koristimo isključivo u svrhu:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Komunikacije sa vama u vezi sa vašim upitima</li>
            <li>Slanja informacija o proizvodima i specijalnim ponudama</li>
            <li>Poboljšanja kvaliteta naših usluga</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            3. Zaštita podataka
          </h2>
          <p className="text-gray-700 mb-4">
            Preduzimamo sve potrebne mere kako bismo zaštitili vaše lične
            podatke od neovlašćenog pristupa, izmene, otkrivanja ili
            uništavanja.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            4. Deljenje podataka
          </h2>
          <p className="text-gray-700 mb-4">
            Vaše lične podatke ne delimo sa trećim stranama, osim u slučajevima
            kada je to zakonski obavezno ili u svrhu ispunjenja usluge koju ste
            zatražili.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            5. Vaša prava
          </h2>
          <p className="text-gray-700 mb-4">
            Imate pravo da:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Zatražite pristup svojim podacima</li>
            <li>Zatražite ispravku netačnih podataka</li>
            <li>Zatražite brisanje svojih podataka</li>
            <li>Opozvete saglasnost za obradu podataka u bilo kom trenutku</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            6. Kolačići (Cookies)
          </h2>
          <p className="text-gray-700 mb-4">
            Naša web stranica može koristiti kolačiće kako bi poboljšala
            korisničko iskustvo. Možete podesiti svoj pretraživač da odbije sve
            kolačiće ili da vas obavesti kada se kolačić šalje.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            7. Izmene politike privatnosti
          </h2>
          <p className="text-gray-700 mb-4">
            Zadržavamo pravo da ažuriramo ovu politiku privatnosti povremeno.
            Sve izmene će biti objavljene na ovoj stranici.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#494179]">
            8. Kontakt
          </h2>
          <p className="text-gray-700 mb-4">
            Za sva pitanja u vezi sa politikom privatnosti, možete nas
            kontaktirati putem email-a ili telefona navedenih na našoj
            kontakt stranici.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}
        </p>
      </div>
    </div>
  );
}
