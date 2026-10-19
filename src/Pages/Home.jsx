import { useState, useEffect } from 'react';
import HabitForm from '../Components/HabitForm';
import HabitList from '../Components/HabitList';
import { initialHabits } from '../Interfaces/initialData';

export default function Home() {
  // LocalStorage'dan veri çekme veya başlangıç verisini kullanma
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : initialHabits;
  });

  // State her değiştiğinde LocalStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Ekleme İşlemi (Create)
  const handleAddHabit = (newHabit) => {
    setHabits([newHabit, ...habits]);
  };

  // Güncelleme İşlemi (Update - Tamamlandı durumu)
  const handleToggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  // Silme İşlemi (Delete)
  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-500 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black mb-2">Günlük Alışkanlık Takipçisi</h1>
          <p className="text-white">Hedeflerine her gün bir adım daha yaklaş.</p>
        </header>

        <HabitForm onAddHabit={handleAddHabit} />
        <HabitList habits={habits} onToggle={handleToggleHabit} onDelete={handleDeleteHabit} />
      </div>
    </div>
  );
}