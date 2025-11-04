import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/Common/LanguageSelector';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDemoClick = () => {
    navigate('/demo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <span className="text-2xl font-bold text-primary-700">EcoTrack</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={handleLoginClick}
              className="text-primary-600 hover:text-primary-700 px-4 py-2 rounded-lg"
            >
              {t('common.login')}
            </button>
            <button 
              onClick={handleRegisterClick}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              {t('common.register')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-800 mb-6">
            {t('home.title')} 
            <span className="text-primary-500"> {t('home.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-primary-600 mb-8 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <button 
              onClick={handleRegisterClick}
              className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              {t('home.startFree')}
            </button>
            <button 
              onClick={handleDemoClick}
              className="w-full md:w-auto border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              {t('home.viewDemo')}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-500">73%</div>
            <div className="text-primary-600">{t('home.stats.wantSustainable')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-500">12%</div>
            <div className="text-primary-600">{t('home.stats.knowHow')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-500">50+</div>
            <div className="text-primary-600">{t('home.stats.betaUsers')}</div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">
            {t('home.howItWorks')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-primary-700 mb-2">{t('home.features.calculate.title')}</h3>
              <p className="text-primary-600 text-sm">{t('home.features.calculate.description')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-primary-700 mb-2">{t('home.features.visualize.title')}</h3>
              <p className="text-primary-600 text-sm">{t('home.features.visualize.description')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-bold text-primary-700 mb-2">{t('home.features.gamify.title')}</h3>
              <p className="text-primary-600 text-sm">{t('home.features.gamify.description')}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-primary-700 mb-2">{t('home.features.connect.title')}</h3>
              <p className="text-primary-600 text-sm">{t('home.features.connect.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;