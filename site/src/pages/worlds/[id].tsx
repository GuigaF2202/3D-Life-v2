import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import WorldViewer from '@/components/WorldViewer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Dados simulados de um mundo específico
const worldData = {
  id: '1',
  name: 'Mundo Medieval',
  description: 'Um vasto reino medieval com castelos, vilas e masmorras para explorar. Participe de missões, conheça NPCs e interaja com outros jogadores em um ambiente imersivo inspirado na Europa medieval. Explore florestas densas, montanhas nevadas e cavernas misteriosas enquanto constrói sua reputação no reino.',
  longDescription: 'Bem-vindo ao Mundo Medieval, uma recriação detalhada de um reino medieval europeu do século XIII. Este mundo foi meticulosamente construído para oferecer uma experiência imersiva e autêntica.

Ao explorar este mundo, você encontrará:

- Um castelo principal com salão do trono, masmorras, torres de vigia e aposentos reais
- Uma vila com mercado, taverna, ferreiro, padaria e casas de camponeses
- Florestas densas habitadas por criaturas místicas
- Montanhas com cavernas para explorar
- Um rio serpenteante com pontes de pedra
- Campos de treinamento para cavaleiros
- Uma igreja medieval com vitrais detalhados

O mundo possui ciclo de dia e noite, sistema climático dinâmico e NPCs interativos que seguem rotinas diárias. Você pode participar de missões, comercializar com mercadores, treinar habilidades de combate ou simplesmente explorar o ambiente rico em detalhes.',
  imageUrl: '/images/world-medieval.jpg',
  galleryImages: [
    '/images/medieval-castle.jpg',
    '/images/medieval-village.jpg',
    '/images/medieval-forest.jpg',
    '/images/medieval-tavern.jpg',
  ],
  owner: {
    id: '101',
    name: 'LordCreator',
    avatarUrl: '/images/avatar-creator.jpg',
    worldsCount: 5,
    memberSince: 'Março 2023',
  },
  stats: {
    visitors: 1245,
    favorites: 328,
    rating: 4.7,
    reviewsCount: 87,
  },
  reviews: [
    {
      id: '201',
      user: {
        name: 'KnightExplorer',
        avatarUrl: '/images/avatar-knight.jpg',
      },
      rating: 5,
      date: '2023-05-01',
      text: 'Incrível atenção aos detalhes! O castelo é impressionante e a vila tem tanta vida. Passei horas explorando cada canto.',
    },
    {
      id: '202',
      user: {
        name: 'AdventureSeeker',
        avatarUrl: '/images/avatar-adventurer.jpg',
      },
      rating: 4,
      date: '2023-04-22',
      text: 'Um dos melhores mundos medievais que já visitei. A arquitetura é autêntica e os NPCs são interessantes. Só faltou mais missões.',
    },
    {
      id: '203',
      user: {
        name: 'HistoryBuff',
        avatarUrl: '/images/avatar-history.jpg',
      },
      rating: 5,
      date: '2023-04-15',
      text: 'Como historiador, fiquei impressionado com a precisão histórica deste mundo. Os detalhes nas construções, roupas e ferramentas são muito bem pesquisados.',
    },
  ],
  tags: ['medieval', 'rpg', 'fantasia', 'castelo', 'aventura'],
  createdAt: '2023-03-15',
  updatedAt: '2023-05-02',
  version: '1.5',
};

