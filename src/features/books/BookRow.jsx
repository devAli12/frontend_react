import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { HiTrash } from "react-icons/hi2";
import { useDeleteBook } from "./useDeleteBook";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Book = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Pages = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;


function BookRow({book}){
   const {isDeleting,deleteBook}= useDeleteBook();
  const {id:bookId , title,author,description,pages}=book;

  return <TableRow role="row">
  <Img src={"unnamed.png"} />
  <Book>{title}</Book>
  <div>Ecrit par {author}</div>
   <Pages>{pages}</Pages>
   <Book>{description}</Book>
  <div>
    {/* <button disabled={isCreating} onClick={handleDuplicate}>
      <HiSquare2Stack />
    </button>
    <button onClick={() => setShowForm((show) => !show)}>
      <HiPencil />
    </button> */}
    <button onClick={() => deleteBook(bookId) } disabled={isDeleting} >
      <HiTrash />
    </button>
  </div>
</TableRow>
}

export default BookRow;