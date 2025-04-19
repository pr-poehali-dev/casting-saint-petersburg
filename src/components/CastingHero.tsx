
import { Button } from "@/components/ui/button";

const CastingHero = () => {
  return (
    <section id="about" className="py-20 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#c5176c] to-[#e91e63] text-transparent bg-clip-text">
        Кастинг актрис в Санкт-Петербурге
      </h1>
      <p className="text-xl max-w-3xl mb-10 text-gray-300">
        Приглашаем талантливых девушек принять участие в съемках профессиональных видеопроектов. 
        Это твой шанс раскрыть творческий потенциал и стать частью креативной команды!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        <div className="bg-[#1d1d1d] p-6 rounded-xl border border-[#c5176c]/30">
          <span className="text-4xl mb-4 block">🎬</span>
          <h3 className="text-xl font-bold mb-2">Профессиональные съемки</h3>
          <p className="text-gray-400">Работа с опытными режиссерами и операторами</p>
        </div>
        <div className="bg-[#1d1d1d] p-6 rounded-xl border border-[#c5176c]/30">
          <span className="text-4xl mb-4 block">📸</span>
          <h3 className="text-xl font-bold mb-2">ТФП проекты</h3>
          <p className="text-gray-400">Идеально для начинающих моделей и актрис</p>
        </div>
        <div className="bg-[#1d1d1d] p-6 rounded-xl border border-[#c5176c]/30">
          <span className="text-4xl mb-4 block">🚀</span>
          <h3 className="text-xl font-bold mb-2">Старт карьеры</h3>
          <p className="text-gray-400">Возможность попасть в крупные проекты</p>
        </div>
      </div>
      <Button className="bg-[#c5176c] hover:bg-[#a11258] text-white px-8 py-6 text-lg rounded-full">
        Хочу на кастинг!
      </Button>
    </section>
  );
};

export default CastingHero;
