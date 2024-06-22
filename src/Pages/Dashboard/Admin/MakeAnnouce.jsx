import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const MakeAnnouce = () => {
  const axiosSecure=useAxiosSecure();
const navigate=useNavigate()

  const submitAnnounce = event => {
    event.preventDefault(); // Prevents the default form submission behavior

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    console.log(title, description); // Log the title and description to console

    const announceItem = {
        title,
        description
    };

    axiosSecure.post('/announce', announceItem)
        .then(res => {
          console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Congrats!! Successfully Added",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/dashboard')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",

                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong. Please try again later."
            });
        });
};
    return (
        <div className=" w-full ">
          <h1 className="text-xl font-bold text-center">New Announcement:</h1>
          <form onSubmit={submitAnnounce}>
             <div className="text-center">
               {/* md */} <h1 className=" font-bold">Announcement Tilte:</h1>
               <input type="text" name="title"  placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" required />
            <br />
            {/* lg */}
            <h1 className=" font-bold mt-4">Descroption:</h1>
            <textarea name="description"   placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs " required></textarea>
            <br />
             </div>
        <div className="text-center">
        <button className="btn btn-outline btn-info  ">Submit</button>

        </div>
          </form>
        </div>
    );
};

export default MakeAnnouce;