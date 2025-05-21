// src/components/ui/AvatarCarousel.tsx (corrigido)
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AvatarCarouselProps {
  onGenderSelect: (gender: 'male' | 'female') => void;
  initialGender?: 'male' | 'female';
}

const AvatarCarousel = ({ onGenderSelect, initialGender = 'female' }: AvatarCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialGender === 'female' ? 0 : 1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const avatars = [
    {
      gender: 'female',
      src: '/images/assets/female.jpg',
      alt: 'Avatar Feminino',
      title: 'Avatar Feminino',
      description: 'Escolha este avatar para uma experiência feminina no mundo virtual.'
    },
    {
      gender: 'male',
      src: '/images/assets/male.jpg',
      alt: 'Avatar Masculino',
      title: 'Avatar Masculino',
      description: 'Escolha este avatar para uma experiência masculina no mundo virtual.'
    }
  ];

  useEffect(() => {
    onGenderSelect(currentIndex === 0 ? 'female' : 'male');
  }, [currentIndex, onGenderSelect]);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => (prev === 0 ? avatars.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => (prev === avatars.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleRadioChange = (index: number) => {
    if (currentIndex !== index && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Escolha o gênero do seu avatar:
      </label>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="relative w-full max-w-md mx-auto">
          <div className="overflow-hidden rounded-lg shadow-md">
            {/* Container para os avatares */}
            <div className="relative h-[500px]">
              {avatars.map((avatar, index) => (
                <div 
                  key={avatar.gender}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={avatar.src} 
                      alt={avatar.alt} 
                      fill
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center center' 
                      }}
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botões de navegação */}
            <button 
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20"
              disabled={isTransitioning}
            >
              <span className="sr-only">Anterior</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20"
              disabled={isTransitioning}
            >
              <span className="sr-only">Próximo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicadores */}
          <div className="mt-4 flex justify-center space-x-2">
            {avatars.map((_, index) => (
              <button
                key={`indicator-${index}`}
                type="button"
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => handleRadioChange(index)}
                disabled={isTransitioning}
              >
                <span className="sr-only">Avatar {index === 0 ? 'Feminino' : 'Masculino'}</span>
              </button>
            ))}
          </div>
          
          {/* Informações do avatar */}
          <div className="mt-4 text-center min-h-[80px]">
            <div 
              key={`avatar-info-${currentIndex}`} 
              className="animate-fade-in"
            >
              <h5 className="font-medium text-lg">{avatars[currentIndex].title}</h5>
              <p className="text-sm text-gray-600">{avatars[currentIndex].description}</p>
            </div>
          </div>
          
          {/* Seleção por botões de rádio */}
          <div className="mt-4 flex justify-center space-x-6">
            {avatars.map((avatar, index) => (
              <label key={avatar.gender} className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={avatar.gender}
                  checked={currentIndex === index}
                  onChange={() => handleRadioChange(index)}
                  className="form-radio h-5 w-5 text-blue-600"
                  disabled={isTransitioning}
                />
                <span className="ml-2 text-gray-700">{index === 0 ? 'Feminino' : 'Masculino'}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCarousel;
