import AppNav from "./app-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0b1a]">
      <AppNav />
      {/* Main content area — offset for sidebar on desktop, top/bottom bars on mobile */}
      <main className="md:ml-[220px] pt-14 pb-[72px] md:pt-0 md:pb-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}
