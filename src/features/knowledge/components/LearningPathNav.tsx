import { BookOpen } from "lucide-react";
import type { NavigateHandler } from "@/types";
import { learningPath } from "@/data/lessons/learning-path";

interface LearningPathNavProps {
  currentPath: string;
  navigate: NavigateHandler;
}

export function LearningPathNav({ currentPath, navigate }: LearningPathNavProps) {
  return (
    <nav className="course-progress" aria-label="Learning path">
      <a href="/knowledge" onClick={(event) => navigate(event, "/knowledge")}>
        <BookOpen size={16} aria-hidden="true" />
        Lộ trình
      </a>
      <div>
        {learningPath.map((lesson) => (
          <a
            className={lesson.path === currentPath ? "is-current" : ""}
            href={lesson.path}
            key={lesson.path}
            onClick={(event) => navigate(event, lesson.path)}
            aria-current={lesson.path === currentPath ? "page" : undefined}
          >
            <span>{lesson.number}</span>
            {lesson.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
