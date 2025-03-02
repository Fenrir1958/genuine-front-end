import "./Menu.css";

const menu = [
  {
    id: 1,
    name: "Inicio",
    path: "/",
  },
  {
    id: 2,
    name: "¿Quiénes somos?",
    path: "/",
  },
  {
    id: 3,
    name: "Somos Estadounidenses",
    path: "/",
  },
  {
    id: 4,
    name: "Únete a Genuine",
    path: "/",
  },
];

export const Menu = () => {
  return (
    <div className="flex flex-col items-start gap-[4px]">
      {menu.map((item) => (
        <a
          key={item.id}
          href={item.path}
          className="text-[16px] leading-[35px] text-[#133072]"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};
