export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* LEFT PANEL */}
      <div style={{ width: "260px", borderRight: "1px solid #222" }}>
        Left Panel
      </div>

      {/* CENTER */}
      <div style={{ flex: 1 }}>
        {children}
      </div>

      {/* RIGHT PANEL */}
      <div style={{ width: "300px", borderLeft: "1px solid #222" }}>
        Right Panel
      </div>

    </div>
  );
}