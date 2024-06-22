import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AnnounceCard from "./AnnounceCard";
import Loading from "../../Components/LoadingSpiner/Loading";

const Announcement = () => {
    const axiosSecure=useAxiosSecure()
    const { data, isLoading } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/announce')

            return data
        },
    })
if(isLoading)return<Loading></Loading>

    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-5xl px-4 py-12 ">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                          
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                          {
                            data?.map(item=><AnnounceCard key={item._id} item={item}></AnnounceCard>)
                          }


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Announcement;