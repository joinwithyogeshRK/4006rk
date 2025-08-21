import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
}

const CategoryFilter = ({ categories, activeFilter, setActiveFilter }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? 'default' : 'outline'}
          className={`capitalize ${activeFilter === category ? 'bg-primary text-primary-foreground' : ''}`}
          onClick={() => setActiveFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
