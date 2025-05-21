import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WorldCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ownerName: string;
  visitors: number;
  rating: number;
  className?: string;
}

export default function WorldCard({
  id,
  name,
  description,
  imageUrl,
  ownerName,
  visitors,
  rating,
  className = '',
}: WorldCardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <Link href={`/worlds/${id}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
            <h3 className="text-xl font-bold text-white truncate">{name}</h3>
            <p className="text-sm text-gray-300">por {ownerName}</p>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <p className="text-gray-300 text-sm line-clamp-2 h-10">{description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-300">{rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="ml-1 text-gray-300">{visitors}</span>
          </div>
          
          <Link
            href={`/worlds/${id}`}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Visitar
          </Link>
        </div>
      </div>
    </div>
  );
}