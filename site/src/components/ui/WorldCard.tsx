// src/components/ui/WorldCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface WorldCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  visitors: number;
  tag?: {
    text: string;
    color: 'blue' | 'green' | 'purple' | 'red';
  };
}

const WorldCard = ({ id, title, description, image, visitors, tag }: WorldCardProps) => {
  const tagColors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
        />
        {tag && (
          <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${tagColors[tag.color]}`}>
            {tag.text}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{visitors.toLocaleString()} visitantes</span>
          <Link 
            href={`/mundos/${id}`} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Visitar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorldCard;
