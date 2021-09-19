export default function Jsx() {
    const title = <h1>Jsx is a core concept</h1>

    function subtitle() {
        return <h2>{"Nice...!".toUpperCase()}</h2>
    }

    return (
        <div>
            {title}
            {subtitle()}
            <p>
                {JSON.stringify({ name: 'Alberto', age: 29 })}
            </p>
        </div>
    )
}