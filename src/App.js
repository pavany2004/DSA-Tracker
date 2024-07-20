import DSAList from "./components/DSAList"; 
  
export default function App() { 
    return ( 
        <> 
            <div className="flex flex-col justify-center items-center mt-4"> 
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r  
                               from-purple-500 to-pink-500 font-bold text-xl mb-4"> 
                    DSA Tracker 
                </h3> 
                <DSAList /> 
            </div> 
        </> 
    ); 
}
