import Row from "../ui/Row";
import Button from "../ui/Button";
import BooksTable from "../features/books/BooksTable";
import Heading from "../ui/Heading";

function Books(){
    return <>

  <Row type="horizontal">
        <Heading as="h1">All Books</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <BooksTable/>
      </Row>
    </>
}


export default Books;