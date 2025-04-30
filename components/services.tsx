import Link from "next/link"
import { Button } from "./ui/button"

export default function ServiceSection() {
    return (
        <section id="service" className="py-12 md:py-20 bg-[#F9FAFB]">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl text-[#1F2937]">Layanan Kami</h2>
                    <p className="text-[#4B5563]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora, possimus unde consequatur aliquid rem iure impedit natus eveniet sed!</p>
                </div>

                <div className="flex justify-center text-center gap-6">
                    <div className="rounded-xl space-y-4 border border-gray-200 px-12 py-12 bg-white shadow-md">
                        <div className="text-3xl font-bold text-[#1F2937]">WaterQ</div>
                        <p className="text-[#4B5563] text-sm md:text-base">Sistem dan Instrumen Pemantauan <br /> Pencemaran Udara Bergerak</p>
                        <Button
                            className="cursor-pointer bg-[#C81D25] text-white hover:bg-[#a8141c] transition-colors duration-200"
                        > <Link href="/dashboard">
                            <span>Lihat Dashboard</span>
                        </Link>
                        </Button>

                    </div>
                    <div className="rounded-xl space-y-4 border border-gray-200 px-12 py-12 bg-white shadow-md">
                        <div className="text-3xl font-bold text-[#1F2937]">SiPuber</div>
                        <p className="text-[#4B5563]">Sistem dan Instrumen Pemantauan <br /> Pencemaran Udara Bergerak</p>
                        <Button
                            className="cursor-pointer bg-[#C81D25] text-white hover:bg-[#a8141c] transition-colors duration-200"
                        > <Link href="/dashboard">
                            <span>Lihat Dashboard</span>
                        </Link>
                        </Button>

                    </div>
                    <div className="rounded-xl space-y-4 border border-gray-200 px-12 py-12 bg-white shadow-md">
                        <div className="text-3xl font-bold text-[#1F2937]">SiTerka</div>
                        <p className="text-[#4B5563]">Sistem dan Instrumen Pemantauan <br /> Pencemaran Udara Bergerak</p>
                        <Button
                            className="cursor-pointer bg-[#C81D25] text-white hover:bg-[#a8141c] transition-colors duration-200"
                        > <Link href="/dashboard">
                            <span>Lihat Dashboard</span>
                        </Link>
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    )
}