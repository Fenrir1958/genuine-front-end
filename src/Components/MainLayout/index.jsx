import "./MainLayout.css";

export function MainLayout({ children }) {
  return (
    <div className="absolute inset-0 flex min-h-screen outfit-font">
      {children}
    </div>
  );
}
