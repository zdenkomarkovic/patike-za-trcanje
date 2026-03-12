import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Marko Petrović",
    role: "Rekreativni trkač",
    text: "Sesame Shop mi je pomogao da pronađem savršene patike za moj prvi polumaraton. Stručni savet i odlična usluga – preporučujem svima!",
    rating: 5,
    initials: "MP",
  },
  {
    name: "Ana Jovanović",
    role: "Maratonac",
    text: "Odličan izbor brendova i uvek tačne informacije o modelima. Kupujem ovde već 3 godine i nikad nisam bila razočarana.",
    rating: 5,
    initials: "AJ",
  },
  {
    name: "Stefan Nikolić",
    role: "Trail trkač",
    text: "Konačno prodavnica koja zaista razume potrebe trkača. Dobio sam sjajan savet za trail patike koje mi savršeno odgovaraju.",
    rating: 5,
    initials: "SN",
  },
  {
    name: "Jovana Milić",
    role: "Početnik u trčanju",
    text: "Nisam znala ništa o patikama za trčanje, a ovde su mi strpljivo objasnili sve što treba. Odlična iskustvo od prvog do poslednjeg koraka!",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Nemanja Đorđević",
    role: "Ultramaraton trkač",
    text: "Jedino mesto gde uvek mogu da nađem ono što tražim. Poznavanje brendova i modela je na nivou – pravi stručnjaci.",
    rating: 5,
    initials: "NĐ",
  },
  {
    name: "Milica Stojanović",
    role: "Fitnes entuzijasta",
    text: "Brza dostava, savršeno pakovanje i patike koje su odmah odgovarale opisu. Više ne kupujem nigde drugde!",
    rating: 5,
    initials: "MS",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-8 md:py-16 bg-[#3a2d6a] text-white">
      <div className="container mx-auto px-2 md:px-10">
        <SectionHeader
          title="Šta kažu naši kupci?"
          description="Iskustva zadovoljnih trkača koji su pronašli svoje savršene patike."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#e6e0f8] rounded-2xl p-8 flex flex-col relative"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-[#494179] opacity-30 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="text-[#494179] mb-6 flex-1 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#494179] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#494179]">{t.name}</p>
                  <p className="text-sm text-[#494179] opacity-70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
