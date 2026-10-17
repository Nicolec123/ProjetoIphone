import { useState } from 'react'

const links = [
    { rotulo: 'Design', destino: '#design' },
    { rotulo: 'Câmera', destino: '#camera' },
    { rotulo: 'Performance', destino: '#performance' },
    { rotulo: 'Cores', destino: '#cores' },
]

function registrarNavegacao(rotulo, destino) {
    const alvo = document.querySelector(destino)

    if (alvo) {
        console.log('[site-iphone] NavBar', { rotulo, destino, alvo })
        return
    }

    console.warn('[site-iphone] NavBar: seção não encontrada', { rotulo, destino })
}

function NavBar() {
    const [menuAberto, setMenuAberto] = useState(false)

    function irPara(rotulo, destino) {
        registrarNavegacao(rotulo, destino)
        setMenuAberto(false)
    }

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4">
                <div className="flex items-center justify-between md:hidden">
                    <a href="#topo" className="font-semibold">iPhone 17 Pro</a>
                    <button
                        type="button"
                        className="rounded-full border border-white/30 px-4 py-2 text-sm"
                        aria-expanded={menuAberto}
                        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setMenuAberto((aberto) => !aberto)}
                    >
                        {menuAberto ? 'Fechar' : 'Menu'}
                    </button>
                </div>

                <div className={`${menuAberto ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8 pt-4 md:pt-0`}>
                    {links.map((link) => (
                        <a
                            key={link.destino}
                            href={link.destino}
                            className="hover:text-gray-300"
                            onClick={() => irPara(link.rotulo, link.destino)}
                        >
                            {link.rotulo}
                        </a>
                    ))}
                    <button
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full w-fit"
                        onClick={() => {
                            console.warn('[site-iphone] NavBar: Comprar ainda não leva a uma seção')
                            setMenuAberto(false)
                        }}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
