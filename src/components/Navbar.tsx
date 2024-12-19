export const Navbar = () => {
    return <div className="flex justify-between font-domine py-4 text-[#23281B]">
        <div>
            <span className="text-2xl font-bold">EcoPortfolio</span>
        </div>
        <div className="gap-8 text-lg items-center hidden sm:flex">
            <span className="cursor-pointer hover:text-black">Home</span>
            <span className="cursor-pointer hover:text-black">Portfolio</span>
            <span className="cursor-pointer hover:text-black">About</span>
            <span className="cursor-pointer hover:text-black">Contact</span>
        </div>
    </div>
}