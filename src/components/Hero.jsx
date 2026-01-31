function Hero() {
    return (
        <section className="relative h-[90vh] flex-items-center justify-center">
            {/*Background Image*/}
            <div className="absolute inset-0 bg-cover bg-center"
            style = {{backgroundImage: "url('https://via.placeholder.com/1600x900'),"}}
            />

            {/*Overlay*/}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

            {/*Content*/}
            <div className="relative z-10 text-center max-w-3xl px-5">
                <h1 className="text-5xl font-bold text-green-700 mb-4">
                    Welcome To ELECT
                </h1>

                <p className="text-lg text-gray-700 mb-6">
                    Energy Efficient Lighting for Clean Energy Transitions in Zambia, co-funded by the European Union.
                </p>

                <div className="flex justify-center gap-4">
                   <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                    Project Overview
                   </button>
                   <button className="bg-yellow-400 px-6 py-3 rounded hover:bg-yellow-500">
                    Latest Updates
                   </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;