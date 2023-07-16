export default function Title({ extraClasses, children }) {
    return (
        <h1 className={`text-heading3 md:text-heading1 font-loose ${extraClasses}`}>
            {children}
        </h1>
    )
}