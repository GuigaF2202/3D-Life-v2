// src/components/ui/FeatureCard.tsx
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  bgColor = "bg-blue-100", 
  iconColor = "text-blue-600" 
}: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-6`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
