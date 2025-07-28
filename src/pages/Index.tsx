import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Роскошная вилла с видом на море',
      location: 'Бодрум',
      price: '€850,000',
      type: 'Вилла',
      bedrooms: 4,
      bathrooms: 3,
      area: '280 м²',
      image: '/img/ff0ba614-0cd2-4aad-887a-ee8ef5ff0701.jpg',
      features: ['Бассейн', 'Сад', 'Паркинг']
    },
    {
      id: 2,
      title: 'Современная квартира в центре',
      location: 'Стамбул',
      price: '€320,000',
      type: 'Квартира',
      bedrooms: 2,
      bathrooms: 2,
      area: '120 м²',
      image: '/img/59b80456-a3a6-40b5-949c-695fac8a699c.jpg',
      features: ['Вид на Босфор', 'Консьерж', 'Спортзал']
    },
    {
      id: 3,
      title: 'Пентхаус у моря',
      location: 'Анталия',
      price: '€1,200,000',
      type: 'Пентхаус',
      bedrooms: 3,
      bathrooms: 2,
      area: '180 м²',
      image: '/img/cce2d05a-bd47-4440-8403-3583d2823745.jpg',
      features: ['Терраса', 'Панорамный вид', 'Джакузи']
    }
  ];

  const services = [
    {
      icon: 'Search',
      title: 'Подбор недвижимости',
      description: 'Персональный подбор объектов по вашим критериям'
    },
    {
      icon: 'FileText',
      title: 'Юридическое сопровождение',
      description: 'Полное сопровождение сделки от начала до конца'
    },
    {
      icon: 'Plane',
      title: 'Организация поездок',
      description: 'Организуем показы недвижимости и размещение'
    },
    {
      icon: 'TrendingUp',
      title: 'Инвестиционное консультирование',
      description: 'Анализ доходности и перспектив инвестиций'
    }
  ];

  const regions = [
    {
      name: 'Стамбул',
      description: 'Деловой и культурный центр Турции',
      properties: '1,200+ объектов'
    },
    {
      name: 'Анталия',
      description: 'Курортная столица средиземноморского побережья',
      properties: '800+ объектов'
    },
    {
      name: 'Бодрум',
      description: 'Престижный курорт для элитного отдыха',
      properties: '450+ объектов'
    },
    {
      name: 'Алания',
      description: 'Популярное направление для инвестиций',
      properties: '600+ объектов'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md"></div>
              <h1 className="text-xl font-bold">Turkish Real Estate</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#regions" className="text-sm font-medium hover:text-primary transition-colors">Районы</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Премиальная недвижимость в Турции
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Эксклюзивные объекты для инвестиций и жизни на берегу средиземного моря. 
              Полное сопровождение сделки и гарантия качества.
            </p>
            
            {/* Search Filters */}
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите район" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="istanbul">Стамбул</SelectItem>
                      <SelectItem value="antalya">Анталия</SelectItem>
                      <SelectItem value="bodrum">Бодрум</SelectItem>
                      <SelectItem value="alanya">Алания</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип недвижимости" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="villa">Вилла</SelectItem>
                      <SelectItem value="penthouse">Пентхаус</SelectItem>
                      <SelectItem value="commercial">Коммерческая</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Цена" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-300">€100k - €300k</SelectItem>
                      <SelectItem value="300-500">€300k - €500k</SelectItem>
                      <SelectItem value="500-1000">€500k - €1M</SelectItem>
                      <SelectItem value="1000+">€1M+</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button className="w-full">
                    <Icon name="Search" size={16} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Properties Catalog */}
      <section id="catalog" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Эксклюзивные предложения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранная коллекция престижных объектов недвижимости
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {property.type}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-primary">{property.price}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{property.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <Icon name="Bed" size={16} className="mx-auto mb-1" />
                      <span>{property.bedrooms} спальни</span>
                    </div>
                    <div className="text-center">
                      <Icon name="Bath" size={16} className="mx-auto mb-1" />
                      <span>{property.bathrooms} ванные</span>
                    </div>
                    <div className="text-center">
                      <Icon name="Square" size={16} className="mx-auto mb-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на продаже премиальной недвижимости в Турции уже более 10 лет. 
                Наша команда экспертов поможет вам найти идеальный объект для инвестиций или жизни.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1200+</div>
                  <div className="text-sm text-muted-foreground">Объектов продано</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Городов присутствия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Building2" size={80} className="text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для комфортной покупки недвижимости в Турции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="regions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные районы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучшие локации для покупки недвижимости в Турции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{region.properties}</span>
                    <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg mb-8 opacity-90">
                Готовы помочь найти идеальную недвижимость в Турции. 
                Консультация и подбор объектов бесплатно.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="opacity-90">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">info@turkish-realestate.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Офис в Москве</div>
                    <div className="opacity-90">ул. Тверская, 15, офис 301</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-foreground">Получить консультацию</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Input placeholder="Email" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Интересующий район" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="istanbul">Стамбул</SelectItem>
                    <SelectItem value="antalya">Анталия</SelectItem>
                    <SelectItem value="bodrum">Бодрум</SelectItem>
                    <SelectItem value="alanya">Алания</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md"></div>
                <h3 className="text-lg font-bold">Turkish Real Estate</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Премиальная недвижимость в Турции. Инвестируйте в будущее с надежным партнером.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Покупка недвижимости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Инвестиции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Юридическое сопровождение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Управление недвижимостью</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Районы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Стамбул</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Анталия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бодрум</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Алания</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@turkish-realestate.ru</li>
                <li>ул. Тверская, 15, офис 301</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Turkish Real Estate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;