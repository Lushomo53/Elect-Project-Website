function Card({ title, children }) {
    return (
        <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
                {title}
            </h3>
            <p className="text-muted text-sm">
                {children}
            </p>
        </div>
    );
}

export default Card;