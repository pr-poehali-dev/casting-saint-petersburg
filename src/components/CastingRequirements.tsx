
import { Card, CardContent } from "@/components/ui/card";

const CastingRequirements = () => {
  return (
    <section id="requirements" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Кого мы ищем</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#1d1d1d] border-[#c5176c]/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2 text-2xl">👩</span> Требования
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Возраст от 18 лет</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Артистизм и обаяние</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Умение запоминать тексты</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Способности к перевоплощению</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Умение входить в образ</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1d1d1d] border-[#c5176c]/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2 text-2xl">🎭</span> Что мы предлагаем
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Интересные проекты с профессиональной командой</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Гибкий график съемок</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Помощь с портфолио</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Возможность профессионального роста</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#c5176c]">•</span> 
                  <span>Работа в Санкт-Петербурге</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-[#c5176c] to-[#e91e63] p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Готова стать звездой наших проектов?</h3>
          <p className="mb-0">Не упусти свой шанс! Свяжись с нами прямо сейчас!</p>
        </div>
      </div>
    </section>
  );
};

export default CastingRequirements;
