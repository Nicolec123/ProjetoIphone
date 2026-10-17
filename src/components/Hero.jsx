function Hero() {
    return(
        <section id="topo" className="relative bg-black md:h-screen md:overflow-hidden">
           <div className="relative z-0 pt-16 sm:pt-20 md:absolute md:top-32 md:right-0 md:bottom-0 md:left-0 md:pt-0">
            <img
                src="/img/hero.jpg"
                alt="iPhone 17"
                className="block w-full h-auto md:h-full md:object-cover md:object-top opacity-90"
                onLoad={(event) => {
                    const imagem = event.currentTarget
                    console.log('[site-iphone] Hero imagem carregada', {
                        src: imagem.currentSrc,
                        largura: imagem.naturalWidth,
                        altura: imagem.naturalHeight,
                    })
                }}
                onError={(event) => {
                    console.error('[site-iphone] Hero imagem não carregou', event.currentTarget.src)
                }}
            />
           
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"/>
           </div>
           <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
           </div>
        </section>
    );
}

export default Hero;