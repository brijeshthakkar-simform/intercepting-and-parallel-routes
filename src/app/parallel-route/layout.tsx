export default function ParallelRouteLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Team</h2>
        {team}
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        {children}
      </div>
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Analytics</h2>
        {analytics}
      </div>
    </div>
  );
}
