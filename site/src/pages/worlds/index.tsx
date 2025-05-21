import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import WorldCard from '@/components/WorldCard';

// Dados simulados de mundos
const allWorlds = [
  {
    id: '1',
    name: 'Mundo Medieval',
    description: 'Um vasto reino medieval com castelos, vilas e masmorras para explorar. Participe de missões, conheça NPCs e interaja com outros jogadores.',
    imageUrl: '/images/world-medieval.jpg',
    ownerName: 'LordCreator',
    visitors: 1245,
    rating: 4.7,
    category: 'rpg',
  },
  {
    id: '2',
    name: 'Cyberpunk City',
    description: 'Uma metrópole futurista cheia de neon, tecnologia avançada e perigos. Explore os becos escuros, bares clandestinos e arranha-céus.',
    imageUrl: '/images/world-cyberpunk.jpg',
    ownerName: 'NeonMaster',
    visitors: 982,
    rating: 4.5,
    category: 'sci-fi',
  },
  {
    id: '3',
    name: 'Ilha Tropical',
    description: 'Um paraíso tropical com praias de areia branca, águas cristalinas e vegetação exuberante. Relaxe, nade, mergulhe e participe de festas na praia.',
    imageUrl: '/images/world-tropical.jpg',
    ownerName: 'BeachLover',
    visitors: 753,
    rating: 4.3,
    category: 'social',
  },
  {
    id: '4',
    name: 'Estação Espacial',
    description: 'Uma estação espacial futurista orbitando um planeta desconhecido. Explore módulos científicos, observe o espaço e interaja com tecnologias avançadas.',
    imageUrl: '/images/world-space.jpg',
    ownerName: 'StarGazer',
    visitors: 621,
    rating: 4.6,
    category: 'sci-fi',
  },
  {
    id: '5',
    name: 'Cidade Steampunk',
    description: 'Uma cidade vitoriana com tecnologia a vapor avançada. Engrenagens, dirigíveis e máquinas fantásticas por toda parte.',
    imageUrl: '/images/world-steampunk.jpg',
    ownerName: 'GearMaster',
    visitors: 542,
    rating: 4.4,
    category: 'fantasy',
  },
  {
    id: '6',
    name: 'Floresta Encantada',
    description: 'Uma floresta mágica habitada por criaturas místicas. Árvores gigantes, cogumelos luminosos e cabanas nas árvores criam um ambiente mágico.',
    imageUrl: '/images/world-forest.jpg',
    ownerName: 'NatureSpirit',
    visitors: 487,
    rating: 4.2,
    category: 'fantasy',
  },
  {
    id: '7',
    name: 'Arena de Combate',
    description: 'Uma arena para duelos e torneios. Teste suas habilidades contra outros jogadores ou desafie NPCs em combates épicos.',
    imageUrl: '/images/world-arena.jpg',
    ownerName: 'BattleMaster',
    visitors: 832,
    rating: 4.5,
    category: 'game',
  },
  {
    id: '8',
    name: 'Galeria de Arte Virtual',
    description: 'Um espaço dedicado à arte digital e tradicional. Explore exposições, conheça artistas e participe de eventos culturais.',
    imageUrl: '/images/world-gallery.jpg',
    ownerName: 'ArtCurator',
    visitors: 412,
    rating: 4.8,
    category: 'education',
  },
];

// Categorias disponíveis
const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'rpg', name: 'RPG' },
  { id: 'sci-fi', name: 'Sci-Fi' },
  { id: 'fantasy', name: 'Fantasia' },
  { id: 'social', name: 'Social' },
  { id: 'game', name: 'Jogos' },
  { id: 'education', name: 'Educação' },
];

// Opções de ordenação
const sortOptions = [
  { id: 'popular', name: 'Mais Populares' },
  { id: 'rating', name: 'Melhor Avaliados' },
  { id: 'newest', name: 'Mais Recentes' },
];

export default function WorldsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar mundos por categoria e pesquisa
  const filteredWorlds = allWorlds.filter((world) => {
    const matchesCategory = selectedCategory === 'all' || world.category === selectedCategory;
    const matchesSearch = world.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          world.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Ordenar mundos
  const sortedWorlds = [...filteredWorlds].sort((a, b) => {
    if (sortBy === 'popular') return b.visitors - a.visitors;
    if (sortBy === 'rating') return b.rating - a.rating;
    // Para 'newest', em uma aplicação real usaríamos a data de criação
    return 0;
  });

  return (
    <Layout>
      <Head>
        <title>Explorar Mundos | OpenSim World</title>
        <meta name="description" content="Explore mundos virtuais 3D criados pela comunidade OpenSim World." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Explorar Mundos</h1>
          
          <div className="w-full md:w-auto">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Buscar mundos..."
                className="block w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
          <div className="flex overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md mr-2 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="flex-shrink-0">
            <select
              className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {sortedWorlds.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedWorlds.map((world) => (
              <WorldCard
                key={world.id}
                id={world.id}
                name={world.name}
                description={world.description}
                imageUrl={world.imageUrl}
                ownerName={world.ownerName}
                visitors={world.visitors}
                rating={world.rating}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-white">Nenhum mundo encontrado</h3>
            <p className="mt-1 text-gray-400">
              Tente ajustar seus filtros ou termos de busca.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}