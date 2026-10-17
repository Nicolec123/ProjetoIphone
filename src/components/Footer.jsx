function Footer() {

const sections =[
    {title: 'Comprar e Saber Mais',
        links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comprar modelos', 'Acessórios']
    },

{title: 'Especificações',
    links: ['Caracterisricas técnicas', 'Câmera', 'Bateria', 'Display']
},

{title: 'Suporte',
    links: ['Suporte ao iPhone', 'AppleCare+', 'IOS 19, Contato']
},

{title: 'Apple',
    links: ['Sobre a Apple', 'Carreiras', 'Privacidade', 'Newsroom']
},
]

const bottomLinks = ['Termos de Uso', 'Política de Privacidade', 'Vendas']

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                   {sections.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-semibold mb-4">{section.title}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a
                                        href="#"
                                        className="hover:text-white cursor-pointer"
                                        onClick={() => console.warn('[site-iphone] Footer: link sem página', { secao: section.title, link })}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                   ))}
                </div>

                <div className="border-t border-gray-800 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-sm sm:text-base text-gray-300">© 2026 Apple Inc. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
                        {bottomLinks.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href="#"
                                className="hover:text-white cursor-pointer"
                                onClick={() => console.warn('[site-iphone] Footer: link sem página', { secao: 'rodapé', link })}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
                <p className="text-center md:text-left mt-6 text-xs text-gray-500">Site desenvolvido por <a href="https://www.linkedin.com/in/nicole-cruz-a89973202" className="cursor-pointer">Nicole Cruz</a></p>
            </div>


            </div>
        </footer>
    )
}
export default Footer;