import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/Common/LanguageSelector';

// Mock data for demo
const mockData = {
  totalEmissions: 156.7,
  transport: 89.2,
  energy: 45.8,
  food: 21.7,
  recentActivities: [
    { type: 'transport', description: 'Viagem de carro (50km)', co2: 11.5, date: '2025-11-03' },
    { type: 'energy', description: 'Consumo residencial (300 kWh)', co2: 21.0, date: '2025-11-02' },
    { type: 'food', description: 'Almoço com carne bovina', co2: 3.4, date: '2025-11-02' },
  ]
};

const Demo: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: t('demo.steps.welcome.title'),
      description: t('demo.steps.welcome.description'),
      component: 'welcome'
    },
    {
      title: t('demo.steps.dashboard.title'),
      description: t('demo.steps.dashboard.description'),
      component: 'dashboard'
    },
    {
      title: t('demo.steps.activities.title'),
      description: t('demo.steps.activities.description'),
      component: 'activities'
    },
    {
      title: t('demo.steps.reports.title'),
      description: t('demo.steps.reports.description'),
      component: 'reports'
    }
  ];

  const renderWelcome = () => (
    <div className="text-center py-12">
      <div className="text-6xl mb-6">🌱</div>
      <h2 className="text-3xl font-bold text-primary-800 mb-4">
        {t('demo.steps.welcome.mainTitle')}
      </h2>
      <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
        {t('demo.steps.welcome.subtitle')}
      </p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
        <p className="text-yellow-800 text-sm">
          <strong>{t('demo.steps.welcome.tip')}</strong>
        </p>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">{t('demo.steps.dashboard.title')}</h2>
        <p className="text-primary-600">{t('demo.steps.dashboard.mainTitle')}</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('demo.steps.dashboard.totalCO2')}</p>
              <p className="text-2xl font-bold text-red-600">{mockData.totalEmissions} kg</p>
            </div>
            <div className="text-2xl">📊</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('demo.steps.dashboard.transport')}</p>
              <p className="text-2xl font-bold text-blue-600">{mockData.transport} kg</p>
            </div>
            <div className="text-2xl">🚗</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('demo.steps.dashboard.energy')}</p>
              <p className="text-2xl font-bold text-yellow-600">{mockData.energy} kg</p>
            </div>
            <div className="text-2xl">⚡</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('demo.steps.dashboard.food')}</p>
              <p className="text-2xl font-bold text-green-600">{mockData.food} kg</p>
            </div>
            <div className="text-2xl">🍽️</div>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">{t('demo.steps.dashboard.chartTitle')}</h3>
        <div className="h-48 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-primary-600">{t('demo.steps.dashboard.chartDescription')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">{t('demo.steps.activities.title')}</h2>
        <p className="text-primary-600">{t('demo.steps.activities.mainTitle')}</p>
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('demo.steps.activities.transportCard.title')}</h3>
            <p className="text-sm text-gray-600">{t('demo.steps.activities.transportCard.description')}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('demo.steps.activities.energyCard.title')}</h3>
            <p className="text-sm text-gray-600">{t('demo.steps.activities.energyCard.description')}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('demo.steps.activities.foodCard.title')}</h3>
            <p className="text-sm text-gray-600">{t('demo.steps.activities.foodCard.description')}</p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">{t('demo.steps.activities.recentActivities')}</h3>
        <div className="space-y-3">
          {mockData.recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {activity.type === 'transport' && <div className="text-xl">🚗</div>}
                {activity.type === 'energy' && <div className="text-xl">⚡</div>}
                {activity.type === 'food' && <div className="text-xl">🍽️</div>}
                <div>
                  <p className="font-medium text-gray-800">{t(`demo.mockData.${activity.type === 'transport' ? 'carTrip' : activity.type === 'energy' ? 'energyConsumption' : 'beefMeal'}`)}</p>
                  <p className="text-sm text-gray-600">{activity.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-red-600">{activity.co2} kg CO₂</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-2">{t('demo.steps.reports.title')}</h2>
        <p className="text-primary-600">{t('demo.steps.reports.mainTitle')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Insights Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <div className="text-xl mr-2">📄</div>
            {t('demo.steps.reports.insightsTitle')}
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                {t('demo.steps.reports.insights.tip')}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                {t('demo.steps.reports.insights.congrats')}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                {t('demo.steps.reports.insights.warning')}
              </p>
            </div>
          </div>
        </div>

        {/* Goals Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">{t('demo.steps.reports.goalsTitle')}</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{t('demo.steps.reports.goals.monthlyGoal')}</span>
                <span>{t('demo.steps.reports.goals.monthlyProgress')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '53%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{t('demo.steps.reports.goals.yearlyGoal')}</span>
                <span>{t('demo.steps.reports.goals.yearlyProgress')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multilingual Demo */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">{t('demo.steps.reports.multilingualTitle')}</h3>
        <p className="text-gray-600 mb-4">
          {t('demo.steps.reports.multilingualDescription')}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">🇧🇷 Português (BR)</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">🇵🇹 Português (PT)</span>
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">🇺🇸 English</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">🇪🇸 Español</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">🇫🇷 Français</span>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (demoSteps[currentStep].component) {
      case 'welcome':
        return renderWelcome();
      case 'dashboard':
        return renderDashboard();
      case 'activities':
        return renderActivities();
      case 'reports':
        return renderReports();
      default:
        return renderWelcome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
            >
              <div className="text-lg">←</div>
              <span>{t('demo.backToHome')}</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-2xl font-bold text-primary-700">{t('demo.title')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => navigate('/register')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              {t('demo.createAccount')}
            </button>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-primary-800">
              {demoSteps[currentStep].title}
            </h1>
            <span className="text-sm text-primary-600">
              {currentStep + 1} {t('demo.navigation.stepCounter')} {demoSteps.length}
            </span>
          </div>
          <p className="text-primary-600 mb-4">{demoSteps[currentStep].description}</p>
          <div className="w-full bg-primary-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {renderCurrentStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200'
            }`}
          >
            <div className="text-lg">←</div>
            <span>{t('demo.navigation.previous')}</span>
          </button>

          <div className="flex space-x-2">
            {demoSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep ? 'bg-primary-500' : 'bg-primary-200'
                }`}
              />
            ))}
          </div>

          {currentStep === demoSteps.length - 1 ? (
            <button
              onClick={() => navigate('/register')}
              className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <div className="text-lg">▶</div>
              <span>{t('demo.navigation.startNow')}</span>
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
              className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span>{t('demo.navigation.next')}</span>
              <div className="text-lg">→</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;