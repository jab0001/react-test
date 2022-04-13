import { FunctionComponent, useEffect, useState } from 'react';
import Loader from './components/Loader';


const App: FunctionComponent = () => {
  const [loader, setLoader] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(prev => !prev)
    },2000)
  },[])
  return (
    <>
      <Loader isLoading={loader} />
    </>
  )
}

export default App;


