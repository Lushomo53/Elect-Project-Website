function IconText({ icon, text }) {
    return (
        <div className="flex items-center gap-2 text-sm text-muted">
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    );
}

export default IconText;