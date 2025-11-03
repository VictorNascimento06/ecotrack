import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
}

interface RegisterFormProps {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, onCancel, loading = false }) => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Nome
    if (!formData.firstName.trim()) {
      newErrors.firstName = t('auth.register.errors.firstNameRequired');
    }

    // Sobrenome
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('auth.register.errors.lastNameRequired');
    }

    // Nome de usuário
    if (!formData.username.trim()) {
      newErrors.username = t('auth.register.errors.usernameRequired');
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = t('auth.register.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('auth.register.errors.emailInvalid');
    }

    // Confirmar email
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = t('auth.register.errors.emailsDoNotMatch');
    }

    // Senha
    if (!formData.password) {
      newErrors.password = t('auth.register.errors.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('auth.register.errors.passwordTooShort');
    }

    // Confirmar senha
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('auth.register.errors.passwordsDoNotMatch');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Limpar erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">🌱</span>
          </div>
          <span className="text-2xl font-bold text-primary-700">EcoTrack</span>
        </div>
        <h2 className="text-2xl font-bold text-primary-800">{t('auth.register.title')}</h2>
        <p className="text-primary-600 mt-2">{t('auth.register.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome e Sobrenome */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              {t('auth.register.firstName')}
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.firstName ? 'border-red-500' : 'border-primary-200'
              }`}
              disabled={loading}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              {t('auth.register.lastName')}
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={handleInputChange('lastName')}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.lastName ? 'border-red-500' : 'border-primary-200'
              }`}
              disabled={loading}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Nome de usuário */}
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            {t('auth.register.username')}
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={handleInputChange('username')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.username ? 'border-red-500' : 'border-primary-200'
            }`}
            disabled={loading}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            {t('auth.register.email')}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.email ? 'border-red-500' : 'border-primary-200'
            }`}
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Confirmar Email */}
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            {t('auth.register.confirmEmail')}
          </label>
          <input
            type="email"
            value={formData.confirmEmail}
            onChange={handleInputChange('confirmEmail')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.confirmEmail ? 'border-red-500' : 'border-primary-200'
            }`}
            disabled={loading}
          />
          {errors.confirmEmail && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmEmail}</p>
          )}
        </div>

        {/* Senha */}
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            {t('auth.register.password')}
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.password ? 'border-red-500' : 'border-primary-200'
            }`}
            disabled={loading}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirmar Senha */}
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            {t('auth.register.confirmPassword')}
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.confirmPassword ? 'border-red-500' : 'border-primary-200'
            }`}
            disabled={loading}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Botões */}
        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-primary-300 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            disabled={loading}
          >
            {t('common.cancel')}
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? t('common.loading') : t('auth.register.createAccount')}
          </button>
        </div>

        {/* Link para login */}
        <div className="text-center pt-4">
          <p className="text-sm text-primary-600">
            {t('auth.register.alreadyHaveAccount')}{' '}
            <button
              type="button"
              className="text-primary-500 hover:text-primary-700 font-medium"
              disabled={loading}
            >
              {t('auth.register.loginHere')}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;