function Intro() {

const specs =[

    {valeu : '6.3"', label:'Display Super Retina XDR', color:'text-blue-600'},
    {valeu : 'A18 Pro',label:'Chip mais rápido', color:'text-orange-500'},
    {valeu : '48MP', label:'Sistema de câmera', color:'text-blue-600'},
    {valeu : '29h', label:'Bateria', color:'text-orange-500'},
]

    return(
        <section className="bg-black py-12 px-4 sm:py-20 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
                <p className="text-xl sm:text-2xl md:text-4xl mb-4 text-gradient font-bold">Titânio. Tão forte. Tão leve. Tão Pro.</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">O design mais refinado que já criamos. Titânio de grau aeroespacial.Chip A18 pro.Sitema de câmera Pro revolucionário.</p>
            </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
                    <button
                        className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 md:hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer"
                        onClick={() => console.log('[site-iphone] Intro: Compre agora')}
                    >
                        Compre agora
                    </button>
                    <button
                        className="w-full max-w-xs border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-medium transition-all duration-300 md:hover:scale-105 cursor-pointer"
                        onClick={() => console.log('[site-iphone] Intro: Saiba mais')}
                    >
                        Saiba mais
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mx-auto max-w-5xl">
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className="cursor-pointer bg-gray-900 rounded-2xl p-4 sm:p-6 hover:bg-gray-800 transition-all duration-300 md:hover:scale-105"
                            onClick={() => console.log('[site-iphone] Intro spec', { valor: spec.valeu, rotulo: spec.label })}
                        >
                            <p className={`text-2xl sm:text-3xl font-bold ${spec.color}`}>{spec.valeu}</p>
                            <p className="text-sm sm:text-base">{spec.label}</p> 
                        </div>
                    ))}
                </div>
        </section>
    );
}
export default Intro;