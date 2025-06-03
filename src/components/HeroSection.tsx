import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Меняй мир
              <span className="text-blue-500"> вместе</span>
              <br />с нами! 🌟
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Присоединяйся к сообществу волонтеров и помогай тем, кто в этом
              нуждается. Каждое доброе дело делает наш мир лучше.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-lg px-8"
              >
                <Icon name="Heart" size={20} />
                Стать волонтером
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Search" size={20} />
                Найти проект
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">2,500+</div>
                <div className="text-sm text-gray-600">Волонтеров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">150+</div>
                <div className="text-sm text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">50k+</div>
                <div className="text-sm text-gray-600">Помощи</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Волонтеры помогают"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold">+25 новых</div>
                  <div className="text-xs text-gray-500">
                    волонтеров сегодня
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
