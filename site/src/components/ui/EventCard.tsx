// src/components/ui/EventCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  interested: number;
  isLive?: boolean;
}

const EventCard = ({ id, title, description, image, date, time, interested, isLive }: EventCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
        />
        {isLive && (
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            AO VIVO
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date} • {time}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">{interested.toLocaleString()} interessados</span>
          <Link 
            href={`/eventos/${id}`} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Participar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
