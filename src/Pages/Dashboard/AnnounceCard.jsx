
const AnnounceCard = ({item}) => {
    return (
        <div>
            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">{item?.title} </h3>

                <p className="mt-3">{item?.description}</p>
            </div>
        </div>
    );
};

export default AnnounceCard;