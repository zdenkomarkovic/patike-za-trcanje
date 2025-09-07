import { SITE_CONFIG } from '@/app/constants/site';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function CTASection({ 
  title = "Spremni za vaše prvo trčanje?",
  description = "Kontaktirajte nas za savet o izboru pravih patika za vaš stil trčanja",
  primaryAction,
  secondaryAction
}) {
  const defaultPrimaryAction = {
    text: `Pozovite nas: ${SITE_CONFIG.company.phone}`,
    href: `tel:${SITE_CONFIG.company.phone.replace(/\s/g, '')}`
  };

  const defaultSecondaryAction = {
    text: "Pošaljite email",
    href: `mailto:${SITE_CONFIG.company.email}`
  };

  return (
    <Section background="gradient" className="text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary" 
            size="lg"
            href={(primaryAction || defaultPrimaryAction).href}
          >
            {(primaryAction || defaultPrimaryAction).text}
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="border-2 border-white/30 hover:border-white"
            href={(secondaryAction || defaultSecondaryAction).href}
          >
            {(secondaryAction || defaultSecondaryAction).text}
          </Button>
        </div>
      </div>
    </Section>
  );
}