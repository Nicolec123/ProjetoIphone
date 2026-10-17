import { useEffect, useState } from 'react';

function Colors() {

const colors =[
{id: 'blue', name: 'Titânio Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500'},
{id: 'silver', name: 'Titânio Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300'},
{id: 'orange', name: 'Titânio Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500'},
]

const models=[
    {name: 'Pro Max', screen: '6.9 polegadas', storege:'256GB, 512GB, 1TB', battery: '33h de vídeo', weight:'221g'},
    {name: 'Pro Max', screen: '6.9 polegadas', storege:'128GB, 256GB, 512GB', battery: '29h de vídeo', weight:'190g'},
]

const [selectedColor, setSelectedColor] = useState(colors[0]);

useEffect(() => {
    console.log('[site-iphone] Cor selecionada', selectedColor)
}, [selectedColor])

useEffect(() => {
    console.groupCollapsed('[site-iphone] Modelos disponíveis')
    console.table(models)
    console.groupEnd()
}, [])

function escolherCor(color) {
    console.log('[site-iphone] Clique na cor', color.id)
    setSelectedColor(color)
}

    return(
        <section id="cores" className="bg-black py-12 px-4 sm:py-20 sm:px-8 scroll-mt-28">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Colors</h2>
                 <p className="text-gray-400 text-lg sm:text-xl">Escolha o seu modelo</p>
                </div>
                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[420px] md:min-h-[500px]">
                            <img src={colors.find(color => color.id === selectedColor.id).image} alt="iphone 17"
                            className="max-w-full max-h-[320px] sm:max-h-[480px] md:max-h-[600px] mx-auto"
                            />
                        </div>
                        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 mx-auto text-center px-4">
                            <div className="px-5 py-3 sm:px-8 sm:py-4 rounded-full backdrop-blur-md bg-black/40 inline-flex max-w-full">
                                <h3 className="text-lg sm:text-2xl font-semibold">{colors.find(color => color.id === selectedColor.id).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {colors.map(color => (
                        <button 
                        key={color.id} 
                        onClick={() => escolherCor(color)} 
                        className={`relative transition-all duration-300 cursor-pointer`}
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${color.colorClass} ${selectedColor.id === color.id ? 'border-4 border-white' : 'border-gray-600'}`}></div>
                        </button>
                    ))}
                </div>
                <div className="grid gap-6 sm:gap-8 mt-12 sm:mt-20 grid-cols-1 md:grid-cols-2">
                    {models.map((model, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-900 to-transparent p-6 sm:p-8 rounded-3xl border border-gray-800">
                           <div className="text-4xl mb-4">📱</div>
                           <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                           <p className="text-gray-400 mb-4">{model.screen}</p>
                           <ul className="text-gray-300 space-y-2">
                            <li>{model.storege}</li>
                            <li>{model.battery}</li>
                            <li>{model.weight}</li>
                           </ul>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <button
                        className="w-full max-w-md bg-blue-700 text-white px-6 py-4 sm:px-12 rounded-full text-base sm:text-lg font-medium hover:bg-blue-800 transition-all duration-300 mb-8 md:hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer"
                        onClick={() => console.log('[site-iphone] Colors: comprar', { cor: selectedColor.name, preco: 'R$ 9.950,00' })}
                    >
                        Compre agora apartir de R$ 9.950,00
                    </button>
                    <p>Ou em até 12x de de R$ 829,17 sem juros</p>
                </div>
            </div>
        </section>
    );
}
export default Colors;