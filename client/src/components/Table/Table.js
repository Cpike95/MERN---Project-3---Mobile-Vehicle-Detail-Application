import React, {useState, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import appointmentAPI from "../../utils/appointmentAPI.js"

//This page will display the compenent for the all of the upcoming appointments. 


//Use a card and add a table of all the upcoming appointments. 
// Create a button to change the state of completed to false. 
//Find a way to import data from the mongoDB and display only the appointments that are upcoming. 
export default function Basic() {

        // Setting our component's initial state
        const [bookings, setBookings] = useState({})
        const [datatable, setDatatable] = useState({
          columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Services',
            field: 'services',
            width: 270,
          },
          {
            label: 'Location',
            field: 'location',
            width: 200,
          },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Time',
            field: 'time',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Price',
            field: 'price',
            sort: 'disabled',
            width: 100,
          },
          {
            label: 'Complete',
            field: 'complete',
            sort: 'disabled',
            width: 100,
          },
        ],

        rows: [
          
        ]
      
      })
          
        // Load all books and store them with setBooks
        useEffect(() => {
            loadBookings()
        }, [])
        
        //create a function to load the upcoming appointments (appointment completed = false)

        // Load all bookings and store them with setbookings
        useEffect(() => {
        loadBookings()
        }, [])

        // Loads all bookings and sets them to bookings
        function loadBookings() {
        appointmentAPI.findAll()
          .then(res => 
          setBookings(res.data)
          )
          .catch(err => console.log(err));
        };

        // Deletes a book from the database with a given id, then reloads bookings from the db
        function deleteBook(id) {
        appointmentAPI.remove(id)
          .then(res => loadBookings())
          .catch(err => console.log(err));
        }
              //   // Handles updating component state when the user types into the input field
              // function handleInputChange(event) {
              //         const { name, value } = event.target;
              //         setDatatable({...datatable, [name]: value})
              //     };

 
    //I will have to set the rows here to the data from the data tables 
    //Create a button that will only appear if the completed status is false.
  //   rows: [
  //     {
  //   //     name: 'Tiger Nixon',
  //   //     services: 'System Architect',
  //   //     location: 'Edinburgh',
  //   //     date: '61',
  //   //     time: '2011/04/25',
  //   //     price: '$320',
  //       // complete
  //     }
  //   ],
  // });
//Add Onclick button to hande the Change
  return(
      <div>
    <MDBDataTableV5 
        hover entriesOptions={[5, 20, 25]} 
        entries={5} 
        pagesAmount={4} 
        data={datatable} 
    />;
    </div>
    // {books.length ? (
    //   <List>
    //     {bookings.map(book => (
    //     <ListItem key={book._id}>
    //       <Link to={"/bookings/" + book._id}>
    //       <strong>
    //         {book.title} by {book.author}
    //       </strong>
    //       </Link>
    //       <DeleteBtn onClick={() => deleteBook(book._id)} />
    //     </ListItem>
    //     ))}
    //   </List>
  ) 
}