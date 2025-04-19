
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SendIcon } from "lucide-react";

const CastingContact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Свяжитесь с нами</h2>
        <p className="text-gray-400 mb-10">Сделай первый шаг к успешной карьере</p>
        
        <Card className="bg-[#1d1d1d] border-[#c5176c]/30 mb-10">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 bg-[#c5176c] rounded-full flex items-center justify-center mb-4">
                <SendIcon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telegram</h3>
              <p className="text-gray-400 mb-4">Наш менеджер ответит на все вопросы</p>
              <a 
                href="https://t.me/vocoders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c5176c] font-bold hover:underline"
              >
                t.me/vocoders
              </a>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <p className="text-lg mb-4">Отправь нам свое портфолио или просто расскажи о себе</p>
          <p className="text-gray-400 mb-6">Мы рассматриваем все заявки и обязательно ответим!</p>
          <Button 
            className="bg-[#c5176c] hover:bg-[#a11258] text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.open('https://t.me/vocoders', '_blank')}
          >
            Написать в Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CastingContact;
