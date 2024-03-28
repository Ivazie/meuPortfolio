//link (next js)
import Link from 'next/link';

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'meus projetos'},
    {path: '/contact', name: 'contato'},
]

const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
    return <nav className={`${containerStyles}`}>
        {links.map((link, index)=>{
            return <Link href={link.path}>{link.name}</Link>;
        })}
    </nav>
    }

export default Nav;

