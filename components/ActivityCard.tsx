export default function ActivityCard() {
  const boxes = Array.from({ length: 35 });

  return (
    <div className="bg-zinc-900 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {boxes.map((_, i) => (
          <div
            key={i}
            className="h-4 w-4 rounded bg-cyan-500/40"
          />
        ))}
      </div>
    </div>
  );
}