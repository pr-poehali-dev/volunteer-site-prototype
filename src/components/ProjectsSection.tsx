import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Помощь пожилым людям",
      description:
        "Доставка продуктов и лекарств пожилым людям, которые не могут выходить из дома. Требуется ответственность и доброта.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Социальная помощь",
      volunteersNeeded: 15,
      location: "Москва",
      urgent: true,
    },
    {
      title: "Экологическая уборка парков",
      description:
        "Очистка городских парков от мусора и посадка новых деревьев. Вместе сделаем наш город чище и зеленее!",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Экология",
      volunteersNeeded: 25,
      location: "Санкт-Петербург",
    },
    {
      title: "Поддержка детского дома",
      description:
        "Организация развивающих мероприятий для детей-сирот. Нужны творческие люди для проведения мастер-классов.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0d5417ba6fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Работа с детьми",
      volunteersNeeded: 8,
      location: "Екатеринбург",
    },
    {
      title: "Помощь бездомным животным",
      description:
        "Уход за животными в приюте, выгул собак, помощь в поиске новых хозяев для питомцев.",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Животные",
      volunteersNeeded: 12,
      location: "Новосибирск",
    },
    {
      title: "IT-помощь НКО",
      description:
        "Разработка сайтов и мобильных приложений для некоммерческих организаций. Нужны программисты и дизайнеры.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "IT",
      volunteersNeeded: 5,
      location: "Удаленно",
    },
    {
      title: "Обучение пожилых людей",
      description:
        "Помощь в освоении компьютера и интернета для людей старшего возраста. Терпение и понимание приветствуются.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Образование",
      volunteersNeeded: 10,
      location: "Казань",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери проект по душе и начни делать добро уже сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Посмотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
