import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';

interface PromotionCardProps {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  category: string;
  timeLeft: string;
  image: string;
  featured?: boolean;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  description,
  originalPrice,
  discountPrice,
  discount,
  category,
  timeLeft,
  image,
  featured = false,
}) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-600">
              R$ {discountPrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              R$ {originalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-orange-600 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span className="font-medium">{timeLeft}</span>
          </div>
          <div className="flex items-center text-green-600 text-sm">
            <Tag className="w-4 h-4 mr-1" />
            <span>Oferta Limitada</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group">
          <span>Aproveitar Oferta</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;