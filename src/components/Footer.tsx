import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">ДоброДело</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Мы объединяем людей, которые хотят менять мир к лучшему.
              Присоединяйся к сообществу волонтеров и делай добро каждый день.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Проекты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Социальная помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Экология
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Работа с детьми
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Помощь животным
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IT-проекты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>help@dobrodel.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Добрая, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ДоброДело. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
