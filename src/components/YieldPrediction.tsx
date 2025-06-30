
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, BarChart3, Target, Calendar, DollarSign } from "lucide-react";

const YieldPrediction = () => {
  const predictions = [
    {
      id: 1,
      field: "Поле #247",
      crop: "Пшеница",
      area: "45.2 га",
      currentYield: "3.2 т/га",
      predictedYield: "3.9 т/га",
      confidence: 87,
      trend: "up",
      harvestDate: "15 сентября",
      revenue: 156800,
      factors: ["Оптимальная влажность", "Отсутствие болезней", "Благоприятная погода"]
    },
    {
      id: 2,
      field: "Поле #156", 
      crop: "Хлопок",
      area: "38.7 га",
      currentYield: "2.1 т/га",
      predictedYield: "1.8 т/га",
      confidence: 78,
      trend: "down",
      harvestDate: "28 октября",
      revenue: 98400,
      factors: ["Болезни растений", "Неравномерный полив", "Высокая температура"]
    },
    {
      id: 3,
      field: "Поле #334",
      crop: "Томаты", 
      area: "23.8 га",
      currentYield: "45 т/га",
      predictedYield: "52 т/га",
      confidence: 91,
      trend: "up",
      harvestDate: "10 августа",
      revenue: 247000,
      factors: ["Идеальная влажность", "Профилактические обработки", "Капельное орошение"]
    }
  ];

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? TrendingUp : TrendingDown;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'UZS',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Точность прогноза</p>
                <p className="text-2xl font-bold text-blue-600">87%</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Прогн. прирост</p>
                <p className="text-2xl font-bold text-green-600">+22%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Общий доход</p>
                <p className="text-2xl font-bold">502K</p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">До сбора</p>
                <p className="text-2xl font-bold">45д</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Yield Analysis Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Анализ урожайности по культурам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Chart placeholder */}
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-blue-600">Интерактивный график урожайности</p>
                <p className="text-sm text-blue-500">Динамика за последние 6 недель</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm">Прогнозируемая урожайность</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm">Текущая урожайность</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span className="text-sm">Прошлый год</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Predictions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Детальные прогнозы
            </CardTitle>
            <Button variant="outline" size="sm">
              Экспорт данных
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {predictions.map((prediction) => {
              const TrendIcon = getTrendIcon(prediction.trend);
              
              return (
                <div key={prediction.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{prediction.field}</h3>
                      <p className="text-muted-foreground">{prediction.crop} • {prediction.area}</p>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center ${getTrendColor(prediction.trend)}`}>
                        <TrendIcon className="h-5 w-5 mr-1" />
                        <span className="font-semibold text-lg">{prediction.predictedYield}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Прогноз урожайности</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Текущая урожайность</p>
                      <p className="font-semibold">{prediction.currentYield}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Дата сбора</p>
                      <p className="font-semibold">{prediction.harvestDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ожидаемый доход</p>
                      <p className="font-semibold text-green-600">{formatCurrency(prediction.revenue)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Уверенность</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={prediction.confidence} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{prediction.confidence}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Ключевые факторы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prediction.factors.map((factor, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className={prediction.trend === "up" ? "border-green-200 text-green-700" : "border-red-200 text-red-700"}
                        >
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YieldPrediction;
