import FooterColumn from "./ui/FooterColumn";
import NavLink from "./navigation/NavLink";

function Footer() {
    return (
        <footer className="bg-green-700 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                <FooterColumn title="ELECT Project">
                    <p>Co-funded by the European Union.</p>
                </FooterColumn>

                <FooterColumn title="Navigation">
                    <ul className="space-y-2">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Updates</NavLink></li>
                        <li><NavLink>Partners</NavLink></li>
                    </ul>
                </FooterColumn>

                <FooterColumn title="Contact">
                    <p>electproject@email.com</p>
                    <p>+260 97 1234567</p>
                </FooterColumn>

            </div>
        </footer>
    );
}

export default Footer;
