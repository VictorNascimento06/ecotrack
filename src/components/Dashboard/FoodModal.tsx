import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FoodData {
  type: string;
  portion: number;
  unit: string;
  meal: string;
}

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FoodData & { co2Emission: number }) => void;
}

const FoodModal: React.FC<FoodModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FoodData>({
    type: 'beef',
    portion: 100,
    unit: 'g',
    meal: 'lunch'
  });

  // Fatores de emissão de CO2 por 100g de alimento (em kg CO2)
  const emissionFactors = {
    beef: 6.0,          // Carne bovina
    pork: 1.2,          // Carne suína
    chicken: 0.9,       // Frango
    fish: 0.6,          // Peixe
    eggs: 0.4,          // Ovos
    dairy: 0.3,         // Laticínios
    rice: 0.4,          // Arroz
    beans: 0.1,         // Feijão
    vegetables: 0.05,   // Vegetais
    fruits: 0.03,       // Frutas
    bread: 0.2,         // Pão
    pasta: 0.1,         // Massa
    nuts: 0.3,          // Castanhas/nozes
    tofu: 0.2,          // Tofu
    plantMilk: 0.1      // Leite vegetal
  };

  const foodTypes = [
    { value: 'beef', label: 'Carne Bovina', icon: '🥩', category: 'Proteína Animal' },
    { value: 'pork', label: 'Carne Suína', icon: '🐷', category: 'Proteína Animal' },
    { value: 'chicken', label: 'Frango', icon: '🐔', category: 'Proteína Animal' },
    { value: 'fish', label: 'Peixe', icon: '🐟', category: 'Proteína Animal' },
    { value: 'eggs', label: 'Ovos', icon: '🥚', category: 'Proteína Animal' },
    { value: 'dairy', label: 'Laticínios', icon: '🧀', category: 'Proteína Animal' },
    { value: 'tofu', label: 'Tofu', icon: '🟡', category: 'Proteína Vegetal' },
    { value: 'beans', label: 'Feijão/Leguminosas', icon: '🫘', category: 'Proteína Vegetal' },
    { value: 'nuts', label: 'Castanhas/Nozes', icon: '🥜', category: 'Proteína Vegetal' },
    { value: 'rice', label: 'Arroz', icon: '🍚', category: 'Carboidratos' },
    { value: 'bread', label: 'Pão', icon: '🍞', category: 'Carboidratos' },
    { value: 'pasta', label: 'Massa', icon: '🍝', category: 'Carboidratos' },
    { value: 'vegetables', label: 'Vegetais', icon: '🥬', category: 'Vegetais' },
    { value: 'fruits', label: 'Frutas', icon: '🍎', category: 'Frutas' },
    { value: 'plantMilk', label: 'Leite Vegetal', icon: '🥛', category: 'Bebidas' }
  ];

  const meals = [
    { value: 'breakfast', label: 'Café da Manhã', icon: '🌅' },
    { value: 'lunch', label: 'Almoço', icon: '☀️' },
    { value: 'dinner', label: 'Jantar', icon: '🌙' },
    { value: 'snack', label: 'Lanche', icon: '🍎' }
  ];

  const units = [
    { value: 'g', label: 'gramas (g)' },
    { value: 'unidade', label: 'unidade' },
    { value: 'xícara', label: 'xícara' },
    { value: 'colher', label: 'colher de sopa' }
  ];

  const calculateCO2 = () => {
    const factor = emissionFactors[formData.type as keyof typeof emissionFactors];
    let portionInGrams = formData.portion;
    
    // Converter unidades para gramas
    switch (formData.unit) {
      case 'unidade':
        if (['eggs'].includes(formData.type)) portionInGrams = formData.portion * 50;
        else if (['bread'].includes(formData.type)) portionInGrams = formData.portion * 30;
        else portionInGrams = formData.portion * 100;
        break;
      case 'xícara':
        portionInGrams = formData.portion * 200;
        break;
      case 'colher':
        portionInGrams = formData.portion * 15;
        break;
    }
    
    const totalEmission = (factor * portionInGrams) / 100; // Factor é por 100g
    return Number(totalEmission.toFixed(3));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const co2Emission = calculateCO2();
    onSubmit({ ...formData, co2Emission });
    setFormData({ type: 'beef', portion: 100, unit: 'g', meal: 'lunch' });
    onClose();
  };

  const handleInputChange = (field: keyof FoodData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'portion' ? Number(e.target.value) : e.target.value
    }));
  };

  const getCurrentFood = () => foodTypes.find(f => f.value === formData.type);
  const getImpactLevel = () => {
    const emission = calculateCO2();
    if (emission < 0.1) return { level: 'Baixo', color: 'green', icon: '🌱' };
    if (emission < 0.5) return { level: 'Médio', color: 'yellow', icon: '⚠️' };
    return { level: 'Alto', color: 'red', icon: '🚨' };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-800 flex items-center">
              <span className="mr-2">🍽️</span>
              Registrar Refeição
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Refeição */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Refeição
              </label>
              <select
                value={formData.meal}
                onChange={handleInputChange('meal')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                {meals.map((meal) => (
                  <option key={meal.value} value={meal.value}>
                    {meal.icon} {meal.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tipo de Alimento */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Alimento
              </label>
              <select
                value={formData.type}
                onChange={handleInputChange('type')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                {['Proteína Animal', 'Proteína Vegetal', 'Carboidratos', 'Vegetais', 'Frutas', 'Bebidas'].map(category => (
                  <optgroup key={category} label={category}>
                    {foodTypes.filter(food => food.category === category).map((food) => (
                      <option key={food.value} value={food.value}>
                        {food.icon} {food.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Unidade */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Unidade
              </label>
              <select
                value={formData.unit}
                onChange={handleInputChange('unit')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantidade */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Quantidade
              </label>
              <input
                type="number"
                value={formData.portion || ''}
                onChange={handleInputChange('portion')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder={`Ex: 150`}
                step="1"
                min="1"
                required
              />
              <p className="text-xs text-primary-600 mt-1">
                {getCurrentFood()?.label} em {formData.unit}
              </p>
            </div>

            {/* Previsão de CO2 */}
            {formData.portion > 0 && (
              <div className={`border rounded-lg p-4 ${
                getImpactLevel().color === 'green' ? 'bg-green-50 border-green-200' :
                getImpactLevel().color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${
                  getImpactLevel().color === 'green' ? 'text-green-700' :
                  getImpactLevel().color === 'yellow' ? 'text-yellow-700' :
                  'text-red-700'
                }`}>
                  {getImpactLevel().icon} Impacto Ambiental
                </h3>
                <div className={`text-2xl font-bold ${
                  getImpactLevel().color === 'green' ? 'text-green-500' :
                  getImpactLevel().color === 'yellow' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {calculateCO2()} kg CO₂
                </div>
                <p className={`text-sm ${
                  getImpactLevel().color === 'green' ? 'text-green-600' :
                  getImpactLevel().color === 'yellow' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  Impacto: {getImpactLevel().level} • {formData.portion} {formData.unit} de {getCurrentFood()?.label}
                </p>
              </div>
            )}

            {/* Botões */}
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                disabled={formData.portion === 0}
              >
                Registrar Refeição
              </button>
            </div>
          </form>

          {/* Dicas */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">🌱 Dicas Sustentáveis</h4>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• Reduza carne vermelha: maior impacto ambiental</li>
              <li>• Prefira proteínas vegetais e frango</li>
              <li>• Alimentos locais e sazonais são melhores</li>
              <li>• Evite desperdício de comida</li>
              <li>• Uma refeição vegana pode reduzir 75% das emissões</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;