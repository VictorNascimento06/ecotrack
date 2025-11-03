import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';

interface Activity {
  id: string;
  type: 'transport' | 'energy' | 'food';
  date: string;
  description: string;
  co2Emission: number;
  details: any;
}

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportsModal: React.FC<ReportsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'transport' | 'energy' | 'food'>('overview');
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

  // Simular dados de atividades (em produção viria de um banco de dados)
  const activities: Activity[] = JSON.parse(localStorage.getItem(`activities_${user?.id}`) || '[]');

  const filterActivitiesByTimeRange = (activities: Activity[]) => {
    const now = new Date();
    const ranges = {
      week: 7,
      month: 30,
      year: 365
    };
    
    const daysBack = ranges[timeRange];
    const startDate = new Date(now.getTime() - (daysBack * 24 * 60 * 60 * 1000));
    
    return activities.filter(activity => new Date(activity.date) >= startDate);
  };

  const filteredActivities = filterActivitiesByTimeRange(activities);
  
  const getStatsByType = (type: string) => {
    const typeActivities = filteredActivities.filter(a => a.type === type);
    const totalEmissions = typeActivities.reduce((sum, a) => sum + a.co2Emission, 0);
    const count = typeActivities.length;
    return { totalEmissions, count };
  };

  const totalEmissions = filteredActivities.reduce((sum, a) => sum + a.co2Emission, 0);
  const transportStats = getStatsByType('transport');
  const energyStats = getStatsByType('energy');
  const foodStats = getStatsByType('food');

  const getEmissionTrend = () => {
    // Simular tendência baseada em dados fictícios
    const lastMonth = totalEmissions;
    const previousMonth = lastMonth * 1.2; // 20% maior no mês anterior
    const reduction = ((previousMonth - lastMonth) / previousMonth) * 100;
    return reduction;
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'transport': return '🚗';
      case 'energy': return '⚡';
      case 'food': return '🍽️';
      default: return '📊';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'transport': return 'blue';
      case 'energy': return 'yellow';
      case 'food': return 'green';
      default: return 'gray';
    }
  };

  const tabs = [
    { key: 'overview', label: 'Visão Geral', icon: '📊' },
    { key: 'transport', label: 'Transporte', icon: '🚗' },
    { key: 'energy', label: 'Energia', icon: '⚡' },
    { key: 'food', label: 'Alimentação', icon: '🍽️' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-90vh overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-800 flex items-center">
              <span className="mr-2">📈</span>
              Relatórios Ambientais
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Filtro de Período */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Período de Análise
            </label>
            <div className="flex space-x-2">
              {[
                { value: 'week', label: 'Última Semana' },
                { value: 'month', label: 'Último Mês' },
                { value: 'year', label: 'Último Ano' }
              ].map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timeRange === range.value
                      ? 'bg-primary-500 text-white'
                      : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === tab.key
                      ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo das Tabs */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <>
                {/* Resumo Geral */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm">Emissões Totais</p>
                        <p className="text-2xl font-bold">{totalEmissions.toFixed(1)} kg</p>
                      </div>
                      <span className="text-3xl">💨</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm">Atividades</p>
                        <p className="text-2xl font-bold">{filteredActivities.length}</p>
                      </div>
                      <span className="text-3xl">📊</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm">Tendência</p>
                        <p className="text-2xl font-bold">{getEmissionTrend() > 0 ? '-' : '+'}{Math.abs(getEmissionTrend()).toFixed(1)}%</p>
                      </div>
                      <span className="text-3xl">{getEmissionTrend() > 0 ? '📉' : '📈'}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100 text-sm">Média Diária</p>
                        <p className="text-2xl font-bold">{(totalEmissions / (timeRange === 'week' ? 7 : timeRange === 'month' ? 30 : 365)).toFixed(1)} kg</p>
                      </div>
                      <span className="text-3xl">📅</span>
                    </div>
                  </div>
                </div>

                {/* Breakdown por Categoria */}
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-800 mb-4">Emissões por Categoria</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🚗</span>
                        <div>
                          <p className="font-medium text-primary-700">Transporte</p>
                          <p className="text-sm text-primary-600">{transportStats.count} atividades</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-800">{transportStats.totalEmissions.toFixed(1)} kg CO₂</p>
                        <p className="text-sm text-primary-600">{totalEmissions > 0 ? ((transportStats.totalEmissions / totalEmissions) * 100).toFixed(1) : 0}%</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">⚡</span>
                        <div>
                          <p className="font-medium text-primary-700">Energia</p>
                          <p className="text-sm text-primary-600">{energyStats.count} atividades</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-800">{energyStats.totalEmissions.toFixed(1)} kg CO₂</p>
                        <p className="text-sm text-primary-600">{totalEmissions > 0 ? ((energyStats.totalEmissions / totalEmissions) * 100).toFixed(1) : 0}%</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🍽️</span>
                        <div>
                          <p className="font-medium text-primary-700">Alimentação</p>
                          <p className="text-sm text-primary-600">{foodStats.count} atividades</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-800">{foodStats.totalEmissions.toFixed(1)} kg CO₂</p>
                        <p className="text-sm text-primary-600">{totalEmissions > 0 ? ((foodStats.totalEmissions / totalEmissions) * 100).toFixed(1) : 0}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab !== 'overview' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-800">
                  Atividades de {tabs.find(t => t.key === activeTab)?.label}
                </h3>
                
                {filteredActivities.filter(a => a.type === activeTab).length === 0 ? (
                  <div className="text-center py-8">
                    <span className="text-6xl mb-4 block">📭</span>
                    <p className="text-gray-500">Nenhuma atividade registrada neste período</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredActivities
                      .filter(a => a.type === activeTab)
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((activity) => (
                        <div key={activity.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{getActivityIcon(activity.type)}</span>
                              <div>
                                <p className="font-medium text-gray-800">{activity.description}</p>
                                <p className="text-sm text-gray-600">
                                  {new Date(activity.date).toLocaleDateString('pt-BR')} às {new Date(activity.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-bold text-${getActivityColor(activity.type)}-600`}>
                                {activity.co2Emission.toFixed(2)} kg CO₂
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Ações */}
          <div className="mt-8 flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Fechar
            </button>
            <button className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              📊 Exportar Relatório
            </button>
          </div>

          {/* Dicas */}
          {totalEmissions > 0 && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">💡 Insights Personalizados</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                {transportStats.totalEmissions > energyStats.totalEmissions && transportStats.totalEmissions > foodStats.totalEmissions && (
                  <li>• Seu maior impacto vem do transporte. Considere usar mais transporte público ou bicicleta.</li>
                )}
                {energyStats.totalEmissions > transportStats.totalEmissions && energyStats.totalEmissions > foodStats.totalEmissions && (
                  <li>• Energia é seu maior impacto. Considere trocar por energia solar ou reduzir o consumo.</li>
                )}
                {foodStats.totalEmissions > transportStats.totalEmissions && foodStats.totalEmissions > energyStats.totalEmissions && (
                  <li>• Alimentação é seu maior impacto. Considere reduzir carne vermelha e aumentar vegetais.</li>
                )}
                <li>• Sua pegada está {getEmissionTrend() > 0 ? 'diminuindo' : 'aumentando'}. Continue assim!</li>
                <li>• Meta sugerida: Reduzir 10% das emissões no próximo mês.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsModal;