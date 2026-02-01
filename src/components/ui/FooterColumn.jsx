function FooterColumn({ title, children }) {
    return (
        <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="space-y-1 text-sm text-gray-200">
                {children}
            </div>
        </div>
    );
}

export default FooterColumn;