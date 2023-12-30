
import Header from "./component/Header";
import Footer from "./component/Footer ";
import Note from "./component/Note"
import notes from "./notes";
import './App.css'
// console.log(notes);



function App() {

  return (
    <>
    <Header />


    {/* <Note 
    title="This is the title"
    content="This is the content"
    /> */}


   { notes.map( (noteItem) => (
    <Note 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
    />
  )
)}
    <Footer />
    </>
  )
}

export default App
