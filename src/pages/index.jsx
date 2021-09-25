import Navigate from "../components/Navigate";


export default function initial() {
    return (
        <div style={{
            display:'flex',
        }}>
            <Navigate text="Stylish" destiny="/stylish" />
            <Navigate text="Example" destiny="/example" cor="#9400d3"/>
            <Navigate text="Jsx" destiny="/jsx" color="crimson"/>
        </div>
    )
}
