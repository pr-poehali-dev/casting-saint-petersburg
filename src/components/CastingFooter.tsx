
const CastingFooter = () => {
  return (
    <footer className="bg-[#1d1d1d] py-8 border-t border-[#c5176c]/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Кастинг СПб. Все права защищены.</p>
        <p className="text-gray-500 text-sm mt-2">
          Санкт-Петербург • Съемки • Кастинги • Модели • Актрисы
        </p>
      </div>
    </footer>
  );
};

export default CastingFooter;
