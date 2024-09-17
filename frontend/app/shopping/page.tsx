import ServerComponent from '../server-component/page'
import ClientComponent from '../client-component/page'

export default function Page() {
    return (
        <>
            <div>My Products from Server</div>
                <ServerComponent />
            <div>My Products from Client</div>
                <ClientComponent />
        </>
    )
}