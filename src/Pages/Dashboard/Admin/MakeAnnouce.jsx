const MakeAnnouce = () => {
    const submitAnnounce=event=>{
        event.preventDefault()
        const form=event.target;
         const title=form.title.value
        const description=form.description.value
        console.log(title,description)
    }
    return (
        <div className="mx-auto container w-full border border-blue-800">
          <h1 className="text-xl font-bold">New Announcement:</h1>
          <form onSubmit={submitAnnounce}>
              {/* md */} <h1 className=" font-bold">Announcement Tilte:</h1>
              <input type="text" name="title"  placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
            <br />
            {/* lg */}
            <h1 className=" font-bold mt-4">Descroption:</h1>
            <textarea name="description"   placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs "></textarea>
            <br />
            <button className="btn btn-outline btn-info text-center ">Submit</button>
          </form>
        </div>
    );
};

export default MakeAnnouce;