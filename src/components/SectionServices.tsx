import Image from "next/image";
import { Container } from "./Container";

import PhoneIcon from "@/assets/icon-phone.svg"
import IconCard from "@/assets/icon-card.svg"
import IconOptions from "@/assets/icon-options.svg"
import IconSolutions from "@/assets/icon-solutions.svg"

import ImagePhone from "@/assets/phone.png"

export function SectionServices() {
    return (
        <section className="relative w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w-[594px] mt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Lorem ipsum dolor sit.</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Lorem ipsum dolor sit amet lorem ipsum</h2>
                    <p className="text-lg mb-16">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quidem labore cumque dolorum sapiente officiis distinctio.</p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> <Image src={PhoneIcon} alt="phone icon" /></div>

                            <p className="text-txt-gray pr-[11px]">am vitae quam? Beatae aspernatur, necessitatibus provident voluptatibus iusto quos ipsa!</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> <Image src={IconSolutions} alt="phone icon" /></div>

                            <p className="text-txt-gray pr-[11px]">am vitae quam? Beatae aspernatur, necessitatibus provident voluptatibus iusto quos ipsa!</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> <Image src={IconOptions} alt="phone icon" /></div>

                            <p className="text-txt-gray pr-[11px]">am vitae quam? Beatae aspernatur, necessitatibus provident voluptatibus iusto quos ipsa!.</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center"> <Image src={IconCard} alt="phone icon" /></div>

                            <p className="text-txt-gray pr-[11px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 w-[32%] flex items-center h-full  bg-gray-phone">
                <Image src={ImagePhone} alt="image phone" className="translate-x-[-50%]" />
            </div>
        </section>
    )
}