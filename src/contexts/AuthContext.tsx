import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string; // Adicionando senha para validação
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem('ecotrack_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Erro ao carregar usuário salvo:', error);
        localStorage.removeItem('ecotrack_user');
      }
    }
    setLoading(false);
  }, []);

  const register = async (userData: RegisterData): Promise<void> => {
    setLoading(true);
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Por enquanto, vamos simular o registro sem Firebase
      // TODO: Implementar Firebase Authentication
      const newUser: User = {
        id: Date.now().toString(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
        password: userData.password, // Salvar senha (em produção seria hash)
        createdAt: new Date()
      };

      // Carregar usuários existentes
      const existingUsers = JSON.parse(localStorage.getItem('ecotrack_users') || '[]');
      
      // Verificar se email já existe
      if (existingUsers.some((user: User) => user.email === userData.email)) {
        throw new Error('E-mail já cadastrado');
      }
      
      // Adicionar novo usuário
      existingUsers.push(newUser);
      localStorage.setItem('ecotrack_users', JSON.stringify(existingUsers));

      // Salvar usuário atual
      localStorage.setItem('ecotrack_user', JSON.stringify(newUser));
      setUser(newUser);
      
      console.log('Usuário registrado com sucesso:', newUser);
    } catch (error) {
      console.error('Erro no registro:', error);
      throw new Error('Falha ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Implementar Firebase Authentication
      // Carregar usuários cadastrados
      const existingUsers = JSON.parse(localStorage.getItem('ecotrack_users') || '[]');
      
      // Buscar usuário pelo email e senha
      const user = existingUsers.find((user: User) => 
        user.email === email && user.password === password
      );
      
      if (user) {
        // Login bem-sucedido
        localStorage.setItem('ecotrack_user', JSON.stringify(user));
        setUser(user);
        return;
      }
      
      throw new Error('E-mail ou senha incorretos');
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('ecotrack_user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};