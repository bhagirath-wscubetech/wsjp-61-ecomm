"use client";
function Loading() {
    return (
        <div className="fixed z-[9999] w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="text-3xl">Loading...</div>
        </div>
    )
}
export default Loading;