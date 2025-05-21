import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function CreateWorldPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    tags: '',
    isPrivate: false,
    allowVisitors: true,
    thumbnail: null,
    thumbnailPreview: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        thumbnail: file,
        thumbnailPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em uma aplicação real, aqui você enviaria os dados para o servidor
    console.log('Dados do formulário:', formData);
    alert('Mundo criado com sucesso! (simulado)');
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <Head>
        <title>Criar Novo Mundo | OpenSim World</title>
        <meta name="description" content="Crie seu próprio mundo virtual 3D na plataforma OpenSim World." />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Criar Novo Mundo</h1>

        {/* Barra de progresso */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1">
              <div className="relative">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: `${(step / 3) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <div className={`${step >= 1 ? 'text-blue-400' : ''}`}>Informações Básicas</div>
            <div className={`${step >= 2 ? 'text-blue-400' : ''}`}>Configurações</div>
            <div className={`${step >= 3 ? 'text-blue-400' : ''}`}>Revisão</div>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            {/* Passo 1: Informações Básicas */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Informações Básicas</h2>
                
                <div className="space-y-6">
                  <Input
                    label="Nome do Mundo"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Mundo Medieval"
                    required
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Descrição
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white sm:text-sm"
                      placeholder="Descreva seu mundo..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Categoria
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white sm:text-sm"
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="rpg">RPG</option>
                      <option value="sci-fi">Sci-Fi</option>
                      <option value="fantasy">Fantasia</option>
                      <option value="social">Social</option>
                      <option value="game">Jogos</option>
                      <option value="education">Educação</option>
                    </select>
                  </div>
                  
                  <Input
                    label="Tags (separadas por vírgula)"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="Ex: medieval, castelo, aventura"
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Imagem de Capa
                    </label>
                    <div className="mt-1 flex items-center">
                      <div className="flex-shrink-0">
                        {formData.thumbnailPreview ? (
                          <div className="relative h-32 w-32 rounded-md overflow-hidden">
                            <img
                              src={formData.thumbnailPreview}
                              alt="Thumbnail preview"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-32 w-32 rounded-md bg-gray-600 flex items-center justify-center">
                            <svg
                              className="h-12 w-12 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="relative bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm">
                          <input
                            type="file"
                            name="thumbnail"
                            id="thumbnail"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <label htmlFor="thumbnail" className="pointer-events-none">
                            <span className="text-gray-300 text-sm">Escolher arquivo</span>
                          </label>
                        </div>
                        <p className="mt-1 text-xs text-gray-400">
                          PNG, JPG, GIF até 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}
            
            {/* Passo 2: Configurações */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Configurações</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      id="isPrivate"
                      name="isPrivate"
                      type="checkbox"
                      checked={formData.isPrivate}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                    <label htmlFor="isPrivate" className="ml-2 block text-sm text-gray-300">
                      Mundo privado (apenas visível para pessoas convidadas)
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="allowVisitors"
                      name="allowVisitors"
                      type="checkbox"
                      checked={formData.allowVisitors}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                    <label htmlFor="allowVisitors" className="ml-2 block text-sm text-gray-300">
                      Permitir visitantes (pessoas podem entrar sem convite)
                    </label>
                  </div>
                  
                  <div>
                    <h3 className="text-md font-medium text-white mb-2">Opções Avançadas</h3>
                    <div className="bg-gray-700 p-4 rounded-md">
                      <p className="text-sm text-gray-300">
                        As opções avançadas estarão disponíveis após a criação do mundo básico.
                        Você poderá configurar:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                        <li>Física e gravidade</li>
                        <li>Ciclo de dia/noite</li>
                        <li>Clima e efeitos ambientais</li>
                        <li>Permissões de construção</li>
                        <li>Comportamento de NPCs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}
            
            {/* Passo 3: Revisão */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-6">Revisar e Criar</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-700 p-4 rounded-md">
                    <h3 className="text-md font-medium text-white mb-2">Resumo do Mundo</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-400">Nome:</p>
                        <p className="text-white">{formData.name || 'Não definido'}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-400">Categoria:</p>
                        <p className="text-white">{formData.category || 'Não definida'}</p>
                      </div>
                      
                      <div className="md:col-span-2">
                        <p className="text-sm font-medium text-gray-400">Descrição:</p>
                        <p className="text-white">{formData.description || 'Não definida'}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-400">Tags:</p>
                        <p className="text-white">{formData.tags || 'Não definidas'}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-400">Visibilidade:</p>
                        <p className="text-white">{formData.isPrivate ? 'Privado' : 'Público'}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-400">Visitantes:</p>
                        <p className="text-white">{formData.allowVisitors ? 'Permitidos' : 'Apenas convidados'}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-400">Imagem de Capa:</p>
                        {formData.thumbnailPreview ? (
                          <div className="relative h-20 w-20 rounded-md overflow-hidden mt-1">
                            <img
                              src={formData.thumbnailPreview}
                              alt="Thumbnail preview"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <p className="text-white">Não definida</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 p-4 rounded-md">
                    <h3 className="text-md font-medium text-white mb-2">Próximos Passos</h3>
                    <p className="text-sm text-gray-300">
                      Após criar seu mundo, você poderá:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                      <li>Acessar o editor 3D para construir seu ambiente</li>
                      <li>Adicionar objetos e elementos interativos</li>
                      <li>Configurar comportamentos e scripts</li>
                      <li>Convidar amigos para colaborar ou visitar</li>
                      <li>Publicar seu mundo na comunidade</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                  >
                    Criar Mundo
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </Layout>
  );
}