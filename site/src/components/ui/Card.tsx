import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  hoverable?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  padding = 'md',
  bordered = false,
  hoverable = false,
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  return (
    <div 
      className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        bordered ? 'border border-gray-700' : ''
      } ${
        hoverable ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl' : ''
      } ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}