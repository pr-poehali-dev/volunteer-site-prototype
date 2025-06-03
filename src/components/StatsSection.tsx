import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      number: "2,547",
      label: "Активных волонтеров",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: "Calendar",
      number: "156",
      label: "Проектов в месяц",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: "Clock",
      number: "12,890",
      label: "Часов помощи",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      icon: "MapPin",
      number: "85",
      label: "Городов России",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Наши достижения в цифрах
          </h2>
          <p className="text-blue-100 text-lg">
            Вместе мы меняем мир к лучшему каждый день
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className={stat.color}
                />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
