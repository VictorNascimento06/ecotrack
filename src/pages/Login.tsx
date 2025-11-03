import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LanguageSelector from '../components/Common/LanguageSelector';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro no login');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Header */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <span className="text-2xl font-bold text-primary-700">EcoTrack</span>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* Login Form */}
      <div className="py-12 px-6">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <span className="text-2xl font-bold text-primary-700">EcoTrack</span>
            </div>
            <h2 className="text-2xl font-bold text-primary-800">{t('auth.login.title')}</h2>
            <p className="text-primary-600 mt-2">{t('auth.login.subtitle')}</p>
            
            {/* Dica para usuário */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-700 text-sm">
                💡 {t('auth.login.tip')}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">
                {t('auth.login.email')}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">
                {t('auth.login.password')}
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                className="w-full px-3 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
                disabled={loading}
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                disabled={loading}
              >
                {t('auth.login.back')}
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? t('auth.login.loginButtonLoading') : t('auth.login.loginButton')}
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-primary-600">
                {t('auth.login.noAccount')}{' '}
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="text-primary-500 hover:text-primary-700 font-medium"
                  disabled={loading}
                >
                  {t('auth.login.registerHere')}
                </button>
              </p>
              
              {/* Debug button - remover em produção */}
              <button
                type="button"
                onClick={() => {
                  localStorage.clear();
                  alert('Dados limpos! Faça um novo cadastro.');
                  navigate('/register');
                }}
                className="mt-2 text-xs text-red-500 hover:text-red-700"
              >
                🗑️ {t('auth.login.clearData')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;