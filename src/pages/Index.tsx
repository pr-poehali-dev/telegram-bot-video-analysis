import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="Video" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">VideoAI Bot</h1>
                <p className="text-xs text-gray-500">Анализ видео в Telegram</p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Icon name="Send" size={18} className="mr-2" />
              Открыть бота
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">AI + Telegram</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Улучшай видео<br />с помощью AI
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Отправь короткое видео боту в Telegram — получи детальный анализ, рекомендации по улучшению и готовый сценарий за секунды
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8">
              <Icon name="MessageCircle" size={22} className="mr-2" />
              Запустить бота
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => setShowDemo(true)}>
              <Icon name="PlayCircle" size={22} className="mr-2" />
              Посмотреть пример
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Как это работает</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: 'Upload',
                title: 'Отправь видео',
                desc: 'Загрузи короткое видео прямо в чат с ботом',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                icon: 'Sparkles',
                title: 'AI анализирует',
                desc: 'Нейросеть изучает освещение, композицию, динамику и контент',
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '03',
                icon: 'FileText',
                title: 'Получи результат',
                desc: 'Рекомендации + готовый сценарий для твоего видео',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-gray-100 absolute -top-4 -left-2">{item.step}</div>
                <Card className="relative hover:shadow-xl transition-all border-2 h-full">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon name={item.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Что получишь</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Lightbulb',
                title: 'Детальные рекомендации',
                points: ['Советы по освещению', 'Композиция кадра', 'Динамика и монтаж', 'Качество звука']
              },
              {
                icon: 'FileEdit',
                title: 'Готовый сценарий',
                points: ['Структура видео', 'Ключевые моменты', 'Тайминг частей', 'Идеи для улучшения']
              },
              {
                icon: 'BarChart3',
                title: 'Оценка качества',
                points: ['Общий балл видео', 'Анализ по параметрам', 'Сравнение с лучшими', 'Потенциал роста']
              },
              {
                icon: 'Target',
                title: 'Приоритеты действий',
                points: ['Что исправить первым', 'Быстрые улучшения', 'Долгосрочные цели', 'Чек-лист изменений']
              }
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon as any} className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                      <ul className="space-y-2">
                        {feature.points.map((point, pidx) => (
                          <li key={pidx} className="flex items-center gap-2 text-sm text-gray-600">
                            <Icon name="Check" className="text-green-500 flex-shrink-0" size={16} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {showDemo && (
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-3 text-gray-900">Пример анализа</h3>
              <p className="text-gray-600">Вот как выглядит результат работы бота</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Bot" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">VideoAI Bot</div>
                    <div className="text-sm text-white/80">Анализ завершен</div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Icon name="Award" className="text-blue-500" size={20} />
                      Общая оценка
                    </h4>
                    <Badge className="text-lg px-4 py-1 bg-green-100 text-green-700">87/100</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">Отличный результат! Видео качественное, но есть что улучшить.</p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Lightbulb" className="text-yellow-500" size={20} />
                    Рекомендации
                  </h4>
                  <div className="space-y-3">
                    {[
                      { level: 'Высокий', text: 'Улучшить освещение в первой половине видео', color: 'red' },
                      { level: 'Средний', text: 'Добавить больше смены планов для динамики', color: 'yellow' },
                      { level: 'Низкий', text: 'Убрать фоновые шумы на 0:08-0:12', color: 'green' }
                    ].map((rec, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <Badge variant="outline" className={`flex-shrink-0 ${
                          rec.color === 'red' ? 'border-red-200 bg-red-50 text-red-700' :
                          rec.color === 'yellow' ? 'border-yellow-200 bg-yellow-50 text-yellow-700' :
                          'border-green-200 bg-green-50 text-green-700'
                        }`}>
                          {rec.level}
                        </Badge>
                        <p className="text-sm text-gray-700">{rec.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Icon name="FileText" className="text-blue-500" size={20} />
                    Сгенерированный сценарий
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 whitespace-pre-wrap">
{`[Вступление 0:00-0:03]
Привет! Сегодня покажу...

[Основная часть 0:03-0:12]
Три главных момента:
1. Первый важный пункт
2. Второй ключевой аспект  
3. Финальная деталь

[Заключение 0:12-0:15]
Вот так просто! Пробуй сам!`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Тарифы</h3>
            <p className="text-xl text-gray-600">Выбери план под свои задачи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Старт',
                price: '490',
                videos: '50',
                features: ['50 видео/месяц', 'Базовый анализ', 'Генерация сценария', 'Email поддержка'],
                popular: false
              },
              {
                name: 'Про',
                price: '1 990',
                videos: '200',
                features: ['200 видео/месяц', 'Расширенный анализ', 'Приоритетные рекомендации', 'Детальная статистика', 'Telegram поддержка'],
                popular: true
              },
              {
                name: 'Бизнес',
                price: '4 990',
                videos: '∞',
                features: ['Безлимит видео', 'Все функции Про', 'API доступ', 'Мультиаккаунт', 'Персональный менеджер'],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'hover:shadow-xl transition-all'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gray-900">₽{plan.price}</span>
                      <span className="text-gray-500">/мес</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.videos} видео</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Icon name="Check" className={`${plan.popular ? 'text-blue-500' : 'text-green-500'} flex-shrink-0 mt-0.5`} size={18} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
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

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Готов улучшить свои видео?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Присоединяйся к тысячам контент-мейкеров, которые уже используют AI для создания лучших видео
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
            <Icon name="MessageCircle" size={22} className="mr-2" />
            Начать бесплатно
          </Button>
          <p className="text-sm text-blue-100 mt-4">Первые 5 видео — бесплатно, без карты</p>
        </div>
      </section>

      <footer className="border-t bg-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Video" className="text-white" size={18} />
                </div>
                <span className="font-bold text-gray-900">VideoAI Bot</span>
              </div>
              <p className="text-sm text-gray-600">AI-анализ видео в Telegram</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Возможности</a></li>
                <li><a href="#" className="hover:text-blue-500">Тарифы</a></li>
                <li><a href="#" className="hover:text-blue-500">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Помощь</a></li>
                <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-500">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Соцсети</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Telegram</a></li>
                <li><a href="#" className="hover:text-blue-500">YouTube</a></li>
                <li><a href="#" className="hover:text-blue-500">VK</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2024 VideoAI Bot. Все права защищены</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-500">Политика конфиденциальности</a>
              <a href="#" className="hover:text-blue-500">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
