import { SITE_CONFIG } from '../constants/site';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function ProductsPage() {
  const productCategories = [
    {
      title: 'Za početnike trkače - rekreativce',
      description: 'Ako ste tek ušli u trkačke vode, ove patike su idealne za vas',
      features: [
        'Predviđene za vaš tip stopala i pronaciju',
        'Udobne i dovoljno meke na savijanje',
        'Dobra ventilacija leti, toplo zimi',
        'Prihvatljiva cena',
        'Lako održavanje i čišćenje'
      ],
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Trail patike',
      description: 'Specijalne patike za terensko trčanje u prirodi',
      features: [
        'Nizak profil za najbolju stabilnost',
        'Gumeni i plastični delovi za zaštitu',
        'Ojačan prednji deo sa zaštitom za prste',
        'Terenski elementi prijanjanja (kramponi)',
        'Visok deo đona kao blatobran'
      ],
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      bgColor: 'from-green-500 to-green-600'
    },
    {
      title: 'Patike sa jastučićima',
      description: 'Maksimalna amortizacija za dugotrajnu udobnost',
      features: [
        'Visoka amortizacija za apsorpciju udara',
        'Idealne za duge staze i maraton',
        'Napredne tehnologije pene',
        'Lagane uprkos visokoj amortizaciji',
        'Odličan odziv i povrat energije'
      ],
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg',
      bgColor: 'from-purple-500 to-purple-600'
    }
  ];

  const topModels = [
    {
      name: 'Asics Novablast 5',
      description: 'Najlakša patika za svakodnevnu upotrebu sa FF Blast Max penom',
      specs: ['Pad: 8mm', 'Težina: 9.1 oz', 'Visina: 41.5mm'],
      image: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg'
    },
    {
      name: 'Brooks Glycerin Max',
      description: 'Maksimalna amortizacija sa 45mm visinom steka',
      specs: ['Pad: 6mm', 'Težina: 283g', 'Visina: 45mm'],
      image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg'
    },
    {
      name: 'HOKA Skyflow',
      description: 'Superkritična pena sa odličnim odzokom',
      specs: ['Pad: 5mm', 'Težina: 10 oz', 'Visina: 39mm'],
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Naši proizvodi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Profesionalne patike za trčanje za sve nivoe i stilove trčanja
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.bgColor} text-white rounded-full text-sm font-semibold`}>
                    Kategorija {index + 1}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Ključne karakteristike:</h3>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="primary" size="lg" className="mt-6">
                    Pogledaj modele
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative z-10">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className={`absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br ${category.bgColor} rounded-full opacity-20 blur-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najbolji modeli 2024
            </h2>
            <p className="text-xl text-gray-600">
              Naši najpreporučeniji modeli za različite stilove trčanja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">#{index + 1}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {model.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    Saznaj više
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Potreban vam je savet?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktirajte nas za personalizovanu preporuku patika na osnovu vašeg stila trčanja
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