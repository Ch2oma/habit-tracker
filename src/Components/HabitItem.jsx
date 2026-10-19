export default function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl shadow-sm border transition duration-200 ${habit.completed ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-100'}`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
          className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
        />
        <div>
          <h3 className={`font-medium ${habit.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {habit.title}
          </h3>
          <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
            {habit.category}
          </span>
        </div>
      </div>
      <button
        onClick={() => onDelete(habit.id)}
        className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition duration-150"
      >
        Sil
      </button>
    </div>
  );
}