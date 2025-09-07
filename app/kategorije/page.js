import { SITE_CONFIG } from '../constants/site';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function CategoriesPage() {
  const categoryDetails = [
    {
      ...SITE_CONFIG.categories[0],
      fullDescription: `Ako ste tek ušli u trkačke vode, saznaćete da neki trkači pored patika u kojima nastupa na trkama, imaju i patike za trening. Trening obično radimo na asfaltnoj ili nekoj mekšoj podlozi: travi, zemlji, šumskim putem, šljaci, piljevini, tartanu.`,
      requirements: [
        'Da su predviđene za vaš tip stopala i pronaciju',
        'Da su udobne i dovoljno meke na savijanje',
        'Da imaju dobru ventilaciju leti, a da je u njima dovoljno toplo zimi',
        'Da nemaju suviše mek i tanak đon',
        'Da imaju prihvatljivu cenu',
        'Da ih je lako održavati, čistiti i prati'
      ],
      tips: 'Patike za trening je najbolje tražiti na sezonskim rasprodajama, kada radnje čiste svoje magacine da bi primili novu robu.'
    },
    {
      ...SITE_CONFIG.categories[1],
      fullDescription: `Mnogi trkači koji praktikuju terensko trčanje koriste specijalne patike koje se unekoliko razlikuju od običnih patika za trčanje. Takve patike se zovu trail ili terenske patike.`,
      requirements: [
        'Nizak profil blizu zemlje za najbolju stabilnost',
        'Gumeni i plastični delovi koji štite stopala',
        'Ojačan prednji deo sa zaštitom za vrhove prstiju',
        'Terenski elementi prijanjanja (kramponi)',
        'Visok deo đona sa svih strana kao blatobran',
        'Sistem za vezivanje sa džepom za pertle'
      ],
      tips: 'Za početnike u trail trčanju, univerzalne patike mogu da budu sasvim dobro rešenje kao odlične prve patike.'
    },
    {
      ...SITE_CONFIG.categories[2],
      fullDescription: `Ako volite patike za trčanje sa jastučićima, imate sreće jer se trenutno brendovi više nego ikad fokusiraju na ovo! Visina stuba se povećava jer svaki pokušava da stvori najbolje patike za trčanje sa jastučićima.`,
      requirements: [
        'Visoka amortizacija za apsorpciju udara',
        'Idealne za duge staze i maraton',
        'Napredne tehnologije pene',
        'Lagane uprkos visokoj amortizaciji',
        'Odličan odziv i povrat energije',
        'Stabilnost i podrška'
      ],
      tips: 'Ako pronađete cipelu i obožavate kako se oseća, to samo po sebi može poboljšati vaše trčanje bez obzira na vrstu cipele.'
    },
    {
      ...SITE_CONFIG.categories[3],
      fullDescription: `7 patika za trčanje na duge staze koje čine maratonski trening podnošljivim. Trenutno smo u doba jastuka, više jastuka i JOŠ jastuka.`,
      requirements: [
        'Maksimalna amortizacija i mekoća',
        'Visina stuba za dodatnu zaštitu',
        'Tehnologije za povrat energije',
        'Udobnost za dugotrajno nošenje',
        'Stabilnost uprkos visokoj amortizaciji',
        'Izdržljivost za velike kilometraže'
      ],
      tips: 'Većina cipela koje ćete pronaći u ovoj kategoriji je kategorisana kao cipela sa maksimalnom jastučićem od strane brenda.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Kategorije patika
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pronađite savršene patike za vaš stil trčanja i nivo iskustva
            </p>
          </div>
        </div>
      </section>

      {/* Categories Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {categoryDetails.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full text-sm font-semibold mb-4">
                      Kategorija {index + 1}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      {category.name}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {category.fullDescription}
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Ključne karakteristike:</h3>
                    <ul className="space-y-3">
                      {category.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {category.tips && (
                    <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-6 border-l-4 border-blue-500">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Savet:</h4>
                          <p className="text-gray-600">{category.tips}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button variant="primary" size="lg">
                    Pogledaj modele
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative z-10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={600}
                      height={500}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-400 to-red-400 rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vodič za veličine
            </h2>
            <p className="text-xl text-gray-600">
              Važne informacije za izbor prave veličine patika
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Veličina</h3>
              <p className="text-gray-600 mb-4">
                Preporučljivo je imati komotniju patiku (pola broja veće). 
                Ako krećete na trail, ovo je OBAVEZNO.
              </p>
              <p className="text-sm text-gray-500">
                Noge otiču i šire se tokom dana a kamoli tokom dugog trčanja.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fit</h3>
              <p className="text-gray-600 mb-4">
                Modeli se međusobno razlikuju po tome što su pravljeni za uže ili šire stopalo.
              </p>
              <p className="text-sm text-gray-500">
                Ovo često možete naći u opisu modela, naročito ako proizvođač nudi obe varijante.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stabilnost</h3>
              <p className="text-gray-600 mb-4">
                Za početnike u bilo kojoj disciplini, stabilnija patika je uvek dobar izbor.
              </p>
              <p className="text-sm text-gray-500">
                Ogleda se u ojačanju pete, širini đona, hvatu oko zgloba i slično.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Trebate pomoć u izboru?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktirajte nas za personalizovanu preporuku na osnovu vašeg stila trčanja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Pozovite: {SITE_CONFIG.company.phone}
            </Button>
            <Button variant="ghost" size="lg" className="border-2 border-white/30 hover:border-white">
              Pošaljite upit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}