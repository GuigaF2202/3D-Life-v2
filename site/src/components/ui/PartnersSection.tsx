// src/components/ui/PartnersSection.tsx
import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

interface PartnersSectionProps {
  title: string;
  partners: Partner[];
}

const PartnersSection = ({ title, partners }: PartnersSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={120} 
                height={60} 
                objectFit="contain" 
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
