function Section({ title, children, bg = "bg-surface"}) {
    return (
        <section className={`${bg} py-20`}>
            <div className="max-w-6xl mx-auto px-6">
                {title && (
                    <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}

export default Section;