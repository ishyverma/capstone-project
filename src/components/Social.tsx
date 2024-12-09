import { Facebook } from "../icons/Facebook"
import { Instagram } from "../icons/Instagram"
import { Twitter } from "../icons/Twitter"

export const Social = () => {
    return <div className="font-domine flex flex-col items-center justify-center h-[300px]">
        <div>
            <span>Follow me on social media</span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-6 gap-4 mt-10 items-center justify-center w-full">
            <div>
                <input className="w-[420px] focus:outline-none bg-[#5A713217] text-xs py-2 px-4 rounded-xl" type="text" placeholder="Your email" />
            </div>
            <div>
                <button className="text-xs bg-[#556B2F] text-white px-4 py-2 rounded-2xl">Subscribe</button>
            </div>
        </div>
        <div className="flex gap-8 justify-center items-center">
            <div className="mt-6 cursor-pointer">
                <Facebook />
            </div>
            <div className="mt-6 cursor-pointer">
                <Instagram />
            </div>
            <div className="mt-6 cursor-pointer">
                <Twitter />
            </div>
        </div>
    </div>
}