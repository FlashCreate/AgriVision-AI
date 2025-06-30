
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Droplets, 
  Camera, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Thermometer,
  Cloud,
  BarChart3,
  MapPin,
  Wifi,
  Zap
} from "lucide-react";
import FieldMap from "@/components/FieldMap";
import DiseaseDetection from "@/components/DiseaseDetection";
import WaterBalance from "@/components/WaterBalance";
import YieldPrediction from "@/components/YieldPrediction";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");

  const modules = [
    { id: "dashboard", name: "Дашборд", icon: BarChart3 },
    { id: "disease", name: "Детекция болезней", icon: Camera },
    { id: "water", name: "Водный баланс", icon: Droplets },
    { id: "yield", name: "Прогноз урожая", icon: TrendingUp },
  ];

  const stats = [
    { title: "Активные поля", value: "2,847", unit: "га", icon: MapPin, color: "text-green-600" },
    { title: "Точность детекции", value: "94", unit: "%", icon: Camera, color: "text-blue-600" },
    { title: "Экономия воды", value: "28", unit: "%", icon: Droplets, color: "text-cyan-600" },
    { title: "Прирост урожая", value: "+22", unit: "%", icon: TrendingUp, color: "text-emerald-600" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "Обнаружены признаки мучнистой росы в поле #247", time: "15 мин назад" },
    { id: 2, type: "info", message: "Рекомендуется полив в секторе B-12", time: "1 час назад" },
    { id: 3, type: "success", message: "Урожайность пшеницы превышает прогноз на 8%", time: "3 часа назад" },
  ];

  const renderModule = () => {
    switch (activeModule) {
      case "disease":
        return <DiseaseDetection />;
      case "water":
        return <WaterBalance />;
      case "yield":
        return <YieldPrediction />;
      default:
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-3xl font-bold">{stat.value}</span>
                          <span className="text-lg text-muted-foreground">{stat.unit}</span>
                        </div>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Field Map */}
              <div className="lg:col-span-2">
                <FieldMap />
              </div>

              {/* Alerts Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    Уведомления
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                      {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />}
                      {alert.type === "info" && <Droplets className="h-5 w-5 text-blue-500 mt-0.5" />}
                      {alert.type === "success" && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Weather & Environmental */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Thermometer className="h-5 w-5 text-orange-500" />
                    Температура
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">24°C</span>
                    <Badge variant="secondary">Оптимально</Badge>
                  </div>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    Влажность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">68%</span>
                    <Badge variant="secondary">Норма</Badge>
                  </div>
                  <Progress value={68} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Cloud className="h-5 w-5 text-gray-500" />
                    Прогноз
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Ясно</span>
                    <Badge variant="outline">3 дня</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Благоприятные условия</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl agri-gradient flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  AgriVision AI
                </h1>
                <p className="text-sm text-muted-foreground">Интеллектуальная система точного земледелия</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <Wifi className="h-3 w-3 mr-1" />
                Подключено
              </Badge>
              <Button size="sm" className="agri-gradient text-white">
                Настройки
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeModule === module.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <module.icon className="h-5 w-5" />
                <span className="font-medium">{module.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderModule()}
      </main>
    </div>
  );
};

export default Index;
