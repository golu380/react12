function StudentCard({name,course,marks,active,city}){
// props.marks = 100 not allowed
return(
      <main> 
            <h2>Name: {name}</h2> 
            <p>Course: {course}</p> 
            <p>Marks: {marks}</p> 
            <p>Status:{active}</p> 
            <p>city:{city}</p>
        </main> 
)
}

export default StudentCard;