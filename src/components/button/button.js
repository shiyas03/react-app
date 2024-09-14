function Button({ name }) {
    return (
        <div>
            <button className="bg-red-500 text-white px-5 py-3 rounded-full"> {name} </button>
        </div>
    );
};

export default Button;