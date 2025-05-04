const Quizz = () => {
  return (
    <div className="px-4 sm:px-6 py-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
        ¡Desafío Quizizz!
      </h1>
      <div className="w-full max-w-4xl aspect-video sm:h-[500px] lg:h-[600px]">
        <iframe
          src="https://quizizz.com/join/quiz/67ec35ab82d458a948fd33b3/start"
          className="w-full h-full rounded-xl shadow-lg"
          allowFullScreen
          title="Quizizz Integrado"
        />
      </div>
    </div>
  );
};

export default Quizz;
