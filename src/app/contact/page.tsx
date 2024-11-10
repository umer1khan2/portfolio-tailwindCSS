export default function contact(){

    return(
        <div className="text-white bg-yellow-950 py-20">
            <div className="border-4 my-20 py-5 mx-96">
            <div className="flex justify-center py-5">
                <h1>Contact Me</h1>
            </div>
        <div className="items-center flex justify-center ">
            <ul>
                <label>First Name : </label> <br />
                <input className="text-black" type="text" /><br />
                <label>Last Name : </label> <br />
                <input className="text-black" type="text" /><br />
                <label>Email : </label>  <br />
                <input className="text-black" type="email" /><br />
                <label>Type your message : </label>  <br />
                <input className="text-black" type="text" /><br />
                <label>Submission date </label>  <br />
                <input className="text-black" type="date" /><br />
                
            </ul>
            </div>
            </div>
        </div>
    )

}