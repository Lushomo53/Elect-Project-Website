function SecondaryButton({ children }) {
    return (
        <button className="border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white trasition">
            {children}
        </button>
    );
}

export default SecondaryButton;