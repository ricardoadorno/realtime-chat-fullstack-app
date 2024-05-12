export default function ChatDisplay() {
    return (
        <section
            className='flex flex-col space-y-4
                    bg-secondary-content
                    col-span-9
                    rounded-xl  
                    p-4'>
            <h1 >Chat Room</h1>
            <div className='border p-4 rounded-xl space-y-4 '>
                <div className='my-2'>
                    <div className="chat chat-start">
                        <div className="chat-header">
                            Obi-Wan Kenobi
                            <time className="text-xs opacity-50">2 hours ago</time>
                        </div>
                        <div className="chat-bubble">You were the Chosen One!</div>
                        <div className="chat-footer opacity-50">
                            Seen
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-header">
                            Obi-Wan Kenobi
                            <time className="text-xs opacity-50">2 hour ago</time>
                        </div>
                        <div className="chat-bubble">I loved you.</div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                </div>
                <form className='flex space-x-2 '>
                    <input
                        type='text'
                        placeholder='Type here'
                        className='input input-bordered w-full '
                    />
                    <button type='submit' className='btn btn-primary'>
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}
