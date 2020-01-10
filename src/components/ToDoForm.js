import React,{useState} from 'react';

export default function ToDoForm(props) {

    const [title, setTitle] = useState('');
    const [responsible, setResponsible] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low')

    const handleSubmit = (e) => {
        e.preventDefault();
        let todo = {
            title: title,
            responsible: responsible,
            description: description,
            priority:priority
        }
        props.onAddTodo(todo)
        setTitle('');
        setResponsible('');
        setDescription('');
        setPriority('low')
    }


return(
    <div className="card">
        <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="Title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="Responsible"
                    className="form-control"
                    value={responsible}
                    onChange={(e) => setResponsible(e.target.value)}
                    placeholder="Responsible"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="Description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
            </div>
            <div className="form-group">
                <select
                    name="Priority"
                    className="form-control"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
            </div>
            <button type={"submit"} className="btn btn-success">
                Save
            </button>
        </form>
    </div>
)
}
