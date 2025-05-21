// src/components/ui/StepCard.tsx
import { ReactNode } from 'react';

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
  step: number;
}

const StepCard = ({ 
  icon, 
  title, 
  description, 
  bgColor = "bg-blue-100", 
  iconColor = "text-blue-600",
  step 
}: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
          {step}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
