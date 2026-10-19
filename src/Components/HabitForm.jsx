import { useState } from 'react';

export default function HabitForm({ onAddHabit }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Genel');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newHabit = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      category: category
    };

    onAddHabit(newHabit);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md mb-6 flex flex-col md:flex-row gap-3">
      <input
        type="text"
        placeholder="Yeni alışkanlık ekle (Örn: Kitap oku)..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
      >
        <option value="Genel">Genel</option>
        <option value="Yazılım">Yazılım</option>
        <option value="Sağlık">Sağlık</option>
        <option value="Spor">Spor</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
      >
        Ekle
      </button>
    </form>
  );
}