import Image from "next/image";

import Logo from '@/assets/logo.svg'
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

import IconUser from '@/assets/icon-user.svg'



export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-primary-orange">

            <div className="flex items-center w-full max-w-[1246px] px-[15px] mx-auto"  >
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="logo" />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu name="Para você" />

                            </li>
                            <li>
                                <ItemMenu name="Para empresas" />

                            </li>

                            <li>
                                <ItemMenu name="Para serviços" />

                            </li>
                            <li>
                                <ItemMenu name="Ajuda" />

                            </li>
                        </ul>

                    </div>
                    <Search />
                </div>

            </div>
            <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10">
                <Image alt="user logo" src={IconUser} />
                <span className="text-white">Acessar conta</span>
            </button>
        </header >
    )
}