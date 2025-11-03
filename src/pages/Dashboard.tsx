import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import LanguageSelector from '../components/Common/LanguageSelector';
import TransportModal from '../components/Dashboard/TransportModal';
import EnergyModal from '../components/Dashboard/EnergyModal';
import FoodModal from '../components/Dashboard/FoodModal';
import ReportsModal from '../components/Dashboard/ReportsModal';

interface CarbonData {
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date?: Date;
}

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  
  // Modal states
  const [transportModalOpen, setTransportModalOpen] = useState(false);
  const [energyModalOpen, setEnergyModalOpen] = useState(false);
  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [reportsModalOpen, setReportsModalOpen] = useState(false);
  
  const [carbonData, setCarbonData] = useState<CarbonData>({
    daily: 12.5,
    weekly: 87.3,
    monthly: 350.2,
    yearly: 4202.4
  });

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Primeiro Passo',
      description: 'Completou o primeiro cálculo de pegada de carbono',
      icon: '👍',
      unlocked: true,
      date: new Date()
    },
    {
      id: '2',
      title: 'Eco Warrior',
      description: 'Reduziu a pegada de carbono em 10%',
      icon: '🌱',
      unlocked: false
    },
    {
      id: '3',
      title: 'Semana Verde',
      description: 'Manteve baixa emissão por uma semana',
      icon: '🗓️',
      unlocked: false
    }
  ]);

  const [currentTip] = useState({
    title: 'Dica do Dia',
    content: 'Use transporte público ou bicicleta para reduzir sua pegada de carbono em até 20%!'
  });

  const handleLogout = () => {
    logout();
  };

  // Funções para lidar com dados dos modais
  const handleTransportSubmit = (data: any) => {
    const activity = {
      id: Date.now().toString(),
      type: 'transport' as const,
      date: new Date().toISOString(),
      description: `${data.type} - ${data.distance}km`,
      co2Emission: data.co2Emission,
      details: data
    };
    
    // Salvar no localStorage (simulando banco de dados)
    const activities = JSON.parse(localStorage.getItem(`activities_${user?.id}`) || '[]');
    activities.push(activity);
    localStorage.setItem(`activities_${user?.id}`, JSON.stringify(activities));
    
    // Atualizar dados de carbono
    setCarbonData(prev => ({
      daily: prev.daily + data.co2Emission,
      weekly: prev.weekly + data.co2Emission,
      monthly: prev.monthly + data.co2Emission,
      yearly: prev.yearly + data.co2Emission
    }));
  };

  const handleEnergySubmit = (data: any) => {
    const activity = {
      id: Date.now().toString(),
      type: 'energy' as const,
      date: new Date().toISOString(),
      description: `${data.type} - ${data.consumption} ${data.unit}`,
      co2Emission: data.co2Emission,
      details: data
    };
    
    const activities = JSON.parse(localStorage.getItem(`activities_${user?.id}`) || '[]');
    activities.push(activity);
    localStorage.setItem(`activities_${user?.id}`, JSON.stringify(activities));
    
    setCarbonData(prev => ({
      daily: prev.daily + data.co2Emission,
      weekly: prev.weekly + data.co2Emission,
      monthly: prev.monthly + data.co2Emission,
      yearly: prev.yearly + data.co2Emission
    }));
  };

  const handleFoodSubmit = (data: any) => {
    const activity = {
      id: Date.now().toString(),
      type: 'food' as const,
      date: new Date().toISOString(),
      description: `${data.type} - ${data.portion} ${data.unit}`,
      co2Emission: data.co2Emission,
      details: data
    };
    
    const activities = JSON.parse(localStorage.getItem(`activities_${user?.id}`) || '[]');
    activities.push(activity);
    localStorage.setItem(`activities_${user?.id}`, JSON.stringify(activities));
    
    setCarbonData(prev => ({
      daily: prev.daily + data.co2Emission,
      weekly: prev.weekly + data.co2Emission,
      monthly: prev.monthly + data.co2Emission,
      yearly: prev.yearly + data.co2Emission
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-700">EcoTrack</h1>
                <p className="text-sm text-primary-500">
                  {t('dashboard.hello')}, {user?.firstName}! 👋
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {t('dashboard.logout')}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-2">
            {t('dashboard.welcome')}
          </h2>
          <p className="text-primary-600">
            {t('dashboard.subtitle')}
          </p>
        </div>

        {/* Carbon Footprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-primary-700">{t('dashboard.carbonFootprint.today')}</h3>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-3xl font-bold text-primary-500 mb-1">
              {carbonData.daily} kg
            </div>
            <p className="text-sm text-primary-600">{t('dashboard.carbonFootprint.emitted')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-primary-700">{t('dashboard.carbonFootprint.thisWeek')}</h3>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-3xl font-bold text-primary-500 mb-1">
              {carbonData.weekly} kg
            </div>
            <p className="text-sm text-primary-600">{t('dashboard.carbonFootprint.emitted')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-primary-700">{t('dashboard.carbonFootprint.thisMonth')}</h3>
              <span className="text-2xl">📅</span>
            </div>
            <div className="text-3xl font-bold text-primary-500 mb-1">
              {carbonData.monthly} kg
            </div>
            <p className="text-sm text-primary-600">{t('dashboard.carbonFootprint.emitted')}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-primary-700">{t('dashboard.carbonFootprint.thisYear')}</h3>
              <span className="text-2xl">🗓️</span>
            </div>
            <div className="text-3xl font-bold text-primary-500 mb-1">
              {carbonData.yearly} kg
            </div>
            <p className="text-sm text-primary-600">{t('dashboard.carbonFootprint.emitted')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary-800 mb-4">{t('dashboard.quickActions.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setTransportModalOpen(true)}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-left hover:bg-primary-25"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700">{t('dashboard.quickActions.transport.title')}</h4>
                    <p className="text-sm text-primary-600">{t('dashboard.quickActions.transport.description')}</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => setEnergyModalOpen(true)}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-left hover:bg-primary-25"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700">{t('dashboard.quickActions.energy.title')}</h4>
                    <p className="text-sm text-primary-600">{t('dashboard.quickActions.energy.description')}</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => setFoodModalOpen(true)}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-left hover:bg-primary-25"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700">{t('dashboard.quickActions.food.title')}</h4>
                    <p className="text-sm text-primary-600">{t('dashboard.quickActions.food.description')}</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => setReportsModalOpen(true)}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-left hover:bg-primary-25"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-700">{t('dashboard.quickActions.report.title')}</h4>
                    <p className="text-sm text-primary-600">{t('dashboard.quickActions.report.description')}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tip of the Day */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-primary-700 mb-3 flex items-center">
                <span className="mr-2">💡</span>
                {t('dashboard.tipOfDay.title')}
              </h3>
              <p className="text-primary-600 text-sm">{t('dashboard.tipOfDay.content')}</p>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-primary-700 mb-4 flex items-center">
                <span className="mr-2">🏆</span>
                {t('dashboard.achievements.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary-50 border border-primary-200">
                  <span className="text-2xl">👍</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-primary-700">
                      {t('dashboard.achievements.firstStep.title')}
                    </h4>
                    <p className="text-xs text-primary-600">
                      {t('dashboard.achievements.firstStep.description')}
                    </p>
                  </div>
                  <span className="text-primary-500 text-xs">✓</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-60">
                  <span className="text-2xl">🌱</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-primary-700">
                      {t('dashboard.achievements.ecoWarrior.title')}
                    </h4>
                    <p className="text-xs text-primary-600">
                      {t('dashboard.achievements.ecoWarrior.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-60">
                  <span className="text-2xl">🗓️</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-primary-700">
                      {t('dashboard.achievements.greenWeek.title')}
                    </h4>
                    <p className="text-xs text-primary-600">
                      {t('dashboard.achievements.greenWeek.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-primary-700 mb-4 flex items-center">
                <span className="mr-2">🎯</span>
                {t('dashboard.monthlyGoal.title')}
              </h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm text-primary-600 mb-1">
                  <span>{t('dashboard.monthlyGoal.progress')}</span>
                  <span>72%</span>
                </div>
                <div className="w-full bg-primary-100 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: '72%' }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-primary-600">
                {t('dashboard.monthlyGoal.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportModal 
        isOpen={transportModalOpen}
        onClose={() => setTransportModalOpen(false)}
        onSubmit={handleTransportSubmit}
      />
      
      <EnergyModal 
        isOpen={energyModalOpen}
        onClose={() => setEnergyModalOpen(false)}
        onSubmit={handleEnergySubmit}
      />
      
      <FoodModal 
        isOpen={foodModalOpen}
        onClose={() => setFoodModalOpen(false)}
        onSubmit={handleFoodSubmit}
      />
      
      <ReportsModal 
        isOpen={reportsModalOpen}
        onClose={() => setReportsModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;