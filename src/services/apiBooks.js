 const baseUrl= "http://localhost:8080/books"

 
export async function getBooks() {
    let response;
    let data;
   try{
    response = await fetch(baseUrl);
   //  data = await response.json();

   }catch{
      throw new Error("Error while fetching books from server");
   }
   return response.json();
}

export async function deleteBook(id) {
   let response;
  try{
   response = await fetch(`${baseUrl}/${id}`,{method:"DELETE"});
  //  data = await response.json();

  }catch{
     throw new Error("Error while remove book");
  }
  return response.json();
}