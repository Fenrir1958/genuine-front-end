import "./MainLayout.css";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gab-4 absolute inset-0 min-w-full outfit-font bg-[#EFEFEF]">
      {children}
    </div>
  );
};
