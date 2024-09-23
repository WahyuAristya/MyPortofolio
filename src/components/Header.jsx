import Link from "next/link";
import { Button } from "./ui/button";


// import component
import Nav from "./Nav";
import MobileNav from "./MobileNav";



const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* for logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Wahyu<span className="text-accent">.</span>
                    </h1>
                </Link>
                
                
                {/* for dekstop navbar & get in touch button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/getintouch">
                        <Button>Get in Touch</Button>
                    </Link>
                </div>


                {/* for mobile navbar */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header;