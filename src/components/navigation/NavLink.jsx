function NavLink({ children }) {
    return (
        <span className="cursor-pointer hover:text-primary transition">
            {children}
        </span>
    );
}

export default NavLink;