function Card(props) {
  return (
    <section>
    <div className="carder">
    <div className="card" >
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: {props.engineer.full_name}</li>
    <li class="list-group-item">Liscence Number: {props.engineer.license_number}</li>
    <li class="list-group-item">Experience: {props.engineer.experience}</li>
    
  </ul>
</div>

</div>
</section>
  );
}

export default Card;
