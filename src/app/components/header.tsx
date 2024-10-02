import Link from "next/link"

export default function Header(){
    return(
        <div className="header">      
            <ul className="header-button">
                <Link href={"/"}><li><b>Home</b></li></Link>
                <Link href={"/my-info"}><li><b>info</b></li></Link>
                
            </ul>
        </div>
    )
}