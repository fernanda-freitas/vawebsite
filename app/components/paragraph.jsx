export default function Paragraph({ extraClasses, children }) {
    return (
        <p className={`text-p3 md:text-p2 lg:text-p1 font-normal ${extraClasses}`}>{children}</p>
    )
}