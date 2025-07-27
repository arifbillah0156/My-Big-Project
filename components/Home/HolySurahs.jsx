import Link from "next/link";

const surahs = [
    {
        name: "Surah Yaseen",
        link: "/Quran/Surah-Yaseen",
        details: `Surah Yaseen was revealed in Makkah during a time of intense opposition to the message of Islam. The disbelievers of Quraysh were ridiculing Prophet Muhammad ﷺ and rejecting the Qur'an as a divine message. This surah came to reaffirm the Prophet’s role as a true messenger of Allah. It emphasizes the importance of the Qur'an as a warning and guidance for people who had long turned away from faith. The early Muslims in Makkah were facing great hardship, and this surah was a source of comfort and strength for them. Through powerful storytelling and signs from nature, it reminded them of Allah’s control over life, death, and resurrection. The story of the messengers sent to a town, mentioned in the surah, was revealed to show the fate of people who reject divine guidance. It reassured the Prophet ﷺ that, like earlier messengers, he too would be rejected by some, but his mission was noble and supported by Allah. The surah also describes scenes from the Day of Judgment to awaken the hearts of those who deny the afterlife. Overall, Surah Yaseen was revealed to warn, console, and guide, especially in the face of denial and hardship.`
    },
    {
        name: "Surah Ar-Rahman",
        link: "/Quran/Surah-Ar-Rahman",
        details: `Surah Ar-Rahman was revealed in Madinah, according to some scholars, while others believe it is a Makki Surah, revealed in the earlier period of Islam. It was revealed to highlight Allah’s mercy, power, and countless blessings upon His creation. The surah repeatedly mentions the verse “Which of the favors of your Lord will you deny?” to awaken the hearts of both humans and jinn. It was revealed at a time when people were ignoring the signs of Allah and living arrogantly, denying His bounties. This surah served as a reminder of gratitude and the importance of recognizing Allah's favors. Its poetic and rhythmic style made it especially powerful and moving to those who heard it. The surah addressed both mankind and jinn, making it unique among other chapters of the Qur'an. It emphasizes the balance and harmony in creation, showing that everything Allah created is in perfect order. According to some narrations, the jinn responded more emotionally to this surah than humans, showing its deep impact. Surah Ar-Rahman was revealed to soften hearts, inspire reflection, and establish a deep sense of awe and thankfulness toward the Most Merciful.`
    },
    // {
    //     name: "Surah Al-Kahf",
    //     link: "/Quran/Surah-Al-Kahf",
    //     ayahs: [
    //         "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ",
    //         "وَلَمْ يَجْعَل لَّهُ عِوَجًا",
    //         "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا",
    //         "مِّن لَّدُنهُ"
    //     ]
    // },
    {
        name: "Surah Al-Mulk",
        link: "/Quran/Surah-Mulk",
        details: `Surah Al-Mulk was revealed in Makkah during the early phase of the Prophet Muhammad’s ﷺ mission. The people of Quraysh were rejecting the concept of resurrection and accountability in the afterlife. This surah came as a powerful reminder of Allah’s absolute sovereignty over the universe and His authority over life and death. It opens with the declaration that “Blessed is He in whose hand is the dominion,” affirming Allah’s complete control. The surah aimed to awaken the conscience of those who denied the Hereafter by describing the punishment of the Hellfire and the regret of its inhabitants. It strongly emphasizes that everything in creation serves a purpose and is a sign for those who reflect. At a time when the believers were few and being persecuted, this surah gave them hope by highlighting that Allah is fully aware of all things. The surah also challenged the arrogance of the disbelievers by asking them to look at the sky and reflect on its perfection. It reminded them that they cannot escape Allah’s grasp, whether on land or in the air. Surah Al-Mulk was revealed as a warning to the rejecters and a shield of protection for the believers who recite it regularly.`
    },
    // {
    //     name: "Last 10 Surahs",
    //     link: "/Quran/Last-Ten-Surahs",
    //     ayahs: [
    //         "قُلْ هُوَ اللَّهُ أَحَدٌ",
    //         "اللَّهُ الصَّمَدُ",
    //         "لَمْ يَلِدْ وَلَمْ يُولَدْ",
    //         "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
    //     ]
    // }
];

export default function HolySurahs() {
    return (
        <section className="py-14 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-lc mb-8 galada-regular underline underline-offset-8 decoration-double">
                    <i className="fa-solid fa-book-quran"></i> Holy Surahs
                </h2>
                <div className="grid grid-cols-1  gap-8">
                    {surahs.map((surah, index) => (
                        <div
                            key={index}
                            className="bg-white border border-blue-200 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:ring-2 hover:ring-offset-2"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-700  mb-4 tiro-bangla-regular galada-regular">
                                {surah.name}
                            </h3>
                            <p className="text-justify space-y-2 text-2xl leading-relaxed text-gray-800 arabic-font mb-4 indent-8 first-letter:text-4xl first-letter:text-blue-600">
                                {surah.details}
                            </p>
                            <div className="text-center">
                                <Link
                                    href={surah.link}
                                    className="inline-block mt-4 text-lg text-white bg-green-600 px-4 py-2 rounded-full transition font-mono hover:underline underline-offset-2 hover:ring-2 hover:ring-offset-2 ring-green-500"
                                >
                                    Read arabic →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
