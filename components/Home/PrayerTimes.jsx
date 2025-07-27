"use client";

import Loading from "@/app/loading";
import { useEffect, useState } from "react";

export default function PrayerTimes() {
    const [timings, setTimings] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=1"
            );
            const data = await res.json();
            setTimings(data.data.timings);
        }
        fetchData();
    }, []);

    if (!timings) {
        return <Loading />;
    }

    const prayerData = [
        {
            name: "Fajr",
            start: timings.Fajr,
            end: timings.Sunrise,
        },
        {
            name: "Zuhr",
            start: timings.Dhuhr,
            end: timings.Asr,
        },
        {
            name: "Asr",
            start: timings.Asr,
            end: timings.Maghrib,
        },
        {
            name: "Maghrib",
            start: timings.Maghrib,
            end: timings.Isha,
        },
        {
            name: "Isha",
            start: timings.Isha,
            end: timings.Midnight,
        },
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-10 galada-regular">
                    <i className="fa-solid fa-mosque"></i> Prayer times (Dhaka)
                </h1>

                <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
                    <table className="min-w-full divide-y divide-blue-200">
                        <thead className="bg-blue-100 text-blue-800 text-lg">
                            <tr>
                                <th className="px-6 py-4 text-left">Prayer</th>
                                <th className="px-6 py-4 text-center">Start time</th>
                                <th className="px-6 py-4 text-right">End time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-100 text-gray-700 text-base">
                            {prayerData.map((prayer, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-blue-50 transition duration-200"
                                >
                                    <td className="px-6 py-3 font-medium">{prayer.name}</td>
                                    <td className="px-6 py-3 text-center">{prayer.start}</td>
                                    <td className="px-6 py-3 text-right">{prayer.end}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
