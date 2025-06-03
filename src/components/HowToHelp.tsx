import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowToHelp = () => {
  const steps = [
    {
      icon: "UserPlus",
      title: "Регистрация",
      description:
        "Создай профиль волонтера за 2 минуты. Расскажи о себе и своих интересах.",
    },
    {
      icon: "Search",
      title: "Выбери проект",
      description:
        "Найди проект, который откликается твоему сердцу из сотен доступных вариантов.",
    },
    {
      icon: "Calendar",
      title: "Запишись",
      description:
        "Выбери удобное время и зарегистрируйся на участие в проекте.",
    },
    {
      icon: "Heart",
      title: "Помогай",
      description:
        "Приходи и делай добро! Получай опыт, новые знакомства и благодарность.",
    },
  ];

  return (
    <section id="how-to-help" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Как стать волонтером?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Всего 4 простых шага отделяют тебя от участия в добрых делах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={step.icon as any}
                    size={32}
                    className="text-blue-500"
                  />
                </div>

                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Готов начать? 🚀
          </h3>
          <p className="text-gray-600 mb-6">
            Присоединяйся к нашему сообществу и начни менять мир к лучшему уже
            сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Зарегистрироваться
            </button>
            <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
