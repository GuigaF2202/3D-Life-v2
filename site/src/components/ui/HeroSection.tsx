// src/components/ui/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
  foregroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
  foregroundImage
}: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src={backgroundImage} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryButtonLink} className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-center">
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonLink} className="px-8 py-4 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-lg transition-colors text-center">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
      
      {foregroundImage && (
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-full">
          <Image 
            src={foregroundImage} 
            alt="Foreground" 
            layout="fill" 
            objectFit="contain" 
            objectPosition="right bottom" 
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
