
const Announcement = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-5xl px-4 py-12 ">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <h3 className="text-2xl font-semibold">Our Announcement</h3>

                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Scheduled Maintenance Notice </h3>

                                    <p className="mt-3">Attention Residents: Please be advised that there will be scheduled maintenance on the building’s electrical systems on June 25th from 8 AM to 12 PM. Expect temporary power outages during this period. We apologize for any inconvenience and appreciate your understanding.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Elevator Upgrade Announcement</h3>

                                    <p className="mt-3">We are excited to inform you that our building will be undergoing an elevator modernization project starting July 1st. The project will enhance the safety and efficiency of our elevators. Please bear with us as there may be temporary service interruptions.</p>
                                </div>
                                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]        sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">New Recycling Programi</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">Jan 2016</time>
                                    <p className="mt-3">We are pleased to announce the launch of our new recycling program starting next week. Dedicated bins for paper, plastic, and glass will be placed on each floor. Let’s work together to keep our environment clean and sustainable!</p>
                                </div>
                                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]        sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Gym Renovation Notice</h3>

                                    <p className="mt-3">Exciting News! Our gym will be undergoing renovations to add new equipment and improve the space. The gym will be closed from July 5th to July 20th. Thank you for your patience as we work to enhance your fitness experience.</p>
                                </div>
                                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]        sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Water Supply Interruption</h3>

                                    <p className="mt-3">Due to essential maintenance, there will be a temporary interruption of the water supply on June 23rd from 9 AM to 3 PM. Please ensure you have sufficient water stored for your needs. We apologize for any inconvenience.</p>
                                </div>
                                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px]        sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">Fire Drill Schedule</h3>

                                    <p className="mt-3">Safety First! We will be conducting a mandatory fire drill on June 28th at 10 AM. All residents and staff are required to participate. Please familiarize yourself with the nearest exits and assembly points.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Announcement;