export default function ChatterList() {
    return (
        <section
            className='flex flex-col space-y-4
                    bg-accent-content
                    rounded-xl
                    p-4
                    col-span-3
                    prose
                    '>
            <h3 className='mb-0'>Users</h3>
            <ul className='mt-0'>
                <li>user1</li>
                <li>user2</li>
                <li>user3</li>
            </ul>
        </section>
    )
}
