import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const VideoPlayer = ({ videoId, title }: { videoId: string; title: string }) => {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-black">
      {playing ? (
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <button onClick={() => setPlaying(true)} className="relative w-full group block">
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-2 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Icon name="Play" size={28} className="text-white ml-1" />
            </div>
            <span className="text-white text-sm font-semibold drop-shadow px-4 text-center">{title}</span>
          </div>
        </button>
      )}
    </div>
  )
}

const BABY_IMG = "https://cdn.poehali.dev/projects/f006a5bd-85eb-42e5-b07c-4c06413f5aa4/files/c7e2d55c-b5bc-4379-8ed8-1b6d9c63e40f.jpg"
const BELLY_IMG = "https://cdn.poehali.dev/projects/f006a5bd-85eb-42e5-b07c-4c06413f5aa4/files/4eea6556-f8ac-46a3-91e1-b5a42ef860db.jpg"
const COUPLE_IMG = "https://cdn.poehali.dev/projects/f006a5bd-85eb-42e5-b07c-4c06413f5aa4/files/ad820596-e932-4f34-a691-889f6ce01df9.jpg"

const cards = [
  {
    id: "video",
    emoji: "🎬",
    title: "Здравствуй, моя будущая мама!",
    subtitle: "Видео о развитии малыша простым языком",
    color: "from-sky-400 to-blue-500",
    img: BABY_IMG,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          Посмотрите, как развивается малыш — от первых клеточек до рождения. Простым и понятным языком, с красивой анимацией.
        </p>

        {/* Видео 1 */}
        <VideoPlayer videoId="FLa5cSDa1E0" title="Развитие ребёнка за 9 месяцев" />

        {/* Видео 2 */}
        <VideoPlayer videoId="fKyljukBE70" title="Как растёт малыш — по неделям" />

        <div className="flex flex-wrap gap-2">
          <span className="bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full">🌱 1–40 недель</span>
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">💡 Простым языком</span>
          <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">🎥 Анимация</span>
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    emoji: "✨",
    title: "Узнай, каким я буду!",
    subtitle: "AI-визуализация малыша по фото родителей",
    color: "from-pink-400 to-rose-500",
    img: BABY_IMG,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          Загрузите фото обоих родителей — и AI создаст нежный портрет вашего будущего малыша. Результатом можно поделиться с близкими!
        </p>
        <a
          href="https://www.babymaker.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-pink-50 rounded-2xl p-4 hover:bg-pink-100 transition-colors"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
            👶
          </div>
          <div className="flex-1">
            <p className="font-bold text-rose-700">BabyMaker AI</p>
            <p className="text-xs text-gray-500 mt-0.5">Загрузите фото мамы и папы — получите портрет малыша</p>
          </div>
          <Icon name="ExternalLink" size={16} className="text-rose-400" />
        </a>
        <a
          href="https://www.remini.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-purple-50 rounded-2xl p-4 hover:bg-purple-100 transition-colors"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
            🧬
          </div>
          <div className="flex-1">
            <p className="font-bold text-purple-700">Remini — Baby AI</p>
            <p className="text-xs text-gray-500 mt-0.5">Функция «Baby Generator» — черты обоих родителей</p>
          </div>
          <Icon name="ExternalLink" size={16} className="text-purple-400" />
        </a>
        <div className="flex flex-wrap gap-2">
          <span className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full">🧬 Черты обоих родителей</span>
          <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">💌 Поделитесь с семьёй</span>
        </div>
      </div>
    ),
  },
  {
    id: "tips",
    emoji: "💡",
    title: "Полезные советы",
    subtitle: "Здоровье мамы, развитие малыша, соцподдержка",
    color: "from-amber-400 to-orange-500",
    img: BELLY_IMG,
    content: (
      <div className="space-y-4">
        <div className="bg-amber-50 rounded-2xl p-4">
          <p className="font-semibold text-amber-800 mb-2">🏥 Первые шаги</p>
          <ul className="text-sm text-gray-700 space-y-1.5">
            <li>• Встаньте на учёт в женскую консультацию — до 12 недель</li>
            <li>• Сдайте первые анализы и пройдите УЗИ</li>
            <li>• Проконсультируйтесь с врачом по витаминам и питанию</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-2xl p-4 space-y-3">
          <p className="font-semibold text-green-800">🤱 Меры социальной поддержки</p>

          <a href="https://www.gosuslugi.ru/600426" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-green-50 transition-colors border border-green-100">
            <span className="text-xl flex-shrink-0">🏛️</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">Единое пособие беременным</p>
              <p className="text-xs text-gray-500">Оформить на Госуслугах — при постановке на учёт до 12 недель</p>
            </div>
            <Icon name="ExternalLink" size={14} className="text-green-400 flex-shrink-0" />
          </a>

          <a href="https://www.gosuslugi.ru/10054/1" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-green-50 transition-colors border border-green-100">
            <span className="text-xl flex-shrink-0">💼</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">Декретные и пособие по уходу</p>
              <p className="text-xs text-gray-500">Пособие по беременности и родам — оформить на Госуслугах</p>
            </div>
            <Icon name="ExternalLink" size={14} className="text-green-400 flex-shrink-0" />
          </a>

          <a href="https://sfr.gov.ru/grazhdanam/semya/mat_kapital/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-green-50 transition-colors border border-green-100">
            <span className="text-xl flex-shrink-0">👨‍👩‍👧</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">Материнский капитал</p>
              <p className="text-xs text-gray-500">СФР — как получить и на что потратить</p>
            </div>
            <Icon name="ExternalLink" size={14} className="text-green-400 flex-shrink-0" />
          </a>

          <a href="https://msp.midural.ru/mery-podderzhki/semi-s-detmi/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl p-3 hover:bg-green-50 transition-colors border border-green-100">
            <span className="text-xl flex-shrink-0">🏔️</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">Поддержка семей — Свердловская область</p>
              <p className="text-xs text-gray-500">Региональные льготы, пособия и выплаты</p>
            </div>
            <Icon name="ExternalLink" size={14} className="text-green-400 flex-shrink-0" />
          </a>
        </div>
        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="font-semibold text-blue-800 mb-2">📅 Развитие малыша по неделям</p>
          <p className="text-sm text-gray-700">На сроке 4–6 недель формируется сердечко, 8 недель — все основные органы. Каждая неделя — маленькое чудо!</p>
        </div>
      </div>
    ),
  },
  {
    id: "choice",
    emoji: "🕊️",
    title: "Непростой выбор",
    subtitle: "Поддержка и помощь в трудной ситуации",
    color: "from-violet-400 to-purple-500",
    img: COUPLE_IMG,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          Если вы оказались в непростой жизненной ситуации — знайте, что вы не одни. Есть люди, которые готовы помочь.
        </p>
        <div className="space-y-3">
          <a
            href="https://pro-life.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-purple-50 rounded-2xl p-4 hover:bg-purple-100 transition-colors"
          >
            <span className="text-2xl">❤️</span>
            <div>
              <p className="font-semibold text-purple-800 text-sm">Фонд «Спаси жизнь»</p>
              <p className="text-xs text-gray-500">Кризисная помощь беременным женщинам</p>
            </div>
            <Icon name="ExternalLink" size={16} className="ml-auto text-purple-400" />
          </a>
          <a
            href="https://ekbmiloserdie.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-rose-50 rounded-2xl p-4 hover:bg-rose-100 transition-colors"
          >
            <span className="text-2xl">⛪</span>
            <div className="flex-1">
              <p className="font-semibold text-rose-800 text-sm">Епархиальная служба помощи</p>
              <p className="text-xs text-gray-500">Психологическая и материальная поддержка семьям</p>
            </div>
            <Icon name="ExternalLink" size={16} className="ml-auto text-rose-400 flex-shrink-0" />
          </a>
          <div className="flex items-center gap-3 bg-teal-50 rounded-2xl p-4">
            <span className="text-2xl">👩‍⚕️</span>
            <div>
              <p className="font-semibold text-teal-800 text-sm">Психолог в женской консультации</p>
              <p className="text-xs text-gray-500">Бесплатная консультация — обратитесь к врачу</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

const Positive = () => {
  const navigate = useNavigate()
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [showIntro, setShowIntro] = useState(true)

  if (showIntro) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{ background: "radial-gradient(125% 125% at 50% 10%, #fff5f7 30%, #fda4af 100%)" }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{ left: `${Math.random() * 90}%`, top: `${Math.random() * 90}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [-20, -60] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatDelay: 2 }}
            >
              {["💕", "⭐", "🌸", "✨", "🌟", "💫"][i % 6]}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center max-w-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={BABY_IMG}
            alt="Малыш"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-2xl border-4 border-white"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p className="text-rose-600 font-bold text-2xl mb-2">Здравствуй,</p>
            <p className="text-rose-800 font-extrabold text-3xl mb-4">моя будущая мама! 💕</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Я пока совсем крошечный, но уже так рад встрече с тобой! Впереди нас ждёт удивительное путешествие длиной 9 месяцев.
            </p>
            <motion.button
              onClick={() => setShowIntro(false)}
              className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold py-4 rounded-2xl text-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Узнать больше ✨
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-8 relative overflow-hidden"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #fff5f7 30%, #fda4af 100%)" }}
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
            className="flex items-center gap-1 text-rose-400 text-sm mb-4 hover:text-rose-600 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} /> Назад
          </button>
          <div className="text-5xl mb-3">🎀</div>
          <h1 className="text-2xl font-extrabold text-rose-700">Поздравляем!</h1>
          <p className="text-gray-600 text-sm mt-2">Впереди — одно из самых прекрасных путешествий в вашей жизни</p>
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

export default Positive