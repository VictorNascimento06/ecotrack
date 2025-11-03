import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import RegisterForm from '../components/Auth/RegisterForm';
import LanguageSelector from '../components/Common/LanguageSelector';

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data: FormData) => {
    setLoading(true);
    
    try {
      await register({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: data.password
      });
      
      // Após sucesso no registro, navegar para o dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no registro:', error);
      alert(`${t('common.error')}: ${error instanceof Error ? error.message : 'Falha ao criar conta'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Header com seletor de idioma */}
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

      {/* Formulário de registro */}
      <div className="py-12 px-6">
        <RegisterForm 
          onSubmit={handleRegister}
          onCancel={handleCancel}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Register;