function Card(props) {
  return (
    <div className="card mb-3" style={{maxWidth: '540px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          {/* <img src="..." className="card-img" alt="..." /> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.engineer.full_name}</h5>
            <p className="card-text">
              {props.engineer.license_number}
            </p>
            <p className="card-text">
              <small className="text-muted">{props.engineer.experience}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
