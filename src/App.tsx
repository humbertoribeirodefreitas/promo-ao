import React, { useState } from 'react';
import { Sparkles, Filter, TrendingUp, Zap } from 'lucide-react';
import PromotionCard from './components/PromotionCard';
import FilterButton from './components/FilterButton';
import Newsletter from './components/Newsletter';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const promotions = [
    {
      id: 1,
      title: 'Smartphone Premium',
      description: 'O mais avançado smartphone com câmera tripla e 5G. Perfeito para fotografia e produtividade.',
      originalPrice: 2499.99,
      discountPrice: 1799.99,
      discount: 28,
      category: 'Eletrônicos',
      timeLeft: '2d 14h 32m',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
    },
    {
      id: 2,
      title: 'Notebook Gamer',
      description: 'Performance extrema para jogos e trabalho. Placa de vídeo dedicada e processador de última geração.',
      originalPrice: 4999.99,
      discountPrice: 3499.99,
      discount: 30,
      category: 'Eletrônicos',
      timeLeft: '1d 8h 15m',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 3,
      title: 'Tênis Esportivo Premium',
      description: 'Conforto e estilo para suas atividades. Tecnologia de amortecimento avançada.',
      originalPrice: 599.99,
      discountPrice: 299.99,
      discount: 50,
      category: 'Moda',
      timeLeft: '3d 22h 45m',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 4,
      title: 'Cafeteira Automática',
      description: 'Café perfeito na medida certa. Sistema de moagem integrado e controle por app.',
      originalPrice: 899.99,
      discountPrice: 629.99,
      discount: 30,
      category: 'Casa',
      timeLeft: '4d 6h 12m',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 5,
      title: 'Fones Wireless Premium',
      description: 'Som cristalino com cancelamento de ruído ativo. Bateria de longa duração.',
      originalPrice: 799.99,
      discountPrice: 479.99,
      discount: 40,
      category: 'Eletrônicos',
      timeLeft: '2d 18h 30m',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 6,
      title: 'Jaqueta de Couro',
      description: 'Estilo atemporal e qualidade premium. Couro genuíno com acabamento artesanal.',
      originalPrice: 1299.99,
      discountPrice: 779.99,
      discount: 40,
      category: 'Moda',
      timeLeft: '5d 12h 8m',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
  ];

  const categories = [
    { name: 'Todos', count: promotions.length },
    { name: 'Eletrônicos', count: promotions.filter(p => p.category === 'Eletrônicos').length },
    { name: 'Moda', count: promotions.filter(p => p.category === 'Moda').length },
    { name: 'Casa', count: promotions.filter(p => p.category === 'Casa').length },
  ];

  const filteredPromotions = activeFilter === 'Todos' 
    ? promotions 
    : promotions.filter(p => p.category === activeFilter);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Sparkles className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Promoções
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Imperdíveis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Descontos de até 50% nos melhores produtos. Ofertas por tempo limitado!
            </p>
            
            <div className="mb-8">
              <p className="text-white/80 mb-4 text-lg">Oferta Flash termina em:</p>
              <CountdownTimer targetDate={tomorrow.toISOString()} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Ver Ofertas
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Flash Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Todas as Promoções
            </h2>
            <p className="text-gray-600">
              {filteredPromotions.length} ofertas disponíveis
            </p>
          </div>
          
          <div className="flex items-center space-x-2 mt-6 lg:mt-0">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <FilterButton
                  key={category.name}
                  label={category.name}
                  active={activeFilter === category.name}
                  onClick={() => setActiveFilter(category.name)}
                  count={category.count}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPromotions.map((promotion) => (
            <PromotionCard key={promotion.id} {...promotion} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Promoções Premium. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;