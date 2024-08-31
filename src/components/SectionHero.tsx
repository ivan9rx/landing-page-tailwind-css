import { Container } from "./Container";
import ImageAppleStore from '@/assets/btn-apple-store.svg'
import ImageGooglePlay from '@/assets/btn-google-play.svg'
import Image from "next/image";

import Arrow from "@/assets/arrow-explorer.svg"
import WomanImage from "@/assets/woman.png"

export function SectionHero() {
    return (
        <section className="w-full h-[876px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-[497px]">
                    <h1 className="text-white text-7xl text-bold font-bold mb-4">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito para você</p>
                    <div className="flex gap-4 mb-24">
                        <button >
                            <Image src={ImageAppleStore} alt="apple store" />
                        </button>
                        <button >
                            <Image src={ImageGooglePlay} alt="apple store" />
                        </button>
                    </div>

                    <button className="flex gap-4">
                        <Image src={Arrow} alt="Arrow down"/>
                        <span className="text-white text-sm font-bold">Continue navegando</span>
                    </button>
                </div>

                <Image src={WomanImage} alt="Woman"/>

            </Container>
        </section>
    )
}