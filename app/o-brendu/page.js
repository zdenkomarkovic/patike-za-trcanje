import { SITE_CONFIG } from '../constants/site';
import Image from 'next/image';

export default function AboutBrandPage() {
  const timeline = [
    { year: '1896', event: 'Prvi olimpijski maraton u Atini' },
    { year: '1897', event: 'Prvi Bostonski maraton' },
    { year: '1898', event: '4 prijatelja otvaraju Saucony "Shoe manufactoring company" u gradu Kutztown, Pensylvania' },
    { year: '1910', event: 'Fabrika proizvodila 800 pari patika dnevno' },
    { year: '1958', event: 'Proizvedeno 7446 ultra laganih patika sa šiljcima od kengurove kože' },
    { year: '1968', event: 'Fabrika se seli u grad Cambridge, država Massachusetts' },
    { year: '1972', event: 'Frank Shorter osvaja zlatnu olimpijsku medalju u maratonu' },
    { year: '1977', event: 'Saucony nagrađen sa "Best quality shoes"' },
    { year: '1980', event: 'TRAINER 80' },
    { year: '1981', event: 'JAZZ' },
    { year: '1984', event: 'DXN TRAINER' },
    { year: '1988', event: 'SHADOW' },
    { year: '1991', event: 'GRID' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Istorija brenda Saucony
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Jedan od najstarijih sportskih brendova na svetu sa tradicijom dugom 125+ godina
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">O brendu</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Saucony</strong> je jedan od najstarijih sportskih brendova na svetu. 
                  Osnovan je još u 19. veku davne <strong>1898. godine</strong> u Americi. 
                  Ime Saucony (Sock-a-knee) se na srpskom izgovara: <strong>sokoni</strong>. 
                  Ime ima poreklo po potoku Sokoni u Pensilvaniji.
                </p>
                <p>
                  Osnovna ideja od nastanka kompanije je bila kreacija <strong>vrhunskih patika za trčanje</strong>. 
                  Još davne 1979. godine Runners World je ubacio 2 modela brenda u listu najboljih patika za trčanje.
                </p>
                <p>
                  Sokoni od devedesetih nije bio u centru pažnje, da bi se u poslednjih 5 godina 
                  ponovo vratio među top trkačke brendove.
                </p>
                <p>
                  Po oceni Runners World, <strong>Saucony je u kategoriji najboljih trkačkih patika na svetu</strong>. 
                  Pored trkačkih patika, paletu brenda čine i retro running modeli, koji su postali 
                  neophodni modni detalj u mnogim zemljama.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg"
                alt="Saucony patike"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">125+</div>
                  <div className="text-sm text-gray-600">Godina tradicije</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Istorija brenda
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-red-600"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Distribution Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Saucony u Srbiji
              </h2>
              <p className="text-xl text-gray-600">
                Kod nas je brend tek u povoju
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Eksluzivni distributer ovog renomiranog brenda, za teritoriju bivše Jugoslavije i 
                  Mađarsku je kompanija Triple Jump iz Beograda. Trkačke modele patika možete 
                  pronaći u Intersportu i Run n More prodavnici.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dovoljno je spomenuti da se u Italiji i Španiji svake godine proda milion pari patika. 
                  Saucony postaje sve popularniji i u našoj zemlji među trkačima koji prepoznaju kvalitet.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{SITE_CONFIG.company.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{SITE_CONFIG.company.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}