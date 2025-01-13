import React from "react";

const Comment = () => {
    return(
        <section className="bg-gradient to-r from-black to-slate-700 py-10 ">
            <div className="container mx-auto text-center">
<h1 id="wish" className="text-4x1 font-bold mb-6 text-white">
Make a wish
</h1>
<form className="max-w-md mx-auto ">
<div className="mb-4 text-white">
<input type="text" placeholder="Name" className="w-full p-3 rounded-md border border-gray-300 bg-gray-800 text-white" />
</div>
<div className="mb-4">
    <input type="email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-300 bg-gray-800 text-white" />

</div>
<div className="mb-4">
    <input type="text" placeholder="Make a wish" className="w-full p-3 rounded-md border border-gray-300 bg-gray-800 text-white" />

</div>
</form>
<div  className="mb-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Can you make it!
    </button>
</div>
            </div>

        </section>
    )
}

export default Comment;