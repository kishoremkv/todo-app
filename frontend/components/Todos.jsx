export function Todos({todos})
{
    /* todos=[
        {
            title: "",
            description: ""
        }
    ] */
    console.log("My todos ============");
    return <div>
        {
            todos.map(function(todo) 
            {
                return <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button 
                        // onClick={
                        //     () => {
                        //         fetch("http://localhost:3001/completed",
                        //         {
                        //             method: "PUT",
                        //             body: JSON.stringify({
                        //                 id: todo.id
                        //             }),
                        //             headers: {
                        //                 "Content-Type":"application/json"
                        //             }
                        //         }
                        //         )
                        //         .then(async function(res){
                        //             const json = await res.json();
                        //             alert("Todo added");
                        //         })  
                        // }}
                        >{todo.completed == true ? "Completed": "Mark as complete"}</button>
                    </div>
            })
        }
        
    </div>
}