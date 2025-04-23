import Image from 'next/image'
import Logo from '../public/logo2.png'

export default function AboutSection() {
    return (
        <section id='about' className="py-16 md:py-32 bg-[#F3F4F6]">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-center">
                    <div className="flex justify-center">
                        <Image className="w-52" src={Logo} alt="Logo BRIN" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-semibold lg:text-5xl text-left text-[#1F2937]">
                            Tentang Kami
                        </h2>
                        <p className="text-[#4B5563] text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque libero omnis fugiat eaque earum quam nemo aspernatur soluta ipsam sunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}