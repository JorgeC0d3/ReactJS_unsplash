function Search({ handleSearch }) {

    const onSubmit = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        if(search === "" || !search) return
        handleSearch(search)
    }

    return (

        <div className="bg-gray-800 p-3 rounded-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <form onSubmit={onSubmit}>
                    <div className="relative flex h-16 items-center justify-between">

                        <input type="text" id="search" className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-3" placeholder="¿Qué buscas?" />
                        <button type="submit" className="flex w-full justify-center rounded-md mx-3 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><svg className="w-4 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg></button>

                    </div>
                </form>
            </div>
        </div>

    )
}

export default Search