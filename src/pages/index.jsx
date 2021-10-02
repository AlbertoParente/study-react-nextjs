import Navigate from "../components/Navigate";

export default function initial() {
    return (
        <div style={{
            display:'flex',
        }}>
            <Navigate text="Stylish" destiny="/stylish" />
            <Navigate text="Example" destiny="/example" cor="#9400d3"/>
            <Navigate text="Jsx" destiny="/jsx" color="crimson"/>
            <Navigate text="Navigation #01" destiny="/navigation/" color="green"/>
            <Navigate text="Navigation #02" destiny="/client/ce/123" color="blue"/>
            <Navigate text="Component With State" destiny="/state" color="#a45b71"/>
            <Navigate text="Integration With API #01" destiny="/integration1" color="#42a9a9"/>
            <Navigate text="Static Component" destiny="/estatic" color="#fa054a"/>
        </div>
    )
}
