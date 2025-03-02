import "./MainLayout.css";

export function MainLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row absolute inset-0 outfit-font bg-[#EFEFEF]">
      {children}
    </div>
  );
}
