import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const COUPLE_IMG = "https://cdn.poehali.dev/projects/f006a5bd-85eb-42e5-b07c-4c06413f5aa4/files/ad820596-e932-4f34-a691-889f6ce01df9.jpg"
const TEST_IMG = "https://cdn.poehali.dev/projects/f006a5bd-85eb-42e5-b07c-4c06413f5aa4/files/2bccc9a7-f370-4544-b7bf-119377cbd27f.jpg"
const BELLY_IMG = "https://cdn.poehali.dev/projects/f006a5bd-85eb-42e5-b07c-4c06413f5aa4/files/4eea6556-f8ac-46a3-91e1-b5a42ef860db.jpg"

const cards = [
  {
    id: "prepare",
    emoji: "🌱",
    title: "Подготовка к беременности",
    subtitle: "Шаги к здоровому материнству и поиск консультации",
    color: "from-teal-400 to-emerald-500",
    img: COUPLE_IMG,
    content: (
      <div className="space-y-4">
        <div className="bg-teal-50 rounded-2xl p-4">
          <p className="font-semibold text-teal-800 mb-2">📋 Рекомендуемые шаги</p>
          <ul className="text-sm text-gray-700 space-y-1.5">
            <li>• Пройди осмотр у гинеколога для оценки здоровья</li>
            <li>• Сдай базовые анализы крови и на гормоны</li>
            <li>• Пересмотри питание и режим сна</li>
            <li>• Откажись от вредных привычек</li>
          </ul>
        </div>
        <div className="bg-emerald-50 rounded-2xl p-4">
          <p className="font-semibold text-emerald-800 mb-2">🏥 Найти женскую консультацию</p>
          <a
            href="https://2gis.ru/ekaterinburg/search/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-emerald-50 transition-colors border border-emerald-100"
          >
            <span className="text-2xl">📍</span>
            <div className="flex-1">
              <p className="font-medium text-emerald-700 text-sm">Ближайшая женская консультация</p>
              <p className="text-xs text-gray-500">Поиск на карте Свердловской области</p>
            </div>
            <Icon name="ExternalLink" size={16} className="text-emerald-400" />
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "doctor",
    emoji: "👩‍⚕️",
    title: "Записаться к врачу",
    subtitle: "Чат-бот «Запись к врачу», Свердловская область",
    color: "from-blue-400 to-indigo-500",
    img: TEST_IMG,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          Запишись к акушеру-гинекологу прямо сейчас через официальный чат-бот Свердловской области — быстро и без очередей.
        </p>
        <a
          href="https://max.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-blue-50 rounded-2xl p-4 hover:bg-blue-100 transition-colors"
        >
          <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">💬</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-blue-800">Мессенджер МАХ</p>
            <p className="text-sm text-gray-600">Чат-бот «Запись к врачу»</p>
            <p className="text-xs text-blue-500 mt-0.5">Свердловская область</p>
          </div>
          <Icon name="ArrowRight" size={20} className="text-blue-400" />
        </a>
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs text-gray-500 text-center">
            Также можно позвонить в регистратуру своей поликлиники или обратиться через портал Госуслуг
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "resources",
    emoji: "🤝",
    title: "Ресурсы помощи семьям",
    subtitle: "ВРТ, НКО, поддержка при планировании",
    color: "from-rose-400 to-pink-500",
    img: BELLY_IMG,
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-sm leading-relaxed">
          Если беременность не наступает длительное время — существуют программы помощи и современные медицинские технологии.
        </p>
        <div className="bg-rose-50 rounded-2xl p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🧬</span>
            <div>
              <p className="font-semibold text-rose-800 text-sm">ВРТ — Вспомогательные репродуктивные технологии</p>
              <p className="text-xs text-gray-600 mt-1">ЭКО и другие методы по полису ОМС — обратись к врачу для направления</p>
            </div>
          </div>
          <a href="https://minzdrav.midural.ru/activity/1988/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-rose-50 transition-colors border border-rose-100">
            <span className="text-lg flex-shrink-0">🏥</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-rose-800">Министерство здравоохранения СО</p>
              <p className="text-xs text-gray-500">ВРТ в Свердловской области</p>
            </div>
            <Icon name="ExternalLink" size={14} className="text-rose-400 flex-shrink-0" />
          </a>
          <a href="https://флотская52.рф/pacientam/eko_po_polisu_oms/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-rose-50 transition-colors border border-rose-100">
            <span className="text-lg flex-shrink-0">💊</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-rose-800">ЭКО по полису ОМС</p>
              <p className="text-xs text-gray-500">Флотская 52 — информация для пациентов</p>
            </div>
            <Icon name="ExternalLink" size={14} className="text-rose-400 flex-shrink-0" />
          </a>
        </div>
        <div className="bg-amber-50 rounded-2xl p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">👶</span>
            <div>
              <p className="font-semibold text-amber-800 text-sm">МКББ — Межведомственная комиссия по бесплодию</p>
            </div>
          </div>
          <div className="text-xs text-gray-700 space-y-1.5 leading-relaxed">
            <p className="font-medium text-amber-800">Учреждения МКББ:</p>
            <ul className="space-y-1">
              <li>• ГБУЗ СО «ЕКПЦ» (для города Екатеринбурга)</li>
              <li>• ГАУЗ СО «ОДКБ» — (Березовский, Реж, Сысерть, Арамиль, Артемовский, Полевской, Верхняя Пышма и Среднеуральск)</li>
              <li>• ГАУЗ СО «Алапаевская ГБ» (Алапаевск)</li>
              <li>• ГАУЗ СО «ГБ город Асбест» (Асбест, Рефть, Малышевский ГО, Верхнее Дуброво, Сухой Лог)</li>
              <li>• ГАУЗ СО «КДЦ «ОЗМР» и ФГБУ «НИИ ОММ» (для Восточного округа)</li>
              <li>• ГАУЗ СО «ГБ город Каменск-Уральский» (для Южного округа)</li>
              <li>• ГАУЗ СО «Красноуфимская РБ» (Красноуфимск, Ачит, Арти)</li>
              <li>• ГАУЗ СО «ГБ №4 город Нижний Тагил» (для Горнозаводского округа)</li>
              <li>• ГАУЗ СО «ГБ город Первоуральск» (для Западного округа)</li>
              <li>• ГАУЗ СО «Серовская ГБ» (для Северного округа)</li>
            </ul>
            <p className="mt-2">Пару считают бесплодной, если беременность у женщины не наступает в течение года регулярной половой жизни без использования средств и методов контрацепции. На лечение бесплодия имеют право мужчина и женщина, как состоящие, так и не состоящие в зарегистрированном браке.</p>
            <p className="font-medium text-amber-800 mt-2">В МКББ на амбулаторном этапе проводится дообследование женщины:</p>
            <ul className="space-y-1">
              <li>• Оценка проходимости маточных труб</li>
              <li>• Определение гормонального фона</li>
              <li>• УЗИ молочных желез и/или маммография</li>
              <li>• Микробиологическое исследование на ИППП</li>
              <li>• Кольпоскопия</li>
              <li>• Консультация эндокринолога</li>
              <li>• Биопсия эндометрия (по показаниям)</li>
            </ul>
            <p className="mt-2">При наличии показаний для хирургического лечения (трубно-перитонеальное бесплодие, миома матки, полипы эндометрия, эндометриоз и т.д.) женщина госпитализируется в гинекологическое отделение для проведения лечения, преимущественно эндоскопического.</p>
            <p className="font-medium text-amber-800 mt-2">Параллельно в МКББ проводится обследование мужчины урологом:</p>
            <ul className="space-y-1">
              <li>• Общее и специальное андрологическое обследование</li>
              <li>• Спермограмма</li>
              <li>• УЗИ половых органов</li>
              <li>• Гормональный фон</li>
            </ul>
            <p className="mt-2">При наличии показаний для оперативного лечения (варикоцеле, фимоз, гидроцеле) — госпитализация в урологическое отделение.</p>
            <p className="mt-2">Выбор тактики ведения и лечения определяется видом бесплодия. При абсолютном трубном бесплодии, неэффективности консервативного и оперативного лечения определяются показания для ВРТ.</p>
          </div>
        </div>
      </div>
    ),
  },
]

