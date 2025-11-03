import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface TransportData {
  type: string;
  distance: number;
  passengers: number;
}

interface TransportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TransportData & { co2Emission: number }) => void;
}

const TransportModal: React.FC<TransportModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<TransportData>({
    type: 'car',
    distance: 0,
    passengers: 1
  });

  // Fatores de emissão de CO2 por km (em gramas)
  const emissionFactors = {
    car: 120,        // Carro a gasolina
    electric_car: 40, // Carro elétrico
    bus: 80,         // Ônibus
    train: 30,       // Trem
    bike: 0,         // Bicicleta
    walk: 0,         // Caminhada
    motorcycle: 90,  // Motocicleta
    airplane: 250    // Avião
  };

  const transportTypes = [
    { value: 'car', label: t('dashboard.modals.transport.types.car'), icon: '🚗' },
    { value: 'electric_car', label: t('dashboard.modals.transport.types.electricCar'), icon: '⚡' },
    { value: 'bus', label: t('dashboard.modals.transport.types.bus'), icon: '🚌' },
    { value: 'train', label: t('dashboard.modals.transport.types.train'), icon: '🚊' },
    { value: 'motorcycle', label: t('dashboard.modals.transport.types.motorcycle'), icon: '🏍️' },
    { value: 'bike', label: t('dashboard.modals.transport.types.bike'), icon: '🚴' },
    { value: 'walk', label: t('dashboard.modals.transport.types.walk'), icon: '🚶' },
    { value: 'airplane', label: t('dashboard.modals.transport.types.airplane'), icon: '✈️' }
  ];

  const calculateCO2 = () => {
    const factor = emissionFactors[formData.type as keyof typeof emissionFactors];
    const totalEmission = (factor * formData.distance) / 1000; // Converter para kg
    return Number(totalEmission.toFixed(2));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const co2Emission = calculateCO2();
    onSubmit({ ...formData, co2Emission });
    setFormData({ type: 'car', distance: 0, passengers: 1 });
    onClose();
  };

  const handleInputChange = (field: keyof TransportData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'type' ? e.target.value : Number(e.target.value)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-800 flex items-center">
              <span className="mr-2">🚗</span>
              {t('dashboard.modals.transport.title')}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Tipo de Transporte */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                {t('dashboard.modals.transport.type')}
              </label>
              <select
                value={formData.type}
                onChange={handleInputChange('type')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                {transportTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Distância */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                {t('dashboard.modals.transport.distance')}
              </label>
              <input
                type="number"
                value={formData.distance || ''}
                onChange={handleInputChange('distance')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder={t('dashboard.modals.transport.distancePlaceholder')}
                step="0.1"
                min="0"
                required
              />
            </div>

            {/* Número de Passageiros */}
            {(formData.type === 'car' || formData.type === 'electric_car') && (
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  {t('dashboard.modals.transport.passengers')}
                </label>
                <input
                  type="number"
                  value={formData.passengers}
                  onChange={handleInputChange('passengers')}
                  className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  min="1"
                  max="8"
                  required
                />
                <p className="text-xs text-primary-600 mt-1">
                  {t('dashboard.modals.transport.passengersNote')}
                </p>
              </div>
            )}

            {/* Previsão de CO2 */}
            {formData.distance > 0 && (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h3 className="font-semibold text-primary-700 mb-2">
                  💨 {t('dashboard.modals.transport.prediction')}
                </h3>
                <div className="text-2xl font-bold text-primary-500">
                  {calculateCO2()} kg CO₂
                </div>
                <p className="text-sm text-primary-600">
                  Para {formData.distance} km com {transportTypes.find(t => t.value === formData.type)?.label}
                  {(formData.type === 'car' || formData.type === 'electric_car') && 
                    ` (${formData.passengers} passageiro${formData.passengers > 1 ? 's' : ''})`
                  }
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
                {t('common.cancel')}
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                disabled={formData.distance === 0}
              >
                {t('dashboard.modals.transport.register')}
              </button>
            </div>
          </form>

          {/* Dicas */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">💡 {t('dashboard.modals.transport.tips.title')}</h4>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• {t('dashboard.modals.transport.tips.bike')}</li>
              <li>• {t('dashboard.modals.transport.tips.public')}</li>
              <li>• {t('dashboard.modals.transport.tips.carpool')}</li>
              <li>• {t('dashboard.modals.transport.tips.electric')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportModal;