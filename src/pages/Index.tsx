import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    icon: 'Search',
    title: 'Диагностика неисправностей',
    description: 'Полная диагностика вашего компьютера с выявлением всех проблем'
  },
  {
    icon: 'Cpu',
    title: 'Ремонт материнских плат',
    description: 'Профессиональный ремонт и замена компонентов материнских плат'
  },
  {
    icon: 'HardDrive',
    title: 'Замена комплектующих',
    description: 'Процессор, видеокарта, память, SSD — замена любых компонентов'
  },
  {
    icon: 'Wind',
    title: 'Чистка системы охлаждения',
    description: 'Удаление пыли, замена термопасты, восстановление охлаждения'
  },
  {
    icon: 'Settings',
    title: 'Установка ПО',
    description: 'Установка операционной системы и необходимых программ'
  },
  {
    icon: 'Wifi',
    title: 'Настройка сети',
    description: 'Подключение и настройка сети, периферии, Wi-Fi'
  }
];

const prices = [
  {
    name: 'Базовая диагностика',
    price: 'Бесплатно',
    features: [
      'Полная диагностика',
      'Выявление неисправностей',
      'Консультация специалиста',
      'Смета на ремонт'
    ]
  },
  {
    name: 'Стандартный ремонт',
    price: 'от 1500₽',
    features: [
      'Чистка от пыли',
      'Замена термопасты',
      'Установка Windows',
      'Настройка ПО',
      'Гарантия 30 дней'
    ],
    popular: true
  },
  {
    name: 'Комплексный ремонт',
    price: 'от 3500₽',
    features: [
      'Ремонт материнской платы',
      'Замена комплектующих',
      'Полная чистка и обслуживание',
      'Настройка и оптимизация',
      'Гарантия 90 дней'
    ]
  }
];

const steps = [
  { icon: 'Phone', title: 'Прием заказа', description: 'Позвоните или оставьте заявку на сайте' },
  { icon: 'SearchCheck', title: 'Диагностика', description: 'Бесплатная диагностика в течение 1 часа' },
  { icon: 'FileText', title: 'Согласование', description: 'Утверждаем стоимость и сроки ремонта' },
  { icon: 'Wrench', title: 'Ремонт', description: 'Выполняем качественный ремонт' },
  { icon: 'CheckCircle2', title: 'Тестирование', description: 'Проверяем работоспособность' },
  { icon: 'Smile', title: 'Выдача', description: 'Передаем готовый компьютер клиенту' }
];

const reviews = [
  {
    name: 'Алексей М.',
    rating: 5,
    text: 'Отличный сервис! Быстро починили материнскую плату, работает как новая. Цены адекватные, мастера профессионалы.'
  },
  {
    name: 'Мария К.',
    rating: 5,
    text: 'Спасибо огромное! Не включался ноутбук, думала всё - конец. Ребята сделали диагностику бесплатно, нашли проблему и починили за день.'
  },
  {
    name: 'Дмитрий П.',
    rating: 5,
    text: 'Обращался за апгрейдом ПК. Подобрали комплектующие в рамках бюджета, установили, настроили. Теперь летает!'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Laptop" className="text-primary" size={32} />
            <span className="font-bold text-xl">ПК Ремонт</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition">Услуги</a>
            <a href="#prices" className="hover:text-primary transition">Цены</a>
            <a href="#reviews" className="hover:text-primary transition">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition">Контакты</a>
          </div>
          <Button className="animate-pulse-glow">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Профессиональный ремонт компьютеров
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Оперативно, качественно, доступно! Бесплатная диагностика и гарантия на все работы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg animate-scale-in">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Узнать цену
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-muted-foreground">ремонтов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/b2d23af1-31bb-4694-ac70-b6e170a6b41b/files/5c1e545c-0862-407f-81ac-6023c13c3dfd.jpg"
                alt="Ремонт компьютеров"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">Бесплатная</div>
                <div className="text-lg">диагностика</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг по ремонту и обслуживанию компьютерной техники
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас?</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Гарантируем качество и надежность каждого ремонта
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Опыт и профессионализм</h3>
              <p className="text-muted-foreground">
                Наши мастера имеют многолетний опыт работы
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Современное оборудование</h3>
              <p className="text-muted-foreground">
                Используем профессиональные инструменты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Доступные цены</h3>
              <p className="text-muted-foreground">
                Конкурентные цены без скрытых платежей
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">
                До 90 дней гарантии на все работы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Цены на услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых комиссий
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-primary border-2 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Как мы работаем?</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простой и прозрачный процесс ремонта за 6 шагов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={step.icon} className="text-primary" size={24} />
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Более 1000 довольных клиентов доверяют нам свою технику
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Оставьте заявку</h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Мы свяжемся с вами в течение 15 минут
            </p>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      type="tel"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Опишите проблему</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Например: не включается компьютер, греется, шумит..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" className="mx-auto mb-2 text-primary" size={32} />
                <div className="font-bold">Телефон</div>
                <div className="text-muted-foreground">+7 (999) 123-45-67</div>
              </div>
              <div>
                <Icon name="Mail" className="mx-auto mb-2 text-secondary" size={32} />
                <div className="font-bold">Email</div>
                <div className="text-muted-foreground">info@pc-repair.ru</div>
              </div>
              <div>
                <Icon name="MapPin" className="mx-auto mb-2 text-accent" size={32} />
                <div className="font-bold">Адрес</div>
                <div className="text-muted-foreground">г. Москва, ул. Примерная, 1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Laptop" className="text-primary" size={28} />
            <span className="font-bold text-xl text-foreground">ПК Ремонт</span>
          </div>
          <p>© 2024 Профессиональный ремонт компьютеров. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
