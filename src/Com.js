
export default function(){
    const data = [
        {id: 1, name: 'John', age: 25},
        {id: 2, name: 'Jane', age: 30},
        {id: 3, name: 'Bob', age: 35}
    ]
    return (
        <div>{data.map((el) => (
            <div key={el.id}>{el.name} - {el.age}</div>
        ))}
        </div>
    )
}