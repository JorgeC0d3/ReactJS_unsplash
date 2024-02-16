import { useState } from 'react'
import './assets/css/App.css'
import Search from './components/Search'

function App() {

  const [dataSearch, setDataSearch] = useState([])


  const getImages = async (query) => {
    var url = `https://api.unsplash.com/search/photos?client_id=0pW7BN_YnqSydQE3j1wtECO--JSGK5yqBHxlnBtqCfY&per_page=20&query=${query}`
    const res = await fetch(url)
    const data = await res.json()
    setDataSearch(data.results)
  }

  console.log(dataSearch)

  // Define el número de columnas
  const colsNum = 4
  //Obtenemos las imágenes
  var images = []
  for (let i = 0; i < dataSearch.length; i++) {
    images.push(dataSearch[i].urls.regular)
  }

  // Divide el array de imágenes en grupos de acuerdo al número de columnas
  const groups = Array.from({ length: Math.ceil(images.length / colsNum) }, (_, i) =>
    images.slice(i * colsNum, i * colsNum + colsNum)
  );

  return (
    <main className='container mx-auto p-4'>
      <div className="flex flex-col items-center justify-between p-5">
        <Search handleSearch={getImages} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>

        {groups.map((group, index) => (
          <div key={index} className="flex flex-col">
            {group.map((image, subIndex) => (
              <div key={subIndex} className="rounded shadow mb-4">
                <img className="w-full h-auto rounded" src={image} alt={`Imagen ${subIndex + 1}`} />
              </div>
            ))}
          </div>
        ))}

      </div>


    </main>
  );
}

export default App;
