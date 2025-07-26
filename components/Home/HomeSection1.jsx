import Link from "next/link";

export default function HomeSection1() {
    return (
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-lc mb-8 galada-regular">
                    পবিত্র সূরা সমূহ
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        href={"/Quran/Surah-Yaseen"}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-200 transition duration-300 border border-green-100 hover:scale-105"
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold text-lc tiro-bangla-regular">Read Surah Yasin</h3>
                    </Link>
                    {/*  */}
                    <Link
                        href={"/Quran/Surah-Yaseen"}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-200 transition duration-300 border border-green-100 hover:scale-105"
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold text-lc tiro-bangla-regular">Read Surah Ar-Rahman</h3>
                    </Link>
                    {/*  */}
                    <Link
                        href={"/Quran/Surah-Yaseen"}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-200 transition duration-300 border border-green-100 hover:scale-105"
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold text-lc tiro-bangla-regular">Read Surah Al Kahf</h3>
                    </Link>
                    {/*  */}
                    <Link
                        href={"/Quran/Surah-Yaseen"}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-200 transition duration-300 border border-green-100 hover:scale-105"
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold text-lc tiro-bangla-regular">Read Surah Al Mulk</h3>
                    </Link>
                    {/*  */}
                    <Link
                        href={"/Quran/Surah-Yaseen"}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-blue-200 transition duration-300 border border-green-100 hover:scale-105"
                    >
                        <h3 className="text-xl lg:text-2xl font-semibold text-lc tiro-bangla-regular">The last ten surahs of the Quran</h3>
                    </Link>
                    {/*  */}
                </div>
            </div>
        </section>
    );
}
