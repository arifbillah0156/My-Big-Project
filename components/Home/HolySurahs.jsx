import Link from "next/link";

const surahs = [
    {
        name: "Surah Yaseen",
        link: "/Quran/Surah-Yaseen",
        ayahs: [
            "يسٓ",
            "وَالْقُرْآنِ الْحَكِيمِ",
            "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
            "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ"
        ]
    },
    {
        name: "Surah Ar-Rahman",
        link: "/Quran/Surah-Ar-Rahman",
        ayahs: [
            "الرَّحْمَـٰنُ",
            "عَلَّمَ الْقُرْآنَ",
            "خَلَقَ الْإِنسَانَ",
            "عَلَّمَهُ الْبَيَانَ"
        ]
    },
    {
        name: "Surah Al-Kahf",
        link: "/Quran/Surah-Al-Kahf",
        ayahs: [
            "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
            "وَلَمْ يَجْعَل لَّهُ عِوَجًا",
            "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا",
            "مِّن لَّدُنهُ"
        ]
    },
    {
        name: "Surah Al-Mulk",
        link: "/Quran/Surah-Al-Mulk",
        ayahs: [
            "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ",
            "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ",
            "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا"
        ]
    },
    {
        name: "Last 10 Surahs",
        link: "/Quran/Last-Ten-Surahs",
        ayahs: [
            "قُلْ هُوَ اللَّهُ أَحَدٌ",
            "اللَّهُ الصَّمَدُ",
            "لَمْ يَلِدْ وَلَمْ يُولَدْ",
            "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
        ]
    }
];

export default function HolySurahs() {
    return (
        <section className="py-14 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-lc mb-8 galada-regular underline underline-offset-8 decoration-double">
                    <i className="fa-solid fa-book-quran"></i> Holy Surahs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {surahs.map((surah, index) => (
                        <div
                            key={index}
                            className="bg-white border border-blue-200 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:ring-2 hover:ring-offset-2"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-center text-blue-700  mb-4 tiro-bangla-regular">
                                {surah.name}
                            </h3>
                            <div className="text-center space-y-2 text-2xl leading-relaxed text-gray-800 arabic-font mb-4">
                                {surah.ayahs.map((ayah, i) => (
                                    <p dir="rtl" key={i}>
                                        {ayah}
                                    </p>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link
                                    href={surah.link}
                                    className="inline-block mt-4 text-lg text-white bg-green-600 px-4 py-2 rounded-full transition font-mono hover:bg-lc hover:text-white"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
