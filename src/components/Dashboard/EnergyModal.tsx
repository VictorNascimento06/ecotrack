import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface EnergyData {
  type: string;
  consumption: number;
  unit: string;
  period: string;
}

interface EnergyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EnergyData & { co2Emission: number }) => void;
}

const EnergyModal: React.FC<EnergyModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<EnergyData>({
    type: 'electricity',
    consumption: 0,
    unit: 'kWh',
    period: 'daily'
  });

  // Fatores de emissão de CO2 por unidade (em kg CO2)
  const emissionFactors = {
    electricity: 0.47,    // kg CO2 por kWh (média Brasil)
    naturalGas: 2.04,     // kg CO2 por m³
    lpg: 3.03,           // kg CO2 por kg de GLP
    diesel: 2.69,        // kg CO2 por litro
    solar: 0.05,         // kg CO2 por kWh (ciclo de vida)
    heating: 0.3         // kg CO2 por kWh (aquecimento elétrico)
  };

  const energyTypes = [
    { value: 'electricity', label: t('dashboard.modals.energy.types.electricity'), icon: '💡', unit: 'kWh' },
    { value: 'naturalGas', label: t('dashboard.modals.energy.types.naturalGas'), icon: '🔥', unit: 'm³' },
    { value: 'lpg', label: t('dashboard.modals.energy.types.lpg'), icon: '🍳', unit: 'kg' },
    { value: 'solar', label: t('dashboard.modals.energy.types.solar'), icon: '☀️', unit: 'kWh' },
    { value: 'heating', label: t('dashboard.modals.energy.types.heating'), icon: '🌡️', unit: 'kWh' },
    { value: 'diesel', label: t('dashboard.modals.energy.types.diesel'), icon: '⚡', unit: 'L' }
  ];

  const periods = [
    { value: 'daily', label: t('dashboard.modals.energy.periods.daily'), multiplier: 1 },
    { value: 'weekly', label: t('dashboard.modals.energy.periods.weekly'), multiplier: 7 },
    { value: 'monthly', label: t('dashboard.modals.energy.periods.monthly'), multiplier: 30 }
  ];

  const calculateCO2 = () => {
    const factor = emissionFactors[formData.type as keyof typeof emissionFactors];
    const periodMultiplier = periods.find(p => p.value === formData.period)?.multiplier || 1;
    const dailyConsumption = formData.consumption / periodMultiplier;
    const totalEmission = factor * dailyConsumption;
    return Number(totalEmission.toFixed(2));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const co2Emission = calculateCO2();
    onSubmit({ ...formData, co2Emission });
    setFormData({ type: 'electricity', consumption: 0, unit: 'kWh', period: 'daily' });
    onClose();
  };

  const handleInputChange = (field: keyof EnergyData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (field === 'type') {
      const selectedType = energyTypes.find(t => t.value === e.target.value);
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value,
        unit: selectedType?.unit || 'kWh'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: field === 'consumption' ? Number(e.target.value) : e.target.value
      }));
    }
  };

  const getCurrentType = () => energyTypes.find(t => t.value === formData.type);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-800 flex items-center">
              <span className="mr-2">⚡</span>
              {t('dashboard.modals.energy.title')}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Tipo de Energia */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Tipo de Energia
              </label>
              <select
                value={formData.type}
                onChange={handleInputChange('type')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                {energyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.icon} {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Período */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Período de Consumo
              </label>
              <select
                value={formData.period}
                onChange={handleInputChange('period')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Consumo */}
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-2">
                Consumo ({formData.unit})
              </label>
              <input
                type="number"
                value={formData.consumption || ''}
                onChange={handleInputChange('consumption')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder={`Ex: 10 ${formData.unit}`}
                step="0.1"
                min="0"
                required
              />
              <p className="text-xs text-primary-600 mt-1">
                {getCurrentType()?.label} - {periods.find(p => p.value === formData.period)?.label.toLowerCase()}
              </p>
            </div>

            {/* Previsão de CO2 */}
            {formData.consumption > 0 && (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h3 className="font-semibold text-primary-700 mb-2">
                  💨 Emissão Diária
                </h3>
                <div className="text-2xl font-bold text-primary-500">
                  {calculateCO2()} kg CO₂/dia
                </div>
                <p className="text-sm text-primary-600">
                  Baseado em {formData.consumption} {formData.unit} {periods.find(p => p.value === formData.period)?.label.toLowerCase()}
                </p>
                {formData.period !== 'daily' && (
                  <p className="text-xs text-primary-500 mt-1">
                    Convertido para emissão diária média
                  </p>
                )}
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
                disabled={formData.consumption === 0}
              >
                Registrar Consumo
              </button>
            </div>
          </form>

          {/* Dicas */}
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">💡 Dicas de Economia</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• Use lâmpadas LED (80% menos energia)</li>
              <li>• Desligue aparelhos da tomada</li>
              <li>• Energia solar reduz 90% das emissões</li>
              <li>• Ar-condicionado: use timer e temperatura ideal</li>
              <li>• Geladeira: evite abrir desnecessariamente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyModal;