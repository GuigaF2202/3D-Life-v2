// src/components/Header.tsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLoginOpen) setIsLoginOpen(false);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login aqui
    setIsLoginOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="3D Life Virtual" 
                width={150} 
                height={45} 
                priority
              />
            </Link>
          </div>

          {/* Menu de navegação para desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                router.pathname === '/' ? 'font-semibold text-blue-600' : ''
              }`}
            >
              Início
            </Link>
            <Link 
              href="/explorar" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                router.pathname === '/explorar' ? 'font-semibold text-blue-600' : ''
              }`}
            >
              Explorar
            </Link>
            <Link 
              href="/eventos" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                router.pathname === '/eventos' ? 'font-semibold text-blue-600' : ''
              }`}
            >
              Eventos
            </Link>
            <Link 
              href="/sobre" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                router.pathname === '/sobre' ? 'font-semibold text-blue-600' : ''
              }`}
            >
              Sobre
            </Link>
          </nav>

          {/* Botões de autenticação */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLogin}
              className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Entrar
            </button>
            <Link 
              href="/registro" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Cadastrar
            </Link>
          </div>

          {/* Botão de menu para mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            >
              <span className="sr-only">Abrir menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-3 py-3">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md ${
                  router.pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/explorar" 
                className={`px-3 py-2 rounded-md ${
                  router.pathname === '/explorar' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Explorar
              </Link>
              <Link 
                href="/eventos" 
                className={`px-3 py-2 rounded-md ${
                  router.pathname === '/eventos' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link 
                href="/sobre" 
                className={`px-3 py-2 rounded-md ${
                  router.pathname === '/sobre' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 text-blue-600"
                >
                  Entrar
                </button>
                <Link 
                  href="/registro" 
                  className="block px-3 py-2 mt-1 bg-blue-600 text-white rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cadastrar
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Modal de Login */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsLoginOpen(false)}></div>
            
            <div className="relative bg-white rounded-lg max-w-md w-full mx-auto shadow-xl">
              <div className="absolute top-3 right-3">
                <button 
                  onClick={() => setIsLoginOpen(false)} 
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <Image 
                    src="/images/logo.png" 
                    alt="3D Life Virtual" 
                    width={150} 
                    height={45} 
                    priority
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-6">Entrar na sua conta</h3>
                
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <Link href="/esqueci-senha" className="text-sm text-blue-600 hover:text-blue-800">
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Entrar
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Ainda não tem uma conta?{' '}
                    <Link 
                      href="/registro" 
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      Cadastre-se
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