export default function WorldDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState(0);

  // Em uma aplicação real, você buscaria os dados do mundo com base no ID
  // const { data: world, isLoading, error } = useQuery(['world', id], () => fetchWorld(id));

  // Para simplificar, usamos os dados simulados
  const world = worldData;

  // Se estivéssemos carregando dados reais
  // if (isLoading) return <div>Carregando...</div>;
  // if (error) return <div>Erro ao carregar o mundo</div>;
  // if (!world) return <div>Mundo não encontrado</div>;

  return (
    <Layout>
      <Head>
        <title>{world.name} | OpenSim World</title>
        <meta name="description" content={world.description} />
      </Head>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">{world.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <Image
                    src={world.owner.avatarUrl}
                    alt={world.owner.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-gray-300">por {world.owner.name}</span>
                </div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-300">{world.stats.rating} ({world.stats.reviewsCount} avaliações)</span>
                </div>
                <span className="mx-2 text-gray-500">•</span>
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="ml-1 text-gray-300">{world.stats.visitors} visitantes</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button
                variant="primary"
                size="md"
                className="flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Entrar no Mundo
              </Button>
              
              <Button
                variant="secondary"
                size="md"
                className="flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Favoritar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Visualizador 3D */}
            <Card className="mb-8 p-0">
              <WorldViewer worldId={world.id} className="h-[400px]" />
            </Card>
            
            {/* Navegação por abas */}
            <div className="border-b border-gray-700 mb-6">
              <nav className="flex space-x-8">
                <button
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${
                    activeTab === 'about'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('about')}
                >
                  Sobre
                </button>
                <button
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${
                    activeTab === 'gallery'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('gallery')}
                >
                  Galeria
                </button>
                <button
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${
                    activeTab === 'reviews'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Avaliações ({world.stats.reviewsCount})
                </button>
              </nav>
            </div>
            
            {/* Conteúdo das abas */}
            {activeTab === 'about' && (
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Sobre este mundo</h2>
                <div className="text-gray-300 whitespace-pre-line">
                  {world.longDescription}
                </div>
                
                <h3 className="text-xl font-bold text-white mt-8 mb-4">Detalhes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Criado em</h4>
                    <p className="text-white">{world.createdAt}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Última atualização</h4>
                    <p className="text-white">{world.updatedAt}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Versão</h4>
                    <p className="text-white">{world.version}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Tags</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {world.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-700 rounded-md text-sm text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'gallery' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Galeria</h2>
                
                {/* Imagem principal */}
                <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={world.galleryImages[selectedImage]}
                    alt={`${world.name} - Imagem ${selectedImage + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Miniaturas */}
                <div className="grid grid-cols-4 gap-4">
                  {world.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-20 rounded-md overflow-hidden cursor-pointer ${
                        selectedImage === index ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`${world.name} - Miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Avaliações</h2>
                
                <div className="space-y-6">
                  {world.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-700 pb-6">
                      <div className="flex items-start">
                        <Image
                          src={review.user.avatarUrl}
                          alt={review.user.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h4 className="font-medium text-white">{review.user.name}</h4>
                            <span className="ml-2 text-sm text-gray-400">{review.date}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-5 w-5 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-600'
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="mt-2 text-gray-300">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button variant="secondary" fullWidth>
                    Ver todas as avaliações
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
                       {/* Informações do criador */}
            <Card className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Criador</h3>
              <div className="flex items-center">
                <Image
                  src={world.owner.avatarUrl}
                  alt={world.owner.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-white">{world.owner.name}</h4>
                  <p className="text-sm text-gray-400">Membro desde {world.owner.memberSince}</p>
                  <p className="text-sm text-gray-400">{world.owner.worldsCount} mundos criados</p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="secondary" size="sm" fullWidth>
                  Ver perfil
                </Button>
              </div>
            </Card>
            
            {/* Estatísticas */}
            <Card className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Estatísticas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Visitantes</p>
                  <p className="text-2xl font-bold text-white">{world.stats.visitors}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Favoritos</p>
                  <p className="text-2xl font-bold text-white">{world.stats.favorites}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avaliação</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-white mr-1">{world.stats.rating}</p>
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Avaliações</p>
                  <p className="text-2xl font-bold text-white">{world.stats.reviewsCount}</p>
                </div>
              </div>
            </Card>
            
            {/* Ações */}
            <Card className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Ações</h3>
              <div className="space-y-3">
                <Button variant="primary" fullWidth>
                  Entrar no Mundo
                </Button>
                <Button variant="secondary" fullWidth>
                  Adicionar aos Favoritos
                </Button>
                <Button variant="secondary" fullWidth>
                  Compartilhar
                </Button>
                <Button variant="secondary" fullWidth>
                  Reportar Problema
                </Button>
              </div>
            </Card>
            
            {/* Mundos relacionados */}
            <Card>
              <h3 className="text-xl font-bold text-white mb-4">Mundos Relacionados</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src="/images/world-castle.jpg"
                      alt="Castelo Imperial"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Castelo Imperial</h4>
                    <p className="text-sm text-gray-400">por RoyalBuilder</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src="/images/world-village.jpg"
                      alt="Vila Encantada"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Vila Encantada</h4>
                    <p className="text-sm text-gray-400">por MagicMaker</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src="/images/world-dungeon.jpg"
                      alt="Masmorra das Sombras"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Masmorra das Sombras</h4>
                    <p className="text-sm text-gray-400">por DungeonMaster</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}