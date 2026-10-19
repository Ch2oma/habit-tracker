import HabitItem from './HabitItem';

export default function HabitList({ habits, onToggle, onDelete }) {
  if (habits.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        Henüz bir alışkanlık eklenmemiş. Yukarıdan yeni bir tane ekleyebilirsin!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}