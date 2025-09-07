import { SITE_CONFIG } from './constants/site';
import Button from './components/ui/Button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Saucony Shop
                  <span className="block text-2xl lg:text-3xl font-normal text-blue-200 mt-2">
                    Patike za trčanje
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Kvalitet i tradicija od 1898. godine
                </p>
              </div>
              
              <p className="text-lg text-blue-50 leading-relaxed max-w-xl">
                Profesionalne patike za trčanje za početnike, rekreativce i napredne trkače. 
                Saucony - jedan od najstarijih sportskih brendova na svetu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group"
                >
                  Pogledaj proizvode
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="border-2 border-white/30 hover:border-white"
                >
                  O brendu Saucony
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">125+</div>
                  <div className="text-sm text-blue-200">Godina tradicije</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1898</div>
                  <div className="text-sm text-blue-200">Godina osnivanja</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
                  alt="Saucony patike za trčanje"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kategorije patika
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronađite savršene patike za vaš stil trčanja i nivo iskustva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONFIG.categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-12 relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Saucony Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  O brendu Saucony
                </h2>
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
                    Po oceni Runners World, <strong>Saucony je u kategoriji najboljih trkačkih patika na svetu</strong>. 
                    Pored trkačkih patika, paletu brenda čine i retro running modeli, koji su postali 
                    neophodni modni detalj u mnogim zemljama.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1898</div>
                  <div className="text-sm text-gray-600">Godina osnivanja</div>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">1979</div>
                  <div className="text-sm text-gray-600">Runners World priznanje</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg"
                alt="Saucony istorija"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Top kvalitet</div>
                    <div className="text-sm text-gray-600">Runners World</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Zašto izabrati Saucony?
            </h2>
            <p className="text-xl text-gray-600">
              Ključne karakteristike koje čine Saucony patike posebnima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Za sve nivoe</h3>
              <p className="text-gray-600">
                Od početnika do profesionalnih trkača - imamo patike za svaki nivo iskustva i stil trčanja.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dokazana kvalitet</h3>
              <p className="text-gray-600">
                125+ godina iskustva u proizvodnji patika za trčanje. Prepoznat od strane Runners World magazina.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Udobnost</h3>
              <p className="text-gray-600">
                Napredne tehnologije amortizacije i materijali koji pružaju maksimalnu udobnost tokom trčanja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Spremni za vaše prvo trčanje?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktirajte nas za savet o izboru pravih patika za vaš stil trčanja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Pozovite nas: {SITE_CONFIG.company.phone}
            </Button>
            <Button variant="ghost" size="lg" className="border-2 border-white/30 hover:border-white">
              Pošaljite email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}