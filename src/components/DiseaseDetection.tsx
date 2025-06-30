
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Camera, Eye, AlertTriangle, CheckCircle, Upload, Scan } from "lucide-react";

const DiseaseDetection = () => {
  const detections = [
    {
      id: 1,
      field: "Поле #247",
      disease: "Мучнистая роса",
      confidence: 94,
      severity: "medium",
      crop: "Пшеница",
      detected: "2 часа назад",
      image: "/api/placeholder/150/150",
      recommendation: "Применить фунгицид в течение 24 часов"
    },
    {
      id: 2,
      field: "Поле #156",
      disease: "Бактериальная пятнистость",
      confidence: 87,
      severity: "high",
      crop: "Хлопок",
      detected: "4 часа назад",
      image: "/api/placeholder/150/150",
      recommendation: "Немедленная обработка медьсодержащими препаратами"
    },
    {
      id: 3,
      field: "Поле #334",
      disease: "Здоровое растение",
      confidence: 96,
      severity: "none",
      crop: "Томаты",
      detected: "1 час назад",
      image: "/api/placeholder/150/150",
      recommendation: "Профилактическая обработка не требуется"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-600 bg-red-50 border-red-200";
      case "medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low": return "text-blue-600 bg-blue-50 border-blue-200";
      case "none": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "high": return "Высокая";
      case "medium": return "Средняя";
      case "low": return "Низкая";
      case "none": return "Здоровое";
      default: return "Неизвестно";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Точность</p>
                <p className="text-2xl font-bold text-green-600">94%</p>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Обнаружено болезней</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Здоровых полей</p>
                <p className="text-2xl font-bold text-green-600">35</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Снимков сегодня</p>
                <p className="text-2xl font-bold">2,847</p>
              </div>
              <Camera className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Загрузить изображения для анализа
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Перетащите изображения сюда</p>
            <p className="text-muted-foreground mb-4">или</p>
            <Button className="agri-gradient text-white">
              <Upload className="h-4 w-4 mr-2" />
              Выбрать файлы
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Поддерживаются форматы: JPG, PNG, TIFF. Максимум 10 МБ на файл.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Detection Results */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Scan className="h-5 w-5 text-blue-600" />
              Результаты детекции
            </CardTitle>
            <Button variant="outline" size="sm">
              Экспорт отчета
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {detections.map((detection) => (
              <div key={detection.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start space-x-4">
                  {/* Image placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center border">
                    <Camera className="h-8 w-8 text-green-600" />
                  </div>
                  
                  {/* Detection info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{detection.disease}</h3>
                      <Badge variant="outline" className={getSeverityColor(detection.severity)}>
                        {getSeverityText(detection.severity)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Поле</p>
                        <p className="font-medium">{detection.field}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Культура</p>
                        <p className="font-medium">{detection.crop}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Обнаружено</p>
                        <p className="font-medium">{detection.detected}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Уверенность модели</span>
                        <span className="font-medium">{detection.confidence}%</span>
                      </div>
                      <Progress value={detection.confidence} className="h-2" />
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-blue-800 mb-1">Рекомендация:</p>
                      <p className="text-sm text-blue-700">{detection.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiseaseDetection;
