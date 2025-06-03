import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      title: "Запуск нового проекта помощи пожилым",
      excerpt:
        "В Москве стартовала программа цифровой грамотности для людей старшего возраста. Уже 50 волонтеров готовы помогать.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "15 мая 2024",
      category: "Новые проекты",
      readTime: "3 мин",
    },
    {
      title: "1000 деревьев посажено за месяц!",
      excerpt:
        "Благодаря нашим эко-волонтерам в 10 городах России было высажено более 1000 деревьев. Вместе делаем планету зеленее!",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "12 мая 2024",
      category: "Достижения",
      readTime: "2 мин",
    },
    {
      title: "День открытых дверей в детских домах",
      excerpt:
        "В выходные волонтеры провели развивающие мастер-классы для 200 детей в 5 детских домах Санкт-Петербурга.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0d5417ba6fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "10 мая 2024",
      category: "События",
      readTime: "4 мин",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Новости и события
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следи за нашими достижениями и новыми возможностями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge variant="secondary" className="absolute top-3 left-3">
                  {article.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Icon name="ArrowRight" size={16} />
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
