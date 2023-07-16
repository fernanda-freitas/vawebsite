export default function Label({ extraClasses, children }) {
    return (
        <span className={`font-normal text-label3 md:text-label1 uppercase ${extraClasses}`}>
            {children}
        </span>
    )
}