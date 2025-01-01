import Header from "../components/Header";

function Project() {

    return (
        <div className='flex flex-col items-center min-h-[100vh] bg-zinc-900 text-white'>
            <Header />
            <div className="border w-[60vw] mt-12 h-[60vh]">
            </div>
            <div className="mt-auto mb-2 w-full flex flex-col items-center">
                <span className="w-[70vw] border-t-2 mb-8"></span>
                <div className="border w-full overflow-x-scroll min-h-[19vh]"></div>
            </div>
        </div >
    )
}

export default Project;