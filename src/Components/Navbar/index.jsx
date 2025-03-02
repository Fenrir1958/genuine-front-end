import "./Navbar.css";

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

export const Navbar = () => {
  return (
    <div className="flex flex-col md:w-1/5 bg-lineal-navbar">
      <div className="flex flex-col m-4 py-[30px] px-[25px] gap-[40px] bg-white rounded-[20px]">
        <div className="flex flex-row justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-[1.6em] h-[1.6em] text-[#050831] stroke-2"
          >
            <path
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <img
            className="w-[70px] h-[45.24px]"
            src="/src/assets/image/logo.png"
            alt="logo"
          ></img>
        </div>
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
      </div>
    </div>
  );
};
