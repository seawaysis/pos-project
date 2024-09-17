export default function ServerComponent() {
    const item = ['java','php','c++']

    return (
        <div>
            {item.map(item => (
                <div>
                    {item}
                </div>
            ))}
        </div>
    );
}