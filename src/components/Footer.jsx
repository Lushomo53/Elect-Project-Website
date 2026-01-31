function Footer() {
    return (
        <footer className="bg-green-700 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                <div>
                    <h3 className="font-bold text-lg mb2">ELECT Project</h3>
                    <p className="text-sm">
                        Co-funded by the European Union.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Navigation</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Home</li>
                        <li>About</li>
                        <li>Updates</li>
                        <li>Partners</li>
                    </ul>
                </div>

                <div>
                    <h3 className="fold-bold text-lg mb-2">Contact</h3>
                    <p className="text-sm">
                        Mulungushi University<br />
                        Zambia
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;