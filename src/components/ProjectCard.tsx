import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, description, technologies, highlights, githubUrl, liveUrl, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-card-gradient border-border/50">
      {imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {highlights && (
          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {(githubUrl || liveUrl) && <CardFooter className="flex space-x-3">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button
            size="sm"
            asChild
            className="flex-1 bg-hero-gradient hover:opacity-90 transition-opacity"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>}
    </Card>
  );
};

export default ProjectCard;