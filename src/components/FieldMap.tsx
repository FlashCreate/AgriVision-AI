
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Satellite, AlertCircle, Leaf } from "lucide-react";

const FieldMap = () => {
  const fields = [
    { id: 1, name: "Поле #247", crop: "Пшеница", status: "healthy", area: "45.2 га", health: 92 },
    { id: 2, name: "Поле #156", crop: "Хлопок", status: "warning", area: "38.7 га", health: 78 },
    { id: 3, name: "Поле #089", crop: "Кукуруза", status: "critical", area: "52.1 га", health: 65 },
    { id: 4, name: "Поле #334", crop: "Томаты", status: "healthy", area: "23.8 га", health: 89 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "text-green-600 bg-green-50 border-green-200";
      case "warning": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "healthy": return "Здоровое";
      case "warning": return "Внимание";
      case "critical": return "Критично";
      default: return "Неизвестно";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Satellite className="h-5 w-5 text-green-600" />
            Карта полей
          </CardTitle>
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            Полный обзор
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Simplified Map Visualization */}
        <div className="relative h-64 bg-gradient-to-br from-green-100 to-emerald-50 rounded-lg border-2 border-green-200 mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-green-100 opacity-30"></div>
          
          {/* Field Markers */}
          <div className="absolute top-4 left-8 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-12 right-12 w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-8 left-16 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-16 right-8 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
          
          {/* Info overlay */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
            <p className="text-sm font-medium">Спутниковые данные</p>
            <p className="text-xs text-muted-foreground">Обновлено 15 мин назад</p>
          </div>
        </div>

        {/* Fields List */}
        <div className="space-y-3">
          {fields.map((field) => (
            <div key={field.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  field.status === "healthy" ? "bg-green-500" :
                  field.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                }`}></div>
                <div>
                  <p className="font-medium">{field.name}</p>
                  <p className="text-sm text-muted-foreground">{field.crop} • {field.area}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-sm font-medium">{field.health}%</p>
                  <Badge variant="outline" className={getStatusColor(field.status)}>
                    {getStatusText(field.status)}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FieldMap;
