// src/pages/index.tsx
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import FeatureCard from '../components/ui/FeatureCard';
import WorldCard from '../components/ui/WorldCard';
import Testimonial from '../components/ui/Testimonial';
import EventCard from '../components/ui/EventCard';
import StepCard from '../components/ui/StepCard';
import CtaSection from '../components/ui/CtaSection';
import NewsletterSection from '../components/ui/NewsletterSection';
import PartnersSection from '../components/ui/PartnersSection';

export default function Home() {
  // Dados para os componentes
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Comunidades Vibrantes",
      description: "Conecte-se com pessoas de todo o mundo, participe de grupos com interesses semelhantes e faça novas amizades em nossos espaços sociais.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    // Adicione os outros recursos aqui
  ];

  const worlds = [
    {
      id: "neon-city",
      title: "Neon City",
      description: "Uma metrópole futurista com luzes de neon, arranha-céus e uma vibrante vida noturna.",
      image: "/images/worlds/neon-city.jpg",
      visitors: 5234,
      tag: {
        text: "Popular",
        color: "blue" as const
      }
    },
    // Adicione os outros mundos aqui
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Usuária há 2 anos",
      content: "O 3D Life Virtual mudou completamente minha forma de socializar online. Fiz amigos de todo o mundo e até conheci meu parceiro aqui!",
      avatar: "/images/testimonials/user1.jpg",
      rating: 5
    },
    // Adicione os outros depoimentos aqui
  ];

  const events = [
    {
      id: "show-virtual",
      title: "Show Virtual: Banda Estrelas",
      description: "Um show exclusivo com a famosa Banda Estrelas, com efeitos visuais incríveis e interação com o público.",
      image: "/images/events/concert.jpg",
      date: "Sábado, 15 de Maio",
      time: "20:00",
      interested: 1250,
      isLive: true
    },
    // Adicione os outros eventos aqui
  ];

  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Crie sua conta",
      description: "Registre-se gratuitamente e personalize seu perfil e avatar para começar sua jornada.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      step: 1
    },
    // Adicione os outros passos aqui
  ];

  const partners = [
    { id: 1, name: "Parceiro 1", logo: "/images/partners/partner-1.png" },
    // Adicione os outros parceiros aqui
  ];

  return (
    <Layout>
      <HeroSection 
        title="Seu mundo virtual sem fronteiras"
        subtitle="Explore, crie e conecte-se em um universo digital onde sua imaginação é o limite."
        primaryButtonText="Comece sua jornada"
        primaryButtonLink="/registro"
        secondaryButtonText="Explorar mundos"
        secondaryButtonLink="/explorar"
        backgroundImage="/images/virtual-world-bg.jpg"
        foregroundImage="/images/3d-avatar.png"
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Uma experiência virtual completa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Worlds Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Mundos populares para explorar
            </h2>
            <Link href="/explorar" className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium flex items-center">
              Ver todos os mundos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {worlds.map((world) => (
              <WorldCard 
                key={world.id}
                id={world.id}
                title={world.title}
                description={world.description}
                image={world.image}
                visitors={world.visitors}
                tag={world.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resto das seções usando os componentes... */}

      <CtaSection 
        title="Pronto para começar sua jornada virtual?"
        description="Junte-se a milhares de usuários e descubra um novo mundo de possibilidades. Registre-se gratuitamente hoje mesmo!"
        primaryButtonText="Criar conta gratuita"
        primaryButtonLink="/registro"
        secondaryButtonText="Saiba mais"
        secondaryButtonLink="/sobre"
      />

      <NewsletterSection 
        title="Fique por dentro das novidades"
        description="Receba atualizações sobre novos mundos, eventos e recursos diretamente no seu e-mail."
      />

      <PartnersSection 
        title="Nossos parceiros"
        partners={partners}
      />
    </Layout>
  );
}
