import { useTask } from '@/context/TaskContext';
import { Task } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  const { toggleTask, deleteTask } = useTask();

  const getPriorityIndicator = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="priority-high" title="High Priority"></span>;
      case 'medium':
        return <span className="priority-medium" title="Medium Priority"></span>;
      case 'low':
        return <span className="priority-low" title="Low Priority"></span>;
      default:
        return null;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No tasks found. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 mt-4">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className={`task-card group ${task.completed ? 'bg-muted/50' : ''}`}
        >
          <div className="flex items-center gap-3">
            <Checkbox 
              checked={task.completed} 
              onCheckedChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <div className={task.completed ? 'line-through text-muted-foreground' : ''}>
              <h3 className="font-medium">{task.text}</h3>
              {task.dueDate && (
                <p className="text-sm text-muted-foreground">
                  Due {format(new Date(task.dueDate), 'PPP')}
                </p>
              )}
            </div>
            <div className="ml-auto flex items-center gap-2">
              {getPriorityIndicator(task.priority)}
              <Badge variant="outline" className="capitalize">{task.category}</Badge>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-accent" 
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
