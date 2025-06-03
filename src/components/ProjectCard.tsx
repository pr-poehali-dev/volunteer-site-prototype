import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  volunteersNeeded: number;
  location: string;
  urgent?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  volunteersNeeded,
  location,
  urgent = false,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {urgent && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
            <Icon name="Clock" size={12} />
            Срочно
          </Badge>
        )}
        <Badge variant="secondary" className="absolute top-3 right-3">
          {category}
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Icon name="MapPin" size={14} />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>Нужно: {volunteersNeeded}</span>
          </div>
        </div>

        <Button className="w-full bg-blue-500 hover:bg-blue-600">
          <Icon name="Heart" size={16} />
          Участвовать
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
