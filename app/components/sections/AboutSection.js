import Image from 'next/image';
import Section from '../ui/Section';

export default function AboutSection() {
  return (
    <Section>
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
    </Section>
  );
}