const Negative = () => {
  const navigate = useNavigate()
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-8 relative overflow-hidden"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #f5f3ff 30%, #c4b5fd 100%)" }}
    >
      <div className="w-full max-w-lg">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-violet-400 text-sm mb-4 hover:text-violet-600 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} /> Назад
          </button>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-4"
          >
            🌿
          </motion.div>

          <h1 className="text-2xl font-extrabold text-violet-700 mb-3">Не огорчайся!</h1>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-5 shadow-lg text-left">
            <p className="text-gray-700 leading-relaxed text-sm">
              Если у тебя отрицательный тест на беременность — это не повод расстраиваться.
              Обратись в свою женскую консультацию: тебе помогут подготовиться к беременности
              и рождению здорового малыша 🌷
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              <button
                onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                className="w-full text-left"
              >
                <div className={`bg-gradient-to-r ${card.color} rounded-3xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]`}>
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-white/20">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{card.emoji}</span>
                      <p className="text-white font-bold text-base leading-tight">{card.title}</p>
                    </div>
                    <p className="text-white/80 text-xs mt-1">{card.subtitle}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeCard === card.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/70"
                  >
                    <Icon name="ChevronDown" size={20} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {activeCard === card.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-3xl rounded-t-none p-5 shadow-inner -mt-2 border border-gray-100">
                      {card.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-400 text-xs mt-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Информация соответствует рекомендациям российских учреждений здравоохранения
        </motion.p>
      </div>
    </div>
  )
}

export default Negative