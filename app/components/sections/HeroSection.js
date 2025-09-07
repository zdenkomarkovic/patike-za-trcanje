import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function HeroSection({ 
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  image,
  stats
}) {
  return (
    <Section background="gradient-br" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {title}
              {subtitle && (
                <span className="block text-2xl lg:text-3xl font-normal text-blue-200 mt-2">
                  {subtitle}
                </span>
              )}
            </h1>
          </div>
          
          {description && (
            <p className="text-lg text-blue-50 leading-relaxed max-w-xl">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {primaryAction && (
              <Button 
                variant="secondary" 
                size="lg"
                className="group"
                onClick={primaryAction.onClick}
              >
                {primaryAction.text}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant="ghost" 
                size="lg"
                className="border-2 border-white/30 hover:border-white"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>

          {stats && (
            <div className="flex items-center gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="w-px h-12 bg-white/30 ml-6"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        )}
      </div>
    </Section>
  );
}