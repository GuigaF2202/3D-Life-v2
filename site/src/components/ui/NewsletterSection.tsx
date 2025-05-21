// src/components/ui/NewsletterSection.tsx
import { useState } from 'react';

interface NewsletterSectionProps {
  title: string;
  description: string;
  placeholder?: string;
  buttonText?: string;
  disclaimer?: string;
}

const NewsletterSection = ({
  title,
  description,
  placeholder = "Seu e-mail",
  buttonText = "Inscrever-se",
  disclaimer = "Ao se inscrever, você concorda com nossa Política de Privacidade. Você pode cancelar a inscrição a qualquer momento."
}: NewsletterSectionProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar o e-mail para a API
    console.log('Email inscrito:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inscrição realizada com sucesso!</h3>
              <p className="text-gray-600">Obrigado por se inscrever. Você receberá nossas atualizações em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                {buttonText}
              </button>
            </form>
          )}
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
