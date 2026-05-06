import Link from "next/link";
import Image from "next/image";

export default function Navigation(){
    return (<header>
        <div className="logo flex">
            <Image
            src="/logopic.png"
            alt="picture is anavailable"
            width={50}
            height={50}
            />
             <span>Orbiz</span></div>
        <nav className="flex gap-5 ">
            <ul className="flex gap-5" >
                <li> 
                    <Link href="/">Home</Link>
                </li>
                <li> 
                    <Link href="/contact">contact</Link>
                </li>
                <li> 
                    <Link href="/services">Services</Link>
                </li>
                <li> 
                    <Link href="/about">About</Link>
                </li>
            </ul>
 </nav>
            <div className="navbtn">

            <button className="logbtn">Login</button>
            <button className="getbtn bg-indigo-500 font-light">Get Started</button>
            </div> 
    </header>
    );
}