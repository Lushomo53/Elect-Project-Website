function Objectives() {
    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
                    Objectives & Impact
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Promote energy-efficient lighting solutions",
                        "Build academic and technical capacity",
                        "Support susainable development goals"
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded show">
                            <h3 className="font-semibold text-lg text-green-600 mb-2">
                                Object {index + 1}
                            </h3>
                            <p className="text-gray-600">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    );
}

export default Objectives;