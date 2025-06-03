import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ДоброДело</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Проекты
            </a>
            <a
              href="#how-to-help"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Как помочь
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              Стать волонтером
            </Button>
          </div>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
