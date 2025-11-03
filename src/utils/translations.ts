export const translations = {
  'pt-BR': {
    common: {
      login: 'Login',
      register: 'Cadastrar',
      cancel: 'Cancelar',
      save: 'Salvar',
      back: 'Voltar',
      next: 'Próximo',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso'
    },
    home: {
      title: 'Transforme sua vida em',
      titleHighlight: 'sustentável',
      subtitle: 'Monitor sua pegada de carbono, receba dicas personalizadas e participe de uma comunidade eco-consciente. Pequenas ações, grande impacto! 🌍',
      startFree: '🚀 Começar Agora - Grátis',
      viewDemo: '📊 Ver Demo',
      howItWorks: 'Como o EcoTrack funciona?',
      features: {
        calculate: {
          title: 'Calcule',
          description: 'Sua pegada de carbono automaticamente'
        },
        visualize: {
          title: 'Visualize',
          description: 'Métricas e progresso em dashboards'
        },
        gamify: {
          title: 'Gamifique',
          description: 'Desafios eco com pontos e badges'
        },
        connect: {
          title: 'Conecte',
          description: 'Com comunidade eco-consciente'
        }
      },
      stats: {
        wantSustainable: 'das pessoas querem ser mais sustentáveis',
        knowHow: 'sabem como medir seu impacto',
        betaUsers: 'beta users já usando'
      }
    },
    auth: {
      register: {
        title: 'Criar conta no EcoTrack',
        subtitle: 'Junte-se à comunidade sustentável',
        firstName: 'Nome',
        lastName: 'Sobrenome',
        username: 'Nome de usuário',
        email: 'E-mail',
        confirmEmail: 'Confirmar e-mail',
        password: 'Senha',
        confirmPassword: 'Confirmar senha',
        createAccount: 'Criar conta',
        alreadyHaveAccount: 'Já tem uma conta?',
        loginHere: 'Faça login aqui',
        errors: {
          firstNameRequired: 'Nome é obrigatório',
          lastNameRequired: 'Sobrenome é obrigatório',
          usernameRequired: 'Nome de usuário é obrigatório',
          emailRequired: 'E-mail é obrigatório',
          emailInvalid: 'E-mail inválido',
          emailsDoNotMatch: 'E-mails não coincidem',
          passwordRequired: 'Senha é obrigatória',
          passwordTooShort: 'Senha deve ter pelo menos 6 caracteres',
          passwordsDoNotMatch: 'Senhas não coincidem'
        }
      },
      login: {
        title: 'Fazer Login',
        subtitle: 'Entre na sua conta sustentável',
        email: 'E-mail',
        password: 'Senha',
        loginButton: 'Entrar',
        loginButtonLoading: 'Entrando...',
        back: 'Voltar',
        noAccount: 'Não tem uma conta?',
        registerHere: 'Cadastre-se aqui',
        tip: 'Use o mesmo email e senha que você usou no cadastro',
        clearData: 'Limpar dados (Debug)'
      }
    },
    dashboard: {
      welcome: 'Bem-vindo ao seu EcoTrack! 🌍',
      subtitle: 'Monitore sua pegada de carbono e faça a diferença para o planeta.',
      hello: 'Olá',
      logout: 'Sair',
      carbonFootprint: {
        today: 'Hoje',
        thisWeek: 'Esta Semana',
        thisMonth: 'Este Mês',
        thisYear: 'Este Ano',
        emitted: 'CO₂ emitido'
      },
      quickActions: {
        title: 'Ações Rápidas',
        transport: {
          title: 'Registrar Transporte',
          description: 'Adicione sua viagem de hoje'
        },
        energy: {
          title: 'Consumo de Energia',
          description: 'Registrar uso de energia'
        },
        food: {
          title: 'Alimentação',
          description: 'Registrar refeições'
        },
        report: {
          title: 'Ver Relatório',
          description: 'Análise detalhada'
        }
      },
      tipOfDay: {
        title: 'Dica do Dia',
        content: 'Use transporte público ou bicicleta para reduzir sua pegada de carbono em até 20%!'
      },
      achievements: {
        title: 'Conquistas',
        firstStep: {
          title: 'Primeiro Passo',
          description: 'Completou o primeiro cálculo de pegada de carbono'
        },
        ecoWarrior: {
          title: 'Eco Warrior',
          description: 'Reduziu a pegada de carbono em 10%'
        },
        greenWeek: {
          title: 'Semana Verde',
          description: 'Manteve baixa emissão por uma semana'
        }
      },
      monthlyGoal: {
        title: 'Meta Mensal',
        progress: 'Progresso',
        description: 'Você está a caminho de atingir sua meta de redução de 15% este mês!'
      },
      modals: {
        transport: {
          title: 'Registrar Transporte',
          type: 'Tipo de Transporte',
          distance: 'Distância (km)',
          passengers: 'Número de Passageiros (incluindo você)',
          passengersNote: 'A emissão será dividida pelo número de passageiros',
          prediction: 'Previsão de Emissão',
          distancePlaceholder: 'Ex: 15.5',
          register: 'Registrar Viagem',
          tips: {
            title: 'Dicas Eco',
            bike: 'Bicicleta e caminhada = 0 emissões! 🌱',
            public: 'Transporte público reduz emissões per capita',
            carpool: 'Compartilhar caronas divide as emissões',
            electric: 'Carros elétricos são 3x mais limpos'
          },
          types: {
            car: 'Carro (Gasolina)',
            electricCar: 'Carro Elétrico',
            bus: 'Ônibus',
            train: 'Trem/Metro',
            motorcycle: 'Motocicleta',
            bike: 'Bicicleta',
            walk: 'Caminhada',
            airplane: 'Avião'
          }
        },
        energy: {
          title: 'Consumo de Energia',
          type: 'Tipo de Energia',
          period: 'Período de Consumo',
          consumption: 'Consumo',
          emission: 'Emissão Diária',
          register: 'Registrar Consumo',
          converted: 'Convertido para emissão diária média',
          tips: {
            title: 'Dicas de Economia',
            led: 'Use lâmpadas LED (80% menos energia)',
            unplug: 'Desligue aparelhos da tomada',
            solar: 'Energia solar reduz 90% das emissões',
            ac: 'Ar-condicionado: use timer e temperatura ideal',
            fridge: 'Geladeira: evite abrir desnecessariamente'
          },
          types: {
            electricity: 'Energia Elétrica',
            naturalGas: 'Gás Natural',
            lpg: 'Gás de Cozinha (GLP)',
            solar: 'Energia Solar',
            heating: 'Aquecimento Elétrico',
            diesel: 'Gerador Diesel'
          },
          periods: {
            daily: 'Por dia',
            weekly: 'Por semana',
            monthly: 'Por mês'
          }
        },
        food: {
          title: 'Registrar Refeição',
          meal: 'Refeição',
          food: 'Alimento',
          unit: 'Unidade',
          quantity: 'Quantidade',
          impact: 'Impacto Ambiental',
          register: 'Registrar Refeição',
          levels: {
            low: 'Baixo',
            medium: 'Médio',
            high: 'Alto'
          },
          meals: {
            breakfast: 'Café da Manhã',
            lunch: 'Almoço',
            dinner: 'Jantar',
            snack: 'Lanche'
          },
          categories: {
            animalProtein: 'Proteína Animal',
            plantProtein: 'Proteína Vegetal',
            carbs: 'Carboidratos',
            vegetables: 'Vegetais',
            fruits: 'Frutas',
            beverages: 'Bebidas'
          },
          units: {
            grams: 'gramas (g)',
            unit: 'unidade',
            cup: 'xícara',
            spoon: 'colher de sopa'
          },
          tips: {
            title: 'Dicas Sustentáveis',
            reduceMeat: 'Reduza carne vermelha: maior impacto ambiental',
            plantProtein: 'Prefira proteínas vegetais e frango',
            local: 'Alimentos locais e sazonais são melhores',
            waste: 'Evite desperdício de comida',
            vegan: 'Uma refeição vegana pode reduzir 75% das emissões'
          }
        },
        reports: {
          title: 'Relatórios Ambientais',
          period: 'Período de Análise',
          overview: 'Visão Geral',
          transport: 'Transporte',
          energy: 'Energia',
          food: 'Alimentação',
          totalEmissions: 'Emissões Totais',
          activities: 'Atividades',
          trend: 'Tendência',
          dailyAverage: 'Média Diária',
          byCategory: 'Emissões por Categoria',
          noActivities: 'Nenhuma atividade registrada neste período',
          export: 'Exportar Relatório',
          close: 'Fechar',
          periods: {
            week: 'Última Semana',
            month: 'Último Mês',
            year: 'Último Ano'
          },
          insights: {
            title: 'Insights Personalizados',
            transportHigh: 'Seu maior impacto vem do transporte. Considere usar mais transporte público ou bicicleta.',
            energyHigh: 'Energia é seu maior impacto. Considere trocar por energia solar ou reduzir o consumo.',
            foodHigh: 'Alimentação é seu maior impacto. Considere reduzir carne vermelha e aumentar vegetais.',
            trending: 'Sua pegada está diminuindo. Continue assim!',
            goal: 'Meta sugerida: Reduzir 10% das emissões no próximo mês.'
          }
        }
      }
    }
  },
  'pt-PT': {
    common: {
      login: 'Iniciar sessão',
      register: 'Registar',
      cancel: 'Cancelar',
      save: 'Guardar',
      back: 'Voltar',
      next: 'Seguinte',
      loading: 'A carregar...',
      error: 'Erro',
      success: 'Sucesso'
    },
    home: {
      title: 'Transforme a sua vida em',
      titleHighlight: 'sustentável',
      subtitle: 'Monitorize a sua pegada de carbono, receba dicas personalizadas e participe numa comunidade eco-consciente. Pequenas acções, grande impacto! 🌍',
      startFree: '🚀 Começar Agora - Grátis',
      viewDemo: '📊 Ver Demonstração',
      howItWorks: 'Como funciona o EcoTrack?',
      features: {
        calculate: {
          title: 'Calcule',
          description: 'A sua pegada de carbono automaticamente'
        },
        visualize: {
          title: 'Visualize',
          description: 'Métricas e progresso em painéis'
        },
        gamify: {
          title: 'Gamifique',
          description: 'Desafios eco com pontos e emblemas'
        },
        connect: {
          title: 'Conecte',
          description: 'Com comunidade eco-consciente'
        }
      },
      stats: {
        wantSustainable: 'das pessoas querem ser mais sustentáveis',
        knowHow: 'sabem como medir o seu impacto',
        betaUsers: 'utilizadores beta já a usar'
      }
    },
    auth: {
      register: {
        title: 'Criar conta no EcoTrack',
        subtitle: 'Junte-se à comunidade sustentável',
        firstName: 'Nome próprio',
        lastName: 'Apelido',
        username: 'Nome de utilizador',
        email: 'E-mail',
        confirmEmail: 'Confirmar e-mail',
        password: 'Palavra-passe',
        confirmPassword: 'Confirmar palavra-passe',
        createAccount: 'Criar conta',
        alreadyHaveAccount: 'Já tem uma conta?',
        loginHere: 'Inicie sessão aqui',
        errors: {
          firstNameRequired: 'Nome próprio é obrigatório',
          lastNameRequired: 'Apelido é obrigatório',
          usernameRequired: 'Nome de utilizador é obrigatório',
          emailRequired: 'E-mail é obrigatório',
          emailInvalid: 'E-mail inválido',
          emailsDoNotMatch: 'E-mails não coincidem',
          passwordRequired: 'Palavra-passe é obrigatória',
          passwordTooShort: 'Palavra-passe deve ter pelo menos 6 caracteres',
          passwordsDoNotMatch: 'Palavras-passe não coincidem'
        }
      },
      login: {
        title: 'Iniciar Sessão',
        subtitle: 'Entre na sua conta sustentável',
        email: 'E-mail',
        password: 'Palavra-passe',
        loginButton: 'Entrar',
        loginButtonLoading: 'A entrar...',
        back: 'Voltar',
        noAccount: 'Não tem uma conta?',
        registerHere: 'Registe-se aqui',
        tip: 'Use o mesmo e-mail e palavra-passe que usou no registo',
        clearData: 'Limpar dados (Debug)'
      }
    },
    dashboard: {
      welcome: 'Bem-vindo ao seu EcoTrack! 🌍',
      subtitle: 'Monitorize a sua pegada de carbono e faça a diferença para o planeta.',
      hello: 'Olá',
      logout: 'Terminar sessão',
      carbonFootprint: {
        today: 'Hoje',
        thisWeek: 'Esta Semana',
        thisMonth: 'Este Mês',
        thisYear: 'Este Ano',
        emitted: 'CO₂ emitido'
      },
      quickActions: {
        title: 'Acções Rápidas',
        transport: {
          title: 'Registar Transporte',
          description: 'Adicione a sua viagem de hoje'
        },
        energy: {
          title: 'Consumo de Energia',
          description: 'Registar uso de energia'
        },
        food: {
          title: 'Alimentação',
          description: 'Registar refeições'
        },
        report: {
          title: 'Ver Relatório',
          description: 'Análise detalhada'
        }
      },
      tipOfDay: {
        title: 'Dica do Dia',
        content: 'Use transportes públicos ou bicicleta para reduzir a sua pegada de carbono em até 20%!'
      },
      achievements: {
        title: 'Conquistas',
        firstStep: {
          title: 'Primeiro Passo',
          description: 'Completou o primeiro cálculo de pegada de carbono'
        },
        ecoWarrior: {
          title: 'Eco Warrior',
          description: 'Reduziu a pegada de carbono em 10%'
        },
        greenWeek: {
          title: 'Semana Verde',
          description: 'Manteve baixa emissão por uma semana'
        }
      },
      monthlyGoal: {
        title: 'Meta Mensal',
        progress: 'Progresso',
        description: 'Está a caminho de atingir a sua meta de redução de 15% este mês!'
      },
      modals: {
        transport: {
          title: 'Registar Transporte',
          type: 'Tipo de Transporte',
          distance: 'Distância (km)',
          passengers: 'Número de Passageiros (incluindo você)',
          passengersNote: 'A emissão será dividida pelo número de passageiros',
          prediction: 'Previsão de Emissão',
          distancePlaceholder: 'Ex: 15.5',
          register: 'Registar Viagem',
          tips: {
            title: 'Dicas Eco',
            bike: 'Bicicleta e caminhada = 0 emissões! 🌱',
            public: 'Transporte público reduz emissões per capita',
            carpool: 'Partilhar boleia divide as emissões',
            electric: 'Carros eléctricos são 3x mais limpos'
          },
          types: {
            car: 'Carro (Gasolina)',
            electricCar: 'Carro Eléctrico',
            bus: 'Autocarro',
            train: 'Comboio/Metro',
            motorcycle: 'Motocicleta',
            bike: 'Bicicleta',
            walk: 'Caminhada',
            airplane: 'Avião'
          }
        },
        energy: {
          title: 'Consumo de Energia',
          type: 'Tipo de Energia',
          period: 'Período de Consumo',
          consumption: 'Consumo',
          emission: 'Emissão Diária',
          register: 'Registar Consumo',
          converted: 'Convertido para emissão diária média',
          tips: {
            title: 'Dicas de Poupança',
            led: 'Use lâmpadas LED (80% menos energia)',
            unplug: 'Desligue aparelhos da tomada',
            solar: 'Energia solar reduz 90% das emissões',
            ac: 'Ar condicionado: use temporizador e temperatura ideal',
            fridge: 'Frigorífico: evite abrir desnecessariamente'
          },
          types: {
            electricity: 'Energia Eléctrica',
            naturalGas: 'Gás Natural',
            lpg: 'Gás de Cozinha (GPL)',
            solar: 'Energia Solar',
            heating: 'Aquecimento Eléctrico',
            diesel: 'Gerador Diesel'
          },
          periods: {
            daily: 'Por dia',
            weekly: 'Por semana',
            monthly: 'Por mês'
          }
        },
        food: {
          title: 'Registar Refeição',
          meal: 'Refeição',
          food: 'Alimento',
          unit: 'Unidade',
          quantity: 'Quantidade',
          impact: 'Impacto Ambiental',
          register: 'Registar Refeição',
          levels: {
            low: 'Baixo',
            medium: 'Médio',
            high: 'Alto'
          },
          meals: {
            breakfast: 'Pequeno-almoço',
            lunch: 'Almoço',
            dinner: 'Jantar',
            snack: 'Lanche'
          },
          categories: {
            animalProtein: 'Proteína Animal',
            plantProtein: 'Proteína Vegetal',
            carbs: 'Hidratos de Carbono',
            vegetables: 'Vegetais',
            fruits: 'Frutas',
            beverages: 'Bebidas'
          },
          units: {
            grams: 'gramas (g)',
            unit: 'unidade',
            cup: 'chávena',
            spoon: 'colher de sopa'
          },
          tips: {
            title: 'Dicas Sustentáveis',
            reduceMeat: 'Reduza carne vermelha: maior impacto ambiental',
            plantProtein: 'Prefira proteínas vegetais e frango',
            local: 'Alimentos locais e sazonais são melhores',
            waste: 'Evite desperdício de comida',
            vegan: 'Uma refeição vegan pode reduzir 75% das emissões'
          }
        },
        reports: {
          title: 'Relatórios Ambientais',
          period: 'Período de Análise',
          overview: 'Visão Geral',
          transport: 'Transporte',
          energy: 'Energia',
          food: 'Alimentação',
          totalEmissions: 'Emissões Totais',
          activities: 'Actividades',
          trend: 'Tendência',
          dailyAverage: 'Média Diária',
          byCategory: 'Emissões por Categoria',
          noActivities: 'Nenhuma actividade registada neste período',
          export: 'Exportar Relatório',
          close: 'Fechar',
          periods: {
            week: 'Última Semana',
            month: 'Último Mês',
            year: 'Último Ano'
          },
          insights: {
            title: 'Insights Personalizados',
            transportHigh: 'O seu maior impacto vem do transporte. Considere usar mais transportes públicos ou bicicleta.',
            energyHigh: 'Energia é o seu maior impacto. Considere trocar por energia solar ou reduzir o consumo.',
            foodHigh: 'Alimentação é o seu maior impacto. Considere reduzir carne vermelha e aumentar vegetais.',
            trending: 'A sua pegada está a diminuir. Continue assim!',
            goal: 'Meta sugerida: Reduzir 10% das emissões no próximo mês.'
          }
        }
      }
    }
  },
  'en': {
    common: {
      login: 'Login',
      register: 'Sign Up',
      cancel: 'Cancel',
      save: 'Save',
      back: 'Back',
      next: 'Next',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },
    home: {
      title: 'Transform your life into',
      titleHighlight: 'sustainable',
      subtitle: 'Track your carbon footprint, get personalized tips and join an eco-conscious community. Small actions, big impact! 🌍',
      startFree: '🚀 Start Now - Free',
      viewDemo: '📊 View Demo',
      howItWorks: 'How does EcoTrack work?',
      features: {
        calculate: {
          title: 'Calculate',
          description: 'Your carbon footprint automatically'
        },
        visualize: {
          title: 'Visualize',
          description: 'Metrics and progress in dashboards'
        },
        gamify: {
          title: 'Gamify',
          description: 'Eco challenges with points and badges'
        },
        connect: {
          title: 'Connect',
          description: 'With eco-conscious community'
        }
      },
      stats: {
        wantSustainable: 'of people want to be more sustainable',
        knowHow: 'know how to measure their impact',
        betaUsers: 'beta users already using'
      }
    },
    auth: {
      register: {
        title: 'Create EcoTrack account',
        subtitle: 'Join the sustainable community',
        firstName: 'First name',
        lastName: 'Last name',
        username: 'Username',
        email: 'Email',
        confirmEmail: 'Confirm email',
        password: 'Password',
        confirmPassword: 'Confirm password',
        createAccount: 'Create account',
        alreadyHaveAccount: 'Already have an account?',
        loginHere: 'Login here',
        errors: {
          firstNameRequired: 'First name is required',
          lastNameRequired: 'Last name is required',
          usernameRequired: 'Username is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email',
          emailsDoNotMatch: 'Emails do not match',
          passwordRequired: 'Password is required',
          passwordTooShort: 'Password must be at least 6 characters',
          passwordsDoNotMatch: 'Passwords do not match'
        }
      },
      login: {
        title: 'Login',
        subtitle: 'Enter your sustainable account',
        email: 'Email',
        password: 'Password',
        loginButton: 'Login',
        loginButtonLoading: 'Logging in...',
        back: 'Back',
        noAccount: "Don't have an account?",
        registerHere: 'Register here',
        tip: 'Use the same email and password you used during registration',
        clearData: 'Clear data (Debug)'
      }
    },
    dashboard: {
      welcome: 'Welcome to your EcoTrack! 🌍',
      subtitle: 'Track your carbon footprint and make a difference for the planet.',
      hello: 'Hello',
      logout: 'Logout',
      carbonFootprint: {
        today: 'Today',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        thisYear: 'This Year',
        emitted: 'CO₂ emitted'
      },
      quickActions: {
        title: 'Quick Actions',
        transport: {
          title: 'Register Transport',
          description: 'Add your trip from today'
        },
        energy: {
          title: 'Energy Consumption',
          description: 'Register energy usage'
        },
        food: {
          title: 'Food',
          description: 'Register meals'
        },
        report: {
          title: 'View Report',
          description: 'Detailed analysis'
        }
      },
      tipOfDay: {
        title: 'Tip of the Day',
        content: 'Use public transport or bicycle to reduce your carbon footprint by up to 20%!'
      },
      achievements: {
        title: 'Achievements',
        firstStep: {
          title: 'First Step',
          description: 'Completed first carbon footprint calculation'
        },
        ecoWarrior: {
          title: 'Eco Warrior',
          description: 'Reduced carbon footprint by 10%'
        },
        greenWeek: {
          title: 'Green Week',
          description: 'Maintained low emissions for a week'
        }
      },
      monthlyGoal: {
        title: 'Monthly Goal',
        progress: 'Progress',
        description: 'You are on track to reach your 15% reduction goal this month!'
      },
      modals: {
        transport: {
          title: 'Register Transport',
          type: 'Transport Type',
          distance: 'Distance (km)',
          passengers: 'Number of Passengers (including you)',
          passengersNote: 'Emission will be divided by number of passengers',
          prediction: 'Emission Prediction',
          distancePlaceholder: 'Ex: 15.5',
          register: 'Register Trip',
          tips: {
            title: 'Eco Tips',
            bike: 'Bike and walking = 0 emissions! 🌱',
            public: 'Public transport reduces per capita emissions',
            carpool: 'Carpooling divides emissions',
            electric: 'Electric cars are 3x cleaner'
          },
          types: {
            car: 'Car (Gasoline)',
            electricCar: 'Electric Car',
            bus: 'Bus',
            train: 'Train/Metro',
            motorcycle: 'Motorcycle',
            bike: 'Bicycle',
            walk: 'Walking',
            airplane: 'Airplane'
          }
        },
        energy: {
          title: 'Energy Consumption',
          type: 'Energy Type',
          period: 'Consumption Period',
          consumption: 'Consumption',
          emission: 'Daily Emission',
          register: 'Register Consumption',
          converted: 'Converted to average daily emission',
          tips: {
            title: 'Saving Tips',
            led: 'Use LED bulbs (80% less energy)',
            unplug: 'Unplug devices from outlets',
            solar: 'Solar energy reduces 90% of emissions',
            ac: 'Air conditioning: use timer and ideal temperature',
            fridge: 'Refrigerator: avoid opening unnecessarily'
          },
          types: {
            electricity: 'Electricity',
            naturalGas: 'Natural Gas',
            lpg: 'Cooking Gas (LPG)',
            solar: 'Solar Energy',
            heating: 'Electric Heating',
            diesel: 'Diesel Generator'
          },
          periods: {
            daily: 'Per day',
            weekly: 'Per week',
            monthly: 'Per month'
          }
        },
        food: {
          title: 'Register Meal',
          meal: 'Meal',
          food: 'Food',
          unit: 'Unit',
          quantity: 'Quantity',
          impact: 'Environmental Impact',
          register: 'Register Meal',
          levels: {
            low: 'Low',
            medium: 'Medium',
            high: 'High'
          },
          meals: {
            breakfast: 'Breakfast',
            lunch: 'Lunch',
            dinner: 'Dinner',
            snack: 'Snack'
          },
          categories: {
            animalProtein: 'Animal Protein',
            plantProtein: 'Plant Protein',
            carbs: 'Carbohydrates',
            vegetables: 'Vegetables',
            fruits: 'Fruits',
            beverages: 'Beverages'
          },
          units: {
            grams: 'grams (g)',
            unit: 'unit',
            cup: 'cup',
            spoon: 'tablespoon'
          },
          tips: {
            title: 'Sustainable Tips',
            reduceMeat: 'Reduce red meat: highest environmental impact',
            plantProtein: 'Prefer plant proteins and chicken',
            local: 'Local and seasonal foods are better',
            waste: 'Avoid food waste',
            vegan: 'A vegan meal can reduce 75% of emissions'
          }
        },
        reports: {
          title: 'Environmental Reports',
          period: 'Analysis Period',
          overview: 'Overview',
          transport: 'Transport',
          energy: 'Energy',
          food: 'Food',
          totalEmissions: 'Total Emissions',
          activities: 'Activities',
          trend: 'Trend',
          dailyAverage: 'Daily Average',
          byCategory: 'Emissions by Category',
          noActivities: 'No activities recorded in this period',
          export: 'Export Report',
          close: 'Close',
          periods: {
            week: 'Last Week',
            month: 'Last Month',
            year: 'Last Year'
          },
          insights: {
            title: 'Personalized Insights',
            transportHigh: 'Your biggest impact comes from transport. Consider using more public transport or cycling.',
            energyHigh: 'Energy is your biggest impact. Consider switching to solar energy or reducing consumption.',
            foodHigh: 'Food is your biggest impact. Consider reducing red meat and increasing vegetables.',
            trending: 'Your footprint is decreasing. Keep it up!',
            goal: 'Suggested goal: Reduce 10% of emissions next month.'
          }
        }
      }
    }
  },
  'es': {
    common: {
      login: 'Iniciar sesión',
      register: 'Registrarse',
      cancel: 'Cancelar',
      save: 'Guardar',
      back: 'Atrás',
      next: 'Siguiente',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito'
    },
    home: {
      title: 'Transforma tu vida en',
      titleHighlight: 'sostenible',
      subtitle: 'Rastrea tu huella de carbono, recibe consejos personalizados y únete a una comunidad eco-consciente. ¡Pequeñas acciones, gran impacto! 🌍',
      startFree: '🚀 Comenzar Ahora - Gratis',
      viewDemo: '📊 Ver Demo',
      howItWorks: '¿Cómo funciona EcoTrack?',
      features: {
        calculate: {
          title: 'Calcula',
          description: 'Tu huella de carbono automáticamente'
        },
        visualize: {
          title: 'Visualiza',
          description: 'Métricas y progreso en tableros'
        },
        gamify: {
          title: 'Gamifica',
          description: 'Desafíos eco con puntos y medallas'
        },
        connect: {
          title: 'Conecta',
          description: 'Con comunidad eco-consciente'
        }
      },
      stats: {
        wantSustainable: 'de las personas quieren ser más sostenibles',
        knowHow: 'saben cómo medir su impacto',
        betaUsers: 'usuarios beta ya usando'
      }
    },
    auth: {
      register: {
        title: 'Crear cuenta en EcoTrack',
        subtitle: 'Únete a la comunidad sostenible',
        firstName: 'Nombre',
        lastName: 'Apellido',
        username: 'Nombre de usuario',
        email: 'Correo electrónico',
        confirmEmail: 'Confirmar correo',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        createAccount: 'Crear cuenta',
        alreadyHaveAccount: '¿Ya tienes una cuenta?',
        loginHere: 'Inicia sesión aquí',
        errors: {
          firstNameRequired: 'El nombre es obligatorio',
          lastNameRequired: 'El apellido es obligatorio',
          usernameRequired: 'El nombre de usuario es obligatorio',
          emailRequired: 'El correo electrónico es obligatorio',
          emailInvalid: 'Correo electrónico inválido',
          emailsDoNotMatch: 'Los correos no coinciden',
          passwordRequired: 'La contraseña es obligatoria',
          passwordTooShort: 'La contraseña debe tener al menos 6 caracteres',
          passwordsDoNotMatch: 'Las contraseñas no coinciden'
        }
      },
      login: {
        title: 'Iniciar Sesión',
        subtitle: 'Entra en tu cuenta sostenible',
        email: 'Correo electrónico',
        password: 'Contraseña',
        loginButton: 'Entrar',
        loginButtonLoading: 'Entrando...',
        back: 'Volver',
        noAccount: '¿No tienes una cuenta?',
        registerHere: 'Regístrate aquí',
        tip: 'Usa el mismo correo y contraseña que usaste en el registro',
        clearData: 'Limpiar datos (Debug)'
      }
    },
    dashboard: {
      welcome: '¡Bienvenido a tu EcoTrack! 🌍',
      subtitle: 'Rastrea tu huella de carbono y marca la diferencia para el planeta.',
      hello: 'Hola',
      logout: 'Cerrar sesión',
      carbonFootprint: {
        today: 'Hoy',
        thisWeek: 'Esta Semana',
        thisMonth: 'Este Mes',
        thisYear: 'Este Año',
        emitted: 'CO₂ emitido'
      },
      quickActions: {
        title: 'Acciones Rápidas',
        transport: {
          title: 'Registrar Transporte',
          description: 'Añade tu viaje de hoy'
        },
        energy: {
          title: 'Consumo de Energía',
          description: 'Registrar uso de energía'
        },
        food: {
          title: 'Alimentación',
          description: 'Registrar comidas'
        },
        report: {
          title: 'Ver Informe',
          description: 'Análisis detallado'
        }
      },
      tipOfDay: {
        title: 'Consejo del Día',
        content: '¡Usa transporte público o bicicleta para reducir tu huella de carbono hasta un 20%!'
      },
      achievements: {
        title: 'Logros',
        firstStep: {
          title: 'Primer Paso',
          description: 'Completó el primer cálculo de huella de carbono'
        },
        ecoWarrior: {
          title: 'Eco Guerrero',
          description: 'Redujo la huella de carbono en 10%'
        },
        greenWeek: {
          title: 'Semana Verde',
          description: 'Mantuvo bajas emisiones por una semana'
        }
      },
      monthlyGoal: {
        title: 'Meta Mensual',
        progress: 'Progreso',
        description: '¡Estás en camino de alcanzar tu meta de reducción del 15% este mes!'
      },
      modals: {
        transport: {
          title: 'Registrar Transporte',
          type: 'Tipo de Transporte',
          distance: 'Distancia (km)',
          passengers: 'Número de Pasajeros (incluyéndote)',
          passengersNote: 'La emisión se dividirá por el número de pasajeros',
          prediction: 'Predicción de Emisión',
          distancePlaceholder: 'Ej: 15.5',
          register: 'Registrar Viaje',
          tips: {
            title: 'Consejos Eco',
            bike: '¡Bicicleta y caminar = 0 emisiones! 🌱',
            public: 'El transporte público reduce emisiones per cápita',
            carpool: 'Compartir coche divide las emisiones',
            electric: 'Los coches eléctricos son 3x más limpios'
          },
          types: {
            car: 'Coche (Gasolina)',
            electricCar: 'Coche Eléctrico',
            bus: 'Autobús',
            train: 'Tren/Metro',
            motorcycle: 'Motocicleta',
            bike: 'Bicicleta',
            walk: 'Caminar',
            airplane: 'Avión'
          }
        },
        energy: {
          title: 'Consumo de Energía',
          type: 'Tipo de Energía',
          period: 'Período de Consumo',
          consumption: 'Consumo',
          emission: 'Emisión Diaria',
          register: 'Registrar Consumo',
          converted: 'Convertido a emisión diaria promedio',
          tips: {
            title: 'Consejos de Ahorro',
            led: 'Usa bombillas LED (80% menos energía)',
            unplug: 'Desenchufa aparatos de las tomas',
            solar: 'La energía solar reduce 90% de las emisiones',
            ac: 'Aire acondicionado: usa temporizador y temperatura ideal',
            fridge: 'Refrigerador: evita abrir innecesariamente'
          },
          types: {
            electricity: 'Energía Eléctrica',
            naturalGas: 'Gas Natural',
            lpg: 'Gas de Cocina (GLP)',
            solar: 'Energía Solar',
            heating: 'Calefacción Eléctrica',
            diesel: 'Generador Diésel'
          },
          periods: {
            daily: 'Por día',
            weekly: 'Por semana',
            monthly: 'Por mes'
          }
        },
        food: {
          title: 'Registrar Comida',
          meal: 'Comida',
          food: 'Alimento',
          unit: 'Unidad',
          quantity: 'Cantidad',
          impact: 'Impacto Ambiental',
          register: 'Registrar Comida',
          levels: {
            low: 'Bajo',
            medium: 'Medio',
            high: 'Alto'
          },
          meals: {
            breakfast: 'Desayuno',
            lunch: 'Almuerzo',
            dinner: 'Cena',
            snack: 'Merienda'
          },
          categories: {
            animalProtein: 'Proteína Animal',
            plantProtein: 'Proteína Vegetal',
            carbs: 'Carbohidratos',
            vegetables: 'Vegetales',
            fruits: 'Frutas',
            beverages: 'Bebidas'
          },
          units: {
            grams: 'gramos (g)',
            unit: 'unidad',
            cup: 'taza',
            spoon: 'cucharada'
          },
          tips: {
            title: 'Consejos Sostenibles',
            reduceMeat: 'Reduce carne roja: mayor impacto ambiental',
            plantProtein: 'Prefiere proteínas vegetales y pollo',
            local: 'Los alimentos locales y de temporada son mejores',
            waste: 'Evita el desperdicio de comida',
            vegan: 'Una comida vegana puede reducir 75% de las emisiones'
          }
        },
        reports: {
          title: 'Informes Ambientales',
          period: 'Período de Análisis',
          overview: 'Resumen',
          transport: 'Transporte',
          energy: 'Energía',
          food: 'Alimentación',
          totalEmissions: 'Emisiones Totales',
          activities: 'Actividades',
          trend: 'Tendencia',
          dailyAverage: 'Promedio Diario',
          byCategory: 'Emisiones por Categoría',
          noActivities: 'No hay actividades registradas en este período',
          export: 'Exportar Informe',
          close: 'Cerrar',
          periods: {
            week: 'Última Semana',
            month: 'Último Mes',
            year: 'Último Año'
          },
          insights: {
            title: 'Insights Personalizados',
            transportHigh: 'Tu mayor impacto viene del transporte. Considera usar más transporte público o bicicleta.',
            energyHigh: 'La energía es tu mayor impacto. Considera cambiar a energía solar o reducir el consumo.',
            foodHigh: 'La alimentación es tu mayor impacto. Considera reducir carne roja y aumentar vegetales.',
            trending: '¡Tu huella está disminuyendo. Sigue así!',
            goal: 'Meta sugerida: Reducir 10% de las emisiones el próximo mes.'
          }
        }
      }
    }
  },
  'fr': {
    common: {
      login: 'Connexion',
      register: 'S\'inscrire',
      cancel: 'Annuler',
      save: 'Enregistrer',
      back: 'Retour',
      next: 'Suivant',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès'
    },
    home: {
      title: 'Transformez votre vie en',
      titleHighlight: 'durable',
      subtitle: 'Suivez votre empreinte carbone, recevez des conseils personnalisés et rejoignez une communauté éco-consciente. Petites actions, grand impact ! 🌍',
      startFree: '🚀 Commencer Maintenant - Gratuit',
      viewDemo: '📊 Voir la Démo',
      howItWorks: 'Comment fonctionne EcoTrack ?',
      features: {
        calculate: {
          title: 'Calculez',
          description: 'Votre empreinte carbone automatiquement'
        },
        visualize: {
          title: 'Visualisez',
          description: 'Métriques et progrès dans des tableaux de bord'
        },
        gamify: {
          title: 'Gamifiez',
          description: 'Défis éco avec points et badges'
        },
        connect: {
          title: 'Connectez',
          description: 'Avec la communauté éco-consciente'
        }
      },
      stats: {
        wantSustainable: 'des personnes veulent être plus durables',
        knowHow: 'savent comment mesurer leur impact',
        betaUsers: 'utilisateurs bêta utilisent déjà'
      }
    },
    auth: {
      register: {
        title: 'Créer un compte EcoTrack',
        subtitle: 'Rejoignez la communauté durable',
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        username: 'Nom d\'utilisateur',
        email: 'E-mail',
        confirmEmail: 'Confirmer l\'e-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        createAccount: 'Créer un compte',
        alreadyHaveAccount: 'Vous avez déjà un compte ?',
        loginHere: 'Connectez-vous ici',
        errors: {
          firstNameRequired: 'Le prénom est obligatoire',
          lastNameRequired: 'Le nom de famille est obligatoire',
          usernameRequired: 'Le nom d\'utilisateur est obligatoire',
          emailRequired: 'L\'e-mail est obligatoire',
          emailInvalid: 'E-mail invalide',
          emailsDoNotMatch: 'Les e-mails ne correspondent pas',
          passwordRequired: 'Le mot de passe est obligatoire',
          passwordTooShort: 'Le mot de passe doit contenir au moins 6 caractères',
          passwordsDoNotMatch: 'Les mots de passe ne correspondent pas'
        }
      },
      login: {
        title: 'Connexion',
        subtitle: 'Entrez dans votre compte durable',
        email: 'E-mail',
        password: 'Mot de passe',
        loginButton: 'Se connecter',
        loginButtonLoading: 'Connexion...',
        back: 'Retour',
        noAccount: 'Vous n\'avez pas de compte ?',
        registerHere: 'Inscrivez-vous ici',
        tip: 'Utilisez le même e-mail et mot de passe que lors de l\'inscription',
        clearData: 'Effacer données (Debug)'
      }
    },
    dashboard: {
      welcome: 'Bienvenue dans votre EcoTrack ! 🌍',
      subtitle: 'Suivez votre empreinte carbone et faites la différence pour la planète.',
      hello: 'Bonjour',
      logout: 'Déconnexion',
      carbonFootprint: {
        today: 'Aujourd\'hui',
        thisWeek: 'Cette Semaine',
        thisMonth: 'Ce Mois',
        thisYear: 'Cette Année',
        emitted: 'CO₂ émis'
      },
      quickActions: {
        title: 'Actions Rapides',
        transport: {
          title: 'Enregistrer Transport',
          description: 'Ajoutez votre voyage d\'aujourd\'hui'
        },
        energy: {
          title: 'Consommation d\'Énergie',
          description: 'Enregistrer l\'usage d\'énergie'
        },
        food: {
          title: 'Alimentation',
          description: 'Enregistrer les repas'
        },
        report: {
          title: 'Voir le Rapport',
          description: 'Analyse détaillée'
        }
      },
      tipOfDay: {
        title: 'Conseil du Jour',
        content: 'Utilisez les transports publics ou le vélo pour réduire votre empreinte carbone jusqu\'à 20% !'
      },
      achievements: {
        title: 'Réalisations',
        firstStep: {
          title: 'Premier Pas',
          description: 'A terminé le premier calcul d\'empreinte carbone'
        },
        ecoWarrior: {
          title: 'Éco Guerrier',
          description: 'A réduit l\'empreinte carbone de 10%'
        },
        greenWeek: {
          title: 'Semaine Verte',
          description: 'A maintenu de faibles émissions pendant une semaine'
        }
      },
      monthlyGoal: {
        title: 'Objectif Mensuel',
        progress: 'Progrès',
        description: 'Vous êtes sur la bonne voie pour atteindre votre objectif de réduction de 15% ce mois !'
      },
      modals: {
        transport: {
          title: 'Enregistrer Transport',
          type: 'Type de Transport',
          distance: 'Distance (km)',
          passengers: 'Nombre de Passagers (vous inclus)',
          passengersNote: "L'émission sera divisée par le nombre de passagers",
          prediction: 'Prédiction d\'Émission',
          distancePlaceholder: 'Ex: 15.5',
          register: 'Enregistrer Voyage',
          tips: {
            title: 'Conseils Éco',
            bike: 'Vélo et marche = 0 émissions ! 🌱',
            public: 'Les transports publics réduisent les émissions par habitant',
            carpool: 'Le covoiturage divise les émissions',
            electric: 'Les voitures électriques sont 3x plus propres'
          },
          types: {
            car: 'Voiture (Essence)',
            electricCar: 'Voiture Électrique',
            bus: 'Bus',
            train: 'Train/Métro',
            motorcycle: 'Motocyclette',
            bike: 'Vélo',
            walk: 'Marche',
            airplane: 'Avion'
          }
        },
        energy: {
          title: 'Consommation d\'Énergie',
          type: 'Type d\'Énergie',
          period: 'Période de Consommation',
          consumption: 'Consommation',
          emission: 'Émission Quotidienne',
          register: 'Enregistrer Consommation',
          converted: 'Converti en émission quotidienne moyenne',
          tips: {
            title: 'Conseils d\'Économie',
            led: 'Utilisez des ampoules LED (80% moins d\'énergie)',
            unplug: 'Débranchez les appareils des prises',
            solar: 'L\'énergie solaire réduit 90% des émissions',
            ac: 'Climatisation: utilisez une minuterie et une température idéale',
            fridge: 'Réfrigérateur: évitez d\'ouvrir inutilement'
          },
          types: {
            electricity: 'Énergie Électrique',
            naturalGas: 'Gaz Naturel',
            lpg: 'Gaz de Cuisine (GPL)',
            solar: 'Énergie Solaire',
            heating: 'Chauffage Électrique',
            diesel: 'Générateur Diesel'
          },
          periods: {
            daily: 'Par jour',
            weekly: 'Par semaine',
            monthly: 'Par mois'
          }
        },
        food: {
          title: 'Enregistrer Repas',
          meal: 'Repas',
          food: 'Aliment',
          unit: 'Unité',
          quantity: 'Quantité',
          impact: 'Impact Environnemental',
          register: 'Enregistrer Repas',
          levels: {
            low: 'Faible',
            medium: 'Moyen',
            high: 'Élevé'
          },
          meals: {
            breakfast: 'Petit-déjeuner',
            lunch: 'Déjeuner',
            dinner: 'Dîner',
            snack: 'Collation'
          },
          categories: {
            animalProtein: 'Protéine Animale',
            plantProtein: 'Protéine Végétale',
            carbs: 'Glucides',
            vegetables: 'Légumes',
            fruits: 'Fruits',
            beverages: 'Boissons'
          },
          units: {
            grams: 'grammes (g)',
            unit: 'unité',
            cup: 'tasse',
            spoon: 'cuillère à soupe'
          },
          tips: {
            title: 'Conseils Durables',
            reduceMeat: 'Réduisez la viande rouge: plus grand impact environnemental',
            plantProtein: 'Préférez les protéines végétales et le poulet',
            local: 'Les aliments locaux et de saison sont meilleurs',
            waste: 'Évitez le gaspillage alimentaire',
            vegan: 'Un repas végétalien peut réduire 75% des émissions'
          }
        },
        reports: {
          title: 'Rapports Environnementaux',
          period: 'Période d\'Analyse',
          overview: 'Vue d\'ensemble',
          transport: 'Transport',
          energy: 'Énergie',
          food: 'Alimentation',
          totalEmissions: 'Émissions Totales',
          activities: 'Activités',
          trend: 'Tendance',
          dailyAverage: 'Moyenne Quotidienne',
          byCategory: 'Émissions par Catégorie',
          noActivities: 'Aucune activité enregistrée dans cette période',
          export: 'Exporter Rapport',
          close: 'Fermer',
          periods: {
            week: 'Semaine Dernière',
            month: 'Mois Dernier',
            year: 'Année Dernière'
          },
          insights: {
            title: 'Insights Personnalisés',
            transportHigh: 'Votre plus grand impact vient du transport. Considérez utiliser plus les transports publics ou le vélo.',
            energyHigh: 'L\'énergie est votre plus grand impact. Considérez passer à l\'énergie solaire ou réduire la consommation.',
            foodHigh: 'L\'alimentation est votre plus grand impact. Considérez réduire la viande rouge et augmenter les légumes.',
            trending: 'Votre empreinte diminue. Continuez comme ça !',
            goal: 'Objectif suggéré: Réduire 10% des émissions le mois prochain.'
          }
        }
      }
    }
  }
};