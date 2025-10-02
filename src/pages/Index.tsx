import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisData, setAnalysisData] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setAnalysisData({
                duration: '0:15',
                quality: 85,
                recommendations: [
                  { title: 'Улучшить освещение', impact: 'Высокий', description: 'Кадры недостаточно освещены в начале видео' },
                  { title: 'Добавить динамику', impact: 'Средний', description: 'Больше смены планов для удержания внимания' },
                  { title: 'Оптимизировать звук', impact: 'Низкий', description: 'Фоновые шумы можно убрать' }
                ],
                script: 'Привет! Сегодня расскажу о...\n\n[Основная часть]\nРассмотрим три главных момента:\n\n1. Первый пункт...\n2. Второй важный аспект...\n3. И наконец...\n\n[Заключение]\nПодведем итоги...'
              });
              setActiveTab('analysis');
            }, 500);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Video" className="text-primary" size={28} />
            <h1 className="text-2xl font-bold text-foreground">AI Video Analyzer</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => setActiveTab('home')}>Главная</Button>
            <Button variant="ghost" onClick={() => setActiveTab('upload')}>Загрузка</Button>
            <Button variant="ghost" onClick={() => setActiveTab('pricing')}>Тарифы</Button>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Send" size={18} className="mr-2" />
            Telegram Bot
          </Button>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="home" className="mt-0">
          <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
            <div className="container mx-auto max-w-5xl text-center animate-fade-in">
              <Badge className="mb-4 bg-accent hover:bg-accent">AI-технологии</Badge>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                Анализируй видео как профессионал
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Загружайте короткие видео и получайте детальный анализ с рекомендациями по улучшению контента и автоматической генерацией сценариев
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setActiveTab('upload')}>
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузить видео
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h3 className="text-3xl font-bold text-center mb-12">Возможности платформы</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: 'Sparkles', title: 'AI-анализ', desc: 'Глубокий анализ композиции, освещения и динамики видео' },
                  { icon: 'FileText', title: 'Генерация сценариев', desc: 'Автоматическое создание сценариев на основе вашего контента' },
                  { icon: 'TrendingUp', title: 'Рекомендации', desc: 'Практические советы по улучшению качества видео' },
                  { icon: 'Zap', title: 'Быстрая обработка', desc: 'Результаты анализа за несколько секунд' },
                  { icon: 'BarChart3', title: 'Аналитика', desc: 'Детальная статистика по всем загруженным видео' },
                  { icon: 'Send', title: 'Telegram интеграция', desc: 'Работайте через удобного Telegram бота' }
                ].map((feature, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow animate-scale-in border-border">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={feature.icon as any} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="upload" className="mt-0">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Загрузка видео</CardTitle>
                  <CardDescription>Поддерживаются форматы: MP4, MOV, AVI (макс. 100 МБ)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                    <Icon name="Upload" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-lg font-medium mb-2">Перетащите файл или нажмите для выбора</p>
                    <p className="text-sm text-muted-foreground mb-4">Видео будет обработано за несколько секунд</p>
                    <input 
                      type="file" 
                      accept="video/*" 
                      className="hidden" 
                      id="video-upload"
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="video-upload">
                      <Button className="bg-primary hover:bg-primary/90">Выбрать файл</Button>
                    </label>
                  </div>
                  
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-6 animate-fade-in">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Загрузка и анализ...</span>
                        <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="analysis" className="mt-0">
          {analysisData && (
            <section className="py-20 px-4">
              <div className="container mx-auto max-w-6xl">
                <div className="mb-8 animate-fade-in">
                  <Button variant="ghost" onClick={() => setActiveTab('upload')} className="mb-4">
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Назад
                  </Button>
                  <h2 className="text-3xl font-bold mb-2">Результаты анализа</h2>
                  <p className="text-muted-foreground">Видео: video_sample.mp4 • Длительность: {analysisData.duration}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <Card className="animate-scale-in">
                    <CardHeader>
                      <CardTitle className="text-lg">Общая оценка</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-primary mb-2">{analysisData.quality}/100</div>
                      <Progress value={analysisData.quality} className="h-2" />
                      <p className="text-sm text-muted-foreground mt-2">Отличный результат!</p>
                    </CardContent>
                  </Card>

                  <Card className="animate-scale-in">
                    <CardHeader>
                      <CardTitle className="text-lg">Обработано сегодня</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-foreground mb-2">12</div>
                      <p className="text-sm text-muted-foreground">Осталось: 38 видео</p>
                    </CardContent>
                  </Card>

                  <Card className="animate-scale-in">
                    <CardHeader>
                      <CardTitle className="text-lg">Среднее качество</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-foreground mb-2">82/100</div>
                      <p className="text-sm text-accent">+5% к прошлой неделе</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-8 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lightbulb" className="text-accent" size={24} />
                      Рекомендации по улучшению
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analysisData.recommendations.map((rec: any, idx: number) => (
                        <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{rec.title}</h4>
                            <Badge variant={rec.impact === 'Высокий' ? 'default' : rec.impact === 'Средний' ? 'secondary' : 'outline'}>
                              {rec.impact}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={24} />
                      Сгенерированный сценарий
                    </CardTitle>
                    <CardDescription>Готовый сценарий на основе анализа вашего видео</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-6 rounded-lg font-mono text-sm whitespace-pre-wrap mb-4">
                      {analysisData.script}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Icon name="Copy" size={18} className="mr-2" />
                        Копировать
                      </Button>
                      <Button variant="outline">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}
        </TabsContent>

        <TabsContent value="pricing" className="mt-0">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">Выберите свой тариф</h2>
                <p className="text-xl text-muted-foreground">Гибкие планы для любых задач</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Starter',
                    price: '₽490',
                    period: '/месяц',
                    features: ['50 видео в месяц', 'Базовый анализ', 'Генерация сценариев', 'Email поддержка'],
                    popular: false
                  },
                  {
                    name: 'Professional',
                    price: '₽1,990',
                    period: '/месяц',
                    features: ['200 видео в месяц', 'Расширенный анализ', 'AI-рекомендации', 'Telegram бот', 'Приоритетная поддержка'],
                    popular: true
                  },
                  {
                    name: 'Business',
                    price: '₽4,990',
                    period: '/месяц',
                    features: ['Неограниченно видео', 'Все функции Pro', 'API доступ', 'Командная работа', '24/7 поддержка'],
                    popular: false
                  }
                ].map((plan, idx) => (
                  <Card key={idx} className={`relative animate-scale-in ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent">Популярный</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-2">
                            <Icon name="Check" className="text-accent mt-0.5" size={18} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Выбрать план
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <footer className="border-t py-8 px-4 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Video" className="text-primary" size={24} />
              <span className="font-semibold">AI Video Analyzer</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">О нас</Button>
              <Button variant="ghost" size="sm">Контакты</Button>
              <Button variant="ghost" size="sm">Поддержка</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
