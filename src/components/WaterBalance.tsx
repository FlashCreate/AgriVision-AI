
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Droplets, Thermometer, Cloud, AlertTriangle, TrendingDown, Settings } from "lucide-react";

const WaterBalance = () => {
  const zones = [
    {
      id: 1,
      name: "Зона A-12",
      moisture: 75,
      status: "optimal",
      lastIrrigation: "2 часа назад",
      nextIrrigation: "через 6 часов",
      savings: 28
    },
    {
      id: 2,
      name: "Зона B-08",
      moisture: 45,
      status: "low", 
      lastIrrigation: "8 часов назад",
      nextIrrigation: "срочно",
      savings: 15
    },
    {
      id: 3,
      name: "Зона C-15",
      moisture: 85,
      status: "high",
      lastIrrigation: "30 мин назад",
      nextIrrigation: "через 12 часов",
      savings: 32
    },
    {
      id: 4,
      name: "Зона D-03",
      moisture: 65,
      status: "optimal",
      lastIrrigation: "4 часа назад", 
      nextIrrigation: "через 8 часов",
      savings: 25
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return "text-green-600 bg-green-50 border-green-200";
      case "low": return "text-red-600 bg-red-50 border-red-200";
      case "high": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "optimal": return "Оптимально";
      case "low": return "Низкая";
      case "high": return "Избыток";
      default: return "Неизвестно";
    }
  };

  const getMoistureColor = (moisture: number) => {
    if (moisture < 50) return "bg-red-500";
    if (moisture < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      {/* Water Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Общая экономия</p>
                <p className="text-2xl font-bold text-cyan-600">30%</p>
              </div>
              <TrendingDown className="h-8 w-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Расход сегодня</p>
                <p className="text-2xl font-bold">2,450л</p>
              </div>
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Влажность почвы</p>
                <p className="text-2xl font-bold text-green-600">68%</p>
              </div>
              <Thermometer className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Прогноз дождя</p>
                <p className="text-2xl font-bold text-gray-600">0%</p>
              </div>
              <Cloud className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Irrigation Control */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-blue-600" />
              Управление орошением
            </CardTitle>
            <Button className="water-gradient text-white">
              Автоматический режим
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System Status */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Состояние системы</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Главный насос</span>
                  <Badge className="bg-green-50 text-green-600">Активен</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Давление в системе</span>
                  <span className="font-medium">2.4 бар</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Активных зон</span>
                  <span className="font-medium">3 из 12</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Быстрые действия</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-16 flex-col">
                  <Droplets className="h-6 w-6 mb-1" />
                  <span className="text-sm">Полить все</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <AlertTriangle className="h-6 w-6 mb-1" />
                  <span className="text-sm">Стоп</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Settings className="h-6 w-6 mb-1" />
                  <span className="text-sm">Настройки</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Cloud className="h-6 w-6 mb-1" />
                  <span className="text-sm">Прогноз</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Irrigation Zones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-600" />
            Зоны орошения
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {zones.map((zone) => (
              <div key={zone.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{zone.name}</h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getStatusColor(zone.status)}>
                      {getStatusText(zone.status)}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Управление
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Влажность почвы</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress 
                        value={zone.moisture} 
                        className="flex-1 h-3"
                        style={{ "--progress-background": getMoistureColor(zone.moisture) } as any}
                      />
                      <span className="text-sm font-medium w-10">{zone.moisture}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Последний полив</p>
                    <p className="font-medium">{zone.lastIrrigation}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Следующий полив</p>
                    <p className="font-medium">{zone.nextIrrigation}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Экономия воды</p>
                    <p className="font-medium text-green-600">-{zone.savings}%</p>
                  </div>
                </div>

                {zone.status === "low" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <p className="text-sm text-red-700">
                      <strong>Требуется полив:</strong> Уровень влажности критически низкий
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterBalance;
