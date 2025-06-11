import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Não Perca Nenhuma Promoção!
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Receba em primeira mão as melhores ofertas e descontos exclusivos diretamente no seu email.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="w-full px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={subscribed}
            className="bg-white text-purple-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50"
          >
            {subscribed ? (
              <span>✓ Inscrito!</span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                <span>Inscrever</span>
              </>
            )}
          </button>
        </form>
        
        <p className="text-white/70 text-sm mt-4">
          * Sem spam, apenas as melhores ofertas. Cancele quando quiser.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;