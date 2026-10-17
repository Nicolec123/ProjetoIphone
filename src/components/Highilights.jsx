function Highilights() {
    return (
        <section className="bg-black py-12 px-4 sm:py-20 sm:px-6 scroll-mt-28" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">Design revolucionário</h2>
                    <p className="text-base sm:text-xl text-gray-400">O design mais refinado que já criamos. Titânio de grau aeroespacial.Chip A18 pro.Sitema de câmera Pro revolucionário.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 sm:mb-16">
                    <div className="bg-gray-900 rounded-3xl p-5 sm:p-8">
                        <img src="/img/titanium-design.jpg" alt="Design" className="w-full rounded-2xl mb-4" />
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Titânio Premium</h3>
                        <p className="text-gray-300">O material mais leve e resistente que já criamos. Titânio de grau aeroespacial.</p>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-5 sm:p-8">
                        <img src="/img/ios-features.jpg" alt="ios 2025" className="w-full rounded-2xl mb-4" />
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">ios 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-6 sm:p-12 mb-12 sm:mb-16 scroll-mt-28" id="performance">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso que já criamos</p>
                    <img src="/img/chip-a18-pro.jpg" alt="chip A18 Pro" className="w-full rounded-2xl mb-4" />
                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rápida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray Tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div id="camera" className="text-center scroll-mt-28">
                    <h3 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-10">Sistema de câmera Pro avançado</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:hover:scale-105 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:hover:scale-105 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Óptica de 120° com estabilização</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:hover:scale-105 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom ópitico de 5x com estabilização</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Highilights;
