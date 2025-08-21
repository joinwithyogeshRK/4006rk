import { useState } from 'react';
import { useTask } from '@/context/TaskContext';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import CategoryFilter from '@/components/CategoryFilter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Ill from '@/components/Ill';

const Home = () => {
  const { tasks } = useTask();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', 'work', 'personal', 'shopping', 'health'];
  
  const filteredTasks = activeFilter === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === activeFilter);
  
  const completedTasks = filteredTasks.filter(task => task.completed);
  const pendingTasks = filteredTasks.filter(task => !task.completed);
  
  return (
    <div className="w-full">
      <Ill />
      
      <div className="container mx-auto px-4 py-8">
        <Card className="neumorphic-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">Simple Todo</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskInput />
          </CardContent>
        </Card>
        
        <CategoryFilter 
          categories={categories} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
        
        <Tabs defaultValue="all" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All ({filteredTasks.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({pendingTasks.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <TaskList tasks={filteredTasks} />
          </TabsContent>
          <TabsContent value="pending">
            <TaskList tasks={pendingTasks} />
          </TabsContent>
          <TabsContent value="completed">
            <TaskList tasks={completedTasks} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;