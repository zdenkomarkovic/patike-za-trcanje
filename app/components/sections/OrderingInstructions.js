export default function OrderingInstructions() {
  const steps = [
    {
      number: 1,
      title: "Odredite budžet",
      description: "Odredite koliki vam je budžet za patike koje želite da kupite"
    },
    {
      number: 2,
      title: "Izaberite model",
      description: "Izaberete neki od modela sa aktuelne ponude ili ako nema u ponudi zatražite informaciju"
    },
    {
      number: 3,
      title: "Uplatite iznos",
      description: "Uplaćujete na dan poručivanja iznos u dinarima u celosti"
    },
    {
      number: 4,
      title: "Poručujemo",
      description: "Poručujemo vaš proizvod kod našeg dobavljača"
    },
    {
      number: 5,
      title: "Potvrda porudžbine",
      description: "Po obrađenoj porudžbini dobijate potvrdu o poručenom proizvodu, sa konkretnim podacima o veličini, dezenu, ceni i datumu poručivanja sa brojem porudžbine"
    },
    {
      number: 6,
      title: "Dostava u Srbiju",
      description: "Nakon 15 +/- dana stižu u Srbiju"
    },
    {
      number: 7,
      title: "Preuzimanje",
      description: "Lično preuzimanje na teritoriji Beograda ili slanjem na vašu adresu Postexpress-om uz plaćanje dostave pouzećem"
    }
  ];

  return (
    <section className="py-16 primarytext">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kako da poručim?</h2>
          <p className="text-xl">
            Proces poručivanja je jednostavan i transparentan
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="primarybg text-white rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A59] rounded-full flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#FF7A59] text-white rounded-xl">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 flex-shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-semibold mb-1">Napomena</h4>
              <p className="text-sm">
                Vreme dostave može varirati u zavisnosti od dostupnosti proizvoda
                i brzine carinskog postupka. Kontaktirajte nas za više informacija
                o trenutnim rokovima isporuke.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
