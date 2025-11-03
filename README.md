# 🌱 EcoTrack - Carbon Footprint Tracking Platform

## LUMA Startathon 2025 Submission

**Track your carbon footprint, get personalized tips and join an eco-conscious community. Small actions, big impact! 🌍**

## 🎯 **The Problem**

With climate change accelerating, individuals want to reduce their environmental impact but lack accessible tools to track and understand their carbon footprint. Most people don't know where to start or how to measure their daily environmental impact.

## 💡 **Our Solution**

EcoTrack is a comprehensive carbon footprint tracking platform that:
- **Automatically calculates** CO2 emissions from transport, energy, and food
- **Visualizes progress** with intuitive dashboards and reports
- **Gamifies sustainability** with achievements and goals
- **Provides personalized insights** and eco-friendly tips
- **Supports 5 languages** (PT-BR, PT-PT, EN, ES, FR)

## 🚀 **Key Features**

### ✅ **Implemented Features:**
- **🚗 Transport Tracking**: 8 transport types with CO2 calculations
- **⚡ Energy Consumption**: Multiple energy sources with emission factors
- **🍽️ Food Impact**: 15 food categories with environmental impact levels
- **📊 Analytics Dashboard**: Comprehensive reports and trends
- **🌍 Multilingual**: Complete i18n system for 5 languages
- **🔐 Authentication**: User registration and login system
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS

### 🎮 **Gamification Elements:**
- Achievement system
- Monthly reduction goals
- Progress tracking
- Eco-tips and recommendations

## 🛠 **Tech Stack**

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Internationalization**: React-i18next
- **Charts**: Chart.js + react-chartjs-2
- **Backend Ready**: Firebase SDK configured
- **State Management**: React Context API

## 📦 **Installation & Setup**

### Prerequisites
- Node.js 16+ and npm
- Git

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd ecotrack

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Build for production
npm run build
```

### 🌐 **Access the App**
- **Development**: http://localhost:3000
- **Production Build**: Serves on any static hosting

## 🎯 **How to Use**

1. **Sign Up**: Create account with name, email, username
2. **Track Activities**: Use Quick Actions to log:
   - 🚗 Transport (distance, vehicle type)
   - ⚡ Energy consumption (type, amount)
   - 🍽️ Food intake (meals, portions)
3. **View Impact**: Check dashboard for CO2 emissions
4. **Analyze Trends**: Use reports for detailed insights
5. **Set Goals**: Work towards reduction targets

## 🌍 **Multilingual Support**

- **🇧🇷 Portuguese (Brazil)**: Default language
- **🇵🇹 Portuguese (Portugal)**: European variant
- **🇺🇸 English**: International
- **🇪🇸 Spanish**: Latin America/Spain
- **🇫🇷 French**: Europe/Canada

## 📊 **Sample Data & Calculations**

### CO2 Emission Factors:
- **Car (Gasoline)**: 120g CO2/km
- **Electric Car**: 40g CO2/km
- **Public Bus**: 80g CO2/km
- **Electricity**: 0.47kg CO2/kWh (Brazil average)
- **Beef**: 6.0kg CO2/100g
- **Vegetables**: 0.05kg CO2/100g

## 🎯 **Who It Helps**

- **Individuals** wanting to reduce environmental impact
- **Families** tracking household carbon footprint
- **Companies** encouraging employee sustainability
- **Communities** working towards climate goals
- **Educators** teaching environmental awareness

## 🔮 **Future Vision**

### Immediate Next Steps:
- **Real-time data sync** with Firebase
- **Social features** for community challenges
- **AI-powered recommendations** for reduction strategies
- **Integration with IoT devices** for automatic tracking
- **Carbon offset marketplace**

### Long-term Growth:
- **Corporate dashboard** for business tracking
- **Government partnerships** for city-wide programs
- **Mobile app** for iOS/Android
- **API for third-party integrations**

## 🏆 **Why EcoTrack Will Succeed**

1. **Immediate Value**: Instant CO2 calculations and insights
2. **User-Friendly**: Intuitive interface, multiple languages
3. **Scalable Technology**: Modern React/TypeScript architecture
4. **Global Market**: Climate awareness is universal
5. **Proven Demand**: 87% of people want to be more sustainable*

*Based on recent sustainability surveys

## 👥 **Team**

Built with passion for sustainability and cutting-edge technology.

## 📄 **License**

This project is open source and available under the MIT License.

---

## 🚀 **Demo Instructions**

### Live Demo Workflow:
1. **Homepage**: Shows features and value proposition
2. **Registration**: Quick 30-second signup
3. **Dashboard**: Immediate access to tracking tools
4. **Quick Actions**: 
   - Add a car trip → See CO2 calculation
   - Log energy usage → View daily emissions
   - Record meals → Check food impact
5. **Reports**: Analyze trends and get insights
6. **Language Switch**: Demonstrate i18n system

### Sample User Journey:
```
User registers → Logs 20km car trip → Sees 2.4kg CO2 impact → 
Gets tip about public transport → Sets monthly reduction goal → 
Views multilingual interface → Feels empowered to change!
```

**EcoTrack: Making sustainability trackable, actionable, and achievable! 🌱**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
