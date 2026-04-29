import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #fff5f7 40%, #f9a8d4 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pink-100 opacity-40 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-rose-100 opacity-40 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-purple-100 opacity-30 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center px-6 py-12 max-w-lg w-full text-center">
        {/* Logo / Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl mb-4"
        >
          🤰
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-rose-700 mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Тест на беременность
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          Выбери результат твоего теста, и мы подготовим для тебя нужную информацию и поддержку
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="w-full flex flex-col gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {/* Positive result */}
          <button
            onClick={() => navigate("/positive")}
            className="group relative w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-6 flex items-center gap-4">
              <div className="text-5xl">🎉</div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">Тест положительный</div>
                <div className="text-pink-100 text-sm mt-0.5">Две полоски — это две радости!</div>
              </div>
              <div className="ml-auto text-white text-2xl opacity-70 group-hover:translate-x-1 transition-transform">→</div>
            </div>
          </button>

          {/* Negative result */}
          <button
            onClick={() => navigate("/negative")}
            className="group relative w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="bg-gradient-to-r from-violet-400 to-purple-500 p-6 flex items-center gap-4">
              <div className="text-5xl">🌿</div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">Тест отрицательный</div>
                <div className="text-purple-100 text-sm mt-0.5">Всё будет хорошо, не огорчайтесь!</div>
              </div>
              <div className="ml-auto text-white text-2xl opacity-70 group-hover:translate-x-1 transition-transform">→</div>
            </div>
          </button>
        </motion.div>

        <motion.p
          className="text-gray-400 text-xs mt-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Информация соответствует рекомендациям российских учреждений здравоохранения
        </motion.p>
      </div>
    </div>
  )
}

export default Index