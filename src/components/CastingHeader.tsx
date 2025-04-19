
import { Button } from "@/components/ui/button";
import { FilmIcon } from "lucide-react";

const CastingHeader = () => {
  return (
    <header className="bg-[#c5176c] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <FilmIcon size={28} />
          <h1 className="text-xl font-bold">Кастинг СПб</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:underline">О нас</a>
            </li>
            <li>
              <a href="#requirements" className="hover:underline">Требования</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Контакты</a>
            </li>
          </ul>
        </nav>
        <Button className="bg-white text-[#c5176c] hover:bg-gray-100">
          Подать заявку
        </Button>
      </div>
    </header>
  );
};

export default CastingHeader;
