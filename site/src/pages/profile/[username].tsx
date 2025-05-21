import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import WorldCard from '@/components/WorldCard';

// Dados simulados de um perfil de usuário
const userData = {
  id: '101',
  username: 'LordCreator',
  name: 'Ricardo Oliveira',
  bio: 'Criador de mundos virtuais desde 2018. Especializado em ambientes medievais e fantásticos. Apaixonado por arquitetura histórica e mitologia.',
  avatarUrl: '/images/avatar-creator.jpg',
  coverUrl: '/images/profile-cover.jpg',
  location: 'São Paulo, Brasil',
  memberSince: 'Março 2023',
  stats: {
    followers: 328,
    following: 124,
    worlds: 5,
    favorites: 47,
  },
  badges: [
    { id: '1', name: 'Criador Destaque', icon: '🏆' },
    { id: '2', name: 'Arquiteto Master', icon: '🏛️' },
    { id: '3', name: 'Pioneiro', icon: '🚀' },
  ],
  worlds: [
    {
      id: '1',
      name: 'Mundo Medieval',
      description: 'Um vasto reino medieval com castelos, vilas e masmorras para explorar.',
      imageUrl: '/images/world-medieval.jpg',
      ownerName: 'LordCreator',
      visitors: 1245,
      rating: 4.7,
    },
    {
      id: '5',
      name: 'Cidade Steampunk',
      description: 'Uma cidade vitoriana com tecnologia a vapor avançada. Engrenagens, dirigíveis e máquinas fantásticas por toda parte.',
      imageUrl: '/images/world-steampunk.jpg',
      ownerName: 'LordCreator',
      visitors: 542,
      rating: 4.4,
    },
    {
      id: '9',
      name: 'Ruínas Antigas',
      description: 'Um templo em ruínas de uma civilização antiga, com quebra-cabeças e segredos para descobrir.',
      imageUrl: '/images/world-ruins.jpg',
      ownerName: 'LordCreator',
      visitors: 387,
      rating: 4.2,
    },
  ],
  favoriteWorlds: [
    {
      id: '2',
      name: 'Cyberpunk City',
      description: 'Uma metrópole futurista cheia de neon, tecnologia avançada e perigos.',
      imageUrl: '/images/world-cyberpunk.jpg',
      ownerName: 'NeonMaster',
      visitors: 982,
      rating: 4.5,
    },
    {
      id: '4',
      name: 'Estação Espacial',
      description: 'Uma estação espacial futurista orbitando um planeta desconhecido.',
      imageUrl: '/images/world-space.jpg',
      ownerName: 'StarGazer',
      visitors: 621,
      rating: 4.6,
    },
  ],
};

export default function ProfilePage() {
  const router = useRouter();
  const { username } = router.query;
  const [activeTab, setActiveTab] = useState('worlds');
  
  // Em uma aplicação real, você buscaria os dados do usuário com base no username
  // const { data: user, isLoading, error } = useQuery(['user', username], () => fetchUser(username));
  
  // Para simplificar, usamos os dados simulados
  const user = userData;
  
  // Se estivéssemos carregando dados reais
  // if (isLoading) return <div>Carregando...</div>;
  // if (error) return <div>Erro ao carregar o perfil</div>;
  // if (!user) return <div>Usuário não encontrado</div>;
  
  return (
    <Layout>
      <Head>
        <title>{user.username} | OpenSim World</title>
        <meta name="description" content={`Perfil de ${user.username} na plataforma OpenSim World.`} />
      </Head>
      
      {/* Capa do perfil */}
      <div className="relative h-64 bg-gray-800">
        {user.coverUrl && (
          <Image
            src={user.coverUrl}
            alt="Capa do perfil"
            fill
            className="object-cover opacity-70"
          />
        )}
      </div>
      
      {/* Informações do perfil */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 flex flex-col md:flex-row md:items-end md:space-x-6 pb-4 mb-4">
          {/* Avatar */}
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-gray-800">
            <Image
              src={user.avatarUrl}
              alt={user.username}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Informações básicas */}
          <div className="mt-4 md:mt-0 flex-1">
            <h1 className="text-3xl font-bold text-white">{user.name}</h1>
            <p className="text-gray-300">@{user.username}</p>
            <p className="text-gray-400 mt-1">
              {user.location} • Membro desde {user.memberSince}
            </p>
          </div>
          
          {/* Botões de ação */}
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button variant="primary" size="sm">
              Seguir
            </Button>
            <Button variant="secondary" size="sm">
              Mensagem
            </Button>
          </div>
        </div>
        
        {/* Bio e estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <Card>
              <h2 className="text-xl font-bold text-white mb-2">Sobre</h2>
              <p className="text-gray-300">{user.bio}</p>
              
              {user.badges && user.badges.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-white mb-2">Conquistas</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.badges.map((badge) => (
                      <div
                        key={badge.id}
                        className="flex items-center bg-gray-700 rounded-full px-3 py-1"
                      >
                        <span className="text-lg mr-1">{badge.icon}</span>
                        <span className="text-sm text-gray-200">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
          
          <div>
            <Card>
              <h2 className="text-xl font-bold text-white mb-4">Estatísticas</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-white">{user.stats.worlds}</p>
                  <p className="text-sm text-gray-400">Mundos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{user.stats.favorites}</p>
                  <p className="text-sm text-gray-400">Favoritos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{user.stats.followers}</p>
                  <p className="text-sm text-gray-400">Seguidores</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{user.stats.following}</p>
                  <p className="text-sm text-gray-400">Seguindo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Navegação por abas */}
        <div className="border-b border-gray-700 mb-6">
          <nav className="flex space-x-8">
            <button
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === 'worlds'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('worlds')}
            >
              Mundos Criados
            </button>
            <button
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('favorites')}
            >
              Favoritos
            </button>
          </nav>
        </div>
        
        {/* Conteúdo das abas */}
        {activeTab === 'worlds' && (
          <div>
            {user.worlds && user.worlds.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.worlds.map((world) => (
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
              <div className="text-center py-12">
                <p className="text-gray-400">Este usuário ainda não criou mundos.</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'favorites' && (
          <div>
            {user.favoriteWorlds && user.favoriteWorlds.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.favoriteWorlds.map((world) => (
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
              <div className="text-center py-12">
                <p className="text-gray-400">Este usuário ainda não adicionou mundos aos favoritos.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}