import Navigate from "../components/Navigate";


export default function initial() {
    return (
        <div style={{
            display:'flex',
        }}>
            <Navigate text="Stylish" destiny="/stylish" />
            <Navigate text="Example" destiny="/example" />
            <Navigate text="Jsx" destiny="/jsx" />
        </div>
    )
}